"use client"

import { Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              TravelWay
            </h3>
            <p className="text-muted-foreground text-sm">
              Your trusted partner in creating unforgettable travel experiences around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a href="#hero" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-primary transition-colors">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-primary transition-colors">
                  Packages
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Travel Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <p>
            © {currentYear} TravelWay. All rights reserved. | Crafted with{" "}
            <Heart className="inline w-4 h-4 text-primary" /> for travelers
          </p>
          <div className="space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
