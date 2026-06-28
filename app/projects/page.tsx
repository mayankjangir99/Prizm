"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { getProjects } from "@/lib/projects";

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Hospitality",
  "Luxury Villas",
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [projectsData, setProjectsData] = useState<any[]>([]);

  useEffect(() => {
    async function loadProjects() {
      const data = await getProjects();
      setProjectsData(data);
    }

    loadProjects();
  }, []);

  const filteredProjects = useMemo(() => {
    return activeCategory === "All"
      ? projectsData
      : projectsData.filter(
          (project) => project.category === activeCategory
        );
  }, [activeCategory, projectsData]);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          All Projects
        </h1>

        <p className="text-white/60 max-w-2xl mb-10">
          Explore our complete portfolio of residential,
          commercial, hospitality and luxury villa projects.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => {
            const count =
              category === "All"
                ? projectsData.length
                : projectsData.filter(
                    (p) => p.category === category
                  ).length;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-3 text-sm uppercase tracking-[0.2em] border transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-yellow-400 text-black border-yellow-400"
                    : "border-white/20 text-white/70 hover:border-white/50"
                }`}
              >
                {category} ({count})
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project: any, index: number) => (
            <div
              key={`${project.title}-${index}`}
              className="group relative h-[350px] overflow-hidden rounded-xl"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute top-4 right-4 z-20 pointer-events-none">
                <div className="flex items-center gap-2 rounded-full bg-black/35 px-3 py-2 backdrop-blur-md border border-white/10">
                  <Image
                    src="/prizm-logo.png"
                    alt="PRIZM"
                    width={18}
                    height={18}
                  />
                  <span className="text-[10px] font-semibold tracking-[0.25em] text-white">
                    PRIZM
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="absolute bottom-0 p-6">
                <p className="text-xs uppercase tracking-widest text-yellow-400">
                  {project.category}
                </p>

                <h3 className="mt-2 text-2xl font-semibold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}