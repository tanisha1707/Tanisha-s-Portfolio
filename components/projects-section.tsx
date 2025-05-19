"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "GDG Official Website",
      description:
        "Developed an official website for the GDG Club of the college, enhancing community engagement. Designed a modern UI ensuring seamless navigation and responsiveness.",
      technologies: ["HTML", "CSS", "JavaScript", "React.js", "TailwindCSS", "Firebase"],
      demoUrl: "https://gdgipsa.vercel.app/",
      //githubUrl: "#https://github.com/aniketsingh1023/GDG-OC-WEBSITE",
    },
    {
      title: "Finance Management System",
      description:
        "Developed Horizon, a financial SaaS platform for secure multi-bank connectivity, real-time transactions, and finance management. Integrated Plaid API for banking, Dwolla for fund transfers, and SSR authentication for security.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Chart.js", "Appwrite", "Dwolla"],
      demoUrl: "#",
      //githubUrl: "#",
    },
    {
      title: "Bad Talks Website",
      description:
        "Created an event website with speaker and agenda listing for a CEO summit at college with footfall of 500+ students.",
      technologies: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB"],
      demoUrl: "https://bad-talks.iesipsacademystudentclubs.org/#home",
      //githubUrl: "#",
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
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} inView={inView} />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: {
    title: string
    description: string
    technologies: string[]
    demoUrl: string
    //githubUrl: string
  }
  index: number
  inView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="bg-card rounded-xl shadow-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl overflow-hidden flex flex-col h-full"
    >
      <div className="p-6 flex-1">
        <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
        <p className="text-foreground/80 mb-4 line-clamp-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 pt-0 mt-auto flex gap-3">
        <Button
          asChild
          variant="default"
          size="sm"
          className="flex-1 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
        >
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            Demo
          </a>
        </Button>
         
        
      </div>
    </motion.div>
  )
}
