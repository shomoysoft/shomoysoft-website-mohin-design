import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Sample Project 1",
    description: "Lorem ipsum dolor sit amet adipiscing elit. Morbi lorem mauris molestie non consequat.",
    image: "/design-color-swatches-workspace.jpg",
  },
  {
    id: 2,
    title: "Sample Project 2",
    description: "Lorem ipsum dolor sit amet adipiscing elit. Morbi lorem mauris molestie non consequat.",
    image: "/charts-graphs-analytics.jpg",
  },
  {
    id: 3,
    title: "Sample Project 3",
    description: "Lorem ipsum dolor sit amet adipiscing elit. Morbi lorem mauris molestie non consequat.",
    image: "/mobile-app-screens.jpg",
  },
]

export function PortfolioSection() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-accent mb-2">Our Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              A <span className="text-primary">curated</span> selection of our best work
            </h2>
          </div>
          <div className="hidden md:block">
            <p className="text-muted-foreground max-w-md">
              Lorem ipsum dolor sit amet consectetur. Sed vel posuere commodo odio amet. Aliquam lacus denim nibh
              tellis. Euismod faucis dictumst eros in. Ac cursus semper sit vel mauris vecu ut quis. Scelerisque dictum.
            </p>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 bg-muted">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <Link href="#" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                  Full Project <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-right">
          <Link href="#" className="text-sm font-medium text-foreground hover:text-primary">
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
