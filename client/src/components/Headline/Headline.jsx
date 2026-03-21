import React from "react";
import "./Headline.css";

function Headline() {
  return (
    <div className="headsection">
      <div className="light light1"></div>
      <div className="light light2"></div>
      <div className="light light3"></div>
      <div className="light light4"></div>

      <nav className="header">
        <h3 className="headtitle">Sophia Nexus</h3>

        <div className="header-buttons">
          <button className="btn-secondary">Povezi Se</button>
          <button className="btn-primary">Zapocni</button>
        </div>
      </nav>

      <div className="headcontent">
        <h1>Trodnevni <span className='headcontent_keyword'>kreativni reset</span> <br></br>za tijelo, emocije <br></br>i nervni sistem</h1>
        <p>
          Ako si umoran od stalnog stresa, napetosti i osjećaja da si 
          “<strong>u glavi</strong>“ — ovo je vođen i siguran prostor gdje to konačno možeš otpustiti iz 
          tijela i vratiti unutrašnji mir, jasnoću i kontrolu uz podršku stručnog tima. 
        </p>
        <button className="cta-button">Istrazi Nexus</button>
      </div>
    </div>
  );
}

export default Headline;
