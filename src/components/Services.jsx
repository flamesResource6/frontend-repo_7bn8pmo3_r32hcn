import { motion } from 'framer-motion'
import { Star, Rocket, Gauge, Shield } from 'lucide-react'

const features = [
  { icon: Star, title: 'Design premium', desc: 'Interfacce minimaliste, tipografia curata e attenzione ai dettagli.' },
  { icon: Rocket, title: 'Performance', desc: 'Caricamenti rapidi e ottimizzazione SEO per scalare in visibilità.' },
  { icon: Gauge, title: 'Conversioni', desc: 'Strutture persuasive e call-to-action chiare per generare contatti.' },
  { icon: Shield, title: 'Affidabilità', desc: 'Sicurezza, aggiornamenti e supporto continuo nel tempo.' },
]

function Services() {
  return (
    <section id="services" className="relative bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Cosa facciamo</h2>
          <p className="mt-3 text-zinc-300">Dal concept al lancio: progettazione, sviluppo, copy e ottimizzazione per attività locali.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-white text-slate-900 flex items-center justify-center">
                {<f.icon size={20} />}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
