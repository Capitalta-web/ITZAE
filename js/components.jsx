// ITZAÉ TULUM · data + small reusable + hero / stats / auto / ubi / amen / avance / cisa / footer

// ====================== DATA ======================
const TIPOLOGIAS = [
  {
    id: 'tulum',
    name: 'Tulum',
    code: 'T-01',
    tagline: 'La entrada inteligente',
    m2: 48,
    rec: 1,
    feat: ['Terraza privada', 'Vista interior'],
    desc: 'Alta rotación, alta rentabilidad. Ideal para el inversionista que busca el mayor número de noches ocupadas al año en La Veleta.',
    priceMDP: 2.5,
    monthlyAirbnb: 38000,
    occupancy: 64,
    nightRate: 1850,
    images: ['assets/bedroom-macrame.avif', 'assets/living-boho.avif', 'assets/facade-day.avif'],
  },
  {
    id: 'uxmal',
    name: 'Uxmal',
    code: 'U-02',
    tagline: 'Balance precio · experiencia',
    m2: 54,
    rec: 1,
    feat: ['Terraza amplia', 'Atardecer caribeño', 'Cocina abierta'],
    desc: 'El balance perfecto entre precio de entrada y experiencia premium. Terraza diseñada para el estilo de vida caribeño, con atardecer incluido.',
    priceMDP: 3.1,
    monthlyAirbnb: 45000,
    occupancy: 66,
    nightRate: 2050,
    images: ['assets/interior-extra.avif', 'assets/bedroom-branch.avif', 'assets/facade-night-enhanced.png'],
  },
  {
    id: 'calakmul',
    name: 'Calakmul',
    code: 'C-03',
    tagline: 'Swim-up · jardín privado',
    m2: 65,
    rec: 1,
    feat: ['Swim-Up', 'Jardín privado', 'Acceso directo a alberca'],
    desc: 'El Swim-Up y jardín privado son los amenidades más buscados en Airbnb Tulum. Mayor tarifa por noche, mayor rendimiento — y el ticket promedio más alto de su categoría.',
    priceMDP: 3.9,
    monthlyAirbnb: 62000,
    occupancy: 72,
    nightRate: 2680,
    images: ['assets/pool-garden.avif', 'assets/living-pool.avif', 'assets/bedroom-mint.avif'],
  },
  {
    id: 'tikal',
    name: 'Tikal',
    code: 'T-04',
    tagline: 'Familias · estancias largas',
    m2: 123,
    rec: 2,
    feat: ['Swim-Up', 'Jardín privado', '2 recámaras', 'Sala doble'],
    desc: 'Para grupos y familias — el segmento que paga más y se queda más tiempo. Dos recámaras con Swim-Up, combinación escasa y altamente cotizada en la plataforma.',
    priceMDP: 6.1,
    monthlyAirbnb: 88000,
    occupancy: 70,
    nightRate: 3850,
    images: ['assets/living-pool.avif', 'assets/pool-garden.avif', 'assets/bedroom-macrame.avif'],
  },
  {
    id: 'chichen',
    name: 'Chichén Itzá',
    code: 'PH-05',
    tagline: 'Penthouse · roof garden',
    m2: 135,
    rec: 2,
    feat: ['Infinity Pool', 'Roof Garden', 'Pergola', 'Vista panorámica'],
    desc: 'La joya del proyecto. Un Penthouse con Infinity Pool y Roof Garden no es solo una propiedad — es una experiencia que los huéspedes de lujo pagan por vivir. Máximo ticket por noche, máximo prestigio patrimonial.',
    priceMDP: 6.8,
    monthlyAirbnb: 112000,
    occupancy: 68,
    nightRate: 4900,
    images: ['assets/penthouse-pool.avif', 'assets/facade-night-enhanced.png', 'assets/interior-extra.avif'],
  },
];

