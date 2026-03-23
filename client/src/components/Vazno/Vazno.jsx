import React from "react";
import { useInView } from "react-intersection-observer";
import "./Vazno.css";

function Vazno() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className={`vazno-section ${inView ? "is-visible" : ""}`}>
      <div className="vazno-container">
        <div className="vazno-card">
          <div className="vazno-icon"></div>
          <span className="vazno-kicker">Napomena</span>
          <h2>VAŽNO</h2>
          <div className="vazno-line"></div>
          <p>
            Ovaj retreat <strong>nije zamjena</strong> za medicinski ili psihoterapijski tretman.
          </p>
          <p className="vazno-subtext">
            Namijenjen je isključivo ličnom razvoju, dubokom odmoru i radu kroz tijelo i nervni sistem.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Vazno;