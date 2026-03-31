import React from "react";
import { useInView } from "react-intersection-observer";
import "./Investicija.css";
import mainVideo from '../../assets/new_images/main_video.mp4';
import vis from "../../assets/em2.jpg";
import hrana from "../../assets/new_images/image2.jpeg";
import sta from "../../assets/new_images/image6.jpeg";
import em from "../../assets/em.jpg";

function Investicija() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const scrollToSectionForForm = () => {
    const section = document.getElementById("prijavi-se");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section ref={ref} className={`investment-section ${inView ? "is-visible" : ""}`}>
      <div className="invest-container">
        <div className="invest-text-left">
          <span className="kicker-light">Vrijednost za tebe</span>
          <h2>ENERGETSKA RAZMJENA</h2>
          <div className="price-box">
            <div className="price-item early-bird">
              <span className="price-label">Early Bird (do 15.04.)</span>
              <span className="price-amount">379.99 €</span>
            </div>
            <div className="price-item regular">
              <span className="price-label">Standardna cijena</span>
              <span className="price-amount">459.99 €</span>
            </div>
          </div>
          <p className="invest-note">
            *U cijenu je uključen smještaj, svi obroci i kompletan program rada.
          </p>
          <button className="cta-final" onClick={scrollToSectionForForm}>OSIGURAJ SVOJE MJESTO</button>
        </div>
        <div className="invest-gallery-orbital">
          <div className="orbital-item central-video">
            <video src={mainVideo} autoPlay loop muted playsInline />
          </div>
          <div className="orbital-item inv-img-1"><img src={hrana} alt="slika nije pornadjena" /></div>
          <div className="orbital-item inv-img-2"><img src={em} alt="slika nije pornadjena" /></div>
          <div className="orbital-item inv-img-3"><img src={vis} alt="slika nije pornadjena" /></div>
          <div className="orbital-item inv-img-4"><img src={sta} alt="slika nije pornadjena" /></div>
        </div>
      </div>
    </section>
  );
}

export default Investicija;
