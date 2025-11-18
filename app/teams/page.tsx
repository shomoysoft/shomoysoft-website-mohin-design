import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { teamMembers } from "@/data/teamMembers"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-primary/5 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 border-0">Our Team</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Meet the <span className="text-primary">Talented People</span> Behind ShomoySoft
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Our diverse team of experts brings together years of experience in software development, AI research,
              design, and quality assurance to deliver exceptional solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Link key={member.id} href={`/teams/${member.id}`} className="group">
                <Card className="overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl h-full">
                  <div className={`relative h-80 ${member.bgColor || "bg-gray-100"} overflow-hidden`}>
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{member.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.slice(0, 4).map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {member.skills.length > 4 && (
                        <Badge variant="secondary" className="text-xs">
                          +{member.skills.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Join Our Team?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {
              "We're always looking for talented individuals who are passionate about technology and innovation. Check out our open positions."
            }
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-white text-primary px-8 py-4 rounded-[50px] font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
