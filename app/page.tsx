'use client'

import { useMemo, useState, type CSSProperties, type ReactNode } from 'react'
import { ArrowRight, ArrowUpRight, Award, BookOpen, Boxes, Braces, Briefcase, Database, Download, FolderGit2, GitBranch, GraduationCap, Layers, Mail, MapPin, Menu, MessageCircle, Pause, Play, Search, Server, ShieldCheck, Terminal, Workflow, X } from 'lucide-react'

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

const services = [
  { icon: Server, title: 'APIs REST', text: 'Endpoints con ASP.NET que exponen datos de forma clara, validada y consistente.' },
  { icon: Braces, title: 'Lógica de negocio en C#', text: 'Clases, servicios y reglas separadas por responsabilidad aplicando POO.' },
  { icon: Database, title: 'Bases de datos SQL', text: 'Modelado relacional, consultas y persistencia con SQL y Entity Framework.' },
  { icon: Layers, title: 'Arquitectura MVC', text: 'Aplicaciones web organizadas en modelos, vistas y controladores.' },
  { icon: ShieldCheck, title: 'Clean Code y SOLID', text: 'Código legible y mantenible que otros desarrolladores pueden entender.' },
  { icon: GitBranch, title: 'Control de versiones', text: 'Flujo con ramas, commits descriptivos y repositorios públicos en GitHub.' },
]

const facts = [
  { value: String(projects.length), label: 'Proyectos en GitHub', icon: FolderGit2 },
  { value: String(certificates.length), label: 'Cursos certificados', icon: Award },
  { value: '4', label: 'Lenguajes: C#, C++, JS, SQL', icon: Terminal },
  { value: '2024', label: 'Construyendo desde', icon: Workflow },
]

const principles = [
  { icon: ShieldCheck, label: 'Código limpio' },
  { icon: Server, label: 'APIs bien diseñadas' },
  { icon: Database, label: 'Datos consistentes' },
  { icon: BookOpen, label: 'Aprendizaje continuo' },
]

const searchItems = [
  { label: 'Sobre mí', id: 'sobre-mi' }, { label: 'Servicios', id: 'servicios' }, { label: 'Formación', id: 'formacion' }, { label: 'Proyectos', id: 'proyectos' }, { label: 'Habilidades', id: 'habilidades' }, { label: 'Tecnologías', id: 'tecnologias' }, { label: 'Certificados', id: 'certificados' }, { label: 'Contacto', id: 'contacto' },
  ...projects.map((project) => ({ label: project.title, id: 'proyectos' })),
]

const navLinks = [['sobre-mi', 'Sobre mí'], ['servicios', 'Servicios'], ['proyectos', 'Proyectos'], ['habilidades', 'Stack'], ['certificados', 'Certificados'], ['contacto', 'Contacto']]

function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return <p className="section-label"><span>{index}</span> {children}</p>
}

function BrandIcon({ name }: { name: 'github' | 'linkedin' }) {
  const src = name === 'github' ? 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' : 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg'
  return <img className={`brand-icon brand-icon-${name}`} src={src} alt="" />
}

function CodeWindow() {
  return <div className="code-window" aria-label="Fragmento de código C# que describe al desarrollador">
    <div className="window-bar"><i /><i /><i /><span>Developer.cs</span></div>
    <pre><code>
      <span className="tok-kw">public class</span> <span className="tok-type">Developer</span>{'\n{\n    '}
      <span className="tok-kw">public string</span> Name <span className="tok-op">=&gt;</span> <span className="tok-str">&quot;Gilberto Monroy&quot;</span>;{'\n    '}
      <span className="tok-kw">public string</span> Role <span className="tok-op">=&gt;</span> <span className="tok-str">&quot;Backend Developer Jr.&quot;</span>;{'\n    '}
      <span className="tok-kw">public string</span>[] Stack <span className="tok-op">=&gt;</span> [<span className="tok-str">&quot;C#&quot;</span>, <span className="tok-str">&quot;.NET&quot;</span>, <span className="tok-str">&quot;SQL&quot;</span>];{'\n    '}
      <span className="tok-kw">public bool</span> OpenToWork <span className="tok-op">=&gt;</span> <span className="tok-kw">true</span>;{'\n}'}
    </code></pre>
  </div>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [showAll, setShowAll] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  // En modo carrusel la lista se duplica para que el desplazamiento continuo no tenga saltos.
  const carouselProjects = showAll ? projects : [...projects, ...projects]
  const suggestions = useMemo(() => query ? searchItems.filter((item) => item.label.toLowerCase().includes(query.toLowerCase())).slice(0, 5) : [], [query])
  const goTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setQuery(''); setMenuOpen(false) }

  return <main>
    <header className="site-header">
      <nav className="nav shell" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="Ir al inicio"><span className="brand-mark">&lt;GM /&gt;</span><span className="brand-text"><strong>Gilberto Monroy</strong><small>Backend Developer</small></span></a>
        <div className="search-wrap">
          <Search aria-hidden="true" size={15} />
          <label className="sr-only" htmlFor="site-search">Buscar en el portfolio</label>
          <input id="site-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar sección o proyecto..." autoComplete="off" />
          {query && suggestions.length > 0 && <div className="suggestions">{suggestions.map((item) => <button key={`${item.label}-${item.id}`} onClick={() => goTo(item.id)}>{item.label}<ArrowRight size={14} /></button>)}</div>}
          {query && suggestions.length === 0 && <p className="search-error" role="alert">No encontramos “{query}”. Prueba con proyectos o habilidades.</p>}
        </div>
        <button className="menu-button" aria-expanded={menuOpen} aria-controls="nav-links" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={18} /> : <Menu size={18} />}</button>
        <div id="nav-links" className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {navLinks.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="button button-primary button-small" href="#contacto" onClick={() => setMenuOpen(false)}>Contrátame</a>
        </div>
      </nav>
    </header>

    <section id="inicio" className="hero shell">
      <div className="hero-copy">
        <p className="status-pill"><span className="status-dot" /> Disponible para oportunidades junior</p>
        <p className="hero-hello">Hola, soy</p>
        <h1>Gilberto <span>Monroy</span></h1>
        <p className="hero-role">Backend Developer <b>·</b> C# / .NET</p>
        <p className="hero-text">Estudiante de Ingeniería especializado en backend. Diseño lógica de negocio, APIs y bases de datos con C#, ASP.NET y SQL, cuidando que el código sea claro, mantenible y fácil de escalar.</p>
        <div className="actions">
          <a className="button button-primary" href="#proyectos">Ver mis proyectos <ArrowRight size={16} /></a>
          <a className="button button-ghost" href="/cv-gilberto-monroy.pdf" download="CV_Gilberto_Monroy.pdf">Descargar CV <Download size={16} /></a>
        </div>
        <div className="social-row">
          <a href={githubUrl} target="_blank" rel="noreferrer"><BrandIcon name="github" /> GitHub</a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer"><BrandIcon name="linkedin" /> LinkedIn</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="profile-frame"><img src="/profile.jpg" alt="Fotografía de Gilberto Monroy" /></div>
        <p className="api-badge"><span className="method">GET</span> /api/gilberto <span className="ok">200 OK</span></p>
        <CodeWindow />
      </div>
    </section>

    <div className="tech-strip" aria-label="Tecnologías principales">
      <div className="shell tech-strip-inner">{['C#', '.NET', 'ASP.NET', 'SQL', 'MySQL', 'Git', 'JavaScript'].map((name) => <span key={name}><img src={technologyDetails[name].logo} alt="" />{name}</span>)}</div>
    </div>

    <section id="sobre-mi" className="section shell about">
      <div className="about-copy">
        <SectionLabel index="01">sobre-mí</SectionLabel>
        <h2>Construyo el lado del software <em>que no se ve</em>, pero lo sostiene todo.</h2>
        <p className="lead">Estoy buscando mi primera oportunidad profesional como desarrollador backend.</p>
        <p>Quiero integrarme a un equipo donde pueda aportar, aprender de profesionales y crecer construyendo productos que importan. Disfruto entender un problema, modelar sus datos y resolverlo paso a paso con C# y .NET.</p>
        <ul className="about-points">
          <li><ShieldCheck size={16} /> Enfoque en código limpio y SOLID</li>
          <li><Database size={16} /> Modelado y consultas SQL</li>
          <li><Workflow size={16} /> Aprendizaje constante</li>
          <li><Boxes size={16} /> Trabajo en equipo</li>
        </ul>
        <a className="button button-primary" href="/cv-gilberto-monroy.pdf" download="CV_Gilberto_Monroy.pdf">Descargar CV <Download size={16} /></a>
      </div>
      <aside className="info-card" aria-label="Datos de contacto">
        <div><MapPin size={18} /><span><small>Ubicación</small>México · Remoto o presencial</span></div>
        <div><Mail size={18} /><span><small>Email</small><a href="mailto:gilbertoalejandromonroymorales@gmail.com">gilbertoalejandromonroymorales@gmail.com</a></span></div>
        <div><GraduationCap size={18} /><span><small>Formación</small>Ingeniería / Desarrollo de Software</span></div>
        <div><Briefcase size={18} /><span><small>Busco</small>Primer puesto como Backend Developer Jr.</span></div>
      </aside>
    </section>

    <section id="servicios" className="section shell">
      <div className="section-heading centered">
        <SectionLabel index="02">servicios</SectionLabel>
        <h2>Lo que puedo aportar <em>a tu equipo</em></h2>
      </div>
      <div className="service-grid">{services.map(({ icon: Icon, title, text }) => <article className="service-card" key={title}><span className="service-icon"><Icon size={22} /></span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="shell facts" aria-label="Datos en cifras">
      {facts.map(({ value, label, icon: Icon }) => <div className="fact-card" key={label}><Icon size={22} /><strong>{value}</strong><span>{label}</span></div>)}
    </section>

    <section id="formacion" className="section shell education">
      <SectionLabel index="03">formación</SectionLabel>
      <div className="timeline">
        <div className="timeline-item"><span className="date">En curso</span><div><h3>Ingeniería / Desarrollo de Software</h3><p>Formación técnica y práctica en programación, bases de datos y desarrollo web.</p></div></div>
        <div className="timeline-item"><span className="date">2024 — hoy</span><div><h3>Proyectos personales</h3><p>Construcción de aplicaciones para convertir conocimientos en experiencia demostrable.</p></div></div>
      </div>
    </section>

    <section id="proyectos" className="section shell projects">
      <div className="section-heading">
        <div>
          <SectionLabel index="04">proyectos</SectionLabel>
          <h2>Trabajo que habla <em>por mí</em></h2>
          <p className="endpoint"><span className="method">GET</span> /api/projects <span className="ok">200 OK</span> <span className="muted">· {projects.length} resultados</span></p>
        </div>
        <button className="button button-ghost button-small" onClick={() => setShowAll(!showAll)}>{showAll ? 'Ver carrusel' : 'Ver todos'} <ArrowRight size={14} /></button>
      </div>
      <div className={showAll ? 'project-list' : `carousel ${isPaused ? 'is-paused' : ''}`}>
        <div className="project-grid" style={showAll ? undefined : { '--carousel-duration': `${projects.length * 11}s` } as CSSProperties}>
          {carouselProjects.map((project, index) => {
            const isClone = index >= projects.length
            return <article className="project-card" key={`${project.number}-${index}`} aria-hidden={isClone || undefined} inert={isClone || undefined}>
              <div className="project-image-wrap">
                {project.image ? <img src={project.image} alt={`Captura de ${project.title}`} /> : <div className="project-placeholder" aria-hidden="true"><div className="window-bar"><i /><i /><i /></div><code>&gt; {project.title.toLowerCase().replaceAll(' ', '-')}</code><strong>{project.title}</strong></div>}
                <div className="project-overlay">
                  <span>Problema que resuelve</span>
                  <p>{project.problem}</p>
                  <span>Tecnologías</span>
                  <div className="tech-logos">{project.stack.map((item) => <span key={item} title={item}>{technologyLogos[item] ? <img src={technologyLogos[item]} alt="" /> : null}{item}</span>)}</div>
                  <a className="overlay-link" href={project.demo ?? project.repo} target="_blank" rel="noreferrer">{project.demo ? 'Ver en GitHub Pages' : 'Ver código en GitHub'} <ArrowUpRight size={14} /></a>
                </div>
              </div>
              <div className="project-meta"><span>{project.number}</span>{project.type}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              <a className="project-link" href={project.repo} target="_blank" rel="noreferrer"><BrandIcon name="github" /> Repositorio <ArrowUpRight size={14} /></a>
            </article>
          })}
        </div>
      </div>
      {!showAll && <div className="carousel-controls"><button onClick={() => setIsPaused(!isPaused)} aria-pressed={isPaused} aria-label={isPaused ? 'Reanudar carrusel' : 'Pausar carrusel'}>{isPaused ? <Play size={14} /> : <Pause size={14} />}</button><span>{projects.length} proyectos · {isPaused ? 'Pausado' : 'Pasa el cursor para detener'}</span></div>}
    </section>

    <section id="habilidades" className="section shell skills-section">
      <div className="skills-panel">
        <SectionLabel index="05">habilidades</SectionLabel>
        <h2>Mi stack <em>backend</em></h2>
        <div className="skills-list">{Object.entries(skills).map(([category, items]) => <div className="skill-group" key={category}><h3>{category}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div>
      </div>
      <div id="tecnologias" className="tech-panel">
        <SectionLabel index="06">tecnologías</SectionLabel>
        <h2>Herramientas <em>que uso</em></h2>
        <div className="technology-grid">{Object.entries(technologyDetails).map(([name, detail]) => <article className="technology-card" key={name}><img src={detail.logo} alt="" /><div><h3>{name}</h3><p>{detail.role}</p></div></article>)}</div>
      </div>
    </section>

    <section id="certificados" className="section shell certificates">
      <div className="section-heading">
        <div><SectionLabel index="07">certificados</SectionLabel><h2>Aprendizaje <em>comprobable</em></h2></div>
        <span className="certificate-count">{certificates.length} cursos con evidencia visual</span>
      </div>
      <div className="certificate-grid">{certificates.map((certificate, index) => <article className="certificate-card" key={certificate.title} tabIndex={0}><div className="certificate-preview"><img src={certificate.image} alt={`Imagen del certificado ${certificate.title}`} loading="lazy" /><div className="certificate-overlay"><span>Habilidad aprendida</span><p>{certificate.skill}</p></div></div><span className="certificate-number">{String(index + 1).padStart(2, '0')}</span><h3>{certificate.title}</h3><small>{certificate.skill}</small></article>)}</div>
    </section>

    <section id="contacto" className="section shell contact">
      <div className="contact-card">
        <SectionLabel index="08">contacto</SectionLabel>
        <h2>¿Construimos algo <em>juntos?</em></h2>
        <p>Estoy abierto a conversar sobre oportunidades junior, proyectos y colaboraciones.</p>
        <ul className="contact-list">
          <li><Mail size={18} /><a href="mailto:gilbertoalejandromonroymorales@gmail.com">gilbertoalejandromonroymorales@gmail.com</a></li>
          <li><MessageCircle size={18} /><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a></li>
          <li><BrandIcon name="linkedin" /><a href={linkedinUrl} target="_blank" rel="noreferrer">linkedin.com/in/gilberto-alejandro-monroy-morales</a></li>
          <li><BrandIcon name="github" /><a href={githubUrl} target="_blank" rel="noreferrer">github.com/GilbertoMonroy67</a></li>
          <li><MapPin size={18} /><span>México</span></li>
        </ul>
      </div>
      <div className="quote-card">
        <span className="brand-mark large">&lt;GM /&gt;</span>
        <blockquote>“El código no es solo lo que escribo: es la forma en que <em>resuelvo problemas</em>.”</blockquote>
        <p>— Gilberto Monroy</p>
        <a className="button button-primary" href="mailto:gilbertoalejandromonroymorales@gmail.com">Escríbeme <Mail size={16} /></a>
      </div>
    </section>

    <div className="principles"><div className="shell principles-inner">{principles.map(({ icon: Icon, label }) => <span key={label}><Icon size={18} />{label}</span>)}</div></div>
    <footer className="footer shell"><span>© 2026 Gilberto Monroy · Backend Developer</span><a href="#inicio">Volver arriba ↑</a></footer>
  </main>
}
