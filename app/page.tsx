'use client'

import { useMemo, useState, type CSSProperties } from 'react'

const linkedinUrl = 'https://www.linkedin.com/in/gilberto-alejandro-monroy-morales-230a97265/'
const githubUrl = 'https://github.com/GilbertoMonroy67'
const whatsappUrl = 'https://api.whatsapp.com/send?phone=%2B525626628692&text=Hola%2C+me+gustar%C3%ADa+saber+m%C3%A1s+acerca+de+tus+servicios'

const skills = {
  'Core Backend .NET': ['C#', '.NET', 'ASP.NET', 'SQL'],
  'Soporte técnico': ['MySQL', 'Git', 'HTML5', 'CSS3', 'JavaScript'],
  'En práctica': ['ASP.NET MVC', 'Entity Framework', 'APIs REST'],
}

const certificateImages = '/certificates/'
const certificates = [
  ['Curso de Buenas Prácticas y Código Limpio en C#', 'C#, Clean Code, principios SOLID', 'buenas-practicas-codigo-limpio-csharp.jpg'],
  ['Curso Básico de Programación con C#', 'C#, sintaxis, POO', 'programacion-basica-csharp.jpg'],
  ['Curso de Pensamiento Lógico', 'Algoritmos y resolución de problemas', 'pensamiento-logico.png'],
  ['Algoritmos y diagramas de flujo', 'Algoritmos, pseudocódigo y diagramación', 'algoritmos-diagramas-de-flujo.jpeg'],
  ['Manejo de datos, estructuras y funciones', 'Datos, estructuras y funciones', 'manejo-de-datos-estructuras-funciones.jpg'],
  ['Funciones y estructuras de control', 'Condicionales, ciclos y lógica', 'funciones-estructuras-de-control.jpeg'],
  ['Lenguajes de programación', 'Fundamentos de programación', 'lenguajes-de-programacion.jpeg'],
  ['Curso de Bases de Datos con SQL', 'SQL, consultas y bases relacionales', 'bases-de-datos-sql.jpg'],
  ['Fundamentos de Bases de Datos', 'Modelado y conceptos de bases de datos', 'fundamentos-bases-de-datos.jpg'],
  ['Fundamentos de Ingeniería de Software', 'Ciclo de vida y fundamentos de software', 'fundamentos-ingenieria-de-software.jpg'],
  ['Curso básico de JavaScript', 'JavaScript y programación web', 'javascript-basico.jpeg'],
  ['Curso práctico de Frontend Developer', 'HTML5, CSS3 y frontend', 'frontend-developer.png'],
  ['Curso práctico de JavaScript', 'JavaScript práctico y DOM', 'javascript-practico.jpeg'],
  ['Curso de React.js', 'React, componentes y UI', 'react-js.png'],
  ['Curso de Webpack', 'Webpack y gestión de assets', 'webpack.png'],
  ['Introducción a la Terminal y Línea de Comandos', 'Terminal, CLI y productividad', 'terminal-linea-de-comandos.png'],
  ['Introducción a la Inteligencia Artificial', 'Conceptos y aplicaciones de IA', 'introduccion-inteligencia-artificial.png'],
  ['Introducción a Ciberseguridad', 'Prevención y fundamentos de seguridad', 'introduccion-ciberseguridad.png'],
].map(([title, skill, image]) => ({ title, skill, image: `${certificateImages}${image}` }))

