import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";

export default function Skills() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
      <Header />
      <main className="container mx-auto px-4 py-16 row-start-2">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 border-b border-green-500/20 pb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Skills</h1>
            <div className="h-1 w-20 bg-green-500 mt-4"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <SkillCategory
              title="Programming Languages"
              skills={[
                { name: "JavaScript", level: 90 },
                { name: "TypeScript", level: 85 },
                { name: "Python", level: 80 },
                { name: "Java", level: 70 },
                { name: "C++", level: 60 },
              ]}
            />

            <SkillCategory
              title="Frontend Development"
              skills={[
                { name: "React", level: 90 },
                { name: "Next.js", level: 85 },
                { name: "HTML/CSS", level: 95 },
                { name: "Tailwind CSS", level: 90 },
                { name: "Vue.js", level: 75 },
              ]}
            />

            <SkillCategory
              title="Backend Development"
              skills={[
                { name: "Node.js", level: 85 },
                { name: "Express", level: 80 },
                { name: "Django", level: 75 },
                { name: "Flask", level: 70 },
                { name: "GraphQL", level: 65 },
              ]}
            />

            <SkillCategory
              title="Tools & Technologies"
              skills={[
                { name: "Git", level: 90 },
                { name: "Docker", level: 80 },
                { name: "AWS", level: 75 },
                { name: "CI/CD", level: 85 },
                { name: "Agile/Scrum", level: 90 },
              ]}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

interface Skill {
  name: string;
  level: number;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="bg-background border border-green-500/20 rounded-lg p-6">
      <h2 className="text-xl font-bold mb-6 text-green-500">{title}</h2>

      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-foreground">{skill.name}</span>
              <span className="text-background/60">{skill.level}%</span>
            </div>
            <div className="w-full bg-backgroun] rounded-full h-2.5">
              <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}