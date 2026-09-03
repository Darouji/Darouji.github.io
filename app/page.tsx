const projects = [
  {
    id: "nexo",
    number: "01",
    name: "Nexo ERP/CRM",
    category: "CASO DE ESTUDIO · FULL STACK",
    copy: "Una plataforma para conectar inventario, compras, ventas, contactos y trazabilidad en un mismo flujo.",
    tags: ["React", "TypeScript", "Django", "PostgreSQL"],
    githubUrl: "https://github.com/Darouji/Darouji.github.io#proyectos",
    githubLabel: "Ver presentación en GitHub",
    kind: "erp",
  },
  {
    id: "clarity",
    number: "02",
    name: "Clarity Software",
    category: "PROYECTO ACADÉMICO · FLUTTER",
    copy: "Un espacio compartido para que equipos y clientes puedan seguir proyectos, hitos y documentación.",
    tags: ["Flutter", "Dart", "Firebase"],
    githubUrl: "https://github.com/Darouji/Clarity_Software",
    githubLabel: "Ver repositorio",
    kind: "clarity",
  },
];

const process = [
  { number: "01", title: "Entender", text: "Escuchar, levantar necesidades y traducir problemas en requerimientos concretos." },
  { number: "02", title: "Dar estructura", text: "Organizar el contexto, investigar con fuentes confiables y definir flujos antes de implementar." },
  { number: "03", title: "Construir", text: "Desarrollar por módulos, revisar las propuestas de IA y mantener coherencia en la interfaz." },
  { number: "04", title: "Comprobar", text: "Probar comportamientos, revisar cambios y documentar límites antes de dar algo por terminado." },
];

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path fill="currentColor" d="M12 .7A11.5 11.5 0 0 0 8.36 23.1c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.4-1.27.74-1.56-2.57-.29-5.27-1.28-5.27-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.75 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.71 5.39-5.29 5.68.42.36.79 1.06.79 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

