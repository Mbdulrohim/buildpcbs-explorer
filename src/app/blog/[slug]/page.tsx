"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Clock, Calendar, User } from "lucide-react";

// --- Dummy Content for Demonstration ---
const blogContent = [
    { type: 'h2', text: 'Hardware has always been bottlenecked' },
    { type: 'p', text: 'Design with an AI Agent that takes your prompts into circuit board layouts in minutes. Hardware has always been bottlenecked by the invisible cost of friction. Every inefficiency, every cognitive tax, slows progress. And somewhere between these two languages lies a quiet but universal truth: every piece of hardware has a soul. That soul is its circuit board.' },
    { type: 'h2', text: 'The Paradox of Software' },
    { type: 'p', text: 'For decades, circuit board design has been treated like an accounting exercise. Line after line, trace after trace, on tools that look like a digitized pen and paper. Efficient, yes. Practical, sure. But hardly imaginative. Here’s the paradox: software has evolved into living, breathing ecosystems. We build on endless canvases. We collaborate in real-time.' },
    { type: 'h3', text: 'Living, Breathing Ecosystems' },
    { type: 'p', text: 'We play, experiment, test, and iterate. Meanwhile, hardware—the very stuff our real world runs on—has remained chained to tools that feel like relics. At BuildPCB, we asked a simple question: What if designing a circuit board didn’t feel like drafting a tax form, but like creating on Figma?' },
    { type: 'h2', text: 'A True Agentic Experience' },
    { type: 'p', text: 'What if the tools didn’t just sit there waiting for commands, but thought alongside you? So we built an agent. Not another CAD tool with sleeker buttons. Not another tired UI redesign. A true agentic experience: an endless, intelligent canvas where your intent is understood, guided, and translated into working design.' },
    { type: 'h2', text: 'Conclusion' },
    { type: 'p', text: 'The future of hardware design is here, and it is intelligent.' },
];

const BlogPostPage = () => {
    const params = useParams();
    const slug = params.slug;

    const [activeId, setActiveId] = useState<string>("");
    const [readingProgress, setReadingProgress] = useState(0);

    // --- TOC & Scroll Logic ---
    useEffect(() => {
        const handleScroll = () => {
            // 1. Reading Progress (Vertical Bar)
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setReadingProgress(progress);

            // 2. Active Header for TOC
            const headers = document.querySelectorAll("h2, h3");
            let currentId = "";
            headers.forEach((header) => {
                const top = header.getBoundingClientRect().top;
                if (top < 150) { // Offset for sticky header
                    currentId = header.id;
                }
            });
            if (currentId) setActiveId(currentId);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="w-full min-h-screen bg-white dark:bg-black text-[#444444] dark:text-white font-['DM_Sans'] transition-colors duration-300">

            {/* Blog Page Title Area */}
            <div className="flex flex-col items-center pt-[77px] pb-[50px]">
                <h1 className="text-[44px] font-normal leading-[120%] text-[#444444] dark:text-white">Blog</h1>
                <p className="text-[18px] text-[#4A4A4A] dark:text-gray-400 font-light mt-2">Few minutes blog reads!</p>
            </div>

            <div className="max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row gap-[82px] relative">

                {/* --- Main Content (Left) --- */}
                <div className="w-full lg:w-[70%]">

                    {/* Article Header Card */}
                    <div className="w-full h-[241px] rounded-[16px] bg-gradient-to-b from-[#255CFF] to-[#EBEBEB] dark:to-[#111111] border border-[#CECECE] dark:border-gray-800 p-[24px] mb-[88px] flex flex-col justify-end relative overflow-hidden shadow-sm">

                        {/* Author & Meta */}
                        <div className="flex flex-col gap-4 z-10">
                            <div className="flex items-center gap-2">
                                <div className="w-[18px] h-[18px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                                <span className="text-[12px] font-medium text-[#777777] dark:text-gray-300">Samsudeen Afolabi</span>
                            </div>

                            <h1 className="text-[32px] font-normal leading-[100%] tracking-[-0.02em] text-[#444444] dark:text-white mix-blend-hard-light dark:mix-blend-normal">
                                How to build a circuit board
                            </h1>

                            <div className="flex items-center gap-5 text-[14px] text-[#777777] dark:text-gray-300">
                                <span>October 12, 2025.</span>
                                <span>•</span>
                                <span>4mins</span>
                            </div>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute inset-0 bg-white/40 dark:bg-black/20 z-0" />
                    </div>

                    {/* Article Body */}
                    <article className="prose prose-lg max-w-none text-[14px] leading-[150%] text-[#777777] dark:text-gray-300 tracking-[0.01em]">
                        {blogContent.map((block, index) => {
                            if (block.type === 'h2') {
                                const id = block.text.toLowerCase().replace(/\s+/g, '-');
                                return <h2 key={index} id={id} className="text-[24px] font-medium text-[#444444] dark:text-white mt-8 mb-4 scroll-mt-24">{block.text}</h2>;
                            }
                            if (block.type === 'h3') {
                                const id = block.text.toLowerCase().replace(/\s+/g, '-');
                                return <h3 key={index} id={id} className="text-[18px] font-medium text-[#444444] dark:text-gray-100 mt-6 mb-3 scroll-mt-24">{block.text}</h3>;
                            }
                            return <p key={index} className="mb-6">{block.text}</p>;
                        })}
                    </article>

                </div>


                {/* --- Sidebar (Right) - Sticky Table of Contents --- */}
                <aside className="hidden lg:block lg:w-[30%] relative">
                    <div className="sticky top-[150px] flex gap-6">

                        {/* 1. Progress Bar Logic */}
                        <div className="w-[3px] h-[300px] bg-gray-100 dark:bg-gray-800 rounded-full relative overflow-hidden">
                            <div
                                className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#88AAFF] to-[#0038DF] transition-all duration-300 ease-out"
                                style={{ height: `${readingProgress}%` }}
                            />
                        </div>

                        {/* 2. Table of Contents Text */}
                        <div className="flex flex-col gap-4 pt-2">
                            <h4 className="text-[14px] font-medium text-[#444444] dark:text-white uppercase tracking-wider mb-2">Table of Contents</h4>
                            {blogContent.filter(b => b.type.startsWith('h')).map((header, i) => {
                                const id = header.text.toLowerCase().replace(/\s+/g, '-');
                                const isActive = activeId === id;

                                return (
                                    <Link
                                        key={i}
                                        href={`#${id}`}
                                        className={`text-[15px] transition-colors duration-200 block ${isActive ? 'text-[#0038DF] font-medium' : 'text-[#999999] dark:text-gray-500 hover:text-[#666666] dark:hover:text-gray-300'}`}
                                    >
                                        {header.text}
                                    </Link>
                                )
                            })}
                        </div>

                    </div>
                </aside>

            </div>

        </div>
    );
};

export default BlogPostPage;
