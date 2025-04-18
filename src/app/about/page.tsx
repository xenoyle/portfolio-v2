import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
      <Header />
      <main className="container mx-auto px-4 row-start-2">
        <div className="max-w-4xl mx-auto">
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

            <p>
            From as early as middle school, I was interested creating a career for myself as a coder. This curiosity 
            quickly evolved into a passion for technology and it&apos;s applications. My academic journey has helped me with 
            this, not only by sharpening my technical skills but also by nurturing a mindset of continuous learning and creative 
            exploration. Whether I&apos;m tackling complex coding challenges, or finding new technology solutions for problems, 
            I&apos;m always ready to dive deep into the world of technology.
            </p>

            <div className="bg-[#0a0a0a] border border-green-500/20 rounded-lg p-6 my-8">
              <h2 className="text-xl font-semibold mb-4 text-green-500">My Philosophy</h2>
              <p>
              I approach every challenge by thinking about the circumstances and the people involved in the problem I&apos;m 
              solving. I believe that technology should be a tool for empowerment, and I strive to create solutions that are not 
              only effective but also user-friendly and accessible. I enjoy collaborating with others, sharing ideas, and
              learning from different perspectives. I believe that the best solutions often come from a blend of diverse
              experiences and insights.
              </p>
            </div>

            <p>
            When I&apos;m not immersed in code, you&apos;ll often find me reading my {" "}
            <Link href="https://links.morningbrew.com/c/7tc?kid=c883dbe4&mbcid=39365703.1277734&mid=3182f459bb6b257813db54749be5cffb&mbuuid=iH3npmfMCewtuueFa92CARvH" 
            target = "_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:underline">
                favorite tech and economics newsletter
            </Link>
            , watching some new anime, working out in the gym, and hanging out with my CompSci friends at USCB. 
            These interests keep me balanced and inspire my creativity in the tech world. I believe that a well-rounded life fuels 
            innovation and helps me approach problem from different angles.
            </p>

            <p>
            I&apos;m always eager to connect with fellow enthusiasts, collaborators, or anyone excited about leveraging 
            technology for positive change. If you&apos;d like to discuss ideas, potential projects, or simply have a 
            chat about the future of tech, please don&apos;t hesitate to{" "}
            <Link href="/contact"
            rel="noopener noreferrer"
            className="text-green-500 hover:underline">
              reach out!
            </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}