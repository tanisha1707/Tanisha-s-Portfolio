"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="max-w-4xl mx-auto"
    >
      <motion.h2
        variants={itemVariants}
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
      >
        About Me
      </motion.h2>

      <motion.div
        variants={itemVariants}
        className="bg-card p-8 rounded-xl shadow-lg border border-border hover:border-primary/50 transition-all duration-300"
      >
        <h3 className="text-2xl font-semibold mb-4">Tanisha Dhakad</h3>

        <p className="text-foreground/80 mb-6">
          I am a passionate Full Stack Web Developer with expertise in MERN stack, DSA, event management, and team
          leadership. I enjoy building modern web applications and solving complex problems with elegant solutions.
        </p>

        <div className="space-y-6">
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
            description="Developed a self-disciplined study approach and time management skills."
          />

          <EducationItem
            degree="Secondary (X), CBSE Board"
            institution="Maruti Academy Satrunda"
            duration="Completed May 2020"
            location="Ratlam, India"
            description="Served as Vice-Captain of Blue House, leading teams in inter-house events."
          />
        </div>
      </motion.div>
    </motion.div>
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
    <div className="border-l-2 border-primary/50 pl-4 py-2">
      <h4 className="text-lg font-medium">{degree}</h4>
      <p className="text-foreground/80">{institution}</p>
      <div className="flex flex-wrap gap-x-4 text-sm text-foreground/60 mt-1">
        <span>{duration}</span>
        <span>{location}</span>
      </div>
      {gpa && <p className="text-sm font-medium mt-1">GPA: {gpa}</p>}
      {description && <p className="text-sm mt-1">{description}</p>}
    </div>
  )
}
