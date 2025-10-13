import Image from "next/image"
import Link from "next/link"

const teamMembers = [
  {
    id: 1,
    name: "Jubaier Val",
    slug: "jubaer-hossain",
    title: "Software Engineer | 10 Years Experience",
    image: "/team-member-1.jpg",
    bgColor: "bg-cyan-100",
  },
  {
    id: 2,
    name: "Jubaier Val er Bou",
    slug: "tamanna-tanni",
    title: "Software Engineer | 10 Years Experience",
    image: "/team-member-2.jpg",
    bgColor: "bg-slate-200",
  },
  {
    id: 3,
    name: "Jubaier Val er Bou 2",
    slug: "sarah-ahmed",
    title: "Software Engineer | 10 Years Experience",
    image: "/team-member-3.jpg",
    bgColor: "bg-gray-100",
  },
  {
    id: 4,
    name: "Jubaier Val er Dosto",
    slug: "michael-rahman",
    title: "Software Engineer | 10 Years Experience",
    image: "/team-member-4.jpg",
    bgColor: "bg-rose-100",
  },
]

export function TeamSection() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-accent mb-2">Our Team</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our crew consists of accomplished <span className="text-primary">experts</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur. Sed vel posuere commodo odio amet. Aliquam lacus denim nibh
              tellis. Euismod faucis dictumst eros in. Ac cursus semper sit vel mauris vecu ut quis. Scelerisque dictum.
            </p>
          </div>
        </div>

        {/* Team Member Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <Link
              key={member.id}
              href={`/teams/${member.slug}`}
              className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 block"
            >
              <div className={`relative h-64 ${member.bgColor}`}>
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
