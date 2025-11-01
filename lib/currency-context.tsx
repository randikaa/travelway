"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface CurrencyContextType {
  currency: string
  setCurrency: (currency: string) => void
  convertPrice: (price: number) => number
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

const CONVERSION_RATES: Record<string, number> = {
  USD: 1,
  GBP: 0.79,
  LKR: 329.5,
}

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState("USD")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedCurrency = localStorage.getItem("currency") || "USD"
    setCurrency(savedCurrency)
  }, [])

  const convertPrice = (price: number) => {
    if (!mounted) return price
    const rate = CONVERSION_RATES[currency] || 1
    return Math.round(price * rate)
  }

  return <CurrencyContext.Provider value={{ currency, setCurrency, convertPrice }}>{children}</CurrencyContext.Provider>
}

export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (!context) {
    throw new Error("useCurrency must be used within CurrencyProvider")
  }
  return context
}
