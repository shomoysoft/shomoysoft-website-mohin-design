import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl lg:text-2xl font-bold text-foreground">
              Shomoy<span className="text-primary">SOFT</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About us
            </Link>
            <Link href="/services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#teams" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Teams
            </Link>
            <Link
              href="#portfolio"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Portfolio
            </Link>
          </div>

          <Button variant="outline" className="text-sm font-medium bg-transparent" asChild>
            <Link href="#contact">Contact us</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
