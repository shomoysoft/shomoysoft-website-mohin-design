"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { showToast } from "@/lib/toast";
import toast from "react-hot-toast";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false); 


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // start loading
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        showToast("success", "Message sent successfully");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      showToast("error", "Failed to send message");
    } finally {
      setLoading(false); // stop loading
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-12">
          {/* Top Section - Header Left, Description Right */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left - Large Heading */}
            <div>
              <p className="text-sm text-accent mb-3 font-medium">Get in touch</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                It's very <span className="text-primary">easy</span> to connect with us.
              </h2>
            </div>

            {/* Right - Description Text */}
            <div className="flex items-center">
              <p className="text-muted-foreground leading-relaxed text-base">
                Ready to start your next project? Get in touch with us today.
              </p>
            </div>
          </div>

          {/* Bottom Section - Form Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left - Contact Form */}
            <div>
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
                    rows={18}
                    className="w-full resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full px-12">
                  Send Message Now
                </Button>
              </form>
            </div>

            {/* Right - Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/get-in-touch.jpg"
                alt="Professional business team collaborating in a meeting"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
