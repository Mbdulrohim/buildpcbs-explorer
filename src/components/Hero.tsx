import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

interface HeroProps {
  onJoinWaitlist?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onJoinWaitlist }) => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "G2aXNcUo4rDbYjWpHou44TB4bwvc1qYhFuE4mPPNpump";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const buttonText = copied ? "Copied!" : "Copy CA";

  return (
    <section className="w-full min-h-[100dvh] flex flex-col justify-end pb-[20vh]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left Column */}
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="flex flex-col items-start gap-4">
            <a
              href="https://github.com/BuildPCbs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-white/5 backdrop-blur-md hover:bg-gray-100 dark:hover:bg-white/10 transition-colors group"
            >
              <Github className="w-3.5 h-3.5 text-black dark:text-white" />
              <span className="text-xs font-medium text-black dark:text-white">
                Star on GitHub
              </span>
            </a>
          </div>
          <h1 className="text-[32px] md:text-[48px] leading-[1.1] font-bold tracking-[-0.02em] text-[#111111] dark:text-white max-w-[600px]">
            Text-to-Hardware. <br />
            <span className="text-[#777777] dark:text-gray-400">
              Design, Mint, and Manufacture.
            </span>
          </h1>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 text-left items-start md:text-right md:items-end">
          <p className="font-normal text-[14px] md:text-[17px] leading-[150%] tracking-[-0.005em] text-[#777777] dark:text-gray-300 w-full max-w-[400px] whitespace-pre-line">
            {
              "buildPCBs turns your ideas in text into real hardware prototypes on Solana"
            }
          </p>
          <motion.button
            onClick={handleCopy}
            initial="initial"
            whileHover="hovered"
            className="hidden md:flex items-center justify-center w-[157px] h-[50px] rounded-full text-white font-medium bg-gradient-to-r from-[#0038DF] to-[#001E79] hover:opacity-90 transition-opacity overflow-hidden"
          >
            <div className="flex">
              {buttonText.split("").map((char, index) => (
                <motion.span
                  key={`${buttonText}-${index}`}
                  variants={{
                    initial: { y: 0 },
                    hovered: { y: -5 },
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: index * 0.03,
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
