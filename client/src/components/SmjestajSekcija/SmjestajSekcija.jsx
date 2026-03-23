import React from "react";
import { useInView } from "react-intersection-observer";
import "./SmjestajSekcija.css";
import img1 from '../../assets/slikakodprozora.jpg';
import img2 from '../../assets/maininside.jpg';
import img3 from '../../assets/maininside3.jpg';
import img4 from '../../assets/maininside2.jpg';
import img5 from '../../assets/maininside4.jpg';

function SmjestajSekcija() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const pogodnosti = [
    "smještaj u autentičnim kućicama",
    "male grupe u sobama",
    "lagana, domaća hrana",
    "prostor za rad i odmor"
  ];

  return (
    <section ref={ref} className={`accommodation-section ${inView ? "is-visible" : ""}`}>
      <div className="acc-container">
        <div className="acc-text-side">
          <span className="acc-kicker">Ambijent</span>
          <h2 className="acc-title">PROSTOR KOJI DIŠE</h2>
          <div className="acc-divider"></div>
          <ul className="acc-list">
            {pogodnosti.map((item, index) => (
              <li key={index} style={{ "--delay": `${index * 0.2}s` }}>
                <span className="acc-dot"></span>
                {item}
              </li>
            ))}
          </ul>
          <p className="acc-subtext">
            Svaki detalj je osmišljen da podrži tvoj proces povratka sebi. 
            Mir prirode, miris drveta i tišina koja liječi.
          </p>
        </div>
        <div className="acc-gallery-side">
          <div className="mosaic-grid">
            <div className="mosaic-item m-1"><img src={img1} alt="Smještaj 1" /></div>
            <div className="mosaic-item m-2"><img src={img2} alt="Smještaj 2" /></div>
            <div className="mosaic-item m-3"><img src={img3} alt="Smještaj 3" /></div>
            <div className="mosaic-item m-4"><img src={img4} alt="Smještaj 4" /></div>
            <div className="mosaic-item m-5"><img src={img5} alt="Smještaj 5" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SmjestajSekcija;