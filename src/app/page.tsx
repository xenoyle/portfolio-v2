import Header from "./components/Header";
import Footer from "./components/Footer";
import NavigationCard from "./components/NavigationCard";
import React from "react";
import Image from "next/image";
import { Code, FileText, GraduationCapIcon as Graduation, Mail, User, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-ibm-plex-sans)]">
      <Header />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="bg-background text-white">
          <div className="container mx-auto px-4 py-4 md:py-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="w-64 h-64 md:w-96 md:h-96 relative overflow-hidden border-4 border-green-500 shadow-lg rounded-4xl">
                <Image
                  src="/headshot.jpg"
                  alt="Profile Picture"
                  layout="fill"
                  className="object-cover filter grayscale hover:grayscale-5 transition-all duration-300"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Welcome to My Portfolio
              </h1>
              <p className="text-xl md:text-2xl max-w-2xl mx-auto text-green-50">
                My name is Connor W. Floyd, and I&apos;m a Junior Computational Science student currently enrolled 
                in USCB and graduating in Spring 2026.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-12 w-full max-w-3xl">
                {navigationItems.map((item) => (
                  <NavigationCard key={item.href} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

const navigationItems = [
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
    description: "Get in touch with me",
  },
];
