"use client";

import { notFound } from "next/navigation";
import ProjectShowcase from "@/app/components/project-showcase";
import projectsData from "@/app/data/projects.json";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id.toString() === id);

  if (!project || project.private) {
    notFound();
  }

  return (
    <div className="min-h-screen w-full relative flex justify-center">
      <ProjectShowcase projectId={id} />
    </div>
  );
}
