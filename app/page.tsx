"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Github, Mail } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "work", "experience", "about"]

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
              onClick={() => scrollToSection("work")}
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "work" ? "text-primary" : "text-muted-foreground"}`}
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "experience" ? "text-primary" : "text-muted-foreground"}`}
            >
              Experiência
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "about" ? "text-primary" : "text-muted-foreground"}`}
            >
              Sobre mim
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute w-full bg-background border-b border-border py-4 px-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection("work")} className="text-sm font-medium py-2 hover:text-primary">
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-sm font-medium py-2 hover:text-primary"
            >
              Experiência
            </button>
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium py-2 hover:text-primary">
              Sobre mim
            </button>
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
                <Button asChild>
                  <a
                    href="mailto:pedrohernandez1903@gmail.com?subject=Contato%20via%20Portfolio&body=Olá%20Pedro,%0D%0A%0D%0AGostaria%20de%20entrar%20em%20contato%20com%20você.%0D%0A%0D%0AAtenciosamente,"
                    className="flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    Entre em Contato
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Projetos */}
        <section id="work" className="py-20 bg-secondary/20">
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
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        Machine Learning
                      </span>
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
        <section id="experience" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Experiência Profissional</h2>
                <p className="text-lg text-muted-foreground">Minha trajetória profissional na área de tecnologia.</p>
              </div>

              <div className="space-y-8">
                {/* Experiência 1 */}
                <div className="bg-card rounded-lg p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-foreground mb-2">ILI - Itaípu Logística Inteligente</h3>
                    <h4 className="text-xl font-semibold text-primary mb-2">Estagiário de TI</h4>
                    <p className="text-muted-foreground">Mar 2025 — Set 2025</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Participação no desenvolvimento de software, auxílio no suporte e na realização de testes voltados para a aplicação.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Desenvolvi dashboards interativos e relatórios analíticos que forneceram insights estratégicos
                        para a tomada de decisões.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Implementei soluções de coleta e tratamento de dados que garantiram 99.8% de precisão e
                        integridade, estabelecendo novos padrões de qualidade.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Experiência 2 */}
                <div className="bg-card rounded-lg p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-foreground mb-2">UnivaRede - Uniritter</h3>
                    <h4 className="text-xl font-semibold text-primary mb-2">Desenvolvedor</h4>
                    <p className="text-muted-foreground">Ago 2024 — Dez 2024</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Implementação de funcionalidades que promovem a interação entre alunos, professores e empresas.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Criação e manutenção de sistemas digitais que facilitam o acesso às pesquisas desenvolvidas.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Coleta e extração de dados de múltiplas fontes, garantindo sua preparação e disponibilidade para suportar análises, relatórios e aplicações de negócio.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre mim */}
        <section id="about" className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Sobre mim</h2>
              </div>

              <div className="max-w-3xl mx-auto">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Atualmente cursando Ciência da Computação na Universidade Ritter dos Reis, tenho me
                  especializado na área de dados com foco em engenharia de dados. Domino Python e SQL para
                  desenvolvimento de soluções, além de ferramentas como Excel, Git e Machine Learning. Tenho nível avançado em inglês e espanhol, o que me permite atuar em 
                  ambientes multiculturais e acessar com facilidade documentação técnica internacional.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Pedro Hernandez. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="https://www.linkedin.com/in/pedrocobalquini"
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
              <a href="mailto:pedrohernandez1903@gmail.com" className="text-muted-foreground hover:text-primary">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
