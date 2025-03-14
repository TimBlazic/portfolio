"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  X,
  ArrowLeft,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import projectsData from "@/app/data/projects.json" assert { type: "json" };

interface ProjectShowcaseProps {
  projectId: string;
}

export default function ProjectShowcase({ projectId }: ProjectShowcaseProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const project = projectsData.find((p) => p.id.toString() === projectId);
  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <>
      <div className="container px-4 py-12">
        {/* Back Button */}

        <div className="sticky top-0 z-50 w-min rounded-lg mb-8 bg-background/30 content-start flex backdrop-blur-sm supports-[backdrop-filter]:bg-background/20 animate-fade-in-up">
          <Button
            variant="ghost"
            className="group flex items-center text-muted-foreground hover:text-foreground -ml-2"
            asChild
          >
            <Link href="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </Link>
          </Button>
        </div>

        <div className="grid gap-12 md:grid-cols-2 relative">
          {/* Image Gallery */}
          <div className="relative rounded-2xl overflow-hidden bg-background/20 backdrop-blur-sm aspect-video shadow-lg hover:shadow-xl transition-all duration-500 border border-white/5 opacity-0 animate-fade-in-up [animation-delay:200ms]">
            <div
              className="relative h-full w-full cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <Image
                src={
                  project.images[currentImageIndex].startsWith("http")
                    ? project.images[currentImageIndex]
                    : `/projects/${project.images[currentImageIndex]}`
                }
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                fill
                className="object-contain"
              />

              {/* Image Navigation */}
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full opacity-80 hover:opacity-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full opacity-80 hover:opacity-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-background/80 rounded-full px-3 py-1 text-sm font-medium">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="flex flex-col opacity-0 animate-fade-in-up [animation-delay:400ms]">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                    {project.title}
                  </h1>
                  {project.isLive && (
                    <Badge
                      variant="default"
                      className="bg-white border text-black border-black"
                    >
                      Live
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground text-lg">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-xs px-3 py-1"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-3 gap-4 py-4">
                <Card className="hover:border-primary/20 transition-colors border-white/5">
                  <CardContent className="p-4 text-center">
                    <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70">
                      {project.stats.stat1.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {project.stats.stat1.description}
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover:border-primary/20 transition-colors border-white/5">
                  <CardContent className="p-4 text-center">
                    <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70">
                      {project.stats.stat2.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {project.stats.stat2.description}
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover:border-primary/20 transition-colors border-white/5">
                  <CardContent className="p-4 text-center">
                    <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70">
                      {project.stats.stat3.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {project.stats.stat3.description}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-foreground to-foreground/90 hover:from-foreground/90 hover:to-foreground text-background transition-all duration-300"
                >
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Visit Site
                  </Link>
                </Button>
                {project.isGithub && (
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="hover:border-primary/20 transition-all duration-300 border-white/5"
                  >
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-5 w-5" />
                      GitHub
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Project Information */}
        <div className="mt-16 space-y-12 relative">
          {/* About Project */}
          <div className="bg-background/10 backdrop-blur-[2px] rounded-2xl p-8 border border-white/5 transition-all duration-500 opacity-0 animate-fade-in-up [animation-delay:600ms] group hover:bg-background/20">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-6 bg-gradient-to-r from-primary/20 to-accent/20 group-hover:w-8 transition-all duration-500" />
              <h2 className="text-xl font-medium text-foreground/80">
                About Project
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {project.longDescription.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-muted-foreground/80 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="bg-background/10 backdrop-blur-[2px] rounded-2xl p-8 border border-white/5 transition-all duration-500 opacity-0 animate-fade-in-up [animation-delay:800ms] group hover:bg-background/20">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-6 bg-gradient-to-r from-primary/20 to-accent/20 group-hover:w-8 transition-all duration-500" />
              <h2 className="text-xl font-medium text-foreground/80">
                Technologies Used
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {project.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="group/tech relative flex items-center gap-2 px-4 py-3 rounded-xl bg-background/20 backdrop-blur-[2px] border border-white/5 hover:border-primary/10 hover:bg-background/30 transition-all duration-300"
                >
                  <span className="text-sm text-foreground/70 font-medium">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-background/70 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 rounded-full z-50"
              onClick={() => setIsModalOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Image */}
            <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
              <Image
                src={
                  project.images[currentImageIndex].startsWith("http")
                    ? project.images[currentImageIndex]
                    : `/projects/${project.images[currentImageIndex]}`
                }
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                quality={100}
              />
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 rounded-full opacity-80 hover:opacity-100"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 rounded-full opacity-80 hover:opacity-100"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 rounded-full px-4 py-2 text-sm font-medium">
              {currentImageIndex + 1} / {project.images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
