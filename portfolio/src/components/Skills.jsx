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
      <h2>Habilidades</h2>
      <div className="skills-grid">
        {habilidades.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
