"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResumeButton from "@/components/ResumeButton";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import AmbientBackground from "@/components/AmbientBackground";

export default function About() {
  {/* Currently interesting topics that im exploring in my free time */}
  const topics = [
    { label: "SpacetimeDB 1.0", url: "https://www.youtube.com/watch?v=kzDnA_EVhTU" },
    { label: "Motion.dev", url: "https://motion.dev/" },
    { label: "Atomic Habits by James Clear", url: "https://jamesclear.com/atomic-habits" },
    { label: "Unreal Engine 5", url: "https://www.unrealengine.com/" },
    { label: "LaTeX Resume Design", url: "https://www.overleaf.com/" },
  ];

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
        <AmbientBackground />
        <div 
          className="max-w-4xl mx-auto relative z-10 rounded-lg p-6 my-8 bg-background/80"
          style={{
            boxShadow: `
              0 4px 20px rgba(10,10,10,0.15),
              0 8px 40px rgba(10,10,10,0.1),
              0 16px 80px rgba(10,10,10,0.05)
            `,
          }}
        >
          <div className="mb-8 border-b border-green-500/20 pb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h1>
            <div className="h-1 w-20 bg-green-500 mt-4"></div>
          </div>

          <div className="space-y-6 text-foreground/80">
            <p>
              Hello, I&apos;m Connor W. Floyd, a driven Computational Science student at USCB who&apos;s passionate about coding,
              solving problems, and the endless possibilities technology brings. I&apos;m always interested in exploring new
              technologies and pushing the boundaries of what&apos;s possible.
            </p>

            <div className="relative z-10 bg-[#0a0a0a]/90 backdrop-blur-sm border border-green-500/20 rounded-lg p-6 my-8">
              <h2 className="text-xl font-semibold mb-4 text-green-500">My History</h2>
              <p>
                From as early as middle school, I was interested in creating a career for myself as a coder.
                This curiosity quickly evolved into a passion for technology and its applications. My academic journey has
                supported this growth, not only by sharpening my technical skills but also by nurturing a mindset of continuous
                learning and creative exploration. Whether I’m tackling complex coding challenges or finding new tech solutions,
                I’m always ready to dive deep into the world of technology.
              </p>
            </div>

            <div className="relative z-10 bg-[#0a0a0a]/90 backdrop-blur-sm border border-green-500/20 rounded-lg p-6 my-8">
              <h2 className="text-xl font-semibold mb-4 text-green-500">My Philosophy</h2>
              <p>
                I approach every challenge by thinking about the circumstances and the people involved in the problem I&apos;m
                solving. I believe that technology should be a tool for empowerment, and I strive to create solutions that are not
                only effective but also user-friendly and accessible. I enjoy collaborating with others, sharing ideas, and
                learning from different perspectives. I believe that the best solutions often come from a blend of diverse
                experiences and insights.
              </p>
            </div>

            <div className="relative z-10 bg-[#0a0a0a]/90 backdrop-blur-sm border border-green-500/20 rounded-lg p-6 my-8">
              <h2 className="text-xl font-semibold mb-4 text-green-500">My Interests</h2>
              <p className="mb-4">
                When I’m not immersed in code, you’ll often find me reading my{" "}
                <Link
                  href="https://links.morningbrew.com/c/7tc?kid=c883dbe4&mbcid=39365703.1277734&mid=3182f459bb6b257813db54749be5cffb&mbuuid=iH3npmfMCewtuueFa92CARvH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:underline"
                >
                  favorite tech and economics newsletter
                </Link>
                , watching anime, or hanging out with my CompSci friends at USCB.
              </p>

              <h3 className="text-lg font-medium text-green-500 mb-2">Currently Fascinated By</h3>
              <div className="flex flex-wrap gap-3">
                {topics.map((topic, index) => {
                  const element = (
                    <span
                      className={`bg-background border border-green-500/20 text-foreground/80 px-4 py-1 rounded-full text-sm ${
                        topic.url ? "hover:border-green-500 cursor-pointer" : ""
                      }`}
                    >
                      {topic.label}
                    </span>
                  );

                  return topic.url ? (
                    <Link
                      key={index}
                      href={topic.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {element}
                    </Link>
                  ) : (
                    <span key={index}>{element}</span>
                  );
                })}
              </div>
            </div>

            <p>
              I&apos;m always eager to connect with fellow enthusiasts, collaborators, or anyone excited about leveraging
              technology for positive change. If you&apos;d like to discuss ideas, potential projects, or simply have a
              chat about the future of tech, please don&apos;t hesitate to{" "}
              <Link href="/contact" rel="noopener noreferrer" className="text-green-500 hover:underline">
                reach out!
              </Link>
            </p>
          </div>
        </div>
      </motion.main>
      <ResumeButton />
      <Footer />
    </div>
  );
}