"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Check, X } from "lucide-react"
import { softwareServices, aiServices } from "@/data/services"
import LoaderLink from "@/components/LoaderLink"
import { useState } from "react"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ServicesPage() {
  const [open, setOpen] = useState(false)
  const [selectedService, setSelectedService] = useState("")
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleRequestService = (serviceTitle: string) => {
    setSelectedService(serviceTitle)
    setOpen(true)
  }

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      message: "",
    }

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your project details"
    }

    setErrors(newErrors)
    return !newErrors.name && !newErrors.email && !newErrors.message
  }

  const handleSendRequest = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          message: `Service Requested: ${selectedService}\n\n${formData.message}`,
        }),
      })

      const data = await res.json()

      if (res.ok) {
        alert("✅ Message sent successfully")
        setFormData({ name: "", email: "", message: "" })
        setOpen(false)
      } else {
        alert(`❌ ${data.message || "Something went wrong"}`)
      }
    } catch (err) {
      console.error(err)
      alert("❌ Failed to send message")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Our Services
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 text-balance">
                Transform Your Business with <span className="text-primary">Cutting-Edge Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-pretty max-w-2xl leading-relaxed">
                From custom software development to advanced AI solutions, we deliver comprehensive services that drive
                innovation and accelerate your digital transformation.
              </p>
              <div className="flex flex-wrap gap-8 text-sm">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">12+</div>
                  <div className="text-gray-600">Services Offered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">500+</div>
                  <div className="text-gray-600">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">99%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Software Development Services */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Software Development Services</h2>
              <p className="text-lg text-gray-600 text-pretty">
                Build scalable, secure, and high-performance software tailored to your unique business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {softwareServices.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20 h-full flex flex-col"
                  >
                    <CardHeader className="space-y-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <IconComponent className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                      <p className="text-gray-600 leading-relaxed text-pretty">{service.description}</p>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <div className="space-y-3 mb-6 flex-1">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Check className="h-3 w-3 text-primary" />
                            </div>
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-6 border-t space-y-4">
                        <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                        <Button onClick={() => handleRequestService(service.title)} className="w-full group/btn">
                          Request Service
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* AI Services */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">AI & Machine Learning Services</h2>
              <p className="text-lg text-gray-600 text-pretty">
                Harness the power of artificial intelligence to automate processes, gain insights, and stay ahead of the
                competition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20 h-full flex flex-col bg-white"
                  >
                    <CardHeader className="space-y-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <IconComponent className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                      <p className="text-gray-600 leading-relaxed text-pretty">{service.description}</p>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <div className="space-y-3 mb-6 flex-1">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Check className="h-3 w-3 text-primary" />
                            </div>
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-6 border-t space-y-4">
                        <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                        <Button onClick={() => handleRequestService(service.title)} className="w-full group/btn">
                          Request Service
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our services can help transform your business and achieve your goals.
            </p>
            <LoaderLink href="/#contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </LoaderLink>
          </div>
        </section>

        <Footer />

        {/* Request Service Modal */}
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Request a Quote</h2>
                    <p className="text-gray-500 text-sm mt-1">
                      Fill out the form below, and our team will get back to you shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <form onSubmit={handleSendRequest} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="font-semibold">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1"
                    />
                    {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <Label htmlFor="email" className="font-semibold">
                      Your Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1"
                    />
                    {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-semibold">
                      Project Details
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-1"
                    />
                    {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
                  </div>

                  <Button type="submit" disabled={loading} className="w-full">
                    {loading ? "Sending..." : "Send Request"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
