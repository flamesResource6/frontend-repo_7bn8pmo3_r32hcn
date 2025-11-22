import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Process from './components/Process'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-zinc-100">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <Process />
        <Contact />
        <footer className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
            <p>© {new Date().getFullYear()} Studio Lem Agency — Tutti i diritti riservati</p>
            <div className="flex items-center gap-6">
              <a href="mailto:studiolemweb@gmail.com" className="hover:text-white transition">Email</a>
              <a href="https://instagram.com/studiolem.agency" className="hover:text-white transition" target="_blank">Instagram</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
