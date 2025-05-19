"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, MapPin, Briefcase } from "lucide-react"

export default function InternshipSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
      >
        Internship Experience
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-card p-8 rounded-xl shadow-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-semibold">Bomatz IT Solutions</h3>
            <p className="text-lg text-foreground/80">Full Stack Developer</p>
          </div>

          <div className="mt-2 md:mt-0 flex flex-wrap gap-4">
            <div className="flex items-center text-sm text-foreground/70">
              <Calendar className="w-4 h-4 mr-1" />
              <span>From 5th May, for 3 months</span>
            </div>

            <div className="flex items-center text-sm text-foreground/70">
              <MapPin className="w-4 h-4 mr-1" />
              <span>Remote</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-foreground/80">
            Working on full-stack web applications using modern technologies like React, Next.js, Node.js, MongoDB, API
            integration, and Git-based workflows.
          </p>

          <div className="pt-4">
            <h4 className="text-lg font-medium mb-3 flex items-center">
              <Briefcase className="w-5 h-5 mr-2 text-primary" />
              Key Responsibilities
            </h4>

            <ul className="space-y-2 list-disc list-inside text-foreground/80">
              <li>Developing responsive user interfaces using React and Next.js</li>
              <li>Building RESTful APIs with Node.js and Express</li>
              <li>Working with MongoDB for database management</li>
              <li>Implementing authentication and authorization systems</li>
              <li>Collaborating with team members using Git and GitHub</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
