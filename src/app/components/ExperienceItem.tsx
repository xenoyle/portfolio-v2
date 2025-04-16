import React from "react";
import { Calendar } from "lucide-react";

interface ExperienceItemProps {
    title: string;
    company: string;
    period: string;
    description: string;
    technologies: string[];
}
  
export default function ExperienceItem({ title, company, period, description, technologies }: ExperienceItemProps) {
    return (
        <div className="border-l-2 border-green-500 pl-6 relative">
            <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-[9px] top-1"></div>

            <div className="mb-2">
                <h2 className="text-2xl font-bold text-foreground">{title}</h2>
                <h3 className="text-xl text-green-500">{company}</h3>
                <div className="flex items-center text-foreground/60 mt-1">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{period}</span>
                </div>
            </div>

            <p className="my-4 text-foreground/80">{description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
                {technologies.map((tech, index) => (
                <span
                    key={index}
                    className="px-3 py-1 bg-background text-green-500 border border-green-500/20 rounded-full text-sm"
                >
                    {tech}
                </span>
                ))}
            </div>
        </div>
);
}