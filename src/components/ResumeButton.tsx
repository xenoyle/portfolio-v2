import React from "react";
import Link from "next/link";
import { Download } from "lucide-react";
import { motion } from "motion/react";

export default function ResumeButton() {
    return (
        <div className="fixed left-0 right-0 bottom-8 flex items-center justify-center z-70">
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <Link
                    href="/ConnorWFloyd_Resume.pdf" // Place your resume in the public folder
                    target = "_blank"
                    download
                    className="flex items-center justify-center bg-green-500 text-background p-3 rounded-full shadow-lg border-2 border-green-700 hover:border-green-400 transition-colors"
                >
                    <Download className="h-5 w-5 mr-2" />
                    <span className="text-lg font-semibold">Resume</span>
                </Link>
            </motion.div>
        </div>
    );
}