const UBICACION = [
  { time: 5,  unit: 'min', place: 'Tulum Centro',     sub: 'Restaurantes · vida nocturna' },
  { time: 8,  unit: 'min', place: 'Playas de Tulum',  sub: 'Acceso a costa caribeña' },
  { time: 10, unit: 'min', place: 'Zona Hotelera',    sub: 'Beach clubs · cenotes' },
  { time: 15, unit: 'min', place: 'Zona Arqueológica',sub: 'Ruinas mayas · turismo' },
  { time: 20, unit: 'min', place: 'Tren Maya · Estación', sub: 'Conexión a la península' },
  { time: 25, unit: 'min', place: 'Aeropuerto Internacional', sub: 'Tulum International (TQO)' },
];

const AMENITIES = [
  { ic: '◊', name: 'Lobby de bienvenida',  text: 'Diseñado para recibir huéspedes con check-in tipo boutique-hotel.' },
  { ic: '~', name: 'Alberca social',        text: 'Espacio común con tumbonas, palapa y bar de servicio.' },
  { ic: '↑', name: 'Roof garden común',     text: 'Terraza panorámica con asadores y zona lounge para todo el residencial.' },
  { ic: '◉', name: 'Gym equipado',          text: 'Cardio · pesas · espacio de yoga abierto a la jungla.' },
  { ic: '✕', name: 'Coworking',             text: 'Internet de alta velocidad — diseñado para nómadas digitales.' },
  { ic: '◇', name: 'Seguridad 24/7',        text: 'Caseta de control, CCTV perimetral, acceso por intercomunicador.' },
  { ic: '◈', name: 'Estacionamiento',       text: 'Cajón asignado por unidad, áreas para visitas y bici-parking.' },
  { ic: '※', name: 'Jardines tropicales',   text: 'Vegetación nativa con riego automatizado y mantenimiento incluido.' },
];

const PAGOS = [
  { k: 'PASO 01', v: 'Apartado',                    pct: '5%',  t: 'Reservas tu unidad con un enganche simbólico mientras formalizamos el contrato.', current: true },
  { k: 'PASO 02', v: 'Firma de contrato',          pct: '25%',  t: 'Pagas el enganche acumulado al firmar contrato privado de compraventa.' },
  { k: 'PASO 03', v: 'Mensualidades',              pct: '50%',  t: 'Pagas el 50% restante en mensualidades sin intereses durante la obra.' },
  { k: 'PASO 04', v: 'Entrega · escritura',       pct: '20%',  t: 'El 20% final se liquida contra entrega — listo para escriturar y rentar.' },
];

const FAQ_ITEMS = [
  {
    q: '¿Qué significa que el desarrollo sea 100% autofinanciado?',
    a: 'Significa que la obra avanza con el capital de los compradores, no con crédito bancario. Esto elimina el riesgo de paralización por causas financieras externas — un banco no puede congelar lo que no financió. Para ti, se traduce en certeza patrimonial: tu inversión está en la obra, no en un esquema apalancado.'
  },
  {
    q: '¿Cómo se calcula el rendimiento proyectado de renta vacacional?',
    a: 'Tomamos datos públicos de AirDNA y plataformas como Airbnb y VRBO para La Veleta: tarifa promedio por noche, ocupación mensual histórica y temporadas alta/baja. Aplicamos esa base a la tipología que te interesa y restamos comisiones de operación, mantenimiento y administración. Te entregamos un escenario conservador, uno realista y uno optimista — los tres con sus supuestos a la vista.'
  },
  {
    q: '¿Puedo visitar la obra antes de comprometerme?',
    a: 'Sí — y de hecho lo recomendamos. Con +70% de avance de obra, puedes caminar el residencial, ver acabados, vegetación instalada, y conocer al equipo de obra. Agenda una visita guiada desde el formulario y te coordinamos transporte si vienes de fuera de Tulum.'
  },
  {
    q: '¿Quién opera la renta vacacional cuando entreguen la unidad?',
    a: 'Itzaé tiene un programa de operación opcional, con un partner local especializado en alta gama. Manejan listados, atención al huésped, limpieza, mantenimiento y reporte mensual. La comisión es competitiva con el mercado (15–22% del gross). También puedes operarla por tu cuenta o con otro operador — tu propiedad, tu decisión.'
  },
  {
    q: '¿Hay diferencia de precio entre preventa y entrega?',
    a: 'Sí. Los precios publicados son de preventa y se mantienen mientras dure la fase actual. Históricamente, propiedades en La Veleta han crecido 18–22% anual en valor. Al entregar (Q3 2026 estimado), las unidades restantes se ajustan a precio de mercado.'
  },
  {
    q: '¿Pueden comprar extranjeros directamente?',
    a: 'Sí. Tulum está fuera de la zona restringida de costa, por lo que extranjeros pueden adquirir directamente sin fideicomiso. Acompañamos el proceso con notario y asesor fiscal — para que la operación cierre con la documentación correcta tanto en México como para tu jurisdicción de origen.'
  },
  {
    q: '¿Qué pasa si necesito vender antes de la entrega?',
    a: 'Permitimos cesión de derechos de contrato a un tercero con un trámite simple. Históricamente, unidades en obra avanzada se ceden con plusvalía sobre el precio original — pero esto depende del momento de mercado. Te asesoramos honestamente sobre tu escenario antes de entrar.'
  },
];

