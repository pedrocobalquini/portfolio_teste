import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="container px-4 py-16 md:py-24">
        <div className="flex flex-col items-start mb-12">
          <Link href="/" className="flex items-center text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">My Projects</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            A collection of my recent work, personal projects, and experiments. Each project represents a unique
            challenge and learning experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden flex flex-col">
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                {project.demoUrl && (
                  <Button variant="outline" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.codeUrl && (
                  <Button variant="outline" asChild>
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      View Code
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 mt-auto">
        <div className="container px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} João Silva. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

// Mock data for projects
const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product catalog, cart, and checkout functionality.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  {
    title: "Task Management App",
    description: "A productivity app for managing tasks, projects, and deadlines with team collaboration features.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Redux", "Firebase", "Material UI"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather information with forecasts, maps, and location-based data.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js", "CSS3"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills with a minimalist design.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  {
    title: "Recipe Finder",
    description: "Search and discover recipes based on ingredients, dietary restrictions, and cuisine preferences.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  {
    title: "Fitness Tracker",
    description: "Track workouts, set goals, and monitor progress with visual analytics and reports.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React Native", "Firebase", "Redux", "D3.js"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
]

