import { useRef, useState } from "react";
import "./ChaosMapache.css";

const ChaosMapache = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const audioRef = useRef(null);

  const handleClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" }); 
  setShowOverlay(true);

  const audio = audioRef.current;
  if (audio) {
    audio.currentTime = 0;
    audio.volume = 1;
    audio.play();
  }

  setTimeout(() => {
    setShowOverlay(false);
    if (audio) audio.pause();
  }, 9000);
};


  return (
    <>
      {/* BOTÓN TRIGGER */}
      <div className="mapache-chaos-container">
        <img
          src="/assets/machapexd.jpg"
          alt="Mapache caos"
          onClick={handleClick}
          className="mapache-clickable"
        />
        <p className="mapache-text">MACHAPE XD</p>
      </div>

      {/* OVERLAY GLOBAL */}
      {showOverlay && (
        <div className="mapache-overlay">
          <img src="/assets/machapexd.jpg" alt="Mapache Full" />
        </div>
      )}

      <audio ref={audioRef} src="/assets/pompeii.mp3" preload="auto" />
    </>
  );
};

export default ChaosMapache;
