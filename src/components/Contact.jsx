import { Instagram } from 'lucide-react'

function Contact(){
  return (
    <section id="contatti" className="relative bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Parliamo del tuo progetto</h2>
          <p className="mt-3 text-zinc-300">Raccontaci obiettivi e tempistiche. Ti rispondiamo entro 24 ore.</p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <a href="mailto:studiolemweb@gmail.com" className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition">
            <div className="text-zinc-400 text-sm">Email</div>
            <div className="mt-1 text-white text-lg">studiolemweb@gmail.com</div>
          </a>
          <a href="https://instagram.com/studiolem.agency" target="_blank" className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition">
            <div className="flex items-center gap-2 text-zinc-400 text-sm"><Instagram size={16}/> Instagram</div>
            <div className="mt-1 text-white text-lg">@studiolem.agency</div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
