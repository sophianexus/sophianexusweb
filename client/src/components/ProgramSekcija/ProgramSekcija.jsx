import React from "react";
import { useInView } from "react-intersection-observer";
import "./ProgramSekcija.css";

function ProgramSekcija() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const programItems = [
    {
      title: "Sacred Frequencies: Chakra Activation",
      subtitle: "(zvučna terapija – sakralni instrumenti)",
      text: "Duboka relaksacija i balans kroz vibraciju zvuka koja utiče na tijelo i nervni sistem.",
      icon: ""
    },
    {
      title: "Inner Portal Breathwork",
      subtitle: "(disanje + integracija)",
      text: "Vođeni proces disanja koji dovodi klijenta u prošireno stanje svijesti i omogućava direktan rad sa traumama, uz duboko emocionalno oslobađanje i integraciju.",
      icon: ""
    },
    {
      title: "Connected Bodies: The Art of Connection",
      subtitle: "(kontaktna improvizacija)",
      text: "Rad kroz pokret i odnos sa drugima koji razvija prisutnost, povjerenje i slobodu izraza.",
      icon: "",
      featured: true
    },
    {
      title: "Embodied Nervous Flow",
      subtitle: "(jutarnji somatski rad)",
      text: "Kombinacija pilatesa, TRE i svjesnog pokreta za regulaciju nervnog sistema i oslobađanje napetosti.",
      icon: ""
    },
    {
      title: "Embodied Voice Flow",
      subtitle: "(rad sa glasom i tijelom)",
      text: "Istraživanje veze između glasa, tijela i emocija kroz zvuk i pokret.",
      icon: ""
    }
  ];

  return (
    <section ref={ref} className={`program-section ${inView ? "is-visible" : ""}`}>
      <div className="program-container">
        <span className="kicker-dark">Satnica i Metode</span>
        <h2 className="program-main-title">KAKO TO RADIMO</h2>
        <div className="program-grid">
          {programItems.map((item, index) => (
            <div key={index} className={`program-card ${item.featured ? "featured" : ""}`}>
              <div className="card-icon">{item.icon}</div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <span className="program-subtitle">{item.subtitle}</span>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramSekcija;
