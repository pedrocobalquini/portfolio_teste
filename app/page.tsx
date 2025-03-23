import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="container px-4 py-24 md:py-32">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">João Silva</span>
            <span className="block mt-2 text-primary">Web Developer</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Creating beautiful, functional, and user-friendly web experiences. Specialized in React, Next.js, and modern
            frontend technologies.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild>
              <Link href="/projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/curriculum">Curriculum</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">About Me</h2>
          <div className="prose prose-lg dark:prose-invert">
            <p>
              I'm a passionate web developer with 5 years of experience building modern web applications. My journey in
              web development started with a curiosity about how websites work, and has evolved into a career focused on
              creating exceptional digital experiences.
            </p>
            <p>
              I believe in clean code, thoughtful user interfaces, and performance-optimized applications. When I'm not
              coding, you can find me exploring new technologies, contributing to open source, or enjoying outdoor
              activities.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container px-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center p-4 bg-background rounded-lg shadow-sm">
                <div className="h-12 w-12 flex items-center justify-center mb-4">{skill.icon}</div>
                <h3 className="font-medium">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="flex items-center gap-2" asChild>
              <a href="mailto:hello@example.com">
                <Mail className="h-4 w-4" />
                hello@example.com
              </a>
            </Button>
            <Button variant="outline" className="flex items-center gap-2" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" className="flex items-center gap-2" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} João Silva. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a href="mailto:hello@example.com" aria-label="Email">
              <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Mock data for skills
const skills = [
  { name: "React", icon: <div className="text-blue-500 text-2xl font-bold">⚛️</div> },
  { name: "Next.js", icon: <div className="text-black dark:text-white text-2xl font-bold">N</div> },
  { name: "TypeScript", icon: <div className="text-blue-600 text-2xl font-bold">TS</div> },
  { name: "JavaScript", icon: <div className="text-yellow-400 text-2xl font-bold">JS</div> },
  { name: "HTML5", icon: <div className="text-orange-500 text-2xl font-bold">H5</div> },
  { name: "CSS3", icon: <div className="text-blue-400 text-2xl font-bold">C3</div> },
  { name: "Tailwind CSS", icon: <div className="text-cyan-500 text-2xl font-bold">TW</div> },
  { name: "Node.js", icon: <div className="text-green-500 text-2xl font-bold">NJ</div> },
]

