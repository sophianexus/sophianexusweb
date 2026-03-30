import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./StrukturaDana.css";
import image1 from "../../assets/new_images/image1.jpeg";
import image2 from "../../assets/new_images/image2.jpeg";
import image5 from "../../assets/new_images/image5.jpeg";
import image6 from "../../assets/new_images/image6.jpeg";
import image8 from "../../assets/new_images/image8.jpeg";
import slikaKodProzora from "../../assets/slikakodprozora.jpg";
import emImage from "../../assets/em.jpg";
import nature4 from "../../assets/nature4.jpg";
import em2Image from "../../assets/em2.jpg";
import rutinaImage from "../../assets/rutina2.jpg";
import nature2 from "../../assets/nature2.jpg";

function StrukturaDana() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  
  const stavke = [
    { text: "jutarnji somatski rad", img: nature2 },
    { text: "dnevni procesi (disanje / zvuk / pokret)", img: nature4 },
    { text: "integracija", img: image5 },
    { text: "večernji krug i povezivanje", img: emImage }
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
        <div className="day-gallery-left">
          <div className="slider-track">
            {[image1, image2, image5, emImage, image6, image8,
              slikaKodProzora, em2Image, rutinaImage
            ].map((img, i) => (
              <div key={i} className="day-img"><img src={img} alt={i} /></div>
            ))}
          </div>
        </div>

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
              zIndex: 9999,
              cursor: "none"
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
