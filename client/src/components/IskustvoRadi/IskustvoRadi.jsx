import React from "react";
import { useInView } from "react-intersection-observer";
import "./IskustvoRadi.css";

function IskustvoRadi() {
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.2 
  });

  return (
    <section ref={ref} className={`impact-white-section ${inView ? "is-visible" : ""}`}>
      <div className="impact-container">
        <div className="impact-header">
          <span className="impact-kicker">Proces Transformacije</span>
          <h2 className="impact-main-title">
            Tokom ova <span className="accent-num">3 dana</span>:
          </h2>
        </div>
        <div className="impact-steps-grid">
          <div className="step-card">
            <span className="step-number">01</span>
            <h3>Regulacija</h3>
            <p>Spuštaš nervni sistem iz <strong>“fight or flight”</strong> u stanje dubokog mira.</p>
          </div>
          <div className="step-card">
            <span className="step-number">02</span>
            <h3>Oslobađanje</h3>
            <p>Otpuštaš nakupljenu <strong>fizičku i emocionalnu</strong> napetost iz tkiva.</p>
          </div>
          <div className="step-card">
            <span className="step-number">03</span>
            <h3>Povratak</h3>
            <p>Vraćaš osjećaj <strong>kontrole i stabilnosti</strong> nad sopstvenim životom.</p>
          </div>
        </div>
        <div className="impact-footer-statement">
          <div className="statement-line"></div>
          <div className="statement-content">
            <p className="not-theory">Ovo nije prosto teoretisanje.</p>
            <h4 className="global-experience">
              Ovo je naše iskustvo i znanje koje smo skupljali <br /> 
              <span className="highlight-text">širom svijeta</span>, a sada ga tebi predajemo.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IskustvoRadi;
