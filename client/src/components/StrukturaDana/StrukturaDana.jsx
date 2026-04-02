import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./StrukturaDana.css";

function StrukturaDana() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  
  const stavke = [
    { text: "jutarnji somatski rad", img: "/images/nature2.jpg" },
    { text: "dnevni procesi (disanje / zvuk / pokret)", img: "/images/nature4.jpg" },
    { text: "integracija", img: "/images/image5.jpeg" },
    { text: "večernji krug i povezivanje", img: "/images/em.jpg" }
  ];

  const galleryImages = [
    "/images/nimage3.jpg", "/images/image2.jpeg", "/images/image5.jpeg", 
    "/images/em.jpg", "/images/ins.jpeg", "/images/image8.jpeg",
    "/images/nimage6.jpeg", "/images/em2.jpg", "/images/nimage2.jpg"
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section 
      ref={ref} 
      className={`day-structure-section ${inView ? "is-visible" : ""}`}
      onMouseMove={handleMouseMove}
    >
      <div className="day-container">
        <div className="day-content-right">
          <span className="kicker-dark">Ritam Retreata</span>
          <h2>STRUKTURA DANA</h2>
          <div className="structure-list">
            {stavke.map((item, index) => (
              <div
                key={index}
                className="structure-item"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span className="item-number">0{index + 1}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="day-gallery-left">
          <div className="slider-track">
            {[...galleryImages, ...galleryImages].map((img, i) => (
              <div key={i} className="day-img">
                <img src={img} alt={`Gallery ${i}`} loading="eager" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            className="floating-cursor-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: mousePos.x - 125,
              y: mousePos.y - 165
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 250, damping: 25, mass: 0.5 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              pointerEvents: "none",
              zIndex: 9999
            }}
          >
            <img src={stavke[hoveredIndex].img} alt="Preview" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default StrukturaDana;
