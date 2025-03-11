"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter, Menu } from "lucide-react";
import Link from "next/link";
import ProjectCard from "./components/project-card";
import TechStack from "./components/tech-stack";
import projects from "./data/projects.json";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Cookies from "js-cookie";

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPrivateProjects, setShowPrivateProjects] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const accessCode = searchParams.get("code");
    const hasPrivateAccess = Cookies.get("privateProjectsAccess");

    if (hasPrivateAccess === "true") {
      setShowPrivateProjects(true);
    } else if (accessCode) {
      if (accessCode === process.env.NEXT_PUBLIC_PRIVATE_ACCESS_CODE) {
        setShowPrivateProjects(true);
        Cookies.set("privateProjectsAccess", "true", { expires: 7 }); // Cookie expires in 7 days
      }
    }
  }, [searchParams]);

  const filteredProjects = projects.filter(
    (project) => showPrivateProjects || !project.private
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-7xl flex h-14 items-center justify-between px-4 md:px-6">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link className="flex items-center space-x-2" href="/">
              <span className="font-bold">TimBlazic.dev</span>
            </Link>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          <div
            className={`${
              isMenuOpen ? "flex opacity-100" : "hidden opacity-0"
            } md:flex md:opacity-100 absolute md:relative top-14 md:top-0 left-0 right-0 flex-col md:flex-row items-center bg-white md:bg-transparent shadow-lg md:shadow-none border-b md:border-0 py-8 md:py-0 space-y-6 md:space-y-0 md:space-x-6 transition-all duration-200`}
          >
            <nav className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 text-base font-medium w-full md:w-auto">
              <Link
                href="#about"
                className="transition-colors hover:text-foreground/80 w-full text-center py-2 px-4 hover:bg-gray-50 md:hover:bg-transparent"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#projects"
                className="transition-colors hover:text-foreground/80 w-full text-center py-2 px-4 hover:bg-gray-50 md:hover:bg-transparent"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="transition-colors hover:text-foreground/80 w-full text-center py-2 px-4 hover:bg-gray-50 md:hover:bg-transparent"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            <Button asChild className="md:hidden w-[200px]">
              <Link href="mailto:timblazic.dev@gmail.com" className="text-base">
                Get in Touch
              </Link>
            </Button>
          </div>

          <Button asChild className="hidden md:flex">
            <Link href="mailto:timblazic.dev@gmail.com">Get in Touch</Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto max-w-7xl px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 animate-fade-in">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none animate-slide-up">
                  Full Stack Developer
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 animate-slide-up [animation-delay:200ms]">
                  Building digital experiences with modern technologies. Focused
                  on creating elegant solutions to complex problems.
                </p>
              </div>
              <div className="space-x-4 animate-slide-up [animation-delay:400ms]">
                <Link
                  href="https://github.com/TimBlazic?tab=overview"
                  target="_blank"
                >
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/tim-bla%C5%BEi%C4%8D-9b6b97257/"
                  target="_blank"
                >
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://x.com/timblazic_dev" target="_blank">
                  <Button variant="outline" size="icon">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">X</span>
                  </Button>
                </Link>
                <Link href="mailto:timblazic.dev@gmail.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center animate-fade-in">
              Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`animate-slide-up [animation-delay:${
                    index * 200
                  }ms]`}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.images[0]}
                    tags={project.tags}
                    link={`/projects/${project.id}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>

        <section
          id="contact"
          className="py-12 mb-24 md:py-24 lg:py-32 bg-gray-50"
        >
          <div className="mx-auto max-w-3xl px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Looking for a developer to bring your ideas to life? I&apos;m
              always interested in exciting projects and new opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link
                  href="mailto:timblazic.dev@gmail.com"
                  className="flex items-center justify-center gap-2"
                >
                  <Mail className="h-5 w-5" />
                  Email Me
                </Link>
              </Button>
              <div className="flex flex-row gap-4">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Link
                    href="https://github.com/TimBlazic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Github className="h-5 w-5" />
                    GitHub
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Link
                    href="https://www.linkedin.com/in/tim-bla%C5%BEi%C4%8D-9b6b97257/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto max-w-7xl flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2025 TimBlazic.dev. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <p className="text-xs hover:underline underline-offset-4">
              timblazic.dev@gmail.com
            </p>
          </nav>
        </div>
      </footer>
    </div>
  );
}
