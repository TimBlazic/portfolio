"use client";

import ProjectShowcase from "@/app/components/project-showcase";
import { use } from "react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProjectPage({ params }: PageProps) {
  const { id } = use(params);

  return (
    <div className="min-h-screen w-full">
      <ProjectShowcase projectId={id} />
    </div>
  );
}
