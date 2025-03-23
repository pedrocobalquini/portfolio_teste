import Link from "next/link"
import { ArrowLeft, Download, Mail, Phone, MapPin, Calendar, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Navbar from "@/components/navbar"

export default function CurriculumPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="container px-4 py-16 md:py-24">
        <div className="flex flex-col items-start mb-12">
          <Link href="/" className="flex items-center text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Curriculum Vitae</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                My professional experience, education, and skills
              </p>
            </div>
            <Button className="mt-4 md:mt-0" asChild>
              <a href="#" download>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Mail className="mr-2 h-4 w-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">hello@example.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="mr-2 h-4 w-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="mr-2 h-4 w-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">São Paulo, Brazil</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="mr-2 h-4 w-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Website</p>
                    <p className="text-sm text-muted-foreground">www.example.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium">Technical Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Node.js"].map(
                      (skill) => (
                        <div key={skill} className="bg-muted text-muted-foreground text-sm px-2.5 py-0.5 rounded-md">
                          {skill}
                        </div>
                      ),
                    )}
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="space-y-2">
                  <p className="font-medium">Languages</p>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm">Portuguese</span>
                      <span className="text-sm text-muted-foreground">Native</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">English</span>
                      <span className="text-sm text-muted-foreground">Fluent</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Spanish</span>
                      <span className="text-sm text-muted-foreground">Intermediate</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Work Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {workExperience.map((job, index) => (
                  <div key={index} className={index > 0 ? "pt-6 border-t" : ""}>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="font-bold">{job.title}</h3>
                        <p className="text-primary">{job.company}</p>
                      </div>
                      <div className="flex items-center mt-2 md:mt-0 text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-3 w-3" />
                        {job.period}
                      </div>
                    </div>
                    <p className="mt-2 text-muted-foreground">{job.description}</p>
                    <ul className="mt-2 space-y-1 list-disc list-inside text-sm">
                      {job.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className={index > 0 ? "pt-6 border-t" : ""}>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="font-bold">{edu.degree}</h3>
                        <p className="text-primary">{edu.institution}</p>
                      </div>
                      <div className="flex items-center mt-2 md:mt-0 text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-3 w-3" />
                        {edu.period}
                      </div>
                    </div>
                    <p className="mt-2 text-muted-foreground">{edu.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
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

// Mock data for work experience
const workExperience = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "Jan 2021 - Present",
    description: "Leading the frontend development team in building modern web applications using React and Next.js.",
    responsibilities: [
      "Architected and implemented responsive web applications using React, Next.js, and TypeScript",
      "Led a team of 5 frontend developers, providing mentorship and code reviews",
      "Collaborated with UX/UI designers to implement pixel-perfect interfaces",
      "Improved application performance by 40% through code optimization and lazy loading",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Digital Innovations",
    period: "Mar 2018 - Dec 2020",
    description: "Developed and maintained web applications for various clients in the e-commerce and fintech sectors.",
    responsibilities: [
      "Built responsive web applications using React and Redux",
      "Implemented CI/CD pipelines to streamline the development process",
      "Collaborated with backend developers to integrate RESTful APIs",
      "Participated in agile development processes, including daily stand-ups and sprint planning",
    ],
  },
  {
    title: "Junior Web Developer",
    company: "Creative Web Agency",
    period: "Jun 2016 - Feb 2018",
    description: "Started as an intern and was promoted to Junior Web Developer after 6 months.",
    responsibilities: [
      "Developed and maintained client websites using HTML, CSS, and JavaScript",
      "Assisted in the migration of legacy websites to modern frameworks",
      "Created responsive email templates for marketing campaigns",
      "Collaborated with the design team to implement website designs",
    ],
  },
]

// Mock data for education
const education = [
  {
    degree: "Master of Computer Science",
    institution: "University of Technology",
    period: "2014 - 2016",
    description:
      "Specialized in Web Technologies and Human-Computer Interaction. Thesis on 'Improving User Experience in Progressive Web Applications'.",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "State University",
    period: "2010 - 2014",
    description: "Graduated with honors. Participated in various hackathons and coding competitions.",
  },
]

