import React from "react";
import { useInView } from "react-intersection-observer";
import "./SmjestajSekcija.css";

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
            <div className="mosaic-item m-1"><img src="/images/slikakodprozora.jpg" alt="Image not found." /></div>
            <div className="mosaic-item m-2"><img src="/images/maininside.jpg" alt="Image not found." /></div>
            <div className="mosaic-item m-3"><img src="/images/maininside3.jpg" alt="Image not found." /></div>
            <div className="mosaic-item m-4"><img src="/images/maininside2.jpg" alt="Image not found." /></div>
            <div className="mosaic-item m-5"><img src="/images/maininside4.jpg" alt="Image not found." /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SmjestajSekcija;