function ArrowIcon() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>

      <header className="site-header">
        <div className="wrap header-inner">
          <a className="wordmark" href="#inicio" aria-label="Fabián García, inicio">FG<span>.</span></a>
          <nav aria-label="Navegación principal">
            <a href="#proyectos">Proyectos</a>
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#proceso">Proceso</a>
          </nav>
          <a className="header-github" href="https://github.com/Darouji" target="_blank" rel="noreferrer">
            <GitHubIcon /><span>GitHub</span><ArrowIcon />
          </a>
        </div>
      </header>

      <main id="contenido">
        <section className="hero wrap" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> DESARROLLADOR JUNIOR · ANTOFAGASTA, CHILE</p>
            <h1>Entender el problema.<br />Construir <em>claridad.</em></h1>
            <p className="hero-description">Diseño y desarrollo interfaces y sistemas que hacen más simple el trabajo. Me interesa conectar las necesidades de las personas con soluciones bien pensadas.</p>
            <div className="hero-actions">
              <a className="button primary" href="#proyectos">Explorar proyectos <span aria-hidden="true">↓</span></a>
              <a className="button ghost" href="https://github.com/Darouji" target="_blank" rel="noreferrer"><GitHubIcon /> Visitar GitHub <ArrowIcon /></a>
            </div>
          </div>

          <aside className="identity-panel" aria-label="Identidad profesional de Fabián García">
            <div className="panel-head"><span>IDENTIDAD / 001</span><span className="live-label">ONLINE</span></div>
            <div className="identity-mark"><span>FG</span><i>.</i></div>
            <div className="identity-role">
              <span>FRONTEND</span><span>FULL STACK</span><span>ANÁLISIS FUNCIONAL</span>
            </div>
            <div className="panel-foot"><span>23.6509° S</span><span>70.3975° O</span><span>CL / 2026</span></div>
          </aside>
        </section>

        <div className="signal-band" aria-label="Áreas de interés">
          <div className="wrap">
            <span>Frontend &amp; full stack</span>
            <span>Análisis funcional</span>
            <span>Experiencia de usuario</span>
            <span>IA con criterio humano</span>
          </div>
        </div>

        <section className="projects wrap section" id="proyectos">
          <div className="section-heading">
            <div>
              <p className="eyebrow">TRABAJO SELECCIONADO / 02</p>
              <h2>Proyectos que empiezan<br />por entender el problema.</h2>
            </div>
            <p>Casos reales y académicos presentados con alcance, decisiones y límites claros.</p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" id={project.id} key={project.id}>
                <div className={`project-visual ${project.kind}`} aria-label={`Representación conceptual de ${project.name}`}>
                  <div className="visual-grid" aria-hidden="true" />
                  {project.kind === "erp" ? (
                    <div className="erp-screen">
                      <div className="screen-top"><b>nexo<span>.</span></b><small>PANEL OPERATIVO</small><i /></div>
                      <div className="screen-layout">
                        <div className="screen-nav"><span className="active">Resumen</span><span>Inventario</span><span>Compras</span><span>Ventas</span></div>
                        <div className="screen-main">
                          <small>RESUMEN / HOY</small><h3>Todo, conectado.</h3>
                          <div className="metrics"><div><span>Productos</span><strong>15</strong></div><div><span>Movimientos</span><strong>33</strong></div><div><span>Alertas</span><strong>02</strong></div></div>
                          <div className="chart">{[42, 67, 51, 78, 61, 91, 74, 100].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="clarity-screen">
                      <div className="clarity-top"><b>clarity<span>.</span></b><small>PROYECTO DEMO</small></div>
                      <h3>Cada etapa,<br />más clara.</h3>
                      <div className="kanban">
                        <div><small>PENDIENTE</small><span>Documentación</span><span>Revisión visual</span></div>
                        <div><small>EN CURSO</small><span className="active-card">Prototipo móvil</span></div>
                        <div><small>LISTO</small><span>Flujo de hitos</span><span>Acceso por rol</span></div>
                      </div>
                    </div>
                  )}
                  <span className="visual-caption">VISTA CONCEPTUAL / DATOS FICTICIOS</span>
                </div>

                <div className="project-info">
                  <div className="project-meta"><span>{project.category}</span><span>/{project.number}</span></div>
                  <h3>{project.name}</h3>
                  <p>{project.copy}</p>
                  <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-actions">
                    <a className="github-link" href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`${project.githubLabel}: ${project.name}`}>
                      <GitHubIcon /><span>{project.githubLabel}</span><ArrowIcon />
                    </a>
                  </div>
                  <details className="case-study">
                    <summary>Leer el caso completo <span aria-hidden="true">+</span></summary>
                    {project.kind === "erp" ? (
                      <div className="case-body">
                        <span className="case-status">CASO ANONIMIZADO · CÓDIGO PRIVADO</span>
                        <h4>Unir la operación y conservar la trazabilidad.</h4>
                        <p>Durante mi práctica profesional diseñé un MVP para reunir procesos que se gestionaban por separado: contactos, inventario, compras, ventas y documentación.</p>
                        <h5>MI APORTE</h5>
                        <p>Levantamiento de requerimientos, diseño de flujos, desarrollo de API e interfaz, componentes reutilizables y validación del comportamiento.</p>
                        <ul><li>Kardex y auditoría para seguir movimientos y cambios.</li><li>Transacciones e idempotencia en operaciones críticas.</li><li>Filtros y paginación procesados en servidor.</li></ul>
                        <p className="case-note">El repositorio público documenta arquitectura y aprendizajes sin exponer código, datos ni material de terceros.</p>
                      </div>
                    ) : (
                      <div className="case-body">
                        <span className="case-status">PROTOTIPO · PROYECTO ACADÉMICO</span>
                        <h4>El avance de un proyecto, a la vista.</h4>
                        <p>Aplicación académica creada en CEDUC UCN para ofrecer a clientes y administradores un espacio compartido de seguimiento, comunicación y documentación.</p>
                        <h5>MI APORTE</h5>
                        <p>Pantallas y componentes, modelos y servicios para proyectos e hitos, vistas según rol e integración con Firebase.</p>
                        <ul><li>Vistas de proyectos, Kanban, hitos y línea de tiempo.</li><li>Autenticación, chat y archivos adjuntos.</li><li>Actualizaciones mediante streams de Firestore.</li></ul>
                        <p className="case-note">Es un prototipo académico. Sus tareas pendientes y límites técnicos están documentados en GitHub.</p>
                      </div>
                    )}
                  </details>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about section" id="sobre-mi">
          <div className="wrap about-grid">
            <div className="profile-visual" aria-label="Monograma personal FG">
              <div className="profile-orbit"><span>FG<i>.</i></span></div>
              <div className="profile-data"><span>FABIÁN GARCÍA RÍOS</span><span>ANTOFAGASTA / CL</span></div>
            </div>
            <div className="about-copy">
              <p className="eyebrow">SOBRE MÍ / PERFIL</p>
              <h2>Me gusta mirar<br />el sistema completo.</h2>
              <p className="lead">Mi parte favorita de un proyecto empieza antes del código: entender cómo trabaja una persona, detectar lo que necesita y convertirlo en una experiencia clara.</p>
              <p>Soy Técnico en Computación e Informática, mención en Programación, formado en CEDUC UCN. Me enfoco en desarrollo frontend, full stack y análisis funcional. Mi experiencia previa en bodega también me acerca a los problemas de inventario, orden y trazabilidad.</p>
              <div className="about-actions">
                <a className="button primary" href="/cv-fabian-garcia-rios.pdf" download>Descargar currículum <span aria-hidden="true">↓</span></a>
                <a className="button ghost" href="https://github.com/Darouji" target="_blank" rel="noreferrer"><GitHubIcon /> GitHub <ArrowIcon /></a>
              </div>
            </div>
          </div>

          <div className="wrap capabilities">
            <div><span>01 / INTERFACES</span><p>React · TypeScript · Material UI<br />Flutter · Dart · HTML · CSS</p></div>
            <div><span>02 / SISTEMAS Y DATOS</span><p>Python · Django REST Framework<br />SQL · PostgreSQL · Firebase</p></div>
            <div><span>03 / CALIDAD</span><p>Git · GitHub Actions<br />Vitest · Pruebas Django · ESLint</p></div>
            <div><span>04 / CRITERIO</span><p>Requerimientos · Flujos de usuario<br />Reutilización · Documentación</p></div>
          </div>
        </section>

        <section className="process-section section" id="proceso">
          <div className="wrap">
            <div className="section-heading">
              <div><p className="eyebrow">CÓMO TRABAJO / PROCESO</p><h2>IA como apoyo.<br />Criterio propio en cada decisión.</h2></div>
              <p>ChatGPT Work · Codex · Deep Research<br />integrados en un proceso de revisión.</p>
            </div>
            <div className="process-grid">
              {process.map((step) => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="contact wrap section" id="contacto">
          <div className="contact-copy">
            <p className="eyebrow">CONTACTO / CANAL ABIERTO</p>
            <h2>El próximo proyecto<br />puede empezar aquí<span>.</span></h2>
            <p>Busco oportunidades junior en desarrollo frontend y full stack, con interés en trabajo remoto.</p>
          </div>
          <div className="contact-links">
            <a href="mailto:fabian.garcia18m@gmail.com"><span>Correo</span><strong>fabian.garcia18m@gmail.com</strong><ArrowIcon /></a>
            <a href="https://github.com/Darouji" target="_blank" rel="noreferrer"><span>GitHub</span><strong>@Darouji</strong><ArrowIcon /></a>
            <a href="https://www.linkedin.com/in/fabian-garcia-55641333b/" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>Fabián García Ríos</strong><ArrowIcon /></a>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer-inner"><span>© 2026 Fabián García Ríos</span><span>Hecho con intención. Revisado con criterio.</span><a href="#inicio">Volver arriba ↑</a></div>
      </footer>
    </>
  );
}