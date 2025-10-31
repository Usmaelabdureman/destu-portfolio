export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Destu's vision transformed our entire community. Her commitment to sustainable agriculture changed how we farm and how we think about our future.",
      author: "Almaz H.",
      role: "Cooperative Leader, Rural Community",
    },
    {
      quote:
        "As a young woman in agriculture, seeing Destu's achievements and leadership gave me courage to pursue my dreams without boundaries.",
      author: "Marta T.",
      role: "Agricultural Entrepreneur",
    },
    {
      quote:
        "Her work bridges economics and farming in ways I had never seen before. She is a true visionary in AgroEconomics.",
      author: "Prof. Solomon K.",
      role: "Academic Colleague, Hawassa University",
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-4">Testimonials & Quotes</h2>
        <div className="h-1 w-20 bg-accent mb-12"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background rounded-lg p-8 border border-border shadow-sm">
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-primary">{testimonial.author}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
