import { useEffect, useMemo, useState } from 'react'
import {
  Bell,
  Brain,
  ChartLine,
  CheckCircle2,
  Crown,
  Gift,
  Medal,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Zap,
} from 'lucide-react'

const navLinks = [
  { id: 'beneficios', label: 'Beneficios' },
  { id: 'fidelidad', label: 'Fidelidad' },
  { id: 'registro', label: 'Registro' },
  { id: 'contacto', label: 'Contacto' },
]

const featureCards = [
  {
    icon: Brain,
    title: 'Pronósticos inteligentes',
    description: 'Analiza mejores oportunidades con una experiencia enfocada en estrategia.',
  },
  {
    icon: Bell,
    title: 'Notificaciones en tiempo real',
    description: 'Mantente al tanto de eventos y cuotas relevantes con avisos constantes.',
  },
  {
    icon: Gift,
    title: 'Bonos por fidelidad',
    description: 'Premiamos la constancia de quienes participan con frecuencia.',
  },
  {
    icon: Zap,
    title: 'Mercados con pago anticipado',
    description: 'Aprovecha mercados donde una ventaja puede pagarte antes del final.',
  },
]

const initialForm = {
  nombres: '',
  apellido: '',
  genero: '',
  usuario: '',
  password: '',
  nacimiento: '',
  pais: '',
  ciudad: '',
  direccion: '',
  email: '',
  movil: '',
}

const requiredFields = ['nombres', 'apellido', 'genero', 'usuario', 'password', 'nacimiento', 'pais', 'ciudad', 'email', 'movil']

