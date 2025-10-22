import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const portfolioProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A full-featured e-commerce platform with payment integration, inventory management, and analytics dashboard.",
    image: "/modern-ecommerce-dashboard.png",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "AI-Powered Chatbot",
    category: "AI Solutions",
    description:
      "Intelligent customer service chatbot using natural language processing to handle customer inquiries 24/7.",
    image: "/ai-chatbot-interface.png",
    technologies: ["Python", "TensorFlow", "React", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Healthcare Management System",
    category: "Custom Software",
    description:
      "Comprehensive healthcare management system for hospitals with patient records, appointments, and billing.",
    image: "/healthcare-management-dashboard.png",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Mobile Banking App",
    category: "Mobile Development",
    description: "Secure mobile banking application with biometric authentication and real-time transaction tracking.",
    image: "/mobile-banking-app.png",
    technologies: ["React Native", "Firebase", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Real Estate Platform",
    category: "Web Development",
    description:
      "Property listing and management platform with virtual tours, mortgage calculator, and agent matching.",
    image: "/real-estate-website.png",
    technologies: ["Next.js", "Prisma", "Tailwind CSS", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Inventory Management System",
    category: "Custom Software",
    description:
      "Cloud-based inventory management system with barcode scanning, stock alerts, and supplier integration.",
    image: "/inventory-dashboard.png",
    technologies: ["Vue.js", "Express", "MySQL", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

const categories = ["All", "Web Development", "AI Solutions", "Custom Software", "Mobile Development"]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-primary/5 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 border-0">Our Work</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Explore Our <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Discover the innovative solutions we&apos;ve built for clients across various industries. Each project
              showcases our commitment to excellence and cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button key={category} variant={category === "All" ? "default" : "outline"} className="rounded-full">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <Button size="sm" variant="secondary" className="flex-1" asChild>
                        <Link href={project.liveUrl}>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <Link href={project.githubUrl}>
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let&apos;s work together to bring your vision to life. Our team is ready to help you build something
            amazing.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-white text-primary px-8 py-4 rounded-[50px] font-semibold hover:bg-gray-100 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
