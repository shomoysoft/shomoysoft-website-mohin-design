import { ArrowRight, Monitor, Smartphone, Palette, Cloud, Brain, CircuitBoard } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  const services = [
    {
      icon: Brain,
      title: "Custom AI Development",
      description:
        "We build tailor-made AI models and algorithms that perfectly align with your unique business needs. From machine learning to deep learning, we deliver scalable and robust AI systems that solve complex problems.",
    },
    {
      icon: CircuitBoard,
      title: "Natural Language Processing (NLP)",
      description:
        "Leverage NLP to enhance your customer experience with chatbots, sentiment analysis, language translation, and automated content generation — making your interactions smarter and more efficient.",
    },
    {
      icon: Monitor,
      title: "Custom Software Development",
      description:
        "We design and build tailor-made software solutions to meet your specific business requirements. From enterprise applications to workflow automation, we deliver scalable, secure, and high-performance software tailored to your needs.",
    },
    {
      icon: Smartphone,
      title: "Web & Mobile App Development",
      description:
        "Create seamless digital experiences with responsive web applications and cross-platform mobile apps. Our solutions ensure smooth performance, intuitive UI/UX, and robust backend integration.",
    },
    {
      icon: Cloud,
      title: "Cloud-Based Solutions & DevOps",
      description:
        "Leverage cloud computing for scalability, security, and cost-efficiency. We offer cloud migration, SaaS development, and DevOps services to optimize deployment, monitoring, and CI/CD pipelines.",
    },
    {
      icon: Palette,
      title: "UI/UX Design & Prototyping",
      description:
        "Enhance user engagement with intuitive and visually appealing interfaces. Our design team crafts wireframes, prototypes, and interactive designs for optimal user experience.",
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
              We offer comprehensive AI and software development services to help your business stay ahead of the
              competition.
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
                ></Link>
              </div>
            )
          })}

          {/* CTA Card */}
          <Link
            href="/services"
            className="bg-primary rounded-2xl p-6 flex flex-col items-center justify-center text-center text-primary-foreground hover:shadow-xl transition-shadow cursor-pointer group"
          >
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ArrowRight className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">View all Services</h3>
          </Link>
        </div>
      </div>
    </section>
  )
}