function App() {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.12 },
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const messageText = useMemo(
    () => `Hola, quiero registrarme en InsightBets.

📋 Registro de Jugador

👤 Información Personal
Nombres: ${formData.nombres || '-'}
Apellido: ${formData.apellido || '-'}
Género: ${formData.genero || '-'}
Nombre de usuario: ${formData.usuario || '-'}
Contraseña: ${formData.password || '-'}
Fecha de nacimiento: ${formData.nacimiento || '-'}

📍 Información de Contacto
País: ${formData.pais || '-'}
Ciudad: ${formData.ciudad || '-'}
Dirección: ${formData.direccion || '-'}
Correo electrónico: ${formData.email || '-'}
Número de móvil: ${formData.movil || '-'}`,
    [formData],
  )

  const whatsappUrl = `https://wa.me/593958731399?text=${encodeURIComponent(messageText)}`

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    requiredFields.forEach((field) => {
      if (!formData[field]?.trim()) newErrors[field] = 'Este campo es obligatorio'
    })

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ingresa un correo válido'
    }

    if (formData.nacimiento && !/^\d{2}\/\d{2}\/\d{4}$/.test(formData.nacimiento)) {
      newErrors.nacimiento = 'Usa formato dd/mm/aaaa'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!validateForm()) return
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="relative overflow-x-hidden">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#inicio" className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-neonGreen/80 via-neonCyan/80 to-neonPurple/80 text-black shadow-neon">IB</span>
            InsightBets
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="text-sm text-slate-300 transition hover:text-neonCyan">
                {link.label}
              </a>
            ))}
          </div>
          <a href="#registro" className="rounded-full bg-gradient-to-r from-neonGreen via-neonCyan to-neonPurple px-4 py-2 text-sm font-semibold text-black transition hover:scale-105">
            Registrarme
          </a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="reveal space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-neonCyan/50 bg-neonCyan/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-neonCyan">
              <Sparkles size={14} /> Tu conocimiento se convierte en victoria
            </span>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              Lleva tu pasión por el deporte al <span className="bg-gradient-to-r from-neonGreen to-neonPurple bg-clip-text text-transparent">siguiente nivel</span>
            </h1>
            <p className="text-lg text-slate-300">Convierte tu conocimiento deportivo en oportunidades reales con InsightBets.</p>
            <p className="max-w-xl text-slate-400">Te acompañamos con información, seguimiento constante y una comunidad enfocada en aprovechar cada oportunidad.</p>
            <div className="flex flex-wrap gap-3">
              <a href="#registro" className="rounded-full bg-gradient-to-r from-neonGreen via-neonCyan to-neonPurple px-6 py-3 font-semibold text-black transition hover:scale-105">
                Empieza ahora
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-full border border-neonCyan/60 px-6 py-3 font-semibold text-neonCyan transition hover:bg-neonCyan/15">
                Hablar por WhatsApp
              </a>
            </div>
          </div>
          <div className="reveal relative flex items-center justify-center lg:justify-end">
            <div className="glass-card relative w-full max-w-md p-6 shadow-neon">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-neonPurple/25 blur-2xl" />
              <div className="absolute -left-8 bottom-4 h-24 w-24 rounded-full bg-neonGreen/20 blur-xl" />
              <div className="relative space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="rounded-full border border-white/15 px-3 py-1">Elephant Strategy Engine</span>
                  <span className="text-neonGreen">+27.8%</span>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-neonCyan"><ShieldCheck size={18} /> Insight Score</div>
                    <span className="text-sm font-semibold text-neonGreen">92/100</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-neonGreen to-neonCyan" />
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                  <div className="mb-3 flex items-center gap-2 text-sm text-slate-200"><ChartLine size={18} /> Tendencia de crecimiento</div>
                  <svg viewBox="0 0 260 90" className="h-24 w-full animate-float">
                    <polyline fill="none" stroke="url(#lineGradient)" strokeWidth="4" points="10,70 60,60 110,62 160,40 210,32 250,14" />
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#22ff99" />
                        <stop offset="50%" stopColor="#22d3ee" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <p className="text-sm text-slate-300">Identidad visual inspirada en la fuerza, memoria y estrategia de un elefante ganador.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="beneficios" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="reveal mb-8 max-w-2xl">
            <h2 className="text-3xl font-bold">Todo lo que necesitas para decidir mejor</h2>
            <p className="mt-3 text-slate-400">Plataforma premium con enfoque estratégico, dinámica y diseñada para convertir datos en acción.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featureCards.map(({ icon: Icon, title, description }) => (
              <article key={title} className="reveal glass-card group p-5 transition hover:-translate-y-1 hover:border-neonCyan/40 hover:shadow-neon">
                <Icon className="mb-3 text-neonCyan transition group-hover:text-neonGreen" />
                <h3 className="mb-2 font-semibold">{title}</h3>
                <p className="text-sm text-slate-400">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="fidelidad" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="reveal space-y-4">
              <h2 className="text-3xl font-bold">Premiamos tu fidelidad y constancia</h2>
              <p className="text-slate-300">Entre más participes y más constante seas, más beneficios podrás desbloquear.</p>
              <p className="text-slate-400">Nuestro sistema de niveles reconoce tu disciplina: acumulas puntos por predicción, obtienes bonos progresivos y desbloqueas recompensas exclusivas.</p>
              <div className="inline-flex items-center gap-2 rounded-full bg-neonGreen/15 px-4 py-2 text-sm text-neonGreen"><Trophy size={16} /> Racha activa: 12 días consecutivos</div>
            </div>
            <div className="reveal grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Nivel Bronce', value: '+3% bono', icon: Medal },
                { label: 'Nivel Plata', value: '+7% bono', icon: Crown },
                { label: 'Nivel Oro', value: '+12% bono', icon: Trophy },
                { label: 'Predicciones del mes', value: '48 completadas', icon: Target },
              ].map(({ label, value, icon: Icon }) => (
                <div key={label} className="glass-card p-4">
                  <Icon className="mb-2 text-neonPurple" size={18} />
                  <p className="text-sm text-slate-300">{label}</p>
                  <p className="text-xl font-bold text-neonGreen">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="reveal glass-card p-6 sm:p-8">
            <h2 className="text-3xl font-bold">Pago anticipado: cobra antes del final</h2>
            <p className="mt-3 max-w-3xl text-slate-300">Si tu equipo toma una ventaja de 2 goles, o incluso 1 gol en mercados seleccionados, tu jugada puede cobrarse como ganada al instante.</p>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4 lg:col-span-2">
                <p className="mb-3 text-sm text-slate-400">Simulación en vivo</p>
                <div className="grid grid-cols-3 items-center gap-3 rounded-xl bg-slate-900/80 p-4 text-center">
                  <span className="text-sm text-slate-300">Insight FC</span>
                  <span className="text-3xl font-black text-neonGreen">2 - 0</span>
                  <span className="text-sm text-slate-300">Rival Pro</span>
                </div>
                <div className="mt-3 flex items-center justify-between rounded-xl border border-neonGreen/35 bg-neonGreen/10 px-4 py-3">
                  <span className="text-sm">Estado de jugada</span>
                  <span className="font-bold text-neonGreen">Cobro anticipado activado</span>
                </div>
              </div>
              <div className="space-y-3">
                {['Menos espera', 'Más emoción', 'Más oportunidades'].map((item) => (
                  <div key={item} className="rounded-xl border border-neonCyan/25 bg-neonCyan/10 p-4 text-neonCyan">
                    <CheckCircle2 className="mb-2" size={18} />
                    <p className="font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="reveal grid gap-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Siempre informado, siempre listo</h2>
              <p className="mt-3 text-slate-300">Nos mantenemos en constante comunicación para que estés al tanto de eventos, cuotas y oportunidades importantes.</p>
            </div>
            <div className="space-y-3">
              {[
                'Partidos y eventos deportivos relevantes del día',
                'Movimientos de cuotas y momentos de entrada ideales',
                'Recordatorios de oportunidades para participar',
              ].map((item) => (
                <div key={item} className="glass-card flex items-start gap-3 p-4">
                  <Bell className="mt-1 text-neonPurple" size={18} />
                  <p className="text-sm text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="registro" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="reveal glass-card p-6 sm:p-8">
            <h2 className="text-3xl font-bold">Registro rápido</h2>
            <p className="mt-2 text-slate-400">Completa tus datos y envía el formulario directamente por WhatsApp</p>
            <form className="mt-8 space-y-7" onSubmit={handleSubmit}>
              <div>
                <h3 className="mb-4 text-lg font-semibold">👤 Información Personal</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <InputField label="Nombres" name="nombres" placeholder="Ej: Carlos Andrés" value={formData.nombres} error={errors.nombres} onChange={handleChange} required />
                  <InputField label="Apellido" name="apellido" placeholder="Ej: Rivera" value={formData.apellido} error={errors.apellido} onChange={handleChange} required />
                  <InputField label="Género" name="genero" placeholder="Ej: Masculino / Femenino" value={formData.genero} error={errors.genero} onChange={handleChange} required />
                  <InputField label="Nombre de usuario" name="usuario" placeholder="Ej: insightpro22" value={formData.usuario} error={errors.usuario} onChange={handleChange} required />
                  <InputField label="Contraseña" name="password" placeholder="Mínimo 8 caracteres" type="password" value={formData.password} error={errors.password} onChange={handleChange} required />
                  <InputField label="Fecha de nacimiento" name="nacimiento" placeholder="dd/mm/aaaa" value={formData.nacimiento} error={errors.nacimiento} onChange={handleChange} required />
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-semibold">📍 Información de Contacto</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <InputField label="País" name="pais" placeholder="Ej: Ecuador" value={formData.pais} error={errors.pais} onChange={handleChange} required />
                  <InputField label="Ciudad" name="ciudad" placeholder="Ej: Quito" value={formData.ciudad} error={errors.ciudad} onChange={handleChange} required />
                  <InputField label="Dirección" name="direccion" placeholder="Ej: Av. Principal 123" value={formData.direccion} error={errors.direccion} onChange={handleChange} />
                  <InputField label="Correo electrónico" name="email" placeholder="correo@ejemplo.com" type="email" value={formData.email} error={errors.email} onChange={handleChange} required />
                  <InputField label="Número de móvil" name="movil" placeholder="Ej: +593 99 123 4567" value={formData.movil} error={errors.movil} onChange={handleChange} required />
                </div>
              </div>

              <div>
                <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-neonGreen via-neonCyan to-neonPurple px-6 py-3 text-lg font-bold text-black transition hover:scale-[1.01]">
                  Enviar mensaje
                </button>
                <p className="mt-2 text-center text-sm text-slate-400">Tu información se preparará automáticamente en WhatsApp para que solo debas revisar y enviar.</p>
              </div>
            </form>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="reveal rounded-3xl border border-neonPurple/35 bg-gradient-to-r from-neonPurple/20 via-transparent to-neonCyan/20 p-8 text-center">
            <h2 className="text-3xl font-bold">Únete a la comunidad de InsightBets</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-300">Da el siguiente paso y comienza con una experiencia más estratégica, dinámica y conectada.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href="#registro" className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-105">Registrarme ahora</a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-full border border-white/40 px-6 py-3 font-semibold transition hover:border-neonCyan hover:text-neonCyan">Contactar por WhatsApp</a>
            </div>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
          <div className="reveal grid gap-4 sm:grid-cols-3">
            <a href="https://wa.me/593958731399" target="_blank" rel="noreferrer" className="glass-card p-5 transition hover:-translate-y-1 hover:border-neonGreen/40">
              <p className="text-sm text-slate-400">WhatsApp</p>
              <p className="mt-2 font-semibold text-neonGreen">+593 95 873 1399</p>
            </a>
            <a href="https://sorti.ec/home" target="_blank" rel="noreferrer" className="glass-card p-5 transition hover:-translate-y-1 hover:border-neonCyan/40">
              <p className="text-sm text-slate-400">Plataforma</p>
              <p className="mt-2 font-semibold text-neonCyan">sorti.ec/home</p>
            </a>
            <a href="#registro" className="glass-card p-5 transition hover:-translate-y-1 hover:border-neonPurple/40">
              <p className="text-sm text-slate-400">Empieza hoy</p>
              <p className="mt-2 font-semibold text-neonPurple">Completa tu registro rápido</p>
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center">
        <p className="text-lg font-semibold">InsightBets</p>
        <p className="mt-1 text-sm text-slate-400">Tu conocimiento se convierte en victoria</p>
      </footer>

      <a
        href="https://wa.me/593958731399"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-neon transition hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} className="animate-pulseGlow rounded-full" />
      </a>
    </div>
  )
}

function InputField({ label, name, required = false, error, ...props }) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-slate-200">
        {label} {required && <span className="text-neonGreen">*</span>}
      </span>
      <input
        name={name}
        className={`w-full rounded-xl border bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-neonCyan focus:shadow-[0_0_0_3px_rgba(34,211,238,0.2)] ${
          error ? 'border-rose-500' : 'border-white/10'
        }`}
        {...props}
      />
      {error && <span className="mt-1 block text-xs text-rose-400">{error}</span>}
    </label>
  )
}

export default App
