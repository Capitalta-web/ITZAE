// ITZAÉ TULUM · interactive components: tipologías + lightbox, ROI calc, FAQ, form, app shell

// ====================== TIPOLOGÍAS + LIGHTBOX ======================
function Tipologias({ onOpenLightbox }) {
  const [activeIdx, setActiveIdx] = React.useState(2); // start on Calakmul (the hero amenity)
  const [imgIdx, setImgIdx] = React.useState(0);

  const t = TIPOLOGIAS[activeIdx];

  React.useEffect(() => {setImgIdx(0);}, [activeIdx]);

  return (
    <section className="tipo" id="tipologias" data-screen-label="03 Tipologías">
      <div className="tipo-shell">
        <div className="tipo-header section-header">
          <div>
            <span className="eyebrow reveal">Catálogo de inversión · 5 tipologías</span>
            <h2 className="h-display reveal" style={{ marginTop: '1rem', width: "558px", fontSize: "63px" }}>
              Cinco formas de entrar<br />al mercado más rentable<br />del <em>Caribe.</em>
            </h2>
          </div>
          <p className="body-md reveal" style={{ maxWidth: 'none' }}>
            Diseñadas por arquitectos especializados en renta vacacional. Cada tipología maximiza la experiencia del huésped — y por lo tanto, tu tarifa por noche y tu ocupación anual.
          </p>
        </div>

        <div className="tipo-tabs reveal">
          {TIPOLOGIAS.map((typ, i) =>
          <button
            key={typ.id}
            className={`tipo-tab ${i === activeIdx ? 'active' : ''}`}
            onClick={() => setActiveIdx(i)}>
            
              <div className="tipo-tab-meta">{typ.code} · {typ.m2}m²</div>
              <div className="tipo-tab-name">{typ.name}</div>
              <div className="tipo-tab-price">desde ${typ.priceMDP.toFixed(1)} MDP</div>
            </button>
          )}
        </div>

        <div className="tipo-panel" key={t.id}>
          <div
            className="tipo-gallery"
            onClick={() => onOpenLightbox(t.images, imgIdx, t.name)}>
            
            <img src={t.images[imgIdx]} alt={`${t.name} — ${t.tagline}`} loading="lazy" />
            <div className="tipo-gallery-overlay">
              <span className="tipo-gallery-pill">{t.code}</span>
              <span className="tipo-gallery-pill">{imgIdx + 1} / {t.images.length}</span>
            </div>
            <div className="tipo-thumbs" onClick={(e) => e.stopPropagation()}>
              {t.images.map((src, i) =>
              <button
                key={src + i}
                className={`tipo-thumb ${i === imgIdx ? 'active' : ''}`}
                onClick={() => setImgIdx(i)}
                aria-label={`Ver imagen ${i + 1}`}>
                
                  <img src={src} alt="" loading="lazy" />
                </button>
              )}
            </div>
            <div className="tipo-gallery-zoom">⤢</div>
          </div>

          <div className="tipo-detail">
            <div className="name-row">
              <h3 className="tipo-detail-name">{t.name}</h3>
              <span className="tipo-detail-tag">{t.tagline}</span>
            </div>
            <div className="tipo-specs">
              <div className="tipo-spec">
                <span className="k">Superficie</span>
                <span className="v">{t.m2}<small>m²</small></span>
              </div>
              <div className="tipo-spec">
                <span className="k">Recámaras</span>
                <span className="v">{t.rec.toString().padStart(2, '0')}</span>
              </div>
              <div className="tipo-spec">
                <span className="k">Renta proyectada</span>
                <span className="v" style={{ color: 'var(--sand-deep)' }}>${fmtMXN(t.monthlyAirbnb)}<small>/mes</small></span>
              </div>
              <div className="tipo-spec">
                <span className="k">Tarifa/noche</span>
                <span className="v" style={{ color: 'var(--sand-deep)' }}>${fmtMXN(t.nightRate)}<small>MXN</small></span>
              </div>
            </div>
            <p className="tipo-desc">{t.desc}</p>
            <div className="tipo-amen">
              {t.feat.map((f) =>
              <span className="tipo-amen-chip" key={f}>{f}</span>
              )}
            </div>
            <div className="tipo-price-row">
              <div className="left">
                <div className="k">Precio de preventa desde</div>
                <div className="v">${t.priceMDP.toFixed(1)}<small>MDP</small></div>
              </div>
              <a href="#contacto" className="btn btn-dark">Cotizar {t.name} <span className="arrow">→</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

// ====================== LIGHTBOX ======================
function Lightbox({ images, idx, label, onClose, onNext, onPrev }) {
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div className="lb" onClick={onClose}>
      <img src={images[idx]} alt="" className="lb-img" onClick={(e) => e.stopPropagation()} />
      <button className="lb-close" onClick={onClose} aria-label="Cerrar">×</button>
      <button className="lb-arrow prev" onClick={(e) => {e.stopPropagation();onPrev();}} aria-label="Anterior">‹</button>
      <button className="lb-arrow next" onClick={(e) => {e.stopPropagation();onNext();}} aria-label="Siguiente">›</button>
      <div className="lb-meta">{label} · {idx + 1} / {images.length}</div>
    </div>);

}

// ====================== ROI CALCULATOR ======================
function Calculator() {
  const [tipoId, setTipoId] = React.useState('calakmul');
  const [occupancy, setOccupancy] = React.useState(65);
  const [nightlyOverride, setNightlyOverride] = React.useState(null);

  const t = TIPOLOGIAS.find((x) => x.id === tipoId);
  const nightly = nightlyOverride ?? t.nightRate;

  // Reset nightly override when tipo changes
  React.useEffect(() => {setNightlyOverride(null);}, [tipoId]);

  // Calculations
  const nightsBooked = Math.round(occupancy / 100 * 30);
  const monthlyGross = nightly * nightsBooked;
  const annualGross = monthlyGross * 12;
  // operator + maintenance + property mgmt ~ 28% of gross
  const annualNet = Math.round(annualGross * 0.72);
  const investmentMXN = t.priceMDP * 1_000_000;
  const roiPct = annualNet / investmentMXN * 100;

  return (
    <section className="calc" id="calculadora" data-screen-label="04 Calculadora ROI">
      <div className="calc-shell">
        <div className="section-header">
          <div>
            <span className="eyebrow on-dark reveal">Calculadora · datos AirDNA · La Veleta</span>
            <h2 className="h-display on-dark reveal" style={{ marginTop: '1rem' }}>
              Calcula tu rendimiento<br />proyectado en <em>10 segundos.</em>
            </h2>
          </div>
          <p className="body-md on-dark reveal" style={{ maxWidth: 'none' }}>
            Mueve los controles. La proyección recalcula al instante con base en datos públicos de renta vacacional en La Veleta. <strong style={{ color: 'var(--sand-lt)', fontWeight: 500 }}>Conservador, transparente, sin trucos contables.</strong>
          </p>
        </div>

        <div className="calc-grid">
          <div className="calc-form reveal">
            <div className="control">
              <div className="control-label">
                <span className="k">Tipología</span>
                <span className="v">{t.name} <small>· {t.m2}m²</small></span>
              </div>
              <div className="calc-tipo-pick">
                {TIPOLOGIAS.map((x) =>
                <button
                  key={x.id}
                  className={x.id === tipoId ? 'active' : ''}
                  onClick={() => setTipoId(x.id)}>
                  
                    {x.name.split(' ')[0]}
                  </button>
                )}
              </div>
            </div>

            <div className="control">
              <div className="control-label">
                <span className="k">Tarifa por noche</span>
                <span className="v"><small>MXN</small> ${fmtMXN(nightly)}</span>
              </div>
              <input
                type="range"
                min={1200}
                max={6500}
                step={50}
                value={nightly}
                onChange={(e) => setNightlyOverride(parseInt(e.target.value, 10))}
                className="range" />
              
              <div className="range-meta">
                <span>$1,200 · BAJA</span>
                <span>SUGERIDA · ${fmtMXN(t.nightRate)}</span>
                <span>$6,500 · ALTA</span>
              </div>
            </div>

            <div className="control">
              <div className="control-label">
                <span className="k">Ocupación mensual</span>
                <span className="v">{occupancy}<small>%</small> <small>· {nightsBooked} noches/mes</small></span>
              </div>
              <input
                type="range"
                min={30}
                max={92}
                step={1}
                value={occupancy}
                onChange={(e) => setOccupancy(parseInt(e.target.value, 10))}
                className="range" />
              
              <div className="range-meta">
                <span>30% · CONSERVADOR</span>
                <span>65% · PROMEDIO TULUM</span>
                <span>92% · TEMPORADA ALTA</span>
              </div>
            </div>

            <p style={{ fontSize: '0.78rem', color: 'rgba(245,237,224,0.45)', lineHeight: 1.6, marginTop: '1.6rem' }}>
              <span className="mono" style={{ color: 'var(--sand-lt)' }}>Supuestos:</span> 28% operación + mantenimiento + administración descontado del bruto. ROI calculado sobre precio de preventa publicado.
            </p>
          </div>

          <div className="calc-result reveal d1">
            <div className="k">Ingreso neto anual proyectado</div>
            <div className="calc-headline">
              <span className="currency">MXN</span>${fmtMXN(annualNet)}
            </div>
            <div className="calc-row">
              <div className="cell">
                <span className="k">ROI anual</span>
                <div className="v gold">{roiPct.toFixed(1)}%</div>
              </div>
              <div className="cell">
                <span className="k">Renta bruta / mes</span>
                <div className="v">${fmtMXN(monthlyGross)}</div>
              </div>
              <div className="cell">
                <span className="k">Inversión inicial</span>
                <div className="v">${t.priceMDP.toFixed(1)} <span style={{ fontSize: '0.6em', color: 'rgba(245,237,224,0.5)' }}>MDP</span></div>
              </div>
              <div className="cell">
                <span className="k">Recuperación est.</span>
                <div className="v">{Math.round(investmentMXN / annualNet)} <span style={{ fontSize: '0.55em', color: 'rgba(245,237,224,0.5)' }}>años</span></div>
              </div>
            </div>
            <p className="calc-disclaimer">
              Estimación orientativa basada en AirDNA, Airbnb y VRBO para La Veleta · 2024–2025. No constituye oferta de rendimiento garantizado. Tu rendimiento real depende de operación, mantenimiento y condiciones de mercado.
            </p>
            <div style={{ marginTop: '1.6rem' }}>
              <a href="#contacto" className="btn btn-primary">Validar este escenario con un asesor <span className="arrow">→</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

// ====================== FAQ ======================
function FAQ() {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="faq" id="faq" data-screen-label="11 FAQ">
      <div className="faq-shell">
        <div className="section-header center">
          <span className="eyebrow reveal" style={{ justifyContent: 'center' }}>Preguntas frecuentes</span>
          <h2 className="h-display reveal" style={{ marginTop: '1rem' }}>
            Las dudas que <em>importan</em><br />antes de invertir.
          </h2>
        </div>
        <div className="faq-list reveal">
          {FAQ_ITEMS.map((item, i) =>
          <div className={`faq-item ${open === i ? 'open' : ''}`} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{item.q}</span>
                <span className="plus">+</span>
              </button>
              <div className="faq-a">
                <div>
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ====================== MULTI-STEP FORM ======================
function ContactForm() {
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState({
    perfil: '',
    presupuesto: '',
    timing: '',
    name: '',
    phone: '',
    email: '',
    tipo: ''
  });

  const updateField = (k, v) => setData({ ...data, [k]: v });

  const STEPS = [
  {
    num: '01 · PERFIL',
    title: '¿Qué te trae a Itzaé?',
    sub: 'Para preparar la asesoría adecuada — la respuesta no compromete a nada.',
    render: () =>
    <div className="form-options single-col">
          {[
      'Invertir en renta vacacional (Airbnb / VRBO)',
      'Segunda residencia + renta cuando no la uso',
      'Patrimonio a largo plazo (plusvalía)',
      'Estoy explorando — aún no decido'].
      map((opt) =>
      <button
        key={opt}
        className={data.perfil === opt ? 'selected' : ''}
        onClick={() => {updateField('perfil', opt);setStep(1);}}>
        
              {opt}
            </button>
      )}
        </div>,

    canNext: () => data.perfil
  },
  {
    num: '02 · PRESUPUESTO',
    title: 'Rango de inversión',
    sub: 'Esto nos ayuda a recomendarte la tipología que mejor se adapta a tu capacidad.',
    render: () =>
    <div className="form-options">
          {[
      '$2.5 – $3.5 MDP',
      '$3.5 – $5 MDP',
      '$5 – $7 MDP',
      'Más de $7 MDP'].
      map((opt) =>
      <button
        key={opt}
        className={data.presupuesto === opt ? 'selected' : ''}
        onClick={() => {updateField('presupuesto', opt);setStep(2);}}>
        
              {opt}
            </button>
      )}
        </div>,

    canNext: () => data.presupuesto
  },
  {
    num: '03 · TIMING',
    title: '¿En qué momento estás?',
    sub: 'Sin urgencia. Solo queremos darte la información en el formato correcto.',
    render: () =>
    <div className="form-options">
          {[
      'Decidiendo en las próximas 4 semanas',
      'Decidiendo en 1–3 meses',
      'Decidiendo en 3–6 meses',
      'Solo investigando por ahora'].
      map((opt) =>
      <button
        key={opt}
        className={data.timing === opt ? 'selected' : ''}
        onClick={() => {updateField('timing', opt);setStep(3);}}>
        
              {opt}
            </button>
      )}
        </div>,

    canNext: () => data.timing
  },
  {
    num: '04 · CONTACTO',
    title: 'Para enviarte la propuesta',
    sub: 'Te contactamos en menos de 2 horas con un análisis personalizado de tu escenario.',
    render: () =>
    <div>
          <div className="form-row">
            <label>Nombre completo</label>
            <input
          type="text"
          value={data.name}
          onChange={(e) => updateField('name', e.target.value)}
          placeholder="Tu nombre" />
        
          </div>
          <div className="form-row">
            <label>WhatsApp / Teléfono</label>
            <input
          type="tel"
          value={data.phone}
          onChange={(e) => updateField('phone', e.target.value)}
          placeholder="+52 55 0000 0000" />
        
          </div>
          <div className="form-row">
            <label>Correo electrónico</label>
            <input
          type="email"
          value={data.email}
          onChange={(e) => updateField('email', e.target.value)}
          placeholder="correo@ejemplo.com" />
        
          </div>
        </div>,

    canNext: () => data.name.trim() && data.phone.trim() && data.email.trim()
  }];


  const isDone = step >= STEPS.length;
  const isFinalStep = step === STEPS.length - 1;
  const current = STEPS[step];

  if (isDone) {
    return (
      <div className="form-card reveal d1">
        <div className="form-success">
          <div className="mark">✓</div>
          <h3>Recibido, {data.name.split(' ')[0]}.</h3>
          <p>
            Tu asesor leerá tu perfil y te contactará vía WhatsApp en menos de 2 horas con un análisis personalizado y los renders en alta resolución.
          </p>
          <a
            href={`https://wa.me/5517964940?text=${encodeURIComponent('Hola, soy ' + data.name + '. Acabo de llenar el formulario de Itzaé Tulum y quisiera adelantar la conversación.')}`}
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer">
            
            Continuar por WhatsApp ahora →
          </a>
        </div>
      </div>);

  }

  return (
    <div className="form-card reveal d1">
      <div className="form-step-meter">
        {STEPS.map((_, i) =>
        <span
          key={i}
          className={i < step ? 'done' : i === step ? 'active' : ''} />

        )}
      </div>
      <div className="form-step-num">{current.num}</div>
      <h3 className="form-step-title">{current.title}</h3>
      <p className="form-step-sub">{current.sub}</p>
      {current.render()}
      <div className="form-actions">
        {step > 0 ?
        <button className="btn-back" onClick={() => setStep(step - 1)}>← Atrás</button> :

        <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.66rem', color: 'rgba(245,237,224,0.4)', letterSpacing: '0.14em' }}>
            PASO {step + 1} DE {STEPS.length}
          </span>
        }
        {isFinalStep &&
        <button
          className="btn btn-primary"
          disabled={!current.canNext()}
          onClick={() => current.canNext() && setStep(step + 1)}
          style={!current.canNext() ? { opacity: 0.4, cursor: 'not-allowed' } : {}}>
          
            Solicitar asesoría →
          </button>
        }
      </div>
    </div>);

}

function Contacto() {
  return (
    <section className="contacto" id="contacto" data-screen-label="12 Contacto">
      <div className="contacto-shell">
        <div className="contacto-grid">
          <div className="contacto-info">
            <span className="eyebrow on-dark reveal">El momento es ahora</span>
            <h2 className="h-display on-dark reveal" style={{ marginTop: '1rem', marginBottom: '1.4rem' }}>
              El tiempo para entrar<br />a precio de preventa<br /><em>se agota.</em>
            </h2>
            <p className="body-md on-dark reveal">
              Con +70% de avance de obra y unidades disponibles cada vez más limitadas, agenda tu asesoría sin costo y descubre tu rendimiento proyectado real, no uno genérico.
            </p>
            <div className="benefit-list">
              {[
              'Tu rendimiento proyectado según la tipología de tu interés',
              'Análisis honesto del mercado de renta vacacional en La Veleta',
              'Plan de pagos diseñado para tu perfil de inversión',
              'Visita guiada al desarrollo en menos de 7 días'].
              map((b, i) =>
              <div className={`benefit-row reveal d${i}`} key={i}>
                  <span className="ic">→</span>
                  <span>{b}</span>
                </div>
              )}
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>);

}

// ====================== TWEAKS ======================
const PALETTES = {
  jade: { name: 'Jade · Arena', ink: '#0a1812', jade: '#173d31', jadeDeep: '#0d2a20', sand: '#c79a5a', sandLt: '#e3c590', sandDeep: '#9d7a44', cream: '#f5ede0', creamLt: '#faf6ed' },
  teal: { name: 'Teal Tulum', ink: '#08171a', jade: '#0e3c44', jadeDeep: '#072025', sand: '#d4a574', sandLt: '#e8c79a', sandDeep: '#a87f4c', cream: '#f3ece1', creamLt: '#faf5ea' },
  terracota: { name: 'Terracota', ink: '#1a0f0a', jade: '#3b1d11', jadeDeep: '#260f08', sand: '#c98c5a', sandLt: '#e0ad84', sandDeep: '#9d6a3c', cream: '#f4ebde', creamLt: '#fbf3e8' },
  midnight: { name: 'Midnight Caribe', ink: '#06121f', jade: '#0f2540', jadeDeep: '#081728', sand: '#d4b574', sandLt: '#ead09a', sandDeep: '#a8884c', cream: '#f4ede3', creamLt: '#fbf6ec' }
};

const HERO_IMAGES = {
  night: 'assets/facade-night-enhanced.png',
  day: 'assets/facade-day.avif',
  pool: 'assets/penthouse-pool.avif',
  garden: 'assets/pool-garden.avif'
};

function TweaksPanelLite({ tweaks, setTweak, onClose }) {
  return (
    <div style={{
      position: 'fixed', bottom: '1.4rem', right: '1.4rem',
      width: 280, background: 'rgba(10,24,18,0.96)', backdropFilter: 'blur(20px)',
      border: '1px solid rgba(199,154,90,0.3)', borderRadius: 8,
      padding: '1.2rem 1.2rem 1.4rem', zIndex: 95,
      color: 'var(--cream-lt)', boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
      fontFamily: 'DM Sans, sans-serif'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: 'var(--sand-lt)', fontStyle: 'italic' }}>Tweaks</div>
        <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'rgba(245,237,224,0.6)', cursor: 'pointer', fontSize: '1.1rem' }}>×</button>
      </div>

      <div style={{ marginBottom: '1.2rem' }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.14em', color: 'rgba(245,237,224,0.55)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          Paleta
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
          {Object.entries(PALETTES).map(([key, p]) =>
          <button
            key={key}
            onClick={() => setTweak('palette', key)}
            style={{
              padding: '0.6rem 0.5rem',
              background: tweaks.palette === key ? 'rgba(199,154,90,0.18)' : 'rgba(245,237,224,0.04)',
              border: '1px solid ' + (tweaks.palette === key ? 'var(--sand-lt)' : 'rgba(245,237,224,0.12)'),
              borderRadius: 4, cursor: 'pointer',
              fontFamily: 'inherit', fontSize: '0.72rem',
              color: tweaks.palette === key ? 'var(--sand-lt)' : 'rgba(245,237,224,0.7)',
              textAlign: 'left', display: 'flex', alignItems: 'center', gap: '0.5rem'
            }}>
            
              <span style={{ display: 'flex', gap: '2px' }}>
                <span style={{ width: 10, height: 10, borderRadius: 2, background: p.jade }} />
                <span style={{ width: 10, height: 10, borderRadius: 2, background: p.sand }} />
              </span>
              {p.name}
            </button>
          )}
        </div>
      </div>

      <div style={{ marginBottom: '1.2rem' }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.14em', color: 'rgba(245,237,224,0.55)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          Hero · imagen
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
          {[
          { key: 'night', label: 'Fachada noche' },
          { key: 'day', label: 'Fachada día' },
          { key: 'pool', label: 'PH terraza' },
          { key: 'garden', label: 'Jardín' }].
          map((opt) =>
          <button
            key={opt.key}
            onClick={() => setTweak('hero', opt.key)}
            style={{
              padding: 0, overflow: 'hidden',
              background: 'rgba(245,237,224,0.04)',
              border: '2px solid ' + (tweaks.hero === opt.key ? 'var(--sand-lt)' : 'rgba(245,237,224,0.12)'),
              borderRadius: 4, cursor: 'pointer',
              fontFamily: 'inherit', fontSize: '0.66rem',
              color: tweaks.hero === opt.key ? 'var(--sand-lt)' : 'rgba(245,237,224,0.7)',
              aspectRatio: '5/3', position: 'relative'
            }}>
            
              <img src={HERO_IMAGES[opt.key]} alt={opt.label} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
              <span style={{ position: 'absolute', bottom: 4, left: 6, right: 6, color: '#fff', textShadow: '0 1px 4px rgba(0,0,0,0.8)', textAlign: 'left' }}>{opt.label}</span>
            </button>
          )}
        </div>
      </div>

      <div>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.14em', color: 'rgba(245,237,224,0.55)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          Tono del copy
        </div>
        <div style={{ display: 'flex', gap: '0.4rem' }}>
          {[
          { key: 'editorial', label: 'Editorial' },
          { key: 'financial', label: 'Financiero' }].
          map((opt) =>
          <button
            key={opt.key}
            onClick={() => setTweak('tone', opt.key)}
            style={{
              flex: 1, padding: '0.55rem 0.5rem',
              background: tweaks.tone === opt.key ? 'rgba(199,154,90,0.18)' : 'rgba(245,237,224,0.04)',
              border: '1px solid ' + (tweaks.tone === opt.key ? 'var(--sand-lt)' : 'rgba(245,237,224,0.12)'),
              borderRadius: 4, cursor: 'pointer',
              fontFamily: 'inherit', fontSize: '0.72rem',
              color: tweaks.tone === opt.key ? 'var(--sand-lt)' : 'rgba(245,237,224,0.7)'
            }}>
            
              {opt.label}
            </button>
          )}
        </div>
      </div>

      <div style={{ marginTop: '1.2rem' }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.14em', color: 'rgba(245,237,224,0.55)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          Filosofía
        </div>
        <div style={{ display: 'flex', gap: '0.4rem' }}>
          {[
          { key: 'caracter', label: 'Carácter' },
          { key: 'compromisos', label: 'Compromisos' }].
          map((opt) =>
          <button
            key={opt.key}
            onClick={() => setTweak('philo', opt.key)}
            style={{
              flex: 1, padding: '0.55rem 0.5rem',
              background: tweaks.philo === opt.key ? 'rgba(199,154,90,0.18)' : 'rgba(245,237,224,0.04)',
              border: '1px solid ' + (tweaks.philo === opt.key ? 'var(--sand-lt)' : 'rgba(245,237,224,0.12)'),
              borderRadius: 4, cursor: 'pointer',
              fontFamily: 'inherit', fontSize: '0.72rem',
              color: tweaks.philo === opt.key ? 'var(--sand-lt)' : 'rgba(245,237,224,0.7)'
            }}>
            
              {opt.label}
            </button>
          )}
        </div>
      </div>

      <p style={{ marginTop: '1rem', fontSize: '0.66rem', color: 'rgba(245,237,224,0.4)', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.08em', textAlign: 'center' }}>
        cambios en vivo
      </p>
    </div>);

}

function applyPalette(p) {
  const root = document.documentElement;
  root.style.setProperty('--ink', p.ink);
  root.style.setProperty('--jade', p.jade);
  root.style.setProperty('--jade-deep', p.jadeDeep);
  root.style.setProperty('--sand', p.sand);
  root.style.setProperty('--sand-lt', p.sandLt);
  root.style.setProperty('--sand-deep', p.sandDeep);
  root.style.setProperty('--cream', p.cream);
  root.style.setProperty('--cream-lt', p.creamLt);
}

// ====================== WHATSAPP FLOAT ======================
function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/525534552642?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20Itza%C3%A9%20Tulum"
      target="_blank"
      rel="noreferrer"
      className="wa-float">
      
      <span className="wa-ic">w</span>
      Hablar con un asesor
    </a>);

}

// ====================== APP SHELL ======================
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "jade",
  "hero": "night",
  "tone": "editorial",
  "philo": "compromisos"
} /*EDITMODE-END*/;

function App() {
  const [tweaks, setTweaks] = React.useState(TWEAK_DEFAULTS);
  const [tweaksOpen, setTweaksOpen] = React.useState(false);
  const [lightbox, setLightbox] = React.useState(null);
  const { pct, scrolled } = useScrollProgress();
  useReveal();

  const setTweak = (k, v) => {
    const next = { ...tweaks, [k]: v };
    setTweaks(next);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [k]: v } }, '*');
  };

  // Apply palette
  React.useEffect(() => {
    const p = PALETTES[tweaks.palette] || PALETTES.jade;
    applyPalette(p);
  }, [tweaks.palette]);

  // Tweaks protocol
  React.useEffect(() => {
    const onMsg = (e) => {
      if (e.data?.type === '__activate_edit_mode') setTweaksOpen(true);
      if (e.data?.type === '__deactivate_edit_mode') setTweaksOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  // Lightbox helpers
  const openLightbox = (images, idx, label) => setLightbox({ images, idx, label });
  const closeLightbox = () => setLightbox(null);
  const next = () => setLightbox((s) => s && { ...s, idx: (s.idx + 1) % s.images.length });
  const prev = () => setLightbox((s) => s && { ...s, idx: (s.idx - 1 + s.images.length) % s.images.length });

  const heroImage = HERO_IMAGES[tweaks.hero] || HERO_IMAGES.night;

  return (
    <>
      <div className="scroll-progress"><span style={{ width: pct + '%' }} /></div>
      <NavBar scrolled={scrolled} />
      <Hero heroImage={heroImage} />
      <StatsRail />
      <PorQue />
      <Tipologias onOpenLightbox={openLightbox} />
      <Calculator />
      <Ubicacion />
      <Amenities />
      <Pagos />
      <Avance />
      <Filosofia variant={tweaks.philo} />
      <CisaStrip />
      <FAQ />
      <Contacto />
      <Footer />
      <WhatsAppFloat />
      {lightbox &&
      <Lightbox
        images={lightbox.images}
        idx={lightbox.idx}
        label={lightbox.label}
        onClose={closeLightbox}
        onNext={next}
        onPrev={prev} />

      }
      {tweaksOpen &&
      <TweaksPanelLite
        tweaks={tweaks}
        setTweak={setTweak}
        onClose={() => {
          setTweaksOpen(false);
          window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*');
        }} />

      }
    </>);

}

// Mount
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);