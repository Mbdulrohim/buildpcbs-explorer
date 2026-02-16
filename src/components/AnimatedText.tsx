"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
    text: string;
    className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "" }) => {
    return (
        <motion.div
            className={`relative inline-block overflow-hidden cursor-pointer group ${className}`}
            initial="initial"
            whileHover="hovered"
        >
            <div className="flex">
                {text.split("").map((char, index) => (
                    <motion.span
                        key={index}
                        variants={{
                            initial: { y: 0 },
                            hovered: { y: -5 },
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                            delay: index * 0.03, // Stagger effect
                        }}
                        className="inline-block"
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
};

export default AnimatedText;
