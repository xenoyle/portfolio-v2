"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NavigationCard from "@/components/NavigationCard";
import ResumeButton from "@/components/ResumeButton";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Code,
  FileText,
  GraduationCapIcon as Graduation,
  Mail,
  User,
  Briefcase,
} from "lucide-react";
import { motion, Variants } from "motion/react";

const navItems = [
  {
    href: "/about",
    icon: <User className="h-6 w-6" />,
    title: "About Me",
    description: "Learn more about who I am",
  },
  {
    href: "/experience",
    icon: <Briefcase className="h-6 w-6" />,
    title: "Experience",
    description: "My professional journey",
  },
  {
    href: "/projects",
    icon: <Code className="h-6 w-6" />,
    title: "Projects",
    description: "Showcase of my work",
  },
  {
    href: "/skills",
    icon: <FileText className="h-6 w-6" />,
    title: "Skills",
    description: "Technologies I work with",
  },
  {
    href: "/education",
    icon: <Graduation className="h-6 w-6" />,
    title: "Education",
    description: "My academic background",
  },
  {
    href: "/contact",
    icon: <Mail className="h-6 w-6" />,
    title: "Contact Me",
    description: "Get in touch",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, when: "beforeChildren" },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut" } },
};

export default function Home() {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto] gap-4">
      {/* Header is now full‑bleed */}
      <Header />

      {/* Only this main block is padded */}
      <motion.main
        className="mx-auto w-full max-w-5xl p-6 mt-10 sm:p-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Hero */}  
        <div className="bg-background text-foreground p-4 sm:p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="md:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
              Welcome to My Portfolio
            </h1>
            <p className="text-lg sm:text-xl text-foreground/80">
              I’m Connor W. Floyd—a Junior Computational Science student at USCB,
              graduating Spring 2026.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Link href="/about" className="relative group">
              <Image
                src="/headshot.jpg"
                alt="Profile Picture"
                width={256}
                height={256}
                className="rounded-full border-4 border-green-500 shadow-lg object-cover transition-filter duration-300 group-hover:blur-sm"
                priority
              />
              <span className="absolute inset-0 flex items-center justify-center bg-background/60 rounded-full text-lg font-semibold text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                About Me
              </span>
            </Link>
          </div>
        </div>

        {/* Nav cards */}
        <motion.div
          className="my-14 grid grid-cols-2 sm:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {navItems.map((item) => (
            <motion.div key={item.href} variants={cardVariants}>
              <NavigationCard
                {...item}
                className="focus:outline-none focus:ring-2 focus:ring-green-500 hover:shadow-lg hover:-translate-y-1 transition"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.main>

      {/* Footer is also flush */}
      <Footer />

      {/* ResumeButton can live outside or inside a small padded wrapper */}
      <div className="fixed bottom-4 right-4 z-50">
        <ResumeButton />
      </div>
    </div>
  );
}