const technologyDetails: Record<string, { logo: string; role: string }> = {
  'C#': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg', role: 'Lógica de negocio y POO' },
  '.NET': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg', role: 'Desarrollo backend' },
  'ASP.NET': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg', role: 'Aplicaciones web MVC' },
  SQL: { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', role: 'Persistencia y consultas' },
  MySQL: { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', role: 'Bases de datos relacionales' },
  Git: { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', role: 'Control de versiones' },
  HTML5: { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', role: 'Estructura semántica' },
  CSS3: { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', role: 'Diseño y maquetación' },
  JavaScript: { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', role: 'Interactividad y APIs' },
}

const technologyLogos: Record<string, string> = {
  HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
  '.NET': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg',
  'REST API': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
  Aprendizaje: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  Iteración: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  'ASP.NET': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg',
  'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  Webpack: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  npm: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg',
}

const repo = (name: string) => `https://github.com/GilbertoMonroy67/${name}`
const pages = (name: string) => `https://gilbertomonroy67.github.io/${name}/`

// `demo` solo existe para los proyectos publicados en GitHub Pages; el resto enlaza a su repositorio.
type Project = { title: string; type: string; problem: string; description: string; stack: string[]; repo: string; demo?: string; image?: string }

const projects = ([
  { title: 'Heros Hunter', type: 'Aplicación web', problem: 'Ayuda a descubrir y explorar héroes rápidamente.', description: 'Interfaz visual con selección de personajes y navegación clara.', stack: ['HTML', 'CSS', 'JavaScript'], repo: repo('herosHunter.github.io'), demo: pages('herosHunter.github.io'), image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HerosHunter-EVZMRqmP0XUIJhrTNIAHpMqWHxrDDD.png' },
  { title: 'Sistema de autenticación ASP.NET MVC + SQL', type: 'Aplicación web', problem: 'Centraliza el acceso de usuarios con una experiencia sencilla.', description: 'Pantalla de login con arquitectura MVC, base de datos SQL y despliegue contenedorizado.', stack: ['C#', '.NET', 'ASP.NET'], repo: repo('Historial-De-Usuarios'), image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Proyecto%20Login%20MVC%20Docker-htWrdZfrxNCIU9pihfo0FE96CU4XNU.png' },
  { title: 'Yard Sale', type: 'Frontend e-commerce', problem: 'Permite visualizar productos de una tienda online de forma ordenada.', description: 'Catálogo responsive inspirado en un marketplace, con categorías y carrito.', stack: ['HTML', 'CSS', 'JavaScript'], repo: repo('yardSale.github.io'), demo: pages('yardSale.github.io'), image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/YardSale-UpcXUYU1F6HMU9L06djwdMbBwwlh2t.png' },
  { title: 'Task Manager', type: 'Productividad', problem: 'Ayuda a organizar tareas pendientes desde una interfaz mínima.', description: 'Gestor de tareas con modo claro/oscuro y flujo directo para añadir actividades.', stack: ['JavaScript', 'HTML', 'CSS'], repo: repo('ToDoJavaScript_Manipulacion-del-DOM'), demo: pages('ToDoJavaScript_Manipulacion-del-DOM'), image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ToDoJavaScript-c0dSwELSiKz3DyZOD2So6RiUkLKeBF.png' },
  { title: 'ToDo Clean Code', type: 'Consola C#', problem: 'Practica organización de código y buenas prácticas en una app real.', description: 'Aplicación de tareas y usuarios enfocada en legibilidad y lógica de negocio.', stack: ['C#', '.NET'], repo: repo('curso-codigo-limpio-csharp-con-DB'), image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ToDo_Buenas_Practicas_Y_Codigo_Limpio_Csharp-vvDUNUOrwKUX7GIr3n6DOqZdQdyX8w.png' },
  { title: 'ChatBot', type: 'Consola C++', problem: 'Ofrece respuestas rápidas para acciones frecuentes de un usuario.', description: 'Chatbot de consola con menú, hora, chistes y despedida.', stack: ['C++'], repo: repo('Chatbot'), image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatBot-fwradfuqLlz5zWKCLaIiSf1Qhbjzy0.png' },
  { title: 'Calculadora de ecuaciones', type: 'Consola C++', problem: 'Resuelve ecuaciones y sistemas desde un flujo guiado.', description: 'Calculadora para ecuaciones lineales, sistemas de dos variables y ecuaciones cuadráticas.', stack: ['C++'], repo: repo('Calculadora'), image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Calculadora-tgMmvm9TCwbSnLggBY6nr52gOLPwqp.png' },
  { title: 'Gato Tic-Tac-Toe', type: 'Juego', problem: 'Convierte un juego clásico en una experiencia interactiva de consola.', description: 'Juego para dos participantes con tablero, turnos y validación de jugadas.', stack: ['C#', '.NET'], repo: githubUrl, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jugo%20gato-XzYg5ZbkYcUBOElQebFoQfTKI3wERY.png' },
  { title: 'DAHS Cantante', type: 'Landing page', problem: 'Da a un cantante y animador de eventos una vitrina para que lo contraten.', description: 'Landing con servicios, música en vivo para eventos y llamados a la acción para contacto.', stack: ['HTML', 'TypeScript', 'JavaScript'], repo: repo('LandingPageDAHS'), demo: pages('LandingPageDAHS') },
  { title: 'CineWork', type: 'Interfaz web', problem: 'Agiliza el trabajo de los vendedores en las taquillas de cine.', description: 'Diseño de interfaz más simple para quienes operan las máquinas de venta en salas de cine.', stack: ['HTML', 'CSS'], repo: repo('CineWork.github.io'), demo: pages('CineWork.github.io') },
  { title: 'Landing Rick & Morty', type: 'Consumo de APIs', problem: 'Muestra contenido actualizado sin editar la página a mano.', description: 'Landing que carga los últimos videos de YouTube de forma asíncrona con fetch y async/await.', stack: ['HTML', 'CSS', 'JavaScript'], repo: repo('async-landing.github.io'), demo: pages('async-landing.github.io') },
  { title: 'Curso Webpack + React', type: 'Optimización frontend', problem: 'Reduce el peso y mejora la carga de una aplicación React.', description: 'Configuración de Webpack para empaquetar, optimizar y desplegar una app hecha con React.', stack: ['React', 'Webpack', 'JavaScript'], repo: repo('Curso-Webpack-React.github.io'), demo: pages('Curso-Webpack-React.github.io') },
  { title: 'random-number-msg', type: 'Paquete npm', problem: 'Genera mensajes con un número aleatorio listos para reutilizar.', description: 'Paquete de JavaScript publicado para practicar la creación y distribución de módulos en npm.', stack: ['JavaScript', 'npm'], repo: repo('random-number-msg'), demo: pages('random-number-msg') },
  { title: 'Juego de la ventana', type: 'Juego C++', problem: 'Convierte una historia de terror en un juego de decisiones.', description: 'Aventura de consola: resiste de las 11:00 p.m. a las 5:00 a.m. cuidando tu cordura ante eventos aleatorios.', stack: ['C++'], repo: repo('Juego-de-la-ventana') },
  { title: 'Programación estructurada II', type: 'Consola C++', problem: 'Resuelve problemas cotidianos con programas estructurados y documentados.', description: 'Cajero automático, calculadora, mini tienda, menú de opciones y promedio de calificaciones con diagramas.', stack: ['C++'], repo: repo('Programacion-estructurada-II') },
  { title: 'Asincronismo con JavaScript', type: 'Ejercicios Node.js', problem: 'Practica cómo manejar peticiones que tardan en responder.', description: 'Retos con callbacks, Promises y async/await consumiendo APIs desde Node.js.', stack: ['JavaScript', 'Node.js'], repo: repo('Asincrinismo_con_JavaScript') },
  { title: 'Curso de ECMAScript', type: 'Ejercicios JavaScript', problem: 'Recorre las novedades del lenguaje versión por versión.', description: 'Ejemplos de ES6 a ES12: optional chaining, nullish, BigInt, flatMap y más.', stack: ['JavaScript', 'Node.js'], repo: repo('curso-ecmaScript') },
  { title: 'Ejercicio switch', type: 'Consola C++', problem: 'Elige acciones a partir de la opción que ingresa el usuario.', description: 'Programa de consola que practica la estructura de control switch.', stack: ['C++'], repo: repo('Ejercicio-switch') },
  { title: 'Ensamblador', type: 'Bajo nivel', problem: 'Explica cómo trabaja el procesador por debajo de los lenguajes de alto nivel.', description: 'Primeros ejercicios en lenguaje ensamblador del curso de arquitectura de computadoras.', stack: ['Assembly'], repo: repo('Ensamblador') },
] satisfies Project[]).map((project, index): Project & { number: string } => ({ ...project, number: String(index + 1).padStart(2, '0') }))

const searchItems = [
  { label: 'Sobre mí', id: 'sobre-mi' }, { label: 'Formación', id: 'formacion' }, { label: 'Proyectos', id: 'proyectos' }, { label: 'Habilidades', id: 'habilidades' }, { label: 'Tecnologías', id: 'tecnologias' }, { label: 'Certificados', id: 'certificados' }, { label: 'Contacto', id: 'contacto' },
  ...projects.map((project) => ({ label: project.title, id: 'proyectos' })),
]

function Arrow() { return <span aria-hidden="true" className="arrow">→</span> }
function GitHubMark() { return <span aria-hidden="true" className="github-mark">GH</span> }

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [showAll, setShowAll] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  // En modo carrusel la lista se duplica para que el desplazamiento continuo no tenga saltos.
  const carouselProjects = showAll ? projects : [...projects, ...projects]
  const suggestions = useMemo(() => query ? searchItems.filter((item) => item.label.toLowerCase().includes(query.toLowerCase())).slice(0, 5) : [], [query])
  const goTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setQuery('') }

  return <main>
    <nav className="nav shell" aria-label="Navegación principal">
      <a className="brand" href="#inicio" aria-label="Ir al inicio"><span>GM</span> Gilberto Monroy</a>
      <div className="search-wrap"><label className="sr-only" htmlFor="site-search">Buscar en el portfolio</label><input id="site-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar sección o proyecto..." autoComplete="off" />{query && suggestions.length > 0 && <div className="suggestions">{suggestions.map((item) => <button key={`${item.label}-${item.id}`} onClick={() => goTo(item.id)}>{item.label}<Arrow /></button>)}</div>}{query && suggestions.length === 0 && <p className="search-error" role="alert">No encontramos “{query}”. Prueba con proyectos o habilidades.</p>}</div>
      <button className="menu-button" aria-expanded={menuOpen} aria-controls="nav-links" onClick={() => setMenuOpen(!menuOpen)}>Menú</button>
      <div id="nav-links" className={`nav-links ${menuOpen ? 'is-open' : ''}`}><a href="#sobre-mi">Sobre mí</a><a href="#proyectos">Proyectos</a><a href="#habilidades">Habilidades</a><a href="#tecnologias">Tecnologías</a><a href="#certificados">Certificados</a><a href="#contacto">Contacto</a><a className="github-button" href={githubUrl} target="_blank" rel="noreferrer"><GitHubMark /> GitHub</a></div>
    </nav>

    <section id="inicio" className="hero shell"><div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> Disponible para oportunidades junior</p><h1>Construyo soluciones digitales con <em>C# y .NET.</em></h1><p className="hero-text">Soy Gilberto Monroy, desarrollador backend junior en formación. Me gusta convertir ideas en productos funcionales, claros y bien estructurados.</p><div className="actions"><a className="button button-primary" href="#proyectos">Ver mis proyectos <Arrow /></a><a className="button button-ghost" href="/cv-gilberto-monroy.pdf" download>Descargar CV <span aria-hidden="true" className="arrow">↓</span></a></div><div className="social-row"><a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a href={githubUrl} target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <Arrow /></a></div></div><div className="hero-card" aria-label="Perfil de desarrollador"><div className="card-top"><span>PROFILE / 2026</span><span>01 — 04</span></div><div className="monogram">GM</div><div className="card-bottom"><strong>Gilberto<br />Monroy</strong><span>Backend<br />Developer</span></div></div></section>
    <div className="ticker" aria-hidden="true"><span>C#</span><span>.NET</span><span>ASP.NET CORE</span><span>SQL</span><span>GIT</span><span>APIs REST</span></div>

    <section id="sobre-mi" className="section shell split-section"><div><p className="section-label">01 / Sobre mí</p><h2>Aprender. Construir.<br /><em>Mejorar.</em></h2></div><div className="section-content"><p className="lead">Estoy buscando mi primera oportunidad profesional como estudiante de Ingeniería y desarrollador de software.</p><p>Quiero integrarme a un equipo donde pueda aportar, aprender de profesionales y crecer construyendo productos que importan. Mi enfoque está en backend con C# y .NET; disfruto entender problemas y resolverlos paso a paso.</p><div className="mini-facts"><div><strong>01</strong><span>Enfoque<br />Backend</span></div><div><strong>02</strong><span>Aprendizaje<br />constante</span></div><div><strong>03</strong><span>Trabajo<br />en equipo</span></div></div></div></section>
    <section id="formacion" className="section shell education"><p className="section-label">02 / Formación</p><div className="education-row"><div><h3>Ingeniería / Desarrollo de Software</h3><p>Formación técnica y práctica en programación, bases de datos y desarrollo web.</p></div><span className="date">En curso</span></div><div className="education-row"><div><h3>Proyectos personales</h3><p>Construcción de aplicaciones para convertir conocimientos en experiencia demostrable.</p></div><span className="date">2024 — hoy</span></div></section>

    <section id="proyectos" className="section shell projects"><div className="section-heading"><div><p className="section-label">03 / Proyectos</p><h2>Trabajo que habla<br /><em>por mí.</em></h2></div><button className="text-link view-all" onClick={() => setShowAll(!showAll)}>{showAll ? 'Ver carrusel' : 'Ver todo'} <Arrow /></button></div><div className={showAll ? 'project-list' : `carousel ${isPaused ? 'is-paused' : ''}`}><div className="project-grid" style={showAll ? undefined : { '--carousel-duration': `${projects.length * 11}s` } as CSSProperties}>{carouselProjects.map((project, index) => { const isClone = index >= projects.length; return <article className="project-card" key={`${project.number}-${index}`} aria-hidden={isClone || undefined} inert={isClone || undefined}><div className="project-image-wrap">{project.image ? <img src={project.image} alt={`Captura de ${project.title}`} /> : <div className="project-placeholder" aria-hidden="true"><span>{project.number}</span><strong>{project.title}</strong></div>}<div className="project-overlay"><span>Problema que resuelve</span><p>{project.problem}</p><span>Tecnologías</span><div className="tech-logos">{project.stack.map((item) => <span key={item} title={item}>{technologyLogos[item] ? <img src={technologyLogos[item]} alt="" /> : null}{item}</span>)}</div><a className="overlay-link" href={project.demo ?? project.repo} target="_blank" rel="noreferrer">{project.demo ? 'Ver en GitHub Pages ↗' : 'Ver código en GitHub ↗'}</a></div></div><div className="project-number">{project.number}</div><div className="project-meta">{project.type}</div><h3>{project.title}</h3><p>{project.description}</p><a className="project-link" href={project.repo} target="_blank" rel="noreferrer">Repositorio en GitHub <Arrow /></a></article> })}</div></div>{!showAll && <div className="carousel-controls"><button onClick={() => setIsPaused(!isPaused)} aria-pressed={isPaused} aria-label={isPaused ? 'Reanudar carrusel' : 'Pausar carrusel'}>{isPaused ? '▶' : '❚❚'}</button><span>{projects.length} proyectos · {isPaused ? 'Pausado' : 'Pasa el cursor para detener'}</span></div>}</section>
    <section id="habilidades" className="section shell skills"><p className="section-label">04 / Habilidades</p><div className="skills-grid">{Object.entries(skills).map(([category, items]) => <div className="skill-group" key={category}><h3>{category}</h3><ul>{items.map((item) => <li key={item}>{item}{['MySQL', 'Entity Framework', 'JavaScript', 'ASP.NET MVC', 'APIs REST'].includes(item) && <small>En aprendizaje</small>}</li>)}</ul></div>)}</div></section>
    <section id="tecnologias" className="section shell technologies"><div className="section-heading"><div><p className="section-label">05 / Stack técnico</p><h2>Herramientas para<br /><em>construir.</em></h2></div><p className="section-intro">Tecnologías que uso para transformar problemas en soluciones funcionales.</p></div><div className="technology-grid">{Object.entries(technologyDetails).map(([name, detail]) => <article className="technology-card" key={name}><img src={detail.logo} alt="" /><div><h3>{name}</h3><p>{detail.role}</p></div></article>)}</div></section>
    <section id="certificados" className="section shell certificates"><div className="section-heading"><div><p className="section-label">06 / Certificados</p><h2>Aprendizaje<br /><em>comprobable.</em></h2></div><span className="certificate-count">{certificates.length} cursos con evidencia visual</span></div><div className="certificate-grid">{certificates.map((certificate, index) => <article className="certificate-card" key={certificate.title} tabIndex={0}><div className="certificate-preview"><img src={certificate.image} alt={`Imagen del certificado ${certificate.title}`} /><div className="certificate-overlay"><span>Habilidad aprendida</span><p>{certificate.skill}</p></div></div><span>{String(index + 1).padStart(2, '0')}</span><h3>{certificate.title}</h3><small>{certificate.skill}</small></article>)}</div></section>
    <section id="contacto" className="contact shell"><div><p className="section-label">07 / Contacto</p><h2>¿Construimos algo<br /><em>juntos?</em></h2></div><div className="contact-copy"><p>Estoy abierto a conversar sobre oportunidades junior, proyectos y colaboraciones.</p><a className="email-link" href="mailto:gilbertoalejandromonroymorales@gmail.com">gilbertoalejandromonroymorales@gmail.com <Arrow /></a><div className="social-row"><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <Arrow /></a><a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a href={githubUrl} target="_blank" rel="noreferrer">GitHub <Arrow /></a></div></div></section>
    <footer className="footer shell"><span>© 2026 Gilberto Monroy</span><span>Hecho con intención.</span><a href="#inicio">Volver arriba ↑</a></footer>
  </main>
}