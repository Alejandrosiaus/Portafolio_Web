function Projects() {
  return (
    <section id="proyectos">
      <h2>Proyectos</h2>

      <div className="project-grid">

        <div className="project-card">
          <h3>Tema Dinámico con useContext</h3>
          <p>Permite alternar entre modo claro y oscuro usando contexto de React.</p>
          <p><strong>Tecnologías:</strong> React (CDN), useContext</p>
          <a href="/proyectos/context/index.html" className="btn" target="_blank">Ver demo</a>
        </div>

        <div className="project-card">
          <h3>Optimización con useCallback</h3>
          <p>Ejercicio que demuestra memoización de funciones con React.</p>
          <p><strong>Tecnologías:</strong> React (CDN), useCallback</p>
          <a href="/proyectos/callback/index.html" className="btn" target="_blank">Ver demo</a>
        </div>

        <div className="project-card">
          <h3>Buscador con useMemo</h3>
          <p>Filtra usuarios de Breaking Bad de forma eficiente.</p>
          <p><strong>Tecnologías:</strong> React (CDN), useMemo</p>
          <a href="/proyectos/memo/index.html" className="btn" target="_blank">Ver demo</a>
        </div>

        <div className="project-card">
          <h3>Cronómetro con useRef</h3>
          <p>Cronómetro funcional con historial de sesiones guardadas.</p>
          <p><strong>Tecnologías:</strong> React (CDN), useRef</p>
          <a href="/proyectos/ref/index.html" className="btn" target="_blank">Ver demo</a>
        </div>

      </div>
    </section>
  );
}

export default Projects;
