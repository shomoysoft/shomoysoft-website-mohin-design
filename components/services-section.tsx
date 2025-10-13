import { ArrowRight, Monitor, Smartphone, Palette } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  const services = [
    {
      icon: Monitor,
      title: "Software Solutions",
      description: "Lorem ipsum dolor sit amet consectetur. Metus fermentum mauris venenatis nisi et integer blandit.",
    },
    {
      icon: Smartphone,
      title: "Mobile Application",
      description: "Lorem ipsum dolor sit amet consectetur. Metus fermentum mauris venenatis nisi et integer blandit.",
    },
    {
      icon: Palette,
      title: "Exclusive Design",
      description: "Lorem ipsum dolor sit amet consectetur. Metus fermentum mauris venenatis nisi et integer blandit.",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm text-primary font-medium mb-4">Services</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-bold text-balance max-w-2xl">
              Emphasizing the <span className="text-primary">Value</span> or Benefit to the Customer
            </h2>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Sed vel posuere commodo odio velit. Aliquot lacus diam nibh
              tellus. Euismod felis dictum amet quis turpis.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="bg-muted rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )
          })}

          {/* CTA Card */}
          <div className="bg-primary rounded-2xl p-6 flex flex-col items-center justify-center text-center text-primary-foreground hover:shadow-xl transition-shadow cursor-pointer group">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ArrowRight className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">View all Services</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
