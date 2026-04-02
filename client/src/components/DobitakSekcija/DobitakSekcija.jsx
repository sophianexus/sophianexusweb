import React from "react";
import { useInView } from "react-intersection-observer";
import "./DobitakSekcija.css";

function DobitakSekcija() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className={`green-section ${inView ? "is-visible" : ""}`} id="dobitak_section">
      <div className="green-container">
        <div className="green-column text-col-green">
          <span className="kicker-light">Suština Procesa</span>
          <h2 className="retreat-main-title">
            Ovaj retreat <br />
            <span className="italic-accent">nije još jedan odmor.</span>
          </h2>
          <div className="retreat-intro-p">Ovo je prostor gdje:</div>
          <ul className="benefit-list">
            <li><span className="benefit-list-number">1.</span> tijelo počinje da se opušta</li>
            <li><span className="benefit-list-number">2.</span> nervni sistem ulazi u balans</li>
            <li><span className="benefit-list-number">3.</span> emocije koje te preplavljuju počinju da izlaze</li>
            <li><span className="benefit-list-number">4.</span> vraćaš osjećaj sebe</li>
          </ul>
          <div className="retreat-footer-note">
            <div className="mini-divider"></div>
            <p>Kroz vođene procese koji rade tamo gdje stres zaista jeste — <strong>u tijelu.</strong></p>
          </div>
        </div>
        <div className="green-column image-col-green">
          <div className="stacked-gallery">
            <div className="gallery-card card-1"><img src="/images/vis.jpg" alt="Reset 1" /></div>
            <div className="gallery-card card-2"><img src="/images/rutina2.jpg" alt="Reset 2" /></div>
            <div className="gallery-card card-3"><img src="/images/hrana2.jpg" alt="Reset 3" /></div>
            <div className="gallery-card card-4"><img src="/images/maininside.jpg" alt="Reset 4" /></div>
            <div className="gallery-card card-5">
               <img src="/images/stacesdobiti.jpg" alt="Reset 5" />
               <div className="card-glass-overlay">REGENERACIJA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DobitakSekcija;
