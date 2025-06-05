import "./Resume.css";
function Resume() {
  return (
    <section id="curriculum" className="section-container">
      <div className="section-header">
        <img src="/assets/mapache2.png" alt="Mapache" className="section-icon" />
        <div className="section-textos">
          <h2 className="outline-title">Curriculum</h2>
          <p>Puedes ver o descargar mi currículum acá:</p>
        </div>
      </div>

      <div className="pdf-container">
        <iframe
          src="/CV.pdf"
          width="100%"
          height="500px"
          title="Currículum PDF"
        ></iframe>
      </div>

      <a href="/CV.pdf" download className="btn">Descargar PDF</a>
    </section>
  );
}

export default Resume;
