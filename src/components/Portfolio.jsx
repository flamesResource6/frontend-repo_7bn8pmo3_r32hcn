import { motion } from 'framer-motion'

const items = [
  { title: 'Parrucchiere Moderno', tag: 'Parrucchieri', desc: 'Design pulito per salone di hairstyling con prenotazioni online.' },
  { title: 'Centro Estetico Elegance', tag: 'Centri Estetici', desc: 'Palette neutra, servizi chiari e call-to-action distintive.' },
  { title: 'Palestra Performance', tag: 'Palestre', desc: 'Focus su corsi, orari e adesioni, performance e velocità.' },
  { title: 'Personal Trainer Pro', tag: 'Personal Trainer', desc: 'Branding minimal, pacchetti e testimonianze credibili.' },
  { title: 'Salone di Bellezza Luxe', tag: 'Saloni di Bellezza', desc: 'Look & feel premium, galleria fotografica curata.' },
  { title: 'Spa & Wellness', tag: 'Benessere', desc: 'Esperienza rilassante con tipografia sofisticata.' },
]

function Card({ title, tag, desc, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: i * 0.05, duration: 0.5 }}
      className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition"
    >
      <div className="text-xs uppercase tracking-wider text-zinc-400">{tag}</div>
      <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-zinc-300 text-sm leading-relaxed">{desc}</p>
      <div className="mt-6 h-40 rounded-xl bg-gradient-to-br from-zinc-200/60 to-slate-300/40 shadow-inner" />
    </motion.div>
  )
}

function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Portfolio selezionato</h2>
          <p className="mt-3 text-zinc-300">Realizziamo siti web professionali per attività locali con un'estetica moderna, minimal e orientata ai risultati.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Card key={it.title} i={i} {...it} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
