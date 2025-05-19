"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, Code, Users, Lightbulb } from "lucide-react"

const experiences = [
  {
    title: "Udaan Winner",
    description:
      "Secured first place in the Udaan Minor Project Competition by developing a deep learning model that detects polyps in colonoscopy images, aiming to support early cancer detection.",
    icon: Award,
    color: "from-green-400 to-emerald-600",
  },
  {
    title: "MUJHackX at Jaipur",
    description:
      "Developed a comprehensive dashboard for Amazon product managers with features like return fraud detection, customer sentiment analysis, and product success prediction using AI.",
    icon: Code,
    color: "from-blue-400 to-indigo-600",
  },
  {
    title: "Hack the Mountains at Rajkot",
    description:
      "Built 'Franchise Navigator' — an AI-powered platform featuring chatbot support, sentiment-based analytics, and franchise performance predictions for small businesses.",
    icon: Lightbulb,
    color: "from-purple-500 to-violet-700",
  },
  {
    title: "BadTalks Event Lead",
    description:
      "Successfully managed a flagship CEO summit with over 500+ attendees. Oversaw logistics, guest coordination, and ensured smooth event execution as the lead event manager.",
    icon: Users,
    color: "from-orange-400 to-red-500",
  },
]

export default function ExperienceSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 px-6 md:px-10 transition-colors duration-700"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-20 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent select-none"
      >
        My Experiences
      </motion.h2>

      <div className="relative max-w-4xl mx-auto pl-8 border-l-4 border-gradient-purple dark:border-gradient-purple-dark">
        {experiences.map((exp, idx) => (
          <TimelineCard key={exp.title} experience={exp} index={idx} inView={inView} />
        ))}
      </div>
    </section>
  )
}

function TimelineCard({
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
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 * index, ease: "easeOut" }}
      className="relative mb-14 pl-8 last:mb-0"
    >
      {/* Timeline Dot */}
      <span className="absolute -left-7 top-3 w-7 h-7 rounded-full bg-white dark:bg-gray-900 border-4 border-purple-500 dark:border-purple-600 shadow-lg z-20" />

      {/* Card */}
      <article
        tabIndex={0}
        className={`group bg-white dark:bg-[#2b2a3f] border border-purple-200 dark:border-purple-700 rounded-2xl shadow-md p-7 hover:shadow-2xl transition-shadow duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-purple-400`}
      >
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br ${experience.color} text-white mb-5 shadow-md group-hover:scale-110 transform transition-transform duration-300`}
        >
          <Icon className="w-6 h-6" aria-hidden="true" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:underline transition-all duration-300">
          {experience.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed select-text">
          {experience.description}
        </p>
      </article>
    </motion.div>
  )
}
