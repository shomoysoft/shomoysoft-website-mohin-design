"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(path)
  }

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
            <Link
              href="/"
              className={cn(
                "text-base font-medium transition-colors",
                isActive("/") && pathname === "/" ? "text-primary" : "text-foreground hover:text-primary",
              )}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={cn(
                "text-base font-medium transition-colors",
                isActive("/about") ? "text-primary" : "text-foreground hover:text-primary",
              )}
            >
              About us
            </Link>
            <Link
              href="/services"
              className={cn(
                "text-base font-medium transition-colors",
                isActive("/services") ? "text-primary" : "text-foreground hover:text-primary",
              )}
            >
              Services
            </Link>
            <Link
              href="/teams"
              className={cn(
                "text-base font-medium transition-colors",
                isActive("/teams") ? "text-primary" : "text-foreground hover:text-primary",
              )}
            >
              Teams
            </Link>
            <Link
              href="/portfolio"
              className={cn(
                "text-base font-medium transition-colors",
                isActive("/portfolio") ? "text-primary" : "text-foreground hover:text-primary",
              )}
            >
              Portfolio
            </Link>
          </div>

          <Button variant="outline" className="text-sm font-medium bg-transparent" asChild>
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
