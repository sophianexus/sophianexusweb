import React from "react";
import { useInView } from "react-intersection-observer";
import "./StrukturaDana.css";
import rutina1 from "../../assets/rutina2.jpg";
import hrana1 from "../../assets/hrana1.jpg";
import stacesdobiti from "../../assets/stacesdobiti.jpg";
import hrana2 from "../../assets/hrana2.jpg"
import rutina2 from "../../assets/rutinaslika.jpg";
import nature2 from "../../assets/nature2.jpg";
import nature1 from "../../assets/nature1.jpg"
import em from "../../assets/em.jpg";
import em2 from "../../assets/em2.jpg";
import em4 from "../../assets/em4.jpg";

function StrukturaDana() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const stavke = [
    "jutarnji somatski rad",
    "dnevni procesi (disanje / zvuk / pokret)",
    "integracija",
    "večernji krug i povezivanje"
  ];

  return (
    <section ref={ref} className={`day-structure-section ${inView ? "is-visible" : ""}`}>
      <div className="day-container">
        <div className="day-gallery-left">
          <div className="day-img img-p1">
            <img src={em} alt="Jutro" />
          </div>
          <div className="day-img img-p2">
            <img src={nature1} alt="Proces" />
          </div>
          <div className="day-img img-p3">
            <img src={nature2} alt="Hrana" />
          </div>
          <div className="day-img img-p4">
            <img src={em2} alt="Priroda" />
          </div>
          <div className="day-img img-p5">
            <img src={em4} alt="Krug" />
          </div>
        </div>
        <div className="day-content-right">
          <span className="kicker-dark">Ritam Retreata</span>
          <h2>STRUKTURA DANA</h2>
          <div className="structure-list">
            {stavke.map((stavka, index) => (
              <div key={index} className="structure-item">
                <span className="item-number">0{index + 1}</span>
                <p>{stavka}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default StrukturaDana;