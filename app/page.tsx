"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Github, Mail, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      // Incluído 'contact' na lista de seções
      const sections = ["home", "about", "work", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen flex flex-col dark">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button onClick={() => scrollToSection("home")} className="text-xl font-bold gradient-text">
            Pedro Hernandez
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "home" ? "text-primary" : "text-muted-foreground"}`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "about" ? "text-primary" : "text-muted-foreground"}`}
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "work" ? "text-primary" : "text-muted-foreground"}`}
            >
              Projetos
            </button>
            {/* Adicionado link para a nova seção de contato */}
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "contact" ? "text-primary" : "text-muted-foreground"}`}
            >
              Contato
            </button>
            {/* Botão de Curriculo removido da navegação desktop */}
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute w-full bg-background border-b border-border py-4 px-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection("home")} className="text-sm font-medium py-2 hover:text-primary">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium py-2 hover:text-primary">
              Sobre
            </button>
            <button onClick={() => scrollToSection("work")} className="text-sm font-medium py-2 hover:text-primary">
              Projetos
            </button>
            {/* Adicionado link para a nova seção de contato no mobile */}
            <button onClick={() => scrollToSection("contact")} className="text-sm font-medium py-2 hover:text-primary">
              Contato
            </button>
            {/* Botão de Curriculo removido da navegação mobile */}
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Olá, eu sou <span className="gradient-text">Pedro Hernandez</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">Engenheiro de Dados</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Sou estudante de Ciência da Computação com experiência na área de dados. Atuo no desenvolvimento de
                soluções usando Python, SQL e Excel.
              </p>
              <div className="flex flex-wrap gap-4 pt-4 justify-center">
                <Button onClick={() => scrollToSection("about")}>Saiba mais</Button>
                <Button onClick={() => scrollToSection("work")}>Projetos</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Projetos */}
        <section id="work" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Meus Projetos</h2>
                <p className="text-lg text-muted-foreground">Confira alguns dos projetos que desenvolvi.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Projeto 1 */}
                <div className="gradient-border p-6 bg-card">
                  <div className="mb-4">
                    <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="https://www.mixvale.com.br/wp-content/uploads/2025/05/abono-salarial-.jpg.avif"
                        alt="Prevendo Fraudes"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Prevendo Fraudes</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      O projeto utiliza Machine Learning para prever se uma conta vai ficar cometer uma fraude ou não.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Python</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Jupyter</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        Machine Learning
                      </span>
                    </div>
                  </div>
                  <Button asChild size="sm" className="w-full">
                    <a
                      href="https://github.com/pedrocobalquini/Prevendo-Fraudes-ML"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Ver no GitHub
                    </a>
                  </Button>
                </div>

                {/* Projeto 2 */}
                <div className="gradient-border p-6 bg-card">
                  <div className="mb-4">
                    <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="https://formacaohist.com.br/wp-content/uploads/2021/06/555.jpg"
                        alt="Prevendo o desempenho dos alunos"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Prevendo o desempenho dos alunos</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      O projeto desenvolvido visa prever o desempenho dos alunos com Machine Learning.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Python</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Jupyter</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Machine Learning</span>
                    </div>
                  </div>
                  <Button asChild size="sm" className="w-full">
                    <a
                      href="https://github.com/pedrocobalquini/Prevendo-o-desempenho-dos-alunos"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Ver no GitHub
                    </a>
                  </Button>
                </div>

                {/* Projeto 3 */}
                <div className="gradient-border p-6 bg-card">
                  <div className="mb-4">
                    <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="https://estruturadinamica.com.br/wp-content/uploads/2023/07/iStock-545082074-1000x400-1.jpg"
                        alt="Custo Médico"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Custo Médico</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Análise sobre os custos médicos relacionados a doenças causadas pelo tabagismo.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Python</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Excel</span>
                    </div>
                  </div>
                  <Button asChild size="sm" className="w-full">
                    <a href="https://github.com/pedrocobalquini/Custo-Medico" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Ver no GitHub
                    </a>
                  </Button>
                </div>

                {/* Projeto 4 */}
                <div className="gradient-border p-6 bg-card">
                  <div className="mb-4">
                    <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="https://leads2b.com/blog/wp-content/uploads/2021/03/blog_segmentacao-de-cliente-768x384.jpg"
                        alt="Divisão de clientes"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Divisão de clientes</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Projeto de machine learning para separar grupos de clientes por meio de clusters com o K-means.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Python</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        Machine Learning
                      </span>
                    </div>
                  </div>
                  <Button asChild size="sm" className="w-full">
                    <a
                      href="https://github.com/pedrocobalquini/Divis-o-de-clientes"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Ver no GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experiência */}
        <section id="experience" className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Experiência Profissional</h2>
                <p className="text-lg text-muted-foreground">Minha trajetória profissional na área de tecnologia.</p>
              </div>

              <div className="space-y-12">
                {/* Experiência 1 */}
                <div className="gradient-border p-8 bg-card">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Briefcase className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold">Estagiário de TI</h3>
                          <div className="flex items-center gap-2 text-muted-foreground mt-1">
                            <MapPin className="h-4 w-4" />
                            <span>ILI - Itaípu Logística Inteligente</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                          <Calendar className="h-4 w-4" />
                          <span>03/2025 - 09/2025</span>
                        </div>
                      </div>
                      <ul className="text-muted-foreground space-y-2 leading-relaxed list-none">
                        <li>Automação de processos utilizando SQL e Python</li>
                        <li>Coleta e tratamento de dados, garantindo precisão e integridade</li>
                        <li>Desenvolvimento de dashboards e relatórios analíticos</li>
                        <li>Apoio na tomada de decisões estratégicas da empresa</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Experiência 2 */}
                <div className="gradient-border p-8 bg-card">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <GraduationCap className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold">Professor Voluntário</h3>
                          <div className="flex items-center gap-2 text-muted-foreground mt-1">
                            <MapPin className="h-4 w-4" />
                            <span>Universidade Ritter dos Reis</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                          <Calendar className="h-4 w-4" />
                          <span>02/2024 - 07/2024</span>
                        </div>
                      </div>
                      <ul className="text-muted-foreground space-y-2 leading-relaxed list-none">
                        <li>Mentoria para estudantes universitários nas áreas de TI</li>
                        <li>Conduzi oito aulas focadas em fluxogramas e POO</li>
                        <li>Desenvolvimento de materiais didáticos e atividades práticas</li>
                        <li>Orientação nos primeiros passos da programação em Python</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section id="about" className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Sobre mim</h2>

              <div className="space-y-6">
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Sou um estudante, com um forte interesse em transformar informações complexas em soluções tangíveis para o negócio. Atualmente, trabalho e aplico meus conhecimentos em projetos.
                </p>

                  <div className="gradient-border p-6 bg-card">
                    <h3 className="text-xl font-semibold mb-4">Skills e Formação</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Skills</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Python, SQL, Git, Excel, Machine Learning, Análise de Dados, ETL
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">Idiomas</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          <li>Inglês - Avançado</li>
                          <li>Espanhol - Avançado</li>
                          <li>Português - Nativo</li>
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">Formação</h4>
                        <p className="text-sm text-muted-foreground">Ciência da Computação - Graduação</p>
                        <p className="text-xs text-muted-foreground">Universidade Ritter dos Reis | 2022 - 2025</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>         

      {/* Footer */}
      <footer className="py-6 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Pedro Hernandez. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="https://www.linkedin.com/pedrocobalquini"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                LinkedIn
              </a>
              <a
                href="https://www.github.com/pedrocobalquini"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                GitHub
              </a>
              <a
                href="mailto:pedrohernandez1903@gmail.com"
                className="text-muted-foreground hover:text-primary"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}




