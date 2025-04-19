"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResumeButton from "@/components/ResumeButton";
import React from "react";
import { motion } from "motion/react";

export default function Skills() {
  const tiers = [
    {
      title: "Expert",
      skills: ["Java", "Agile/Scrum"],
    },
    {
      title: "Advanced",
      skills: ["HTML/CSS", "JavaScript", "TypeScript", "Tailwind CSS", "Python"],
    },
    {
      title: "Proficient",
      skills: [
        "C++",
        "SQL",
        "React",
        "Node.js",
        "Next.js",
        "Git",
        "CI/CD",
      ],
    },
    {
      title: "Familiar",
      skills: ["Flask", "REST APIs", "Unreal Engine 5"],
    },
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
      <Header />

      <motion.main
        className="container mx-auto px-4 row-start-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 border-b border-green-500/20 pb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Skills
            </h1>
            <div className="h-1 w-20 bg-green-500 mt-4" />
          </div>

          <div className="grid gap-8">
            {tiers.map(({ title, skills }) => (
              <TierCard key={title} title={title} skills={skills} />
            ))}
          </div>
        </div>
      </motion.main>

      <ResumeButton />
      <Footer />
    </div>
  );
}

interface TierCardProps {
  title: string;
  skills: string[];
}

function TierCard({ title, skills }: TierCardProps) {
  return (
    <div className="bg-background border border-green-500/20 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-green-500">{title}</h2>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center text-foreground">
            <span className="inline-block w-2 h-2 mr-2 bg-green-500 rounded-full" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
