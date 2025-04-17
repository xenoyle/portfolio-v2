import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Code } from "lucide-react";
import Image from "next/image";

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
              title="Personal Portfolio Website (v2)"
              description="A modern portfolio website showcasing my skills, experience, and projects."
              technologies={["React", "Next.js", "Tailwind CSS"]}
              githubUrl="https://github.com/xenoyle/cwf-portfolio-app"
              liveUrl="https://cwf-portfolio-app.vercel.app"
            />

            <ProjectCard
              title="The Royal Echoes of Ur - A Greenfoot Project"
              description="A Greenfoot-based project developed as part of coursework at the University of South Carolina-Beaufort. "
              technologies={["Greenfoot", "Java"]}
              githubUrl="https://github.com/xenoyle/course-B145-final-greenfoot-project"
              liveUrl="https://www.greenfoot.org/scenarios/34424"
            />

            <ProjectCard
              title="HackNC 2024: Local Pioneer"
              description="Created a web app inspired by LinkedIn and Facebook, featuring a Flask backend, SQLAlchemy database, and map widget functionality using Leaflet and Nominatim API."
              technologies={["Flask", "SQLAlchemy", "Leaflet", "Nominatim", "CI/CD"]}
              githubUrl="https://github.com/AlvajoyAsante/LocalPioneer"
              liveUrl="https://devpost.com/software/local-pioneer"
            />

            <ProjectCard
              title="Personal Portfolio Website (v1)"
              description="The first version of my portfolio website, built with HTML, CSS, and JavaScript."
              technologies={["HTML5", "CSS", "JavaScript", "DNS Management"]}
              githubUrl="https://github.com/xenoyle/xenoyle.github.io"
              liveUrl="https://connorwfloyd.dev"
            />

            <ProjectCard
              title="Is Marijuana a Gateway Drug: A Data Analysis Presentation"
              description="Led a data analysis project exploring the correlation between marijuana use and other illicit drug consumption among youth, using the 2021 YRBS dataset. Presented at the USCB Spring 2024 Science Fair."
              technologies={["Python", "Pandas", "Matplotlib", "Seaborn", "Data Presentation"]}
              githubUrl="https://github.com/xenoyle/course-B104-data-analysis-project"
              liveUrl=""
              imageUrl = "/data-analysis-project-science-fair-picture.jpg"
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
  imageUrl?: string; // Optional image URL
}

function ProjectCard({ title, description, technologies, githubUrl, liveUrl, imageUrl }: ProjectCardProps) {
  return (
    <div className="bg-background border border-green-500/20 rounded-lg overflow-hidden hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/5">
      {/* Top Half: Image or Placeholder */}
      <div className="h-48 bg-background flex items-center justify-center overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`${title} image`}
            width={400} // Set a width for the image
            height={192} // Set a height for the image
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-green-500/10">
            <span className="text-green-500 text-opacity-20 text-4xl font-bold">{title[0]}</span>
          </div>
        )}
      </div>

      {/* Bottom Half: Content */}
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
          {/* GitHub Button */}
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-foreground/70 hover:text-green-500 transition-colors"
          >
            <Code className="h-4 w-4 mr-1" />
            <span className="text-sm">Code</span>
          </Link>

          {/* Conditionally Render Live Demo Button */}
          {liveUrl && (
            <Link
              href={liveUrl}
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
  );
}