"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Award, Briefcase, MapPin } from "lucide-react"
import Image from "next/image"

const consultants = [
  {
    name: "Dr. Michael Anderson",
    title: "Senior Business Strategy Consultant",
    location: "San Francisco, USA",
    country: "🇺🇸",
    image: "/professional-business-consultant-male.jpg",
    expertise: ["Digital Transformation", "Market Expansion", "Strategic Planning"],
    experience: "15+ Years",
    credentials: "MBA Harvard, Former VP at Fortune 500",
    bio: "Specializes in helping tech companies scale globally with proven strategies for international market penetration.",
  },
  {
    name: "Sarah Williams",
    title: "International Business Development Expert",
    location: "New York, USA",
    country: "🇺🇸",
    image: "/professional-business-consultant-female.jpg",
    expertise: ["Business Development", "Partnership Strategy", "Growth Hacking"],
    experience: "12+ Years",
    credentials: "MBA Stanford, Ex-McKinsey Consultant",
    bio: "Expert in building strategic partnerships and driving exponential growth for startups and enterprises.",
  },
  {
    name: "James Chen",
    title: "Technology & Innovation Advisor",
    location: "Seattle, USA",
    country: "🇺🇸",
    image: "/professional-tech-consultant-asian-male.jpg",
    expertise: ["AI/ML Strategy", "Product Innovation", "Tech Leadership"],
    experience: "18+ Years",
    credentials: "PhD MIT, Former CTO at Tech Unicorn",
    bio: "Guides companies through digital transformation with cutting-edge technology solutions and innovation frameworks.",
  },
]

export function BusinessConsultantsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Globe className="h-4 w-4" />
            <span className="text-sm font-semibold">Global Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Our International <span className="text-primary">Business Consultants</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Backed by world-class advisors from leading tech hubs, bringing Fortune 500 experience and proven strategies
            to ensure your success in the global market.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <div className="flex items-center gap-2 text-sm">
            <Award className="h-5 w-5 text-primary" />
            <span className="font-semibold">45+ Years Combined Experience</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Briefcase className="h-5 w-5 text-primary" />
            <span className="font-semibold">Fortune 500 Background</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Globe className="h-5 w-5 text-primary" />
            <span className="font-semibold">International Network</span>
          </div>
        </div>

        {/* Consultants Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {consultants.map((consultant, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 bg-white overflow-hidden"
            >
              {/* Image with overlay */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <Image
                  src={consultant.image || "/placeholder.svg"}
                  alt={consultant.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  <span className="text-xs font-semibold">
                    {consultant.country} {consultant.location.split(",")[0]}
                  </span>
                </div>
              </div>

              <div className="p-6">
                {/* Name and Title */}
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{consultant.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{consultant.title}</p>

                {/* Experience Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                    {consultant.experience}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{consultant.location}</span>
                </div>

                {/* Bio */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{consultant.bio}</p>

                {/* Credentials */}
                <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <p className="text-xs font-semibold text-gray-600 mb-1">Credentials</p>
                  <p className="text-xs text-gray-700">{consultant.credentials}</p>
                </div>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2">
                  {consultant.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-white rounded-2xl shadow-lg border-2 border-primary/20">
            <h3 className="text-2xl font-bold mb-2">Backed by Global Excellence</h3>
            <p className="text-muted-foreground mb-4 max-w-2xl">
              Our international consultants ensure we deliver world-class solutions with proven methodologies from
              leading tech companies and business schools.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>🎓 Harvard • Stanford • MIT</span>
              <span>•</span>
              <span>💼 McKinsey • Fortune 500</span>
              <span>•</span>
              <span>🌍 Global Network</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
