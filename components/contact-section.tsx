"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Handle form submission here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Form */}
          <div>
            <p className="text-sm text-accent mb-2 font-medium">Get in touch</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              It's very <span className="text-primary">easy</span> to connect with us.
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Sed vel posuere commodo odio velit. Aliquam lacus libero nibh
              tellus. Euismod faucis dictumst vitae in. Ac cursus semper sit vel mauris velit ut alis. Scelerisque
              dictum quis tellus molestie amet quis facilisis ut.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Type your name here"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Type email here"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-semibold mb-2 text-foreground">
                  Website URL
                </label>
                <Input
                  id="website"
                  name="website"
                  type="url"
                  placeholder="Type your website url here"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Type your message here"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full md:w-auto px-12">
                Send Message Now
              </Button>
            </form>
          </div>

          {/* Right side - Image */}
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden">
            <Image
              src="/business-team-meeting-collaboration.jpg"
              alt="Professional business team collaborating in a meeting"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
