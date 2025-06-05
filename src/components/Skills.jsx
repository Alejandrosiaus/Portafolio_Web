import "./Skills.css";
import { useEffect } from "react";

function Skills() {
  useEffect(() => {
    if (!window.anime) {
      console.warn("animejs no está cargado. Revisa index.html");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const className = el.classList[1];

            const animations = {
              "html-card": {
                targets: el,
                translateY: [-100, 0],
                opacity: [0, 1],
                duration: 2000,
                easing: "easeOutBounce",
              },
              "css-card": {
                targets: el,
                scale: [0.5, 1],
                opacity: [0, 1],
                duration: 2000,
                easing: "easeOutElastic(1, .8)",
              },
              "js-card": {
                targets: el,
                rotate: [0, 360],
                opacity: [0, 1],
                duration: 2000,
                easing: "easeInOutSine",
              },
              "react-card": {
                targets: el,
                translateX: [-150, 0],
                opacity: [0, 1],
                duration: 2000,
                easing: "easeOutExpo",
              },
              "api-card": {
                targets: el,
                scale: [1.5, 1],
                opacity: [0, 1],
                duration: 2000,
                easing: "easeOutBack",
              },
              "nginx-card": {
                targets: el,
                translateY: [-50, 0],
                scale: [0.8, 1],
                opacity: [0, 1],
                duration: 2000,
                easing: "easeOutCirc",
              },
            };

            const animation = animations[className];
            if (animation) {
              window.anime(animation);
              observer.unobserve(el);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = document.querySelectorAll(".skill-card");
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section id="habilidades" className="skills-section section-container">
      <div className="section-header">
        <img
          src="/assets/mapache3.png"
          alt="Mapache"
          className="section-icon"
        />
        <div className="section-textos">
          <h2 className="outline-title">Habilidades</h2>
          <p>Este es un listado de las habilidades que he aprendido a lo largo de mi carrera</p>
        </div>
      </div>

      <div className="skills-grid">
        <div className="skill-card html-card">HTML</div>
        <div className="skill-card css-card">CSS</div>
        <div className="skill-card js-card">JavaScript</div>
        <div className="skill-card react-card">
          React (useMemo, useRef, useCallback, useContext)
        </div>
        <div className="skill-card api-card">APIs (fetch)</div>
        <div className="skill-card nginx-card">
          Nginx / administración de servidores
        </div>
      </div>
    </section>
  );
}

export default Skills;
