import React from "react";
import { useInView } from "react-intersection-observer";
import "./TimSekcija.css";
import member1 from '../../assets/timmember1.jpg';
import member2 from '../../assets/timmember2.jpg';

function TimSekcija() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const tim = [
    {
      ime: "Iva Đurović",
      titula: "kreativni terapeut",
      opis: "Rad sa disanjem, pokretom, zvukom i kreativnim terapijama. Integrativni pristup koji kombinuje somatski rad, art terapiju i duboke transformativne procese.",
      slika: member2
    },
    {
      ime: "Elida Adrović",
      titula: "somatic & TRE facilitator",
      opis: "Rad sa tijelom kroz pokret, TRE, glas i art izražaj, sa fokusom na regulaciju nervnog sistema i oslobađanje napetosti.",
      slika: member1
    }
  ];

  return (
    <section ref={ref} className={`team-section ${inView ? "is-visible" : ""}`}>
      <div className="team-container">
        <span className="kicker-light">Lica Nexusa</span>
        <h2 className="team-main-title">KO STOJI IZA OVOGA</h2>
        <div className="support-statement">
          <div className="support-item">
            <span className="support-icon"></span>
            <p>Nisi sam u ovom procesu.</p>
          </div>
          <div className="support-item">
            <span className="support-icon"></span>
            <p>Ovo je vođeno, sigurno i podržano iskustvo.</p>
          </div>
        </div>

        <div className="team-list">
          {tim.map((osoba, index) => (
            <div key={index} className={`team-member ${index % 2 !== 0 ? "reverse" : ""}`}>
              <div className="member-image-wrapper">
                <div className="member-circle">
                  <img src={osoba.slika} alt={osoba.ime} className="member-img" />
                  <div className="circle-decoration"></div>
                </div>
              </div>
              <div className="member-info">
                <h3>{osoba.ime} <span>– {osoba.titula}</span></h3>
                <p>{osoba.opis}</p>
                <div className="member-line"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TimSekcija;
