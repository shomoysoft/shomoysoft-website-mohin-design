"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import {
  ArrowLeft,
  Target,
  Eye,
  Award,
  Users,
  Lightbulb,
  Shield,
  TrendingUp,
  Clock,
  HeartHandshake,
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <Button variant="ghost" className="mb-8 -ml-4" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-semibold mb-4">About ShomoySoft</p>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                  Building the <span className="text-primary">Future</span> of Digital Innovation
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  We are a forward-thinking software company dedicated to delivering innovative AI and software
                  solutions that empower businesses to thrive in the digital age.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="rounded-full" asChild>
                    <Link href="#contact">Get in Touch</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full bg-transparent" asChild>
                    <Link href="/services">Our Services</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/professional-team-collaborating-at-modern-office-d.jpg"
                    alt="Team collaboration"
                    width={600}
                    height={400}
                    className="object-cover w-full"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
                <div className="text-white/80">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                <div className="text-white/80">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">99%</div>
                <div className="text-white/80">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                <div className="text-white/80">Team Members</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold mb-4">Our Foundation</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Mission, Vision & <span className="text-primary">Values</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our core principles guide everything we do and shape the way we serve our clients.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower businesses with cutting-edge software and AI solutions that drive growth, efficiency, and
                    innovation in an ever-evolving digital landscape.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the leading technology partner for businesses worldwide, recognized for our innovation,
                    quality, and commitment to client success.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Excellence, integrity, innovation, and collaboration. We believe in building lasting relationships
                    through trust and delivering exceptional results.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="/two-business-professionals-reviewing-documents-tog.jpg"
                  alt="Company story"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
              </div>

              <div>
                <p className="text-primary font-semibold mb-4">Our Story</p>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  A Journey of <span className="text-primary">Innovation</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded over a decade ago, ShomoySoft began with a simple yet powerful vision: to transform
                    businesses through innovative technology solutions. What started as a small team of passionate
                    developers has grown into a full-service software development company.
                  </p>
                  <p>
                    Throughout our journey, we've remained committed to staying at the forefront of technological
                    advancement. From traditional software development to cutting-edge AI solutions, we've continuously
                    evolved to meet the changing needs of our clients.
                  </p>
                  <p>
                    Today, we're proud to serve clients across various industries, helping them navigate digital
                    transformation and achieve their business goals through custom software, AI integration, and
                    comprehensive IT solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold mb-4">Why Choose Us</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                What Makes Us <span className="text-primary">Different</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We combine technical expertise with a client-first approach to deliver exceptional results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-8">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Innovation First</h3>
                  <p className="text-muted-foreground">
                    We stay ahead of technology trends to provide cutting-edge solutions that give you a competitive
                    advantage.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-8">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
                  <p className="text-muted-foreground">
                    Rigorous testing and quality control ensure every solution we deliver meets the highest standards.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-8">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Expert Team</h3>
                  <p className="text-muted-foreground">
                    Our talented professionals bring years of experience and diverse expertise to every project.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-8">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
                  <p className="text-muted-foreground">
                    Round-the-clock support ensures your business operations run smoothly without interruption.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-8">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Proven Results</h3>
                  <p className="text-muted-foreground">
                    Our track record of successful projects and satisfied clients speaks to our commitment to
                    excellence.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-8">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <HeartHandshake className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Client Partnership</h3>
                  <p className="text-muted-foreground">
                    We build long-term relationships, working as your trusted technology partner for sustained success.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image src="/bacground.jpg" alt="Background" fill className="object-cover" />
          </div>
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative solutions can help you achieve your goals and drive growth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="rounded-full" asChild>
                <Link href="#contact">Contact Us Today</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full bg-transparent text-white border-white hover:bg-white/10"
                asChild
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
