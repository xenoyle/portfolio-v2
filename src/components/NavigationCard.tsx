import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface NavigationCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function NavigationCard({ href, icon, title, description }: NavigationCardProps) {
  return (
    <Link href={href} className="group">
      <div className="h-full bg-foreground/10 backdrop-blur-sm hover:bg-foreground/20 rounded-lg p-6 transition-all 
      duration-300 flex flex-col items-center text-center border border-foreground/20 hover:border-foreground/40 hover:shadow-lg">
        <div className="p-2 rounded-full bg-green-500 mb-4">{icon}</div>
        <h2 className="text-lg font-semibold mb-1">{title}</h2>
        <p className="text-sm text-foreground/80 mb-3">{description}</p>
        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </Link>
  );
}