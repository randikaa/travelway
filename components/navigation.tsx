"use client"

import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useCurrency } from "@/lib/currency-context"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const { currency, setCurrency } = useCurrency()

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const handleCurrencyChange = (curr: string) => {
    setCurrency(curr)
    localStorage.setItem("currency", curr)
  }

  const currencyDisplay: Record<string, string> = {
    USD: "USD ($)",
    GBP: "GBP (£)",
    LKR: "LKR (Rs)",
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              TravelWay
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-foreground hover:text-primary transition-colors"
            >
              How it Works
            </button>
            <button
              onClick={() => scrollToSection("destinations")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Destinations
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection("stories")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Stories
            </button>
            <button
              onClick={() => scrollToSection("packages")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Packages
            </button>
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="px-3 py-2 rounded-md border border-border hover:bg-muted transition-colors text-sm font-medium">
                {currencyDisplay[currency]}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleCurrencyChange("USD")}>
                  {currencyDisplay["USD"]}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleCurrencyChange("GBP")}>
                  {currencyDisplay["GBP"]}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleCurrencyChange("LKR")}>
                  {currencyDisplay["LKR"]}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-md border border-border hover:bg-muted transition-colors"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}

            {/* Mobile Menu Toggle */}
            <button onClick={toggleMenu} className="md:hidden p-2 rounded-md border border-border hover:bg-muted">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
            >
              How it Works
            </button>
            <button
              onClick={() => scrollToSection("destinations")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Destinations
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection("stories")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Stories
            </button>
            <button
              onClick={() => scrollToSection("packages")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Packages
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
