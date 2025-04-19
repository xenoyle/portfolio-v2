"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkillTierCard from "@/components/SkillTierCard";
import ResumeButton from "@/components/ResumeButton";
import React from "react";
import { motion } from "motion/react";

export default function Skills() {
  const tiers = [
    {
      title: "Advanced",
      skills: [
        "Java", 
        "HTML/CSS", 
        "JavaScript", 
        "TypeScript", 
        "Tailwind CSS", 
        "Python",
      ],
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
        "Agile/Scrum",
      ],
    },
    {
      title: "Familiar",
      skills: [
        "Flask", 
        "REST APIs", 
        "Unreal Engine 5"
      ],
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
              <SkillTierCard key={title} title={title} skills={skills} />
            ))}
          </div>
        </div>
      </motion.main>

      <ResumeButton />
      <Footer />
    </div>
  );
}