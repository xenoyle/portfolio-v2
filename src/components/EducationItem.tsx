import React from "react";
import { Calendar, MapPin } from "lucide-react";


interface EducationItemProps {
    degree: string;
    institution: string;
    location: string;
    period: string;
    description: string;
    courses: string[];
}
  
export default function EducationItem({ degree, institution, location, period, description, courses }: EducationItemProps) {
    return (
        <div className="border-l-2 border-green-500 pl-6 relative">
            <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-[9px] top-1"></div>

            <div className="mb-2">
                <h2 className="text-2xl font-bold text-foreground">{degree}</h2>
                <h3 className="text-xl text-green-500">{institution}</h3>

                <div className="flex flex-col sm:flex-row sm:items-center text-foreground/60 mt-1 gap-2 sm:gap-4">
                <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{location}</span>
                </div>
                <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{period}</span>
                </div>
                </div>
            </div>

            <p className="my-4 text-foreground/80">{description}</p>

            <div className="mt-4">
                <h4 className="font-semibold text-foreground mb-2">Key Courses:</h4>
                <div className="flex flex-wrap gap-2">
                {courses.map((course, index) => (
                    <span
                    key={index}
                    className="px-3 py-1 bg-[#0a0a0a] text-green-500 border border-green-500/20 rounded-full text-sm"
                    >
                    {course}
                    </span>
                ))}
                </div>
            </div>
        </div>
);
}