import React from "react";
import { useInView } from "react-intersection-observer";
import "./KvalifikacijaSekcija.css";

function KvalifikacijaSekcija() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className={`qualify-section ${inView ? "is-visible" : ""}`}>
      <div className="qualify-container">
        <div className="qualify-header">
          <span className="qualify-kicker">Transparentnost</span>
          <h2 className="qualify-main-title">Da li je ovo <span className="italic-green">pravi korak</span> za tebe?</h2>
        </div>
        <div className="qualify-grid">
          <div className="qualify-card check-card">
            <div className="card-status-label is-for-you">Preporučujemo</div>
            <h3>Ovo je za tebe ako:</h3>
            <ul className="qualify-list">
              <li><span>✔</span> osjećaš stres i napetost</li>
              <li><span>✔</span> želiš više mira u tijelu</li>
              <li><span>✔</span> otvoren si za rad na sebi</li>
            </ul>
          </div>
          <div className="qualify-card x-card">
            <div className="card-status-label not-for-you">Nije za tebe</div>
            <h3>Ovo nije za tebe ako:</h3>
            <ul className="qualify-list">
              <li><span>✖</span> tražiš samo odmor bez unutrašnjeg rada</li>
              <li><span>✖</span> ne želiš ulaziti u kontakt sa sobom</li>
            </ul>
          </div>
        </div>
        <div className="qualify-footer">
          <p>Naš cilj je da stvorimo siguran prostor za one koji su <strong>istinski spremni</strong> na promjenu.</p>
        </div>
      </div>
    </section>
  );
}

export default KvalifikacijaSekcija;
