"use client"

import { motion } from "framer-motion"

const skillData = [
  {
    title: "Programming Languages",
    skills: ["C", "Java", "JavaScript"],
  },
  {
    title: "Web Technologies",
    skills: [
      "HTML", "CSS", "React.js", "Node.js", "Next.js",
      "Tailwind CSS", "Bootstrap", "Chart.js", "ShadCN", "Appwrite",
    ],
  },
  {
    title: "Database & Cloud",
    skills: ["Firebase", "MongoDB"],
  },
  {
    title: "Core Skills",
    skills: [
      "UI/UX Design", "Computer Networks", "Operating Systems",
      "Data Structures", "Compiler Design",
    ],
  },
]

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-16  transition-colors duration-500"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        My Skillset
      </motion.h2>

      <div className="flex flex-wrap gap-8 justify-center">
        {skillData.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full sm:w-[300px] bg-white/60 dark:bg-[#2a2a40]/70 border border-purple-200 dark:border-purple-500 backdrop-blur-xl p-6 rounded-3xl shadow-lg hover:shadow-purple-300 dark:hover:shadow-purple-800 hover:scale-[1.03] transition-all duration-300"
          >
            <div className="absolute -top-1 -left-1 w-full h-full rounded-3xl bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-700 dark:to-pink-600 blur-[6px] opacity-20 dark:opacity-30 pointer-events-none" />
            <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-200 mb-4 z-10 relative">
              {category.title}
            </h3>
            <ul className="flex flex-wrap gap-2 z-10 relative">
              {category.skills.map((skill, i) => (
                <li
                  key={i}
                  className="px-3 py-1 text-sm font-medium bg-purple-100 dark:bg-purple-800/40 text-purple-900 dark:text-purple-200 rounded-full border border-purple-300 dark:border-purple-600 shadow-sm hover:scale-105 transition-all duration-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
