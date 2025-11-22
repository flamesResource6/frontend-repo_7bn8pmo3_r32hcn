import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/60 to-slate-950 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-40 pb-24">
        <div className="max-w-2xl">
          <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Eccellenza nei Servizi Web su Misura
          </h1>
          <p className="mt-5 text-zinc-300 leading-relaxed">
            Studio Lem Agency progetta esperienze digitali eleganti e moderne per attività locali.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#portfolio" className="inline-flex items-center rounded-full bg-white text-slate-900 px-6 py-3 font-medium hover:bg-zinc-200 transition">Guarda portfolio</a>
            <a href="mailto:studiolemweb@gmail.com" className="inline-flex items-center rounded-full border border-white/20 text-white px-6 py-3 font-medium hover:bg-white/10 transition">Richiedi preventivo</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
