import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import { Calendar, MapPin } from "lucide-react";

export default function Education() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
      <Header />
      <main className="container mx-auto px-4 py-16 row-start-2">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 border-b border-accent/20 pb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Education</h1>
            <div className="h-1 w-20 bg-accent mt-4"></div>
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
            <div className="bg-[#0a0a0a] border border-accent/20 rounded-lg p-6 mt-12">
              <h2 className="text-xl font-bold mb-4 text-accent">Certifications</h2>

              <div className="space-y-4">
                
                <div className="border-l-2 border-accent/50 pl-4">
                  <h3 className="text-lg font-semibold text-[#ededed]">Placeholder Certification</h3>
                  <p className="text-[#ededed]/60">Placeholder Certifying Authority</p>
                </div>

              </div>
            </div>
            */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

interface EducationItemProps {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  courses: string[];
}

function EducationItem({ degree, institution, location, period, description, courses }: EducationItemProps) {
  return (
    <div className="border-l-2 border-accent pl-6 relative">
      <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-1"></div>

      <div className="mb-2">
        <h2 className="text-2xl font-bold text-[#ededed]">{degree}</h2>
        <h3 className="text-xl text-accent">{institution}</h3>

        <div className="flex flex-col sm:flex-row sm:items-center text-[#ededed]/60 mt-1 gap-2 sm:gap-4">
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

      <p className="my-4 text-[#ededed]/80">{description}</p>

      <div className="mt-4">
        <h4 className="font-semibold text-[#ededed] mb-2">Key Courses:</h4>
        <div className="flex flex-wrap gap-2">
          {courses.map((course, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#0a0a0a] text-accent border border-accent/20 rounded-full text-sm"
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}