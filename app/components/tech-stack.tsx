"use client";

import { useEffect, useState } from "react";

const technologies = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "TailwindCSS",
    "React Native",
    "Flutter",
  ],
  Backend: ["Node.js", "Python", "Django", "PostgreSQL", "MongoDB", "MySQL"],
  DevOps: ["Docker", "AWS", "CI/CD", "Git"],
  Tools: [
    "VS Code",
    "Postman",
    "Figma",
    "GitHub",
    "Vercel",
    "Supabase",
    "Firebase",
  ],
};

// Get all technologies in a flat array
const allTechnologies = Object.values(technologies).flat();

export default function TechStack() {
  const [activeTechnologies, setActiveTechnologies] = useState<string[]>([]);

  useEffect(() => {
    const selectRandomTechnologies = () => {
      const count = Math.floor(Math.random() * 3) + 2; // Random number between 2 and 4
      const selected = new Set<string>();
      while (selected.size < count) {
        const randomIndex = Math.floor(Math.random() * allTechnologies.length);
        selected.add(allTechnologies[randomIndex]);
      }
      return Array.from(selected);
    };

    // Update active technologies every 1 second
    const interval = setInterval(() => {
      setActiveTechnologies(selectRandomTechnologies());
    }, 1000);

    // Initial selection
    setActiveTechnologies(selectRandomTechnologies());

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {Object.entries(technologies)
          .slice(0, 2)
          .map(([category, skills]) => (
            <div key={category} className="space-y-6">
              <h2 className="text-2xl font-medium text-foreground/90">
                {category}
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className={`flex items-center px-3 py-1.5 rounded-lg backdrop-blur-[2px] border transition-all duration-1000 
                      ${
                        activeTechnologies.includes(skill)
                          ? "border-primary/50 shadow-lg scale-105"
                          : "border-white/10 bg-background/10"
                      }
                    `}
                  >
                    <span className="text-sm text-foreground/70">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        {Object.entries(technologies)
          .slice(2)
          .map(([category, skills]) => (
            <div key={category} className="space-y-6">
              <h2 className="text-2xl font-medium text-foreground/90">
                {category}
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className={`flex items-center px-3 py-1.5 rounded-lg backdrop-blur-[2px] border transition-all duration-1000 
                      ${
                        activeTechnologies.includes(skill)
                          ? "border-primary/50 shadow-lg scale-105"
                          : "border-white/10 bg-background/10"
                      }
                    `}
                  >
                    <span className="text-sm text-foreground/70">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
