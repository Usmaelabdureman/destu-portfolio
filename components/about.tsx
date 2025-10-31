export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-4">About Me</h2>
        <div className="h-1 w-20 bg-accent mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <img
              src="/woman-in-agricultural-field-sustainable-farming.jpg"
              alt="Destu in agricultural setting"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Destu Muktar is not just a name — she is a movement. A proud graduate of Hawassa University's
              AgroEconomics Department, Destu embodies the fusion of intellect, resilience, and purpose.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Born with a deep connection to the land and its people, Destu pursued AgroEconomics not merely as a
              discipline, but as a calling. Her academic path was marked by excellence, her leadership by compassion,
              and her vision by impact.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              She has championed sustainable agricultural practices, empowered rural communities, and inspired countless
              young women to dream beyond boundaries.
            </p>

            <div className="pt-6 border-t border-border">
              <h3 className="text-xl font-semibold text-primary mb-4">Education</h3>
              <p className="text-foreground/80">
                <strong>Bachelor's Degree</strong> in AgroEconomics
                <br />
                <span className="text-foreground/60">Hawassa University, Ethiopia</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
