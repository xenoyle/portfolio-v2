"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";
import ExperienceItem from "@/components/ExperienceItem";
import ResumeButton from "@/components/ResumeButton";
import React from "react";
import { motion } from "motion/react";

export default function Experience() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
      <Header />
      <motion.main
        className="container mx-auto px-4 row-start-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.3 }}
      >
        <AmbientBackground includeGrid={false} className="z-0" />
        <div 
          className="max-w-4xl mx-auto relative z-10 rounded-lg p-6 my-8 bg-background/80"
          style={{
            boxShadow: `
              0 0 20px 10px rgba(10,10,10,0.6),
              0 0 60px 30px rgba(10,10,10,0.4),
              0 0 120px 60px rgba(10,10,10,0.2)
            `,
          }}
        >
          <div className="mb-8 border-b border-green-500/20 pb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Experience</h1>
            <div className="h-1 w-20 bg-green-500 mt-4"></div>
          </div>

          <div className="space-y-12">
            <ExperienceItem
              title="Web Designer Intern"
              company="Beaufort County Black Chamber of Commerce (BCBCC)"
              period="Feb 2025 - Present"
              description="As a Web Designer Intern, I am responsible for creating and maintaining the BCBCC website. 
                           This includes designing user-friendly interfaces, ensuring responsive design, and optimizing 
                           the site for search engines. I use Wix as it was their previously used website software, 
                           and due to BCBCC being a small nonprofit, I believe that maintaining the use of this tool 
                           will be more sustainable than a custom code solution. I am also assisting in managing the IT 
                           side of the business, creating new Outlook accounts and monitoring Outlook related security 
                           incidents. Additionally, throughout the entirety of this internship I interacted with coworkers 
                           in an office space and over email, which has helped me to learn how to communicate professionally 
                           in a work environment."
              technologies={["Wix", "HTML", "CSS", "JavaScript", "SEO", "UI/UX Design", "Outlook Management", 
                             "Salesforce", "Technical Documentation"]}
            />
          </div>
        </div>
      </motion.main>
      <ResumeButton />
      <Footer />
    </div>
  );
}