import { motion } from 'framer-motion'

const steps = [
  { n: '01', t: 'Scoperta', d: 'Analizziamo obiettivi, target e posizionamento.' },
  { n: '02', t: 'Design', d: 'Wireframe e visual design minimalista, premium.' },
  { n: '03', t: 'Sviluppo', d: 'Siti veloci, responsive e facilmente gestibili.' },
  { n: '04', t: 'Lancio', d: 'Ottimizzazione SEO e supporto continuo.' },
]

function Process(){
  return (
    <section id="process" className="relative bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Il nostro processo</h2>
          <p className="mt-3 text-zinc-300">Un percorso chiaro e trasparente per arrivare al risultato migliore.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
            >
              <div className="text-xs text-zinc-400">{s.n}</div>
              <h3 className="mt-2 text-white font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-zinc-300">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
