"use client";

import { notFound } from "next/navigation";
import ProjectShowcase from "@/app/components/project-showcase";
import projectsData from "@/app/data/projects.json";

interface PageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = projectsData.find((p) => p.id.toString() === params.id);

  if (!project || project.private) {
    notFound();
  }

  return (
    <div className="min-h-screen w-full relative flex justify-center">
      <ProjectShowcase projectId={params.id} />
    </div>
  );
}
