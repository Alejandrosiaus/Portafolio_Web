function Skills() {
  const habilidades = [
    "HTML",
    "CSS",
    "JavaScript",
    "React (useMemo, useRef, useCallback, useContext)",
    "APIs (fetch)",
    "Nginx / administración de servidores",
  ];

  return (
    <section id="habilidades" className="section-container">
      <div className="section-header">
        <img src="/assets/mapache3.png" alt="Mapache" className="section-icon" />
        <div className="section-textos">
          <h2 className="outline-title">Habilidades</h2>
          <p>Las siguientes son las habilidades aprendidas en el curso:</p>
        </div>
      </div>

      <div className="skills-grid">
        <div className="skill-card html-card">HTML</div>
        <div className="skill-card css-card">CSS</div>
        <div className="skill-card js-card">JavaScript</div>
        <div className="skill-card react-card">React (useMemo, useRef, useCallback, useContext)</div>
        <div className="skill-card api-card">APIs (fetch)</div>
        <div className="skill-card nginx-card">Nginx / administración de servidores</div>
      </div>
    </section>
  );
}

export default Skills;
