import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
      <Header />
      <main className="container mx-auto px-4 py-16 row-start-2">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 border-b border-green-500/20 pb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Projects</h1>
            <div className="h-1 w-20 bg-green-500 mt-4"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <ProjectCard
              title="E-Commerce Platform"
              description="A full-stack e-commerce platform with user authentication, product management, and payment processing."
              technologies={["React", "Node.js", "MongoDB", "Stripe"]}
              githubUrl="#"
              liveUrl="#"
            />

            <ProjectCard
              title="Task Management App"
              description="A responsive task management application with drag-and-drop functionality and real-time updates."
              technologies={["Vue.js", "Firebase", "Tailwind CSS"]}
              githubUrl="#"
              liveUrl="#"
            />

            <ProjectCard
              title="Weather Dashboard"
              description="A weather dashboard that displays current and forecasted weather data for multiple locations."
              technologies={["JavaScript", "Weather API", "Chart.js"]}
              githubUrl="#"
              liveUrl="#"
            />

            <ProjectCard
              title="Portfolio Website"
              description="A personal portfolio website showcasing my skills, experience, and projects."
              technologies={["Next.js", "TypeScript", "Tailwind CSS"]}
              githubUrl="#"
              liveUrl="#"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

function ProjectCard({ title, description, technologies, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <div className="bg-background border border-green-500/20 rounded-lg overflow-hidden hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/5">
      <div className="h-48 bg-background flex items-center justify-center">
        <span className="text-green-500 text-opacity-20 text-4xl font-bold">{title[0]}</span>
      </div>

      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-foreground">{title}</h2>
        <p className="text-foreground/70 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-background text-green-500 rounded-md text-xs">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-4">
          <Link href={githubUrl} className="flex items-center text-foreground/70 hover:text-green-500 transition-colors">
            <Github className="h-4 w-4 mr-1" />
            <span className="text-sm">Code</span>
          </Link>
          <Link href={liveUrl} className="flex items-center text-foreground/70 hover:text-green-500 transition-colors">
            <ExternalLink className="h-4 w-4 mr-1" />
            <span className="text-sm">Live Demo</span>
          </Link>
        </div>
      </div>
    </div>
  );
}