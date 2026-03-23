import React from "react";
import { useInView } from "react-intersection-observer";
import "./ProblemProstor.css";

function ProblemProstor() {
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1 
  });

  return (
    <section id="istrazi-sekcija" ref={ref} className={`premium-section ${inView ? "is-visible" : ""}`}>
      <div className="ambient-glow"></div>
      <div className="premium-container">
        <div className="intro-fade">
          <span className="upper-kicker">Introspekcija</span>
          <h2 className="main-question">
            Koliko puta si rekao sebi: <br />
            <span className="italic-quote">“Ja prosto moram malo da odmorim.”</span>
          </h2>
        </div>
        <div className="content-grid">
          <div className="story-col">
            <p className="story-p">
              I možda i jesi pokušao. Par dana. More. Tišina. Prijatelji. Porodica.
            </p>
            <div className="divider-line"></div>
            <p className="story-p-bold">
              Ali se vratiš… <br />
              <span className="text-reveal">i sve je isto.</span>
            </p>
            <div className="symptom-minimal-grid">
              <div className="symptom-item"><span>01</span> Isti pritisak u grudima</div>
              <div className="symptom-item"><span>02</span> Ista napetost u tijelu</div>
              <div className="symptom-item"><span>03</span> Isti nemir u glavi</div>
              <div className="symptom-item"><span>04</span> Isti bijes u želucu</div>
            </div>
          </div>
          <div className="statement-col">
            <div className="premium-card">
              <div className="card-inner">
                <p className="card-pre">Istina o tvom stanju</p>
                <h3 className="card-title">
                  Problem nije u tome što nisi odmorio.
                </h3>
                <div className="card-separator"></div>
                <p className="card-conclusion">
                  Problem je što <strong>stres nije napustio</strong> tvoje tijelo.
                </p>
              </div>
              <div className="card-blur-background"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemProstor;