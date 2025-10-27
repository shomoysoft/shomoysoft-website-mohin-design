"use client"

import { useContext } from "react"
import { PageLoaderContext } from "@/components/PageLoaderContext"

export default function PageLoader() {
  const { loading } = useContext(PageLoaderContext)

  if (!loading) return null

  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center pointer-events-none">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}
