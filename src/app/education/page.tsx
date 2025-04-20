"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";
import EducationItem from "@/components/EducationItem";
import ResumeButton from "@/components/ResumeButton";
import React from "react";
import { motion } from "motion/react";

export default function Education() {
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
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Education</h1>
            <div className="h-1 w-20 bg-green-500 mt-4"></div>
          </div>

          <div className="space-y-12">
            <EducationItem
              degree="Bachelor of Science in Computational Science"
              institution="University of South Carolina - Beaufort"
              location="Bluffton, SC"
              period="2023 - 2026"
              description="I challenged myself with coding projects in Python, SQL, Java, and C++. I attended 
                           multiple events that helped me to network with professionals and colleagues in 
                           the field, including career fairs, hackathons, and workshops. The CompSci and InfoTech 
                           communities at USCB helped me learn more about what professionalism looks like, with 
                           colleagues and professors alike providing wisdom."
              courses={["Object-Oriented Programming I", "Object-Oriented Programming II", "C++ Programming", 
                        "Technical Writing", "Computational Mathematics", "Database Management Systems I", 
                        "Fundamentals of Probability and Statistics", 
                        "Computer Programming Techniques, Practices, and Tools", "Interpersonal Communication"]}
            />

            <EducationItem
              degree="Science and Math Transfer Block"
              institution="Technical College of the Lowcountry"
              location="Beaufort, SC"
              period="2022 - 2023"
              description="I focused on foundational courses while at TCL for credits to transfer to USCB, maximizing 
                           the cost per credit hour through TCL's cheaper classes."
              courses={["None"]}
            />

            <EducationItem
              degree="High School Diploma"
              institution="Bluffton High School"
              location="Bluffton, SC"
              period="2018 - 2022"
              description="I participated in the Robotics Club and Chess Club. I took courses in AP Computer Science 
                           and AP Physics I and enjoyed it immensely."
              courses={["AP Computer Science", "AP Physics I"]}
            />
            {/* 
            <div className="bg-[#0a0a0a] border border-green-500/20 rounded-lg p-6 mt-12">
              <h2 className="text-xl font-bold mb-4 text-green-500">Certifications</h2>

              <div className="space-y-4">
                
                <div className="border-l-2 border-green-500/50 pl-4">
                  <h3 className="text-lg font-semibold text-[#ededed]">Placeholder Certification</h3>
                  <p className="text-[#ededed]/60">Placeholder Certifying Authority</p>
                </div>

              </div>
            </div>
            */}
          </div>
        </div>
      </motion.main>
      <ResumeButton />
      <Footer />
    </div>
  );
}