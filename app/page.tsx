"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import ProjectCard from "./components/project-card";
import TechStack from "./components/tech-stack";
import ProjectComparison from "./components/project-comparison";
import ResultsMetrics from "./components/results-metrics";
import projects from "./data/projects.json";

export default function Page() {
  // Filtriraj samo javne projekte
  const publicProjects = projects.filter((project) => !project.private);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-7xl flex h-14 items-center px-4">
          <div className="mr-4 flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className=" font-bold">TimBlazic.dev</span>
            </Link>
            <nav className="items-center  hidden md:flex space-x-6 text-sm font-medium">
              <Link
                href="#about"
                className="transition-colors hover:text-foreground/80"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="transition-colors hover:text-foreground/80"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="transition-colors hover:text-foreground/80"
              >
                Contact
              </Link>
            </nav>
          </div>

          <Button className="ml-auto" asChild>
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto max-w-7xl px-4">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-3 animate-fade-in [animation-delay:200ms]">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none animate-slide-up">
                🚀 High-Performance Web Solutions for{" "}
                <span className="text-primary">Startups & Agencies</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 animate-slide-up [animation-delay:400ms]">
                Fast, SEO-Optimized, and Designed for Conversions. I transform
                complex problems into elegant, efficient solutions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 animate-fade-in [animation-delay:600ms]">
              <Button className="px-8" asChild>
                <Link href="#contact">Get a Free Website Audit</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#projects">See My Work</Link>
              </Button>
            </div>
            <div className="space-x-4 mt-6">
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
                  <span className="sr-only">Twitter</span>
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
        </section>

        <section className="py-12 bg-muted/30 -mx-4 px-4 md:px-6 rounded-2xl">
          <div className="text-center mb-10 animate-fade-in [animation-delay:200ms]">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Proven Results
            </h2>
            <p className="text-muted-foreground mt-2">
              Measurable improvements for every client project
            </p>
          </div>
          <div className="animate-slide-up [animation-delay:400ms]">
            <ResultsMetrics />
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Website Transformations
            </h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto">
              See how I&apos;ve helped businesses improve their online presence
              with performance-focused redesigns.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <ProjectComparison
              title="DM Metal"
              description="Complete redesign of a metal fabrication company's website, focusing on improved user experience and service presentation."
              beforeImage={
                projects[0].before || "/placeholder.svg?height=400&width=600"
              }
              afterImage={
                projects[0].after || "/placeholder.svg?height=400&width=600"
              }
              improvements={[
                "Modernized design with improved visual hierarchy and branding",
                "Optimized for mobile devices to reach more potential clients",
                "Added comprehensive project gallery to showcase work",
                "Implemented easy contact forms for better lead generation",
              ]}
            />
            <ProjectComparison
              title="Kobal"
              description="Modern website redesign for a construction company, focusing on showcasing their projects and services in a more professional way."
              beforeImage={
                projects[1].before || "/placeholder.svg?height=400&width=600"
              }
              afterImage={
                projects[1].after || "/placeholder.svg?height=400&width=600"
              }
              improvements={[
                "Created modern, professional presentation of services",
                "Enhanced project gallery to better showcase their work",
                "Improved user experience and navigation structure",
                "Added clear calls-to-action to increase engagement",
              ]}
            />
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold tracking-tighter mb-8 text-center">
              Other Projects
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {publicProjects.map((project, index) => (
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
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            Tech Stack
          </h2>
          <TechStack />
        </section>

        <section
          id="contact"
          className="py-12 md:py-24 lg:py-32 bg-muted/50 -mx-4 px-4 md:px-6"
        >
          <div className="mx-auto max-w-3xl text-center">
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

      <footer className="border-t mt-24">
        <div className="container mx-auto max-w-7xl flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 TimBlazic.dev. All rights reserved.
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
