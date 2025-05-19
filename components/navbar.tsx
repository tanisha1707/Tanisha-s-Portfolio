"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Internship", href: "#internship" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 shadow-md"
          : "bg-transparent"
      )}
      aria-label="Primary Navigation"
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="#home"
            className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent select-none"
            onClick={() => scrollToSection("#home")}
            aria-label="Go to Home"
          >
            Tanisha&apos;s Portfolio
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                }}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-pink-500 px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {link.name}
              </Link>
            ))}
            <ModeToggle />
          </div>

          {/* Mobile menu toggle & ModeToggle */}
          <div className="flex md:hidden items-center space-x-2">
            <ModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 backdrop-blur-sm transition-max-height duration-300 ease-in-out overflow-hidden",
          isOpen ? "max-h-screen py-4" : "max-h-0"
        )}
      >
        <div className="flex flex-col px-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(link.href)
              }}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-pink-500 px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
