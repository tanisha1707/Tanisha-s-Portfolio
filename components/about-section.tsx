"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="max-w-5xl px-6 mx-auto py-20"
    >
      <motion.h2
        variants={itemVariants}
        className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
      >
        About Me
      </motion.h2>

      <motion.div
        variants={itemVariants}
        className="bg-white dark:bg-zinc-900 p-10 rounded-3xl shadow-xl border border-zinc-200 dark:border-zinc-800 transition-transform duration-500 hover:scale-[1.02]"
      >
        <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Tanisha Dhakad</h3>

        <p className="text-base text-zinc-700 dark:text-zinc-300 mb-10 leading-relaxed">
          I’m a Full Stack Web Developer (MERN), strong in DSA and passionate about leadership and event management.
          I love solving real-world problems and crafting modern web applications that are fast, responsive, and impactful.
        </p>

        <div className="space-y-10 relative">
          <div className="absolute left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full opacity-60" />

          <EducationItem
            degree="Bachelor of Technology"
            institution="IES IPS Academy"
            duration="Nov 2022 - May 2026"
            location="Indore, India"
            gpa="8.5/10.00 (Current)"
          />

          <EducationItem
            degree="Senior Secondary (XII)"
            institution="Gyan Ganga Public School"
            duration="Completed May 2022"
            location="Bhatpachlana, India"
            description="Built strong time management and self-discipline through independent study."
          />

          <EducationItem
            degree="Secondary (X)"
            institution="Maruti Academy Satrunda"
            duration="Completed May 2020"
            location="Ratlam, India"
            description="Served as Vice-Captain of Blue House, leading teams in inter-house events."
          />
        </div>
      </motion.div>
    </motion.section>
  )
}

function EducationItem({
  degree,
  institution,
  duration,
  location,
  gpa,
  description,
}: {
  degree: string
  institution: string
  duration: string
  location: string
  gpa?: string
  description?: string
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.4 },
        },
      }}
      className="relative pl-8"
    >
      <div className="absolute left-[-0.8rem] top-1 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-md border-2 border-white dark:border-zinc-800" />
      <h4 className="text-xl font-semibold text-zinc-900 dark:text-white">{degree}</h4>
      <p className="text-zinc-700 dark:text-zinc-300">{institution}</p>
      <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 flex flex-wrap gap-4">
        <span>{duration}</span>
        <span>{location}</span>
      </div>
      {gpa && <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-2">GPA: {gpa}</p>}
      {description && <p className="text-sm mt-2 text-zinc-600 dark:text-zinc-300">{description}</p>}
    </motion.div>
  )
}
