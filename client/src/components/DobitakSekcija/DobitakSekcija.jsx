import React from "react";
import { useInView } from "react-intersection-observer";
import "./DobitakSekcija.css";
import picture1 from '../../assets/stacesdobiti.jpg';
import picture2 from '../../assets/maininside.jpg';
import picture3 from '../../assets/hrana2.jpg';
import picture4 from '../../assets/rutina2.jpg';
import picture5 from '../../assets/vis.jpg';

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
            <li>tijelo počinje da se opušta</li>
            <li>nervni sistem ulazi u balans</li>
            <li>emocije koje te preplavljuju počinju da izlaze</li>
            <li>vraćaš osjećaj sebe</li>
          </ul>
          <div className="retreat-footer-note">
            <div className="mini-divider"></div>
            <p>Kroz vođene procese koji rade tamo gdje stres zaista jeste — <strong>u tijelu.</strong></p>
          </div>
        </div>
        <div className="green-column image-col-green">
          <div className="stacked-gallery">
            <div className="gallery-card card-1"><img src={picture5} alt="Reset 1" /></div>
            <div className="gallery-card card-2"><img src={picture4} alt="Reset 2" /></div>
            <div className="gallery-card card-3"><img src={picture3} alt="Reset 3" /></div>
            <div className="gallery-card card-4"><img src={picture2} alt="Reset 4" /></div>
            <div className="gallery-card card-5">
               <img src={picture1} alt="Reset 5" />
               <div className="card-glass-overlay">Sophia Nexus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DobitakSekcija;