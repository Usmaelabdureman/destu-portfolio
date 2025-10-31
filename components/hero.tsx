export function Hero() {
  return (
    <section
      className="min-h-screen relative flex items-center justify-center px-4 overflow-hidden"
      style={{
        backgroundImage: "url(/professional-portrait-of-african-woman-in-agricult.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80" />

      <div className="relative max-w-3xl mx-auto text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up">Destu Muktar</h1>

        <p className="text-2xl md:text-3xl text-primary-foreground font-semibold mb-4 animate-fade-in-up animation-delay-100">
          Cultivating Change, One Field at a Time
        </p>

        <p className="text-lg md:text-xl text-primary-foreground/90 mb-12 leading-relaxed animate-fade-in-up animation-delay-200">
          AgroEconomics Graduate | Hawassa University | Visionary Leader
        </p>

        <div className="flex gap-4 justify-center flex-wrap animate-fade-in-scale animation-delay-300">
          <a
            href="#about"
            className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-semibold shadow-lg"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
