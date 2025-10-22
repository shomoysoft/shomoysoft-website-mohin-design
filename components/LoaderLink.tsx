"use client"

import type React from "react"

import Link from "next/link"
import { useRouter } from "next/navigation"
import type { ComponentProps } from "react"

interface LoaderLinkProps extends Omit<ComponentProps<typeof Link>, "onClick"> {
  children: React.ReactNode
}

export default function LoaderLink({ children, href, ...props }: LoaderLinkProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.push(href.toString())
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}