const STATS_RAIL = [
  { meta: 'Mercado · 2024', num: '22', unit: '%', label: 'Crecimiento anual valor propiedades Tulum' },
  { meta: 'ROI proyectado', num: '15', unit: '%', label: 'Rendimiento anual promedio · rentas vacacionales' },
  { meta: 'AirDNA · La Veleta', num: '$2,100', unit: '', label: 'Tarifa promedio por noche · MXN' },
  { meta: 'Itzaé · Verificable', num: '+70', unit: '%', label: 'Avance de obra · sin deuda bancaria' },
];

// ====================== HELPERS ======================
const fmtMXN = (n) => n.toLocaleString('es-MX', { maximumFractionDigits: 0 });

function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            if (e.target.classList.contains('avance-progress')) {
              e.target.classList.add('visible');
            }
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function useScrollProgress() {
  const [pct, setPct] = React.useState(0);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setPct(total > 0 ? (window.scrollY / total) * 100 : 0);
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return { pct, scrolled };
}

// ====================== NAV ======================
function NavBar({ scrolled, onTweaks }) {
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#top" className="nav-logo">
        ITZAÉ <span className="dot">·</span> TULUM
        <span className="tag">La Veleta · MX</span>
      </a>
      <ul className="nav-links">
        <li><a href="#por-que">Por qué</a></li>
        <li><a href="#tipologias">Tipologías</a></li>
        <li><a href="#calculadora">ROI</a></li>
        <li><a href="#ubicacion">Ubicación</a></li>
        <li><a href="#avance">Obra</a></li>
        <li><a href="#contacto" className="cta">Agendar asesoría →</a></li>
      </ul>
    </nav>
  );
}

