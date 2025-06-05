function Resume() {
  return (
    <section id="curriculum">
      <h2 className="outline-title">Curriculum</h2>
      <p>Puedes ver o descargar mi curriculum aca:</p>

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
