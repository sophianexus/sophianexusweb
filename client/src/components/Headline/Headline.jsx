import React from "react";
import "./Headline.css";
import bgVideo from '../../assets/naturevideo.mp4';

function Headline() {
  const scrollToSection = () => {
    const section = document.getElementById("dobitak_section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSectionForForm = () => {
    const section = document.getElementById("prijavi-se");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="headsection">
      <video src={bgVideo} autoPlay loop muted playsInline className="bg-video"/>
      <div className="video-overlay"></div>

      <div className="headcontent">
        <span className="location-tag">Etno selo Brezna, Crna Gora • 21–23 maj<br />
        <span className="location-tag-group">Mala grupa (ograničen broj mjesta)</span></span>
        <h1>
          <span className="headcontent_keyword"><i>Resetuj</i></span> svoj nervni sistem za <i>3 dana</i> — kroz tijelo, disanje i zvuk
        </h1>
        
        <p>
          Ako si umoran od stalnog stresa, napetosti i osjećaja da si 
          “<strong>u glavi</strong>” — ovo je vođen i siguran prostor gdje to konačno 
          možeš otpustiti iz tijela i vratiti unutrašnji mir, jasnoću i kontrolu.
        </p>

        <div className="head-actions">
          <button className="cta-button" onClick={scrollToSection}>
            Istraži Nexus
          </button>
          <button className="secondary-button" onClick={scrollToSectionForForm}>Osiguraj svoje mjesto</button>
        </div>
      </div>

      <div className="scroll-indicator"></div>
    </div>
  );
}

export default Headline;
