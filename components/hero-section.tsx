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
    <div className="min-h-[calc(100vh-4rem)] py-16 px-6 md:px-12 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-between bg-white text-gray-900">
      {/* Left Side */}
      <motion.div
        className="z-10 flex-1 text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-4">
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Tanisha
          </span>
        </h1>

        <motion.p
          className="text-xl sm:text-2xl font-medium text-gray-700 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Full Stack Web Developer
        </motion.p>

        <p className="text-gray-600 mb-8 max-w-md mx-auto lg:mx-0">
          Passionate about crafting smooth, intuitive digital experiences using modern tech.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="px-6 py-3 text-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transition-transform shadow-md text-white"
          >
            Contact Me
          </Button>

          <div className="flex space-x-4 mt-4 sm:mt-0">
            <SocialIcon href="https://linkedin.com/in/tanishadhakad" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialIcon href="https://github.com/tanisha1707" icon={<Github size={20} />} label="GitHub" />
            <SocialIcon href="https://instagram.com/tanzintech" icon={<Instagram size={20} />} label="Instagram" />
            <SocialIcon href="https://twitter.com/keepupwithtannz" icon={<Twitter size={20} />} label="Twitter" />
          </div>
        </div>
      </motion.div>

      {/* Right Side: Larger Circular Image */}
      <motion.div
        className="z-10 flex-1 flex justify-center mb-12 lg:mb-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.div
          className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border-[6px] border-purple-500 shadow-2xl"
          whileHover={{ rotate: 3, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-19%20at%2015.29.19_9448a051.jpg-ZK5616PHC1X4xTTfySp1j5T2QUS76V.jpeg"
            alt="Tanisha Dhakad"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

function SocialIcon({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300 transition-transform"
      aria-label={label}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  )
}
