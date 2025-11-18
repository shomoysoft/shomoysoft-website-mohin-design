"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThumbsUp, CheckCircle2 } from "lucide-react"

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("passion")

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image with badge */}
          <div className="relative">
            <p className="text-sm text-primary font-medium mb-4">About Our Company</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
              Grow <span className="text-primary">Smarter</span> with Our Business IT Solutions
            </h2>

            <div className="relative inline-block">
              <div className="relative w-64 h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/two-business-professionals-reviewing-documents-tog.jpg"
                  alt="Business professionals collaborating"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-32 h-32 bg-primary rounded-full opacity-20" />
              <div className="absolute top-8 -right-12 text-primary text-2xl">✦</div>

              {/* 99% Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3 border border-border">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <ThumbsUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">99%</div>
                  <div className="text-xs text-muted-foreground">
                    Customer
                    <br />
                    Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            {/* Tabs */}
            <div className="flex gap-3 mb-6">
              <Button
                variant={activeTab === "passion" ? "default" : "outline"}
                onClick={() => setActiveTab("passion")}
                className="rounded-full"
              >
                Our Passion
              </Button>
              <Button
                variant={activeTab === "vision" ? "default" : "outline"}
                onClick={() => setActiveTab("vision")}
                className="rounded-full"
              >
                Our Vision
              </Button>
              <Button
                variant={activeTab === "story" ? "default" : "outline"}
                onClick={() => setActiveTab("story")}
                className="rounded-full"
              >
                Our Story
              </Button>
            </div>

            {/* Content */}
            <p className="text-muted-foreground leading-relaxed mb-6">
              We are a forward-thinking software company dedicated to delivering innovative AI and software solutions
              that empower businesses to thrive in the digital age.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">Trusted Partners</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">Company Growth</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">High Quality Services</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">24/7 Hours' Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