// ====================== HERO ======================
function Hero({ heroImage }) {
  return (
    <section className="hero" id="top" data-screen-label="01 Hero">
      <div className="hero-media">
        <img src={heroImage} alt="Itzaé Tulum — fachada nocturna" loading="eager" />
      </div>
      <div className="hero-veil"></div>
      <div className="hero-content">
        <div className="hero-headline">
          <span className="eyebrow on-dark">La Veleta · Tulum · Quintana Roo</span>
          <h1 className="hero-h1">
            Tu capital<br />
            trabaja en el <em>Caribe</em>.
          </h1>
          <p className="hero-sub">
            El único desarrollo <strong style={{color:'var(--sand-lt)', fontWeight:500}}>100% autofinanciado</strong> en La Veleta — diseñado pieza por pieza para generar rendimientos reales por renta vacacional desde el primer día de operación.
          </p>
          <div className="hero-chip-row">
            <span className="chip"><span className="accent">+70%</span> avance de obra</span>
            <span className="chip">5 tipologías</span>
            <span className="chip">Swim-Up · Roof Garden</span>
            <span className="chip">Desde <span className="accent">$2.5 MDP</span></span>
          </div>
          <div className="hero-cta-row">
            <a href="#calculadora" className="btn btn-primary">Calcular mi rendimiento <span className="arrow">→</span></a>
            <a href="#tipologias" className="btn btn-ghost">Ver tipologías</a>
          </div>
        </div>

        <aside className="hero-side">
          <div className="hero-stamp feature">
            <span className="icon">i</span>
            <div>
              <span className="label">Por qué Itzaé</span>
              <div className="val">Cero deuda bancaria, capital protegido en piedra.</div>
            </div>
          </div>
          <div className="hero-stamp">
            <span className="label">Rendimiento proyectado</span>
            <div className="val">15<em>% ROI anual promedio</em></div>
            <p className="sub">Basado en AirDNA · La Veleta · ocupación media 65%</p>
          </div>
          <div className="hero-stamp">
            <span className="label">Ticket de entrada</span>
            <div className="val">$2.5<em>MDP — Unidad Tulum</em></div>
            <p className="sub">Esquema autofinanciado · 0% interés</p>
          </div>
        </aside>
      </div>
      <div className="hero-bottom-bar">
        <span>ITZ-TUL · 2026 · GRUPO CISA</span>
        <span className="scroll-hint">explora la inversión</span>
      </div>
    </section>
  );
}

