"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, Code, Users, Lightbulb } from "lucide-react"

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "Udaan Winner",
      description: "Won the minor project competition in college by building a polyp detection model.",
      icon: Award,
      color: "from-green-500 to-emerald-700",
    },
    {
      title: "MUJHackX Hackathon at Jaipur",
      description: "Worked on a dashboard for Amazon PMs with fraud detection, sentiment analysis.",
      icon: Code,
      color: "from-blue-500 to-indigo-700",
    },
    {
      title: "Hack The Mountains at Rajkot",
      description: "Built Franchise Navigator with chatbot, sales prediction, and franchise management.",
      icon: Lightbulb,
      color: "from-purple-500 to-violet-700",
    },
    {
      title: "BadTalks Event Management",
      description: "Managed a CEO summit at college with footfall of 500+ students.",
      icon: Users,
      color: "from-orange-500 to-red-700",
    },
  ]

  return (
    <div ref={ref} className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
      >
        Experience
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((experience, index) => (
          <ExperienceCard key={experience.title} experience={experience} index={index} inView={inView} />
        ))}
      </div>
    </div>
  )
}

function ExperienceCard({
  experience,
  index,
  inView,
}: {
  experience: {
    title: string
    description: string
    icon: React.ElementType
    color: string
  }
  index: number
  inView: boolean
}) {
  const Icon = experience.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="bg-card p-6 rounded-xl shadow-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-lg bg-gradient-to-br ${experience.color} text-white`}>
          <Icon className="w-6 h-6" />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
          <p className="text-foreground/80">{experience.description}</p>
        </div>
      </div>
    </motion.div>
  )
}
