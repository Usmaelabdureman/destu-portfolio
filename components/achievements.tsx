export function Achievements() {
  const achievements = [
    {
      number: "50+",
      label: "Communities Impacted",
      description: "Directly improved livelihoods in rural communities across multiple regions",
    },
    {
      number: "10K+",
      label: "Lives Transformed",
      description: "Through sustainable agriculture initiatives and women empowerment programs",
    },
    {
      number: "25+",
      label: "Initiatives Led",
      description: "Spearheaded innovative agricultural and economic development projects",
    },
    {
      number: "100%",
      label: "Commitment to Excellence",
      description: "Unwavering dedication to sustainable development and community growth",
    },
  ]

  return (
    <section id="achievements" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-4">Achievements & Milestones</h2>
        <div className="h-1 w-20 bg-accent mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-8 border border-border hover:border-primary/50 transition-colors shadow-sm"
            >
              <div className="text-4xl font-bold text-accent mb-3">{achievement.number}</div>
              <h3 className="text-xl font-semibold text-primary mb-3">{achievement.label}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
