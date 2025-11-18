import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { CtaBanner } from "@/components/cta-banner"
import { TeamSection } from "@/components/team-section"
import { BusinessConsultantsSection } from "@/components/business-consultants-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <CtaBanner />
      <TeamSection />
      <BusinessConsultantsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
