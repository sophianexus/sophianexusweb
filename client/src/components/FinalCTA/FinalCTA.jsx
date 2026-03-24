import React, { useState, useRef } from "react";
import "./FinalCTA.css";
import { useInView } from "react-intersection-observer";

function FinalCTA() {
  const [formData, setFormData] = useState({ name: "", email: "", number: "" });
  const [selectedPrefix, setSelectedPrefix] = useState("+382");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [isWaiting, setIsWaiting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const timeoutRef = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const prefiksi = [
    { code: "+382", label: "🇲🇪 +382" },
    { code: "+381", label: "🇷🇸 +381" },
    { code: "+387", label: "🇧🇦 +387" },
    { code: "+385", label: "🇭🇷 +385" },
    { code: "+386", label: "🇸🇮 +386" },
    { code: "+389", label: "🇲🇰 +389" }
  ];
  const host = 'localhost';
  const port = '3000';
  const fendpoint = 'api/prijava';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isWaiting) return;

    setStatus("sending");
    const fullNum = `${selectedPrefix} ${formData.number}`;
    
    try {
      const response = await fetch(`https://sophianexusweb.onrender.com/api/prijava`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, number: fullNum }),
      });
      const data = await response.json();
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", number: "" });
        setIsWaiting(true);

        timeoutRef.current = setTimeout(() => {
          setStatus("");
          setIsWaiting(false);
        }, 5000);

      } else { 
        setStatus("error");
        setErrorMessage(data.errors ? data.errors[0] : "Greška");
        timeoutRef.current = setTimeout(() => {
          setStatus("");
        }, 5000);
      }
    } catch (error) { 
      setStatus("error");
      timeoutRef.current = setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <>
    <section ref={ref} className={`final-cta-section ${inView ? "is-visible" : ""}`} id="prijavi-se">
      <div className="bg-sphere sphere-1"></div>
      <div className="bg-sphere sphere-2"></div>
      <div className="cta-container">
        <div className="cta-info-left">
          <div className="badge-prijavi">Slobodna mjesta: Ograničeno</div>
          <h2 className="cta-title"><span className="text-gradient">Manje stresa. Više tebe.</span> Rezerviši svoje mjesto u grupi.</h2>
          <p className="cta-description">Ako osjećaš da ti ovo treba — postoji velika vjerovatnoća da ti stvarno i treba.
                          Ne moraš više nositi sve sam, dođi da podijelimo teret.
          </p>
          <div className="cta-info-cards">
            <div className="mini-card"><span>&#8594;</span><div><h4>Datum</h4><p>21–23. Maj</p></div></div>
            <div className="mini-card"><span>&#8594;</span><div><h4>Lokacija</h4><p>Etno selo <br />Brezna</p></div></div>
          </div>
        </div>
        <div className="cta-form-right">
          <div className="form-glass-wrapper">
            <form onSubmit={handleSubmit} className="nexus-form">
              <h3>Osiguraj mjesto</h3>
              <div className="input-box">
                <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                <label>Ime i Prezime</label>
                <div className="line"></div>
              </div>
              <div className="input-box">
                <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                <label>Email adresa</label>
                <div className="line"></div>
              </div>
              <div className="phone-group">
                <div className={`custom-dropdown ${isDropdownOpen ? "active" : ""}`} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <div className="selected-option">{selectedPrefix} <span>▼</span></div>
                  <div className="options-list">
                    {prefiksi.map((p) => (
                      <div key={p.code} className="option-item" onClick={() => { setSelectedPrefix(p.code); setIsDropdownOpen(false); }}>
                        {p.label}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="input-box phone-input">
                  <input 
                  type="tel" 
                  required 
                  placeholder="68 000 000" 
                  value={formData.number} 
                  onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, ""); 
                    if (value.length > 9) value = value.slice(0, 9);
                    let formattedValue = "";
                    if (value.length > 0) {
                      if (value.length <= 2) {
                        formattedValue = value;
                      } else if (value.length <= 5) {
                        formattedValue = `${value.slice(0, 2)} ${value.slice(2)}`;
                      } else {
                        formattedValue = `${value.slice(0, 2)} ${value.slice(2, 5)} ${value.slice(5)}`;
                      }
                    }
                    setFormData({ ...formData, number: formattedValue });
                  }} />
                  <div className="line"></div>
                </div>
              </div>
              <button 
              type="submit" 
              className={`submit-btn ${status === 'sending' ? 'loading' : ''} ${isWaiting ? 'disabled' : ''}`} 
              disabled={status === 'sending' || isWaiting}
              >
                {status === 'success' ? 'PRIJAVA POSLATA ✓' : 'PRIJAVI SE ODMAH'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    {status === "success" && (
      <div className="sticky-toast" key="success-toast">
        <div className="toast-body">
          <div className="toast-icon-circle">✓</div>
          <div className="toast-content">
            <p className="toast-main-text">Prijava je uspješno poslata!</p>
            <p className="toast-sub-text">Kontaktiraćemo te u najkraćem roku.</p>
          </div>
          <button className="toast-close-x" onClick={() => setStatus("")}>✕</button>
        </div>
        <div className="toast-loader-bar"></div>
      </div>
    )}

    {status === "error" && (
      <div className="sticky-toast error-toast" key={`error-${errorMessage}`}>
        <div className="toast-body">
          <div className="toast-icon-circle error-icon">✕</div>
          <div className="toast-content">
            <p className="toast-main-text">Greška</p>
            <p className="toast-sub-text">{errorMessage}</p>
          </div>
          <button className="toast-close-x" onClick={() => setStatus("")}>✕</button>
        </div>
        <div className="toast-loader-bar error-bar"></div>
      </div>
    )}
    </>
  );
}

export default FinalCTA;
