import React from "react";
import { useInView } from "react-intersection-observer";
import "./VaznoSekcija.css";

function VaznoSekcija() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section ref={ref} className={`notice-section ${inView ? "is-visible" : ""}`}>
      <div className="notice-container">
        <div className="notice-block medical">
          <span className="notice-label">VAŽNO</span>
          <p>
            Ovaj retreat <strong>nije zamjena</strong> za medicinski ili psihoterapijski tretman.
          </p>
        </div>
        <div className="notice-divider"></div>
        <div className="notice-block urgency">
          <span className="notice-label label-red">URGENTNOST</span>
          <p>
            Grupa je mala. <br />
            <strong>Kad se popuni — zatvara se.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default VaznoSekcija;
