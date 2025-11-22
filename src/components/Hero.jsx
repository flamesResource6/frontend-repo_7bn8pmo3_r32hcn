function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=2400&q=80"
          alt="Background – innovative tech abstract"
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
      </div>

      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/65 to-slate-950" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-40 pb-24">
        <div className="max-w-2xl">
          <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Eccellenza nei Servizi Web su Misura
          </h1>
          <p className="mt-5 text-zinc-200/90 leading-relaxed">
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
