import { Menu } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-900/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-slate-100 to-zinc-300 shadow-inner" />
          <span className="font-semibold tracking-tight text-white">Studio Lem Agency</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          <button onClick={() => scrollTo('portfolio')} className="hover:text-white transition">Portfolio</button>
          <button onClick={() => scrollTo('services')} className="hover:text-white transition">Servizi</button>
          <button onClick={() => scrollTo('process')} className="hover:text-white transition">Processo</button>
          <button onClick={() => scrollTo('contatti')} className="hover:text-white transition">Contatti</button>
          <a href="mailto:studiolemweb@gmail.com" className="ml-2 inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-white hover:bg-white/10 transition">Parla con noi</a>
        </nav>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 text-zinc-200">
          <div className="grid gap-2">
            <button onClick={() => scrollTo('portfolio')} className="text-left py-2">Portfolio</button>
            <button onClick={() => scrollTo('services')} className="text-left py-2">Servizi</button>
            <button onClick={() => scrollTo('process')} className="text-left py-2">Processo</button>
            <button onClick={() => scrollTo('contatti')} className="text-left py-2">Contatti</button>
            <a href="mailto:studiolemweb@gmail.com" className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-white hover:bg-white/10 transition mt-2">Parla con noi</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
