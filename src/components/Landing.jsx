import React, { useState, useEffect } from "react";
import "./Landing.css"; 

const Landing = () => {
  const [currentImage, setCurrentImage] = useState("animacion1.png");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === "animacion1.png" ? "animacion2.png" : "animacion1.png"
      );
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
  <div className="hero-section">
    <div className="overlay">
      <h1>ALEJANDRO RIVERA</h1>
      <div className="contenido-animado">
        <img
          src={`/assets/${currentImage}`}
          alt="Animación"
          className="animated-img"
        />
        <div className="textos">
          <p>Soy un estudiante del curso de programación web</p>
          <p>
            Este es mi portafolio: una colección de mis habilidades aprendidas en el curso.
            Junto con mi currículum y trabajos elaborados durante el curso.
          </p>
        </div>
      </div>
    </div>
  </div>
);

};
export default Landing;
