"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface PageLoaderContextType {
  isLoading: boolean
  setLoading: (loading: boolean) => void
}

export const PageLoaderContext = createContext<PageLoaderContextType | undefined>(undefined)

export function PageLoaderProvider({ children }: { children: ReactNode }) {
  const [isLoading, setLoading] = useState(false)

  return <PageLoaderContext.Provider value={{ isLoading, setLoading }}>{children}</PageLoaderContext.Provider>
}

export function usePageLoader() {
  const context = useContext(PageLoaderContext)
  if (context === undefined) {
    throw new Error("usePageLoader must be used within a PageLoaderProvider")
  }
  return context
}
