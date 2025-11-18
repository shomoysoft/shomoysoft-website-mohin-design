"use client"

import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import LoaderLink from "./LoaderLink"

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
          <LoaderLink href="/" className="flex items-center gap-2">
            <span className="text-xl lg:text-2xl font-bold text-foreground">
              Shomoy<span className="text-primary">SOFT</span>
            </span>
          </LoaderLink>

          <div className="hidden md:flex items-center gap-8">
            <LoaderLink
              href="/"
              className={cn(
                "text-base font-medium transition-colors",
                isActive("/") && pathname === "/" ? "text-primary" : "text-foreground hover:text-primary",
              )}
            >
              Home
            </LoaderLink>
            <LoaderLink
              href="/about"
              className={cn(
                "text-base font-medium transition-colors",
                isActive("/about") ? "text-primary" : "text-foreground hover:text-primary",
              )}
            >
              About us
            </LoaderLink>
            <LoaderLink
              href="/services"
              className={cn(
                "text-base font-medium transition-colors",
                isActive("/services") ? "text-primary" : "text-foreground hover:text-primary",
              )}
            >
              Services
            </LoaderLink>
            <LoaderLink
              href="/teams"
              className={cn(
                "text-base font-medium transition-colors",
                isActive("/teams") ? "text-primary" : "text-foreground hover:text-primary",
              )}
            >
              Teams
            </LoaderLink>
            <LoaderLink
              href="/portfolio"
              className={cn(
                "text-base font-medium transition-colors",
                isActive("/portfolio") ? "text-primary" : "text-foreground hover:text-primary",
              )}
            >
              Portfolio
            </LoaderLink>
          </div>

          <Button variant="outline" className="text-sm font-medium bg-transparent" asChild>
            <LoaderLink href="/contact">Contact us</LoaderLink>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
