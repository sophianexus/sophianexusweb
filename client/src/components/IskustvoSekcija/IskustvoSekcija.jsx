import React from "react";
import { useInView } from "react-intersection-observer";
import "./IskustvoSekcija.css";

const LazyVideo = ({ src, className, overlayText }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '100px 0px',
  });

  return (
    <div ref={ref} className={className} style={{ position: 'relative', overflow: 'hidden', minHeight: '150px', background: '#1a1a1a' }}>
      {inView ? (
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="auto"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div style={{ width: '100%', height: '100%' }}></div>
      )}
      {overlayText && <div className="mini-video-overlay">{overlayText}</div>}
    </div>
  );
};

function IskustvoSekcija() {
  const { ref: sectionRef, inView: sectionVisible } = useInView({ 
    triggerOnce: true, 
    threshold: 0.05 
  });

  return (
    <section 
      ref={sectionRef} 
      className={`iskustvo-premium-section ${sectionVisible ? "is-visible" : ""}`}
    >
      <div className="iskustvo-ambient-glow"></div>
      
      <div className="iskustvo-container">
        <div className="iskustvo-intro-fade">
          <span className="iskustvo-upper-kicker">Biologija Stresa</span>
          <h2 className="iskustvo-main-question">
            Većina nas pokušava<br />
            <span className="iskustvo-italic-quote">da <strong>“riješi stres razmišljanjem.”</strong></span>
            <span className="title-underline"></span>
          </h2>
        </div>

        <div className="iskustvo-content-grid">
          <div className="iskustvo-story-col">
            <p className="iskustvo-story-p">
              Ali stres nije samo u tvojoj glavi. On ne sluša tvoju logiku niti tvoje planove za odmor.
            </p>
            <div className="iskustvo-divider-line"></div>
            <p className="iskustvo-story-p-bold">
              On je duboko upisan u:<br />
              <span className="iskustvo-text-reveal">tvoje biološko postojanje.</span>
            </p>
            
            <div className="iskustvo-minimal-grid">
              <div className="iskustvo-item">
                <span className="iskustvo-item-num">01</span> Napetost u tvojim mišićima
              </div>
              <div className="iskustvo-item">
                <span className="iskustvo-item-num">02</span> Plitkost u tvom disanju
              </div>
              <div className="iskustvo-item">
                <span className="iskustvo-item-num">03</span> Alarm u tvom nervnom sistemu
              </div>
            </div>

            <div className="iskustvo-dual-videos">
              <LazyVideo 
                src="/videos/sviranje3.mp4"
                className="iskustvo-mini-video v1"
                overlayText="Proces"
              />
              <LazyVideo 
                src="/videos/video1.mp4" 
                className="iskustvo-mini-video v2" 
                overlayText="Otpuštanje" 
              />
            </div>
          </div>

          <div className="iskustvo-statement-col">
            <div className="iskustvo-card">
              <div className="iskustvo-card-inner">
                <p className="iskustvo-card-pre">Suštinski problem</p>
                <h3 className="iskustvo-card-title">
                  Tijelu kom nikada ne dopustimo da predahne...
                </h3>
                <div className="iskustvo-card-separator"></div>
                <p className="iskustvo-card-conclusion">
                  I zato se <strong>stres stalno vraća.</strong>
                </p>
              </div>
              <div className="iskustvo-card-blur-background"></div>
            </div>

            <div className="iskustvo-video-wrapper">
              <LazyVideo 
                src="/videos/mainvideo.mp4"
                className="iskustvo-video-element"
              />
              <div className="video-overlay-gradient"></div>
              <div className="video-play-hint">KONTAKT</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IskustvoSekcija;
