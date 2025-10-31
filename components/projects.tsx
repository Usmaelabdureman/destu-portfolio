export function Projects() {
  const projects = [
    {
      title: "Rural Community Cooperative Network",
      description:
        "Established sustainable agricultural cooperatives linking 2,000+ farmers to fair-trade markets, increasing household income by 40%.",
      category: "Community Development",
    },
    {
      title: "Women in Sustainable Agriculture",
      description:
        "Created training programs empowering 3,000+ rural women with modern farming techniques and business skills.",
      category: "Empowerment",
    },
    {
      title: "AgroEconomics Policy Advocacy",
      description:
        "Contributed to national agricultural policy frameworks promoting sustainable practices and smallholder farmer protection.",
      category: "Policy",
    },
    {
      title: "Climate-Smart Farming Initiative",
      description:
        "Pioneered climate adaptation strategies across 150+ farms, increasing crop resilience and soil health.",
      category: "Innovation",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-4">Key Projects & Initiatives</h2>
        <div className="h-1 w-20 bg-accent mb-12"></div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-muted/30 border border-border rounded-lg p-8 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-2xl font-semibold text-primary flex-1">{project.title}</h3>
                <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap">
                  {project.category}
                </span>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
