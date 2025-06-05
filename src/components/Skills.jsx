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
    <section id="habilidades">
      <h2 className="outline-title">Habilidades</h2>
      <p>Las siguientes son las habilidades aprendicas en el curso</p>
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
