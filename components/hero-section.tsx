"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Twitter } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 min-h-[calc(100vh-4rem)] py-10">
      {/* Left side */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="block">Hi, I&apos;m Tanisha</span>
          <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Full Stack Web Developer
          </span>
        </h1>

        <p className="text-lg text-foreground/80 mb-8 max-w-xl">
          Passionate about creating beautiful, functional, and user-friendly web applications with modern technologies.
        </p>

        <div className="flex flex-wrap gap-4 mb-8">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={scrollToContact}
          >
            Contact Me
          </Button>

          <div className="flex items-center space-x-4">
            <SocialIcon href="https://linkedin.com/in/tanishadhakad" icon={<Linkedin />} label="LinkedIn" />
            <SocialIcon href="https://github.com/tanisha1707" icon={<Github />} label="GitHub" />
            <SocialIcon href="https://instagram.com/tanzintech" icon={<Instagram />} label="Instagram" />
            <SocialIcon href="https://twitter.com/keepupwithtannz" icon={<Twitter />} label="Twitter" />
          </div>
        </div>
      </motion.div>

      {/* Right side */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-600 animate-pulse blur-md opacity-70"></div>
          <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-primary p-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-19%20at%2015.29.19_9448a051.jpg-ZK5616PHC1X4xTTfySp1j5T2QUS76V.jpeg"
              alt="Tanisha Dhakad"
              fill
              className="rounded-full object-cover object-center"
              sizes="(max-width: 768px) 16rem, (max-width: 1024px) 20rem, 24rem"
              priority
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function SocialIcon({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-card hover:bg-primary/10 text-foreground hover:text-primary transition-colors duration-300 border border-border hover:border-primary"
      aria-label={label}
    >
      {icon}
    </a>
  )
}
