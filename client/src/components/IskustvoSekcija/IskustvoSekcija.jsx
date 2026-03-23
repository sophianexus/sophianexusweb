import React from "react";
import { useInView } from "react-intersection-observer";
import "./IskustvoSekcija.css";

function IskustvoSekcija() {
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1 
  });

  return (
    <section ref={ref} className={`iskustvo-premium-section ${inView ? "is-visible" : ""}`}>
      <div className="iskustvo-ambient-glow"></div>
      <div className="iskustvo-container">
        <div className="iskustvo-intro-fade">
          <span className="iskustvo-upper-kicker">Biologija Stresa</span>
          <h2 className="iskustvo-main-question">
            Većina nas pokušava<br />
            <span className="iskustvo-italic-quote">da <strong>“riješi stres razmišljanjem.”</strong></span>
          </h2>
        </div>
        <div className="iskustvo-content-grid">
          <div className="iskustvo-story-col">
            <p className="iskustvo-story-p">
              Ali stres nije samo u tvojoj glavi. On ne sluša tvoju logiku niti tvoje planove za odmor.
            </p>
            <div className="iskustvo-divider-line"></div>
            <p className="iskustvo-story-p-bold">
              On je duboko upisan u:<br />
              <span className="iskustvo-text-reveal">tvoje biološko postojanje.</span>
            </p>
            <div className="iskustvo-minimal-grid">
              <div className="iskustvo-item"><span>01</span> Napetost u tvojim mišićima</div>
              <div className="iskustvo-item"><span>02</span> Plitkost u tvom disanju</div>
              <div className="iskustvo-item"><span>03</span> Alarm u tvom nervnom sistemu</div>
            </div>
          </div>
          <div className="iskustvo-statement-col">
            <div className="iskustvo-card">
              <div className="iskustvo-card-inner">
                <p className="iskustvo-card-pre">Suštinski problem</p>
                <h3 className="iskustvo-card-title">
                  Tijelu kom nikada ne dopustimo da predahne...
                </h3>
                <div className="iskustvo-card-separator"></div>
                <p className="iskustvo-card-conclusion">
                  I zato se <strong>stres stalno vraća.</strong>
                </p>
              </div>
              <div className="iskustvo-card-blur-background"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IskustvoSekcija;