// ====================== STATS RAIL ======================
function StatsRail() {
  return (
    <div className="stats-rail" id="stats">
      <div className="stats-grid">
        {STATS_RAIL.map((s, i) => (
          <div className={`stat-cell reveal d${i}`} key={i}>
            <div className="stat-meta">{s.meta}</div>
            <div className="stat-num">{s.num}<span className="unit">{s.unit}</span></div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ====================== POR QUÉ (autofin) ======================
function PorQue() {
  const pillars = [
    { num: '01', title: 'Obra garantizada', text: 'Sin crédito puente: no hay escenario de paralización financiera. El proyecto avanza con el capital de sus propios inversionistas, no con la voluntad de un banco.' },
    { num: '02', title: 'Capital protegido', text: 'Al no existir deuda de desarrolladora, ninguna institución financiera puede ejecutar o congelar el proyecto. Tu inversión está donde debe: en piedra y tierra escriturable.' },
    { num: '03', title: 'Precio justo', text: 'Sin costos financieros trasladados al comprador. El precio refleja el valor real del inmueble — no los intereses acumulados de un crédito externo a 18 meses.' },
  ];
  return (
    <section className="autofin" id="por-que" data-screen-label="02 Por qué Itzaé">
      <div className="autofin-grid">
        <div className="autofin-visual reveal">
          <img src="assets/pool-garden.avif" alt="Alberca y jardín Itzaé Tulum" loading="lazy" />
          <div className="autofin-stamp">
            <div className="num">100<span style={{fontSize:'1.6rem'}}>%</span></div>
            <div className="lbl"><strong>Autofinanciado</strong> · sin deuda bancaria</div>
          </div>
        </div>
        <div className="autofin-content">
          <span className="eyebrow reveal">La ventaja que importa</span>
          <h2 className="h-display reveal">Sin deuda bancaria.<br /><em>Sin riesgo</em> para tu inversión.</h2>
          <p className="body-md reveal">
            En un mercado donde la mayoría de los desarrollos dependen de créditos puente y financiamiento bancario, Itzaé Tulum opera de forma diferente. El avance de obra está garantizado por el flujo real de compradores — no por las condiciones cambiantes del mercado financiero.
          </p>
          <div className="pillars">
            {pillars.map((p, i) => (
              <div className={`pillar reveal d${i+1}`} key={p.num}>
                <div className="pillar-num">{p.num}</div>
                <div>
                  <div className="pillar-title">{p.title}</div>
                  <p className="pillar-text">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ====================== UBICACIÓN ======================
function Ubicacion() {
  return (
    <section className="ubi" id="ubicacion" data-screen-label="05 Ubicación">
      <div className="ubi-shell">
        <div className="section-header">
          <div>
            <span className="eyebrow on-dark reveal">Estrategia de ubicación</span>
            <h2 className="h-display on-dark reveal" style={{marginTop:'1rem'}}>
              En el corazón de<br /><em>La Veleta.</em>
            </h2>
          </div>
          <p className="body-md on-dark reveal" style={{maxWidth:'none'}}>
            La zona con mayor crecimiento de plusvalía en Tulum hoy. Bien conectada, demanda alta de renta vacacional sostenida, y en plena expansión de infraestructura comercial y turística.
          </p>
        </div>
        <div className="ubi-grid">
          <div>
            <div className="ubi-points reveal">
              {UBICACION.map((u, i) => (
                <div className="ubi-pt" key={i}>
                  <div className="time">
                    {u.time}
                    <small>{u.unit}</small>
                  </div>
                  <div className="place">
                    {u.place}
                    <small>{u.sub}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="ubi-map reveal">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.762!2d-87.4602!3d20.2108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4fd40968b2eacf%3A0x2b00a9b3dc7b2aee!2sLa%20Veleta%2C%2077760%20Tulum%2C%20Q.R.!5e0!3m2!1ses!2smx!4v1716000000000"
              loading="lazy"
              title="La Veleta · Tulum"
            />
            <div className="ubi-map-stamp">
              <div>
                <div className="k">Coordenadas</div>
                <div className="v">La Veleta · Tulum</div>
              </div>
              <div className="gps">20.2108° N · 87.4602° W</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ====================== AMENIDADES ======================
function Amenities() {
  return (
    <section className="amen" id="amenidades" data-screen-label="06 Amenidades">
      <div className="amen-shell">
        <div className="section-header">
          <div>
            <span className="eyebrow reveal">Lo que el huésped paga por vivir</span>
            <h2 className="h-display reveal" style={{marginTop:'1rem'}}>
              Amenidades que <em>elevan</em><br />la tarifa por noche.
            </h2>
          </div>
          <p className="body-md reveal" style={{maxWidth:'none'}}>
            Cada amenidad fue elegida con un criterio: ¿le agrega valor al huésped que paga por noche? Si no eleva la tarifa o aumenta el número de noches reservadas, no entra al proyecto.
          </p>
        </div>
        <div className="amen-grid">
          <div className="amen-card feature reveal">
            <div className="amen-num">CORAZÓN DEL RESIDENCIAL</div>
            <div className="amen-name" style={{fontSize:'2.2rem', maxWidth:'380px'}}>Alberca social con palapa, bar y tumbonas</div>
            <p className="amen-text" style={{maxWidth:'440px'}}>El espacio común está pensado como el "tercer lugar" — el lugar donde los huéspedes pasan tiempo cuando no están en su unidad. Más tiempo bien gastado = mejores reseñas = más reservas.</p>
          </div>
          {AMENITIES.slice(2).map((a, i) => (
            <div className={`amen-card span-${i === 0 || i === 1 ? '3' : '3'} reveal d${(i%3)+1}`} key={a.name}>
              <div className="amen-icon">{a.ic}</div>
              <div className="amen-num">{String(i+2).padStart(2,'0')}</div>
              <div className="amen-name">{a.name}</div>
              <p className="amen-text">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ====================== PAGOS ======================
function Pagos() {
  return (
    <section className="pagos" id="pagos" data-screen-label="08 Plan de pagos">
      <div className="pagos-shell">
        <div className="section-header">
          <div>
            <span className="eyebrow reveal">Esquema de inversión</span>
            <h2 className="h-display reveal" style={{marginTop:'1rem'}}>
              Un plan de pagos sin <em>letras chiquitas.</em>
            </h2>
          </div>
          <p className="body-md reveal" style={{maxWidth:'none'}}>
            Cuatro pasos, cero intereses, total transparencia. El esquema autofinanciado nos permite ofrecer un plan que tu flujo personal puede absorber sin estrés — y sin créditos puente externos.
          </p>
        </div>
        <div className="pagos-flow">
          {PAGOS.map((p, i) => (
            <div className={`pago-step ${p.current ? 'is-current' : ''} reveal d${i}`} key={i}>
              <div className="pago-dot">{String(i+1).padStart(2,'0')}</div>
              <div className="k">{p.k}</div>
              <div className="v">{p.v}</div>
              <p className="t">{p.t}</p>
              <span className="pct">{p.pct}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ====================== AVANCE OBRA ======================
function Avance() {
  return (
    <section className="avance" id="avance" data-screen-label="09 Avance de obra">
      <div className="avance-shell">
        <div className="avance-grid">
          <div className="avance-media reveal">
            <img src="assets/facade-day.avif" alt="Avance de obra Itzaé Tulum" loading="lazy" />
            <div className="avance-stamp">
              <div className="num">+70%</div>
              <div className="lbl">Avance de obra · verificable</div>
            </div>
          </div>
          <div>
            <span className="eyebrow reveal">Certeza tangible</span>
            <h2 className="h-display reveal" style={{marginTop:'1rem', marginBottom:'1.4rem'}}>
              No es una promesa.<br /><em>Es una obra en pie.</em>
            </h2>
            <p className="body-md reveal" style={{marginBottom:'2rem'}}>
              Itzaé Tulum supera el 70% de avance de construcción. Puedes verlo, visitarlo, caminarlo. En un mercado donde abundan las promesas, nosotros ofrecemos evidencia tangible.
            </p>
            <div className="avance-progress reveal" style={{'--pct': '73%'}}>
              <div className="head"><span className="k">Avance de obra</span><span className="v">+70% completado</span></div>
              <div className="bar"><div className="fill"></div></div>
            </div>
            <div className="avance-progress reveal d1" style={{'--pct': '38%'}}>
              <div className="head"><span className="k">Unidades disponibles</span><span className="v">Limitadas</span></div>
              <div className="bar"><div className="fill"></div></div>
            </div>
            <div className="avance-progress reveal d2" style={{'--pct': '88%'}}>
              <div className="head"><span className="k">Cierre preventa</span><span className="v">Q3 2026 estimado</span></div>
              <div className="bar"><div className="fill"></div></div>
            </div>
            <div style={{marginTop:'2.4rem'}}>
              <a href="#contacto" className="btn btn-dark">Agendar visita al desarrollo <span className="arrow">→</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ====================== FILOSOFÍA ======================
function Filosofia({ variant = 'caracter' }) {
  if (variant === 'compromisos') return <FilosofiaBuyer />;
  return <FilosofiaCaracter />;
}

function FilosofiaCaracter() {
  const points = [
    { mark: '→', title: 'Transparencia total', text: 'Te mostramos datos reales del mercado, incluyendo los que no nos favorecen. La decisión informada es siempre la mejor decisión.' },
    { mark: '→', title: 'Asesoría sin presión', text: 'Nuestro equipo no trabaja con urgencias artificiales. El tiempo correcto para invertir es cuando tienes toda la información en la mesa.' },
    { mark: '→', title: 'Rendimiento como objetivo', text: 'Cada decisión de diseño, ubicación y amenidades fue tomada pensando en maximizar tu ingreso por renta vacacional.' },
    { mark: '→', title: 'Seguimiento post-compra', text: 'Acompañamos a nuestros inversionistas en el proceso de puesta en renta y operación vacacional. La relación no termina con la firma.' },
  ];
  return (
    <section className="philo" id="filosofia" data-screen-label="10 Filosofía">
      <div className="philo-shell">
        <div className="philo-grid">
          <div>
            <span className="eyebrow reveal">Nuestra filosofía</span>
            <h2 className="h-display reveal" style={{marginTop:'1rem', marginBottom:'1.4rem'}}>
              No vendemos departamentos.<br /><em>Construimos negocios.</em>
            </h2>
            <p className="body-md reveal">
              Antes de hablar de precios, hacemos cinco preguntas. Porque si nuestro proyecto no es el correcto para ti, te lo decimos — y te ayudamos a encontrar el que sí lo es.
            </p>
            <div className="quote-block reveal">
              <p className="quote-text">
                Carlos, gracias por tu ayuda. Qué lástima que mi presupuesto no fue suficiente para comprar en Itzaé, pero con las recomendaciones que me hiciste estoy logrando un muy buen trato con otro desarrollo. Cuando vengas a Monterrey yo invito la comida.
              </p>
              <div className="quote-source">
                — C. CAZARÍN · PROSPECTO DE ITZAÉ TULUM
                <em>Mensaje auténtico recibido por nuestro equipo comercial</em>
              </div>
            </div>
          </div>
          <div>
            <span className="eyebrow reveal">Lo que nos diferencia</span>
            <div className="phil-points" style={{marginTop:'1.8rem'}}>
              {points.map((p, i) => (
                <div className={`phil-pt reveal d${i}`} key={p.title}>
                  <div className="phil-pt-mark">{String(i+1).padStart(2,'0')}</div>
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ----- Variant: Compromisos (buyer-value redesign) -----
function FilosofiaBuyer() {
  const clauses = [
    {
      code: 'CL 01',
      title: 'Precio cerrado en pesos',
      text: 'El precio que firmas es el precio que pagas. Sin actualizaciones por inflación, sin cuotas durante obra, sin ajustes de última hora hasta la entrega de tu llave.',
    },
    {
      code: 'CL 02',
      title: 'Pagos contra avance verificado',
      text: 'Cada mensualidad se libera contra obra construida y certificada por supervisor independiente. Recibes reporte mensual con fotografías, bitácora y porcentaje de avance auditado.',
    },
    {
      code: 'CL 03',
      title: 'Entrega llave en mano',
      text: 'Departamento terminado, amueblado y equipado, con servicios contratados y fotografía profesional. Listing publicado en Airbnb y Booking incluido — listo para generar ingreso desde el día uno.',
    },
    {
      code: 'CL 04',
      title: 'Escrituración cubierta',
      text: 'Fideicomiso bancario, notario público, apostille de documentos y trámite migratorio incluidos en tu pago final. Cero costos ocultos al cierre.',
    },
  ];

  return (
    <section className="philo philo-buyer" id="filosofia" data-screen-label="10 Filosofía">
      <div className="philo-shell">
        <div className="philo-buyer-grid">
          <div className="philo-buyer-lead">
            <span className="eyebrow reveal">Para el inversionista</span>
            <h2 className="h-display reveal" style={{marginTop:'1rem', marginBottom:'1.4rem'}}>
              Cuatro compromisos,<br /><em>cuatro cláusulas.</em>
            </h2>
            <p className="body-md reveal">
              Lo que sigue no es una declaración de principios. Es lo que está escrito —y firmado— en cada contrato de compraventa de Itzaé Tulum. Protege tu capital desde el primer depósito hasta la escritura.
            </p>

            <div className="buyer-seal reveal">
              <div className="buyer-seal-mark">FIDEICOMISO<br />BANCARIO</div>
              <div className="buyer-seal-body">
                <strong>Tu dinero no entra a la caja del desarrollador.</strong>
                <span>Cada aportación se deposita en fideicomiso bancario y se libera contra avance de obra certificado. Si el proyecto se detiene, el saldo del fideicomiso es tuyo.</span>
              </div>
            </div>

            <div className="buyer-meta reveal">
              <div>
                <div className="buyer-meta-k">Avance auditado por</div>
                <div className="buyer-meta-v">Supervisor independiente externo</div>
              </div>
              <div>
                <div className="buyer-meta-k">Contrato</div>
                <div className="buyer-meta-v">Compraventa con reserva de dominio</div>
              </div>
            </div>
          </div>

          <div className="philo-buyer-list">
            {clauses.map((c, i) => (
              <div className={`buyer-pt reveal d${i}`} key={c.code}>
                <div className="buyer-pt-code">{c.code}</div>
                <div className="buyer-pt-body">
                  <h4>{c.title}</h4>
                  <p>{c.text}</p>
                </div>
              </div>
            ))}
            <div className="buyer-foot reveal">
              <span>Contrato y aviso de privacidad disponibles a solicitud</span>
              <span className="buyer-foot-sep">·</span>
              <span>Cláusulas verificables ante notario público</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ====================== CISA STRIP ======================
function CisaStrip() {
  return (
    <div className="cisa-strip" id="cisa">
      <div className="cisa-strip-inner">
        <div className="cisa-mark">
          GRUPO CISA
          <small>Desarrollo inmobiliario · MX</small>
        </div>
        <div className="cisa-rule"></div>
        <p className="cisa-body">
          <strong>Grupo CISA</strong> es una empresa mexicana con presencia en más de 5 estados de la república, especializada en desarrollo e inversión inmobiliaria de calidad. No somos un proyecto de una sola obra — somos una empresa con historia, procesos y un compromiso real con cada inversionista. {' '}
          <a href="https://www.gcisa.mx/" target="_blank" rel="noreferrer">Conoce Grupo CISA →</a>
        </p>
      </div>
    </div>
  );
}

// ====================== FOOTER ======================
function Footer() {
  return (
    <footer>
      <div className="foot-main">
        <div className="foot-brand">
          <a href="#top" className="nav-logo">ITZAÉ <span className="dot">·</span> TULUM</a>
          <p>Departamentos en venta en La Veleta, Tulum. Un proyecto de Grupo CISA, 100% autofinanciado y diseñado para inversionistas que buscan rendimientos reales en el Caribe mexicano.</p>
          <div className="foot-social">
            <a href="#" aria-label="Instagram">ig</a>
            <a href="#" aria-label="Facebook">fb</a>
            <a href="#" aria-label="YouTube">yt</a>
            <a href="#" aria-label="TikTok">tk</a>
          </div>
        </div>
        <div>
          <div className="foot-col-h">Proyecto</div>
          <ul className="foot-links">
            <li><a href="#por-que">Por qué Itzaé</a></li>
            <li><a href="#tipologias">Tipologías</a></li>
            <li><a href="#calculadora">Calculadora ROI</a></li>
            <li><a href="#amenidades">Amenidades</a></li>
            <li><a href="#avance">Avance de obra</a></li>
          </ul>
        </div>
        <div>
          <div className="foot-col-h">Compañía</div>
          <ul className="foot-links">
            <li><a href="#filosofia">Nuestra filosofía</a></li>
            <li><a href="https://www.gcisa.mx/" target="_blank" rel="noreferrer">Grupo CISA</a></li>
            <li><a href="#">Brochure digital</a></li>
            <li><a href="#">Aviso de privacidad</a></li>
            <li><a href="#contacto">Agendar asesoría</a></li>
          </ul>
        </div>
        <div className="foot-contact">
          <div className="foot-col-h">Contacto</div>
          <p><a href="tel:+525534552642">+52 55 3455 2642</a></p>
          <p><a href="tel:+525517964940">+52 55 1796 4940</a></p>
          <p><a href="mailto:contacto@itzaetulum.com">contacto@itzaetulum.com</a></p>
          <p style={{marginTop:'0.8rem', color:'rgba(245,237,224,0.4)'}}>C. 14 Sur 102, La Veleta<br/>77760 Tulum, Q.R.</p>
        </div>
      </div>
      <div className="foot-bottom">
        <div className="foot-bottom-inner">
          <span>© 2026 ITZAÉ · GRUPO CISA · TODOS LOS DERECHOS RESERVADOS</span>
          <a href="#">AVISO DE PRIVACIDAD</a>
        </div>
      </div>
    </footer>
  );
}

// expose to window for cross-script use
Object.assign(window, {
  TIPOLOGIAS, UBICACION, AMENITIES, PAGOS, FAQ_ITEMS, STATS_RAIL,
  fmtMXN, useReveal, useScrollProgress,
  NavBar, Hero, StatsRail, PorQue, Ubicacion, Amenities, Pagos, Avance, Filosofia, CisaStrip, Footer,
});
