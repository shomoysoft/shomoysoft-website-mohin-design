"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button as AntButton, Modal, Form, Input } from "antd"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { softwareServices, aiServices } from "@/data/services"
import LoaderLink from "@/components/LoaderLink"
import { useState } from "react"
import { showToast } from "@/lib/toast"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const [open, setOpen] = useState(false)
  const [selectedService, setSelectedService] = useState("")
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()

  const handleRequestService = (serviceTitle: string) => {
    setSelectedService(serviceTitle)
    setOpen(true)
  }

  const handleSendRequest = async (values: any) => {
    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          message: `Service Requested: ${selectedService}\n\n${values.message}`,
        }),
      })

      const data = await res.json()

      if (res.ok) {
        showToast("success", "Message sent successfully")
        form.resetFields()
        setOpen(false)
      } else {
        showToast("error", data.message || "Something went wrong")
      }
    } catch (err) {
      console.error(err)
      showToast("error", "Failed to send message")
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
            <LoaderLink href="/">
              <Button variant="ghost" className="mb-8 -ml-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </LoaderLink>

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
        <section className="py-24 bg-gray-50">
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
        <section className="py-24 bg-primary text-white">
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
        <Modal
          title={
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Request a Quote</h2>
              <p className="text-gray-500 text-sm mt-1">
                Fill out the form below, and our team will get back to you shortly.
              </p>
            </div>
          }
          open={open}
          onCancel={() => setOpen(false)}
          footer={null}
          centered
          width={500}
          styles={{ body: { paddingTop: 8 } }}
        >
          <Form layout="vertical" form={form} onFinish={handleSendRequest}>
            <Form.Item
              label={<span className="font-semibold">Your Name</span>}
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input placeholder="Enter your full name" size="large" className="rounded-lg" />
            </Form.Item>

            <Form.Item
              label={<span className="font-semibold">Your Email</span>}
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Enter a valid email" },
              ]}
            >
              <Input placeholder="Enter your email address" size="large" className="rounded-lg" />
            </Form.Item>

            <Form.Item
              label={<span className="font-semibold">Project Details</span>}
              name="message"
              rules={[
                {
                  required: true,
                  message: "Please enter your project details",
                },
              ]}
            >
              <Input.TextArea placeholder="Tell us about your project..." rows={6} className="rounded-lg" />
            </Form.Item>

            <Form.Item>
              <AntButton
                type="primary"
                htmlType="submit"
                loading={loading}
                block
                size="large"
                className="py-4 text-white font-semibold"
              >
                Send Request
              </AntButton>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  )
}
