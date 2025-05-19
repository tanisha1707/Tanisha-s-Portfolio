import type React from "react"
import { Github, Linkedin, Instagram, Twitter, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Tanisha Dhakad
            </h3>
            <p className="text-foreground/70 mt-2">Full Stack Web Developer</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <SocialIcon href="https://linkedin.com/in/tanishadhakad" icon={<Linkedin />} label="LinkedIn" />
              <SocialIcon href="https://github.com/tanisha1707" icon={<Github />} label="GitHub" />
              <SocialIcon href="https://instagram.com/tanzintech" icon={<Instagram />} label="Instagram" />
              <SocialIcon href="https://twitter.com/keepupwithtannz" icon={<Twitter />} label="Twitter" />
            </div>

            <div className="flex flex-col items-center md:items-end space-y-1">
              <a
                href="mailto:tanishadhakad17@gmail.com"
                className="text-foreground/70 hover:text-primary flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                tanishadhakad17@gmail.com
              </a>
              <a href="tel:+916266085385" className="text-foreground/70 hover:text-primary flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +91 62660-85385
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-foreground/60 text-sm">
          © {new Date().getFullYear()} Tanisha Dhakad. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 flex items-center justify-center rounded-full bg-card hover:bg-primary/10 text-foreground hover:text-primary transition-colors duration-300 border border-border hover:border-primary"
      aria-label={label}
    >
      {icon}
    </a>
  )
}
