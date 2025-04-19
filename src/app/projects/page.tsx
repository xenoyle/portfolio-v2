"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Code, ExternalLink } from "lucide-react";
import { motion } from "motion/react"

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl?: string;
  year: number;
}

const projects: Project[] = [
  {
    title: "Personal Portfolio Website (v2)",
    description: "A modern portfolio website showcasing my skills, experience, and projects.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel", "CI/CD"],
    githubUrl: "https://github.com/xenoyle/portfolio-v2",
    liveUrl: "https://connorwfloyd.dev/",
    year: 2025,
  },
  {
    title: "The Royal Echoes of Ur - A Greenfoot Project",
    description: "A Greenfoot-based game developed as the final project of my Object-Oriented I class at University of South Carolina-Beaufort.",
    technologies: ["Java", "Object-Oriented Programming"],
    githubUrl: "https://github.com/xenoyle/course-B145-final-greenfoot-project",
    liveUrl: "https://www.greenfoot.org/scenarios/34424",
    imageUrl: "/greenfoot-project.jpg",
    year: 2024,
  },
  {
    title: "HackNC 2024: Local Pioneer",
    description: "Created a web app inspired by LinkedIn and Facebook, featuring a Flask backend, SQLAlchemy database, and map widget functionality using Leaflet and Nominatim API.",
    technologies: ["Flask", "SQLAlchemy", "Leaflet", "Nominatim", "CI/CD"],
    githubUrl: "https://github.com/AlvajoyAsante/LocalPioneer",
    liveUrl: "https://devpost.com/software/local-pioneer",
    imageUrl: "/local-pioneer.jpg",
    year: 2024,
  },
  {
    title: "Personal Portfolio Website (v1)",
    description: "The first version of my portfolio website, built with HTML, CSS, and JavaScript.",
    technologies: ["HTML5", "CSS", "JavaScript", "DNS Management"],
    githubUrl: "https://github.com/xenoyle/portfolio-v1",
    liveUrl: "https://connorwfloyd.dev/old",
    year: 2024,
  },
  {
    title: "Is Marijuana a Gateway Drug: A Data Analysis Presentation",
    description: "Led a data analysis project exploring the correlation between marijuana use and other illicit drug consumption among youth, using the 2021 YRBS dataset. Presented at the USCB Spring 2024 Science Fair.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data Presentation"],
    githubUrl: "https://github.com/xenoyle/course-B104-data-analysis-project",
    liveUrl: "",
    imageUrl: "/data-analysis-project-science-fair-picture.jpg",
    year: 2023,
  },
];

function groupProjectsByYear(projects: Project[]) {
  const groups: { [year: number]: Project[] } = {};
  projects.forEach((project) => {
    if (!groups[project.year]) {
      groups[project.year] = [];
    }
    groups[project.year].push(project);
  });
  return groups;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_6px,rgba(255,255,255,0.025)_6px,rgba(255,255,255,0.025)_12px)] border border-green-500/20 rounded-lg overflow-hidden hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/5">
      <div className="h-48 bg-background flex items-center justify-center overflow-hidden">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={`${project.title} image`}
            width={400}
            height={192}
            className="w-full h-full object-cover filter brightness-75 grayscale group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-300"          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-green-500/10">
            <span className="text-green-500 text-opacity-20 text-4xl font-bold">
              {project.title[0]}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col flex-1 p-6">
        {/* Inner box to contain text and skills */}
        <div className="bg-background p-6 rounded-md border border-green-500/20 flex flex-col flex-1">
          <div>
            <h2 className="text-xl font-bold mb-2 text-foreground">{project.title}</h2>
            <p className="text-foreground/70 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span key={index} className="px-2 py-1 bg-background border border-green-500/20 text-green-500 rounded-md text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          {/* Links container pushed to the bottom */}
          <div className="flex gap-4 mt-auto">
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-foreground/70 hover:text-green-500 transition-colors"
            >
              <Code className="h-4 w-4 mr-1" />
              <span className="text-sm">Code</span>
            </Link>
            {project.liveUrl && project.liveUrl !== "" && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-foreground/70 hover:text-green-500 transition-colors"
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                <span className="text-sm">Live Demo</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const groupedProjects = groupProjectsByYear(projects);
  
  const years = Object.keys(groupedProjects)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <motion.div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20"
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      exit={{ opacity: 0}}
      transition={{ duration: 1.3 }}
    >
      <Header />
      <main className="container mx-auto px-4 row-start-2">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 border-b border-green-500/20 pb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Projects</h1>
            <div className="h-1 w-20 bg-green-500 mt-4"></div>
          </div>
          {years.map((year) => (
            <div key={year} className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">{year}</h2>
              <div className="grid gap-8 md:grid-cols-2 items-stretch">
                {groupedProjects[year].map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </motion.div>
  );
}