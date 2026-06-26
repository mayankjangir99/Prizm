"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const projects = [
{
title: "Sunlit Modern Living Room",
category: "Residential",
image: "/collov-home-design-4_jQL4JCS98-unsplash.jpg",
},
{
title: "Grand Reception Lounge",
category: "Commercial",
image: "/frames-for-your-heart-zSG-kd-L6vw-unsplash.jpg",
},
{
title: "Private Luxury Suite",
category: "Hospitality",
image: "/iwood-R5v8Xtc0ecg-unsplash.jpg",
},
{
title: "Contemporary Designer Lounge",
category: "Residential",
image: "/mahmoud-azmy-8ccOqbNdp1A-unsplash.jpg",
},
{
title: "Scandinavian Living Space",
category: "Residential",
image: "/minh-pham-OtXADkUh3-I-unsplash.jpg",
},
{
title: "Luxury Villa Lounge",
category: "Luxury Villas",
image: "/prydumano-design-vIbxvHj9m9g-unsplash.jpg",
},
{
title: "Modern Family Living Room",
category: "Residential",
image: "/spacejoy-c0JoR_-2x3E-unsplash.jpg",
},
{
title: "Open Concept Villa Interior",
category: "Luxury Villas",
image: "/zac-gudakov-mw_mj-noYHM-unsplash.jpg",
},
{
title: "Premium Double Height Residence",
category: "Luxury Villas",
image: "/zac-gudakov-ztWpwTEx728-unsplash.jpg",
},
{
  title: "The Courtyard Villa",
  category: "Luxury Villas",
  image: "/alejandra-cifre-gonzalez-ylyn5r4vxcA-unsplash.jpg",
},
{
  title: "Executive Workspace",
  category: "Commercial",
  image: "/alesia-kazantceva-VWcPlbHglYc-unsplash.jpg",
},
{
  title: "Signature Estate House",
  category: "Luxury Villas",
  image: "/avi-werde-hHz4yrvxwlA-unsplash.jpg",
},
{
  title: "Boutique Hotel Lounge",
  category: "Hospitality",
  image: "/chris-carzoli-VC1Ifrsi9Xo-unsplash.jpg",
},

{
  title: "Corporate Innovation Hub",
  category: "Commercial",
  image: "/copernico-p_kICQCOM4s-unsplash.jpg",
},
{
  title: "Skyline Retreat Villa",
  category: "Luxury Villas",
  image: "/felix-P21wf6KAykw-unsplash.jpg",
},
{
  title: "Modern Stone Residence",
  category: "Luxury Villas",
  image: "/florian-schmidinger-b_79nOqf95I-unsplash.jpg",
},
{
  title: "Villa Aurelia",
  category: "Luxury Villas",
  image: "/frames-for-your-heart-mR1CIDduGLc-unsplash.jpg",
},
{
  title: "Grand Reception Lounge",
  category: "Commercial",
  image: "/frames-for-your-heart-zSG-kd-L6vw-unsplash.jpg",
},
{
  title: "Luxury Hotel Lobby",
  category: "Hospitality",
  image: "/huy-nguyen-fQgYAnWVFeo-unsplash.jpg",
},
{
  title: "Private Luxury Suite",
  category: "Hospitality",
  image: "/iwood-R5v8Xtc0ecg-unsplash.jpg",
},
{
  title: "Resort Reception Pavilion",
  category: "Hospitality",
  image: "/jennifer-latuperisa-andresen-Cj7a21nHLyo-unsplash.jpg",
},
{
  title: "Grand Hospitality Atrium",
  category: "Hospitality",
  image: "/juliana-morales-ramirez-GmW4hfTX0ns-unsplash.jpg",
},
{
  title: "Modern Boardroom Suite",
  category: "Commercial",
  image: "/jose-losada-DyFjxmHt3Es-unsplash.jpg",
},
{
  title: "Creative Studio Office",
  category: "Commercial",
  image: "/kate-sade-2zZp12ChxhU-unsplash.jpg",
},
{
  title: "Contemporary Designer Lounge",
  category: "Residential",
  image: "/mahmoud-azmy-8ccOqbNdp1A-unsplash.jpg",
},
{
  title: "Scandinavian Living Space",
  category: "Residential",
  image: "/minh-pham-OtXADkUh3-I-unsplash.jpg",
},
{
  title: "Collaborative Workspace",
  category: "Commercial",
  image: "/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg",
},
{
  title: "Open Plan Office",
  category: "Commercial",
  image: "/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg",
},
{
  title: "Luxury Villa Lounge",
  category: "Luxury Villas",
  image: "/prydumano-design-vIbxvHj9m9g-unsplash.jpg",
},
{
  title: "Luxury Guest Suite",
  category: "Hospitality",
  image: "/roberto-nickson-emqnSQwQQDo-unsplash.jpg",
},
{
  title: "Palm Horizon Villa",
  category: "Luxury Villas",
  image: "/rod-long-2P_ifaetDm0-unsplash.jpg",
},
{
  title: "Premium Minimal Residence",
  category: "Residential",
  image: "/samantha-gades-BlIhVfXbi9s-unsplash.jpg",
},
{
  title: "Modern Family Living Room",
  category: "Residential",
  image: "/spacejoy-c0JoR_-2x3E-unsplash.jpg",
},
{
  title: "Open Concept Villa Interior",
  category: "Luxury Villas",
  image: "/zac-gudakov-mw_mj-noYHM-unsplash.jpg",
},
{
  title: "Premium Double Height Residence",
  category: "Luxury Villas",
  image: "/zac-gudakov-ztWpwTEx728-unsplash.jpg",
},
];

const categories = [
"All",
"Residential",
"Commercial",
"Hospitality",
"Luxury Villas",
];

export default function ProjectsPage() {
const [activeCategory, setActiveCategory] = useState("All");

const filteredProjects = useMemo(() => {
return activeCategory === "All"
? projects
: projects.filter(
(project) => project.category === activeCategory
);
}, [activeCategory]);

return ( <main className="min-h-screen bg-black text-white px-6 py-20"> <div className="max-w-7xl mx-auto">


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
            ? projects.length
            : projects.filter(
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
     {filteredProjects.map((project, index) => (
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
