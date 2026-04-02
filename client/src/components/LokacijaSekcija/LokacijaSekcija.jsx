import React from "react";
import { useInView } from "react-intersection-observer";
import "./LokacijaSekcija.css";

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
              src="https://maps.google.com/maps?q=Etno%20selo%20Montenegro%20Brezna&t=k&z=15&ie=UTF8&iwloc=&output=embed"
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
              <img src="/images/stacesdobiti.jpg" alt="Image not found." />
            </div>
            <div className="img-box medium-center">
              <img src="/images/vis.jpg" alt="Image not found." />
            </div>
            <div className="img-box small-bottom">
              <img src="/images/rutina2.jpg" alt="Image not found." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LokacijaSekcija;
