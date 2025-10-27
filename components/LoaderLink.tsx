"use client"

import type React from "react"
import { useContext, useTransition } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import type { ComponentProps } from "react"
import { PageLoaderContext } from "@/components/PageLoaderContext"

interface LoaderLinkProps extends Omit<ComponentProps<typeof Link>, "onClick"> {
  children: React.ReactNode
}

export default function LoaderLink({ children, href, ...props }: LoaderLinkProps) {
  const router = useRouter()
  const { setLoading } = useContext(PageLoaderContext)
  const [isPending, startTransition] = useTransition()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    setLoading(true)

    startTransition(() => {
      router.push(href.toString())
      setTimeout(() => {
        setLoading(false)
      }, 500)
    })
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}
