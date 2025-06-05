import "./mapaches.css"; 
import "./Projects.css";
function Projects() {
  return (
    <section id="proyectos" className="section-container">
      <div className="section-header">
        <img src="/assets/mapache1.png" alt="Mapache" className="section-icon" />
        <div className="section-textos">
          <h2 className="outline-title">Proyectos</h2>
          <a
            href="https://github.com/Alejandrosiaus"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            Mi Perfil de GitHub
          </a>
          <p>Estos son los algunos de los proyectos realizados durante el curso, el resto los encontraras en mi perfil de Github</p>
        </div>
      </div>

      <div className="project-grid">
        <div className="project-card">
          <h3>GameBlades - Ecommerce</h3>
          <p>Tienda ficticia de espadas legendarias, con carrito, favoritos y sistema de rutas.</p>
          <p><strong>Tecnologías:</strong> React, Vite, useContext, useRef, localStorage</p>
          <a href="https://proyecto-e-commerce-chi.vercel.app/" className="btn" target="_blank" rel="noreferrer">Ver Proyecto</a>
        </div>

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
