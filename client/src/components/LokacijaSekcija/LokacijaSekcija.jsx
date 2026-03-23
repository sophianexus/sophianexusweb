import React from "react";
import { useInView } from "react-intersection-observer";
import "./LokacijaSekcija.css";
import slika1 from "../../assets/stacesdobiti.jpg"; 
import slika2 from "../../assets/rutina2.jpg";
import slika3 from "../../assets/vis.jpg";

function LokacijaSekcija() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className={`loc-clean-section ${inView ? "is-visible" : ""}`}>
      <div className="loc-clean-container">
        <div className="loc-clean-info">
          <span className="kicker-dark">Ambijent</span>
          <h2 className="loc-clean-title">GDJE SE OVO DEŠAVA</h2>
          <p className="loc-clean-lead">Priroda koja te ne stimuliše — nego smiruje</p>
          <ul className="loc-clean-list">
            <li><span>→</span> Tišina.</li>
            <li><span>→</span> Planine.</li>
            <li><span>→</span> Prostor da konačno staneš.</li>
          </ul>
          <div className="map-minimal">
            <iframe
              title="Lokacija Brezna"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2917.447543883017!2d18.9103857!3d43.0110196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134d1b115e3f3ede%3A0xc7c7fdb31d238a3c!2sEtno%20selo%20Montenegro!5e0!3m2!1ssr!2sme!4v1700000000000!5m2!1ssr!2sme"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="loc-clean-gallery">
          <div className="gallery-layout">
            <div className="img-box small-top">
              <img src={slika1} alt="Brezna 1" />
            </div>
            <div className="img-box medium-center">
              <img src={slika3} alt="Brezna 2" />
            </div>
            <div className="img-box small-bottom">
              <img src={slika2} alt="Brezna 3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LokacijaSekcija;