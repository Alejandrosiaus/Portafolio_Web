import React, { useRef } from "react";
import "./Landing.css";

const Landing = () => {
  const audioRef = useRef(null);

  const handleMouseEnter = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.loop = true;
      audio.volume = 1;
      audio.muted = false;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((e) => {
          console.error("Error al intentar reproducir el audio:", e);
        });
      }
    }
  };

  const handleMouseLeave = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  return (
    <div className="hero-section">
      <div className="overlay">
        <h1 className="name">ALEJANDRO<br />RIVERA</h1>
        <div className="contenido-animado">
          <img
            src="/assets/mapache.gif"
            alt="Animación"
            className="animated-img"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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

      {/* Audio oculto */}
      <audio
        ref={audioRef}
        src="/assets/sonido.mp3"
        preload="auto"
      />
    </div>
  );
};

export default Landing;
