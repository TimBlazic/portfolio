"use client";

import { notFound } from "next/navigation";
import ProjectShowcase from "@/app/components/project-showcase";
import projects from "@/app/data/projects.json";
import { use } from "react";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default function ProjectPage({ params }: Props) {
  const { id } = use(params);
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen w-full relative flex justify-center">
      <ProjectShowcase projectId={id} />
    </div>
  );
}
