import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import InternshipSection from "@/components/internship-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/50 dark:from-background dark:to-background">
      <Navbar />
      <div className="container mx-auto px-4">
        <section id="home" className="pt-20">
          <HeroSection />
        </section>

        <section id="about" className="py-20">
          <AboutSection />
        </section>

        <section id="skills" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCategory title="Programming Languages" skills={["C", "Java", "JavaScript"]} />
            <SkillCategory
              title="Web Technologies"
              skills={[
                "HTML",
                "CSS",
                "React.js",
                "Node.js",
                "Next.js",
                "Tailwind CSS",
                "Bootstrap",
                "Chart.js",
                "Shad/cn",
                "Appwrite",
              ]}
            />
            <SkillCategory title="Database & Cloud" skills={["SQL", "MongoDB", "AWS"]} />
            <SkillCategory
              title="Core Skills"
              skills={["UI/UX Design", "Computer Networks", "Operating Systems", "Data Structures", "Compiler Design"]}
            />
          </div>
        </section>

        <section id="internship" className="py-20">
          <InternshipSection />
        </section>

        <section id="experience" className="py-20">
          <ExperienceSection />
        </section>

        <section id="projects" className="py-20">
          <ProjectsSection />
        </section>

        <section id="contact" className="py-20">
          <ContactSection />
        </section>
      </div>
      <Footer />
    </main>
  )
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="bg-card hover:bg-card/80 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl border border-border hover:border-primary/50 dark:hover:border-primary/50">
      <h3 className="text-xl font-semibold mb-4 text-foreground">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
