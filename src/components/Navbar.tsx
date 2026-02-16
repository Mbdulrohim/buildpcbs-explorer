"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import AppDropdown from "@/components/AppDropdown";
import GuidesDropdown from "@/components/GuidesDropdown";
import BuildersDropdown from "@/components/BuildersDropdown";
import { useWaitlist } from "@/context/WaitlistContext";
import WaitlistModal from "@/components/WaitlistModal";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAppHovered, setIsAppHovered] = useState(false);
  const [isGuidesHovered, setIsGuidesHovered] = useState(false);
  const [isBuildersHovered, setIsBuildersHovered] = useState(false);
  const [isMobileAppOpen, setIsMobileAppOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const contractAddress = "G2aXNcUo4rDbYjWpHou44TB4bwvc1qYhFuE4mPPNpump";

  const { isWaitlistOpen, openWaitlist, closeWaitlist } = useWaitlist();

  useEffect(() => {
    const handleScroll = () => {
      // Toggle at 20px
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { name: "App", href: "#" },
    { name: "Guides", href: "#" },
    { name: "$BUILDERS", href: "#" },
  ];

  const menuVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const menuItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <>
      {/* Fixed container to center the nav */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none">
        <motion.nav
          // Static "Scrolled" style as default
          initial={false}
          animate={{
            marginTop: "20px",
            width: "fit-content",
            maxWidth: "90%",
            borderRadius: "9999px",
            padding: "10px 24px",
            backgroundColor: "var(--navbar-bg)",
            borderColor: "var(--navbar-border)",
            boxShadow: "var(--navbar-shadow)",
            backdropFilter: "blur(12px)",
          }}
          style={{ WebkitBackdropFilter: "blur(12px)" }}
          className="pointer-events-auto flex items-center justify-between gap-8 box-border border"
        >
          {/* Left: Logo (Always Visible) */}
          <div className="flex-shrink-0 flex items-center mr-5">
            <Link
              href="/"
              className="flex items-center gap-[5px] whitespace-nowrap"
            >
              <Image
                src="/logo.png"
                alt="buildpcbs logo"
                width={24}
                height={20}
              />
              <span className="font-medium text-[17px] leading-[22px] tracking-[-0.04em] text-[#444444] dark:text-white">
                BuildPCBs
              </span>
            </Link>
          </div>

          {/* Center: Nav Links (Always Visible) */}
          <div className="hidden md:flex items-center gap-8 flex-shrink-0">
            {navLinks.map((link) => {
              if (link.name === "App") {
                return (
                  <div
                    key={link.name}
                    className="relative flex items-center h-full"
                    onMouseEnter={() => setIsAppHovered(true)}
                    onMouseLeave={() => setIsAppHovered(false)}
                  >
                    <div className="flex items-center cursor-default">
                      <AnimatedText
                        text={link.name}
                        className="text-[17px] font-normal leading-[150%] tracking-[-0.005em] text-[#777777] dark:text-gray-300 hover:text-[#444444] dark:hover:text-white transition-colors duration-300"
                      />
                    </div>
                    <AnimatePresence>
                      {isAppHovered && (
                        <motion.div
                          initial={{ opacity: 0, scaleY: 0.9, y: -10 }}
                          animate={{ opacity: 1, scaleY: 1, y: 0 }}
                          exit={{ opacity: 0, scaleY: 0.9, y: -10 }}
                          transition={{
                            duration: 0.4,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="absolute top-[35px] left-1/2 -translate-x-1/2 z-50 origin-top pt-4"
                        >
                          <AppDropdown />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              if (link.name === "Guides") {
                return (
                  <div
                    key={link.name}
                    className="relative flex items-center h-full"
                    onMouseEnter={() => setIsGuidesHovered(true)}
                    onMouseLeave={() => setIsGuidesHovered(false)}
                  >
                    <div className="flex items-center cursor-default">
                      <AnimatedText
                        text={link.name}
                        className="text-[17px] font-normal leading-[150%] tracking-[-0.005em] text-[#777777] dark:text-gray-300 hover:text-[#444444] dark:hover:text-white transition-colors duration-300"
                      />
                    </div>
                    <AnimatePresence>
                      {isGuidesHovered && (
                        <motion.div
                          initial={{ opacity: 0, scaleY: 0.9, y: -10 }}
                          animate={{ opacity: 1, scaleY: 1, y: 0 }}
                          exit={{ opacity: 0, scaleY: 0.9, y: -10 }}
                          transition={{
                            duration: 0.4,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="absolute top-[35px] left-1/2 -translate-x-1/2 z-50 origin-top pt-4"
                        >
                          <GuidesDropdown />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              if (link.name === "$BUILDERS") {
                return (
                  <div
                    key={link.name}
                    className="relative flex items-center h-full"
                    onMouseEnter={() => setIsBuildersHovered(true)}
                    onMouseLeave={() => setIsBuildersHovered(false)}
                  >
                    <div className="flex items-center cursor-default">
                      <motion.span
                        initial="initial"
                        whileHover="hovered"
                        className="text-[17px] font-normal leading-[150%] tracking-[-0.005em] text-[#777777] dark:text-gray-300 hover:text-[#444444] dark:hover:text-white transition-colors duration-300 cursor-pointer inline-block relative overflow-hidden"
                      >
                        <div className="flex">
                          {"$BUILDers".split("").map((char, index) => (
                            <motion.span
                              key={index}
                              variants={{
                                initial: { y: 0 },
                                hovered: { y: -5 },
                              }}
                              transition={{
                                duration: 0.2,
                                delay: index * 0.03,
                              }}
                              className="inline-block"
                            >
                              {char}
                            </motion.span>
                          ))}
                        </div>
                      </motion.span>
                    </div>
                    <AnimatePresence>
                      {isBuildersHovered && (
                        <motion.div
                          initial={{ opacity: 0, scaleY: 0.9, y: -10 }}
                          animate={{ opacity: 1, scaleY: 1, y: 0 }}
                          exit={{ opacity: 0, scaleY: 0.9, y: -10 }}
                          transition={{
                            duration: 0.4,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="absolute top-[35px] left-1/2 -translate-x-1/2 z-50 origin-top pt-4"
                        >
                          <BuildersDropdown />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return null;
            })}
          </div>

          {/* Right: Buttons (Join Always visible, Copy Conditional) */}
          <div className="flex items-center gap-2 flex-shrink-0 ml-5">
            {/* Launch App - Always Visible */}
            <motion.a
              href="https://app.buildpcbs.com/"
              target="_blank"
              rel="noopener noreferrer"
              initial="initial"
              whileHover="hovered"
              className="hidden md:flex items-center justify-center w-[138px] h-[42px] rounded-full bg-gradient-to-r from-[#0038DF] to-[#001E79] text-[14px] font-medium leading-[22px] tracking-[-0.005em] text-white hover:opacity-90 overflow-hidden"
            >
              <div className="flex">
                {"Launch App".split("").map((char, index) => (
                  <motion.span
                    key={index}
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
            </motion.a>

            {/* Copy CA Button - Visible ONLY when Scrolled */}
            <AnimatePresence>
              {isScrolled && (
                <div className="relative">
                  <motion.button
                    initial={{ width: 0, opacity: 0, scale: 0.8 }}
                    animate={{ width: "42px", opacity: 1, scale: 1 }}
                    exit={{ width: 0, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, ease: "backOut" }}
                    onClick={handleCopy}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center h-[42px] rounded-full bg-[#0038DF] text-white hover:opacity-90 overflow-hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-copy flex-shrink-0"
                    >
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v2" />
                    </svg>
                  </motion.button>
                  {copied && (
                    <motion.span
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: -20 }}
                      exit={{ opacity: 0 }}
                      className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-black dark:text-white bg-white dark:bg-gray-700 px-2 py-1 rounded whitespace-nowrap"
                    >
                      Copied!
                    </motion.span>
                  )}
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Button - Keeping consistent visibility */}
          <div className="md:hidden flex items-center ml-auto">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </motion.nav>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-sm"
          >
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {navLinks.map((link) => {
                if (link.name === "App") {
                  return (
                    <div key={link.name} className="flex flex-col items-center">
                      <motion.button
                        variants={menuItemVariants}
                        onClick={() => setIsMobileAppOpen(!isMobileAppOpen)}
                        className="text-2xl font-medium text-gray-800 dark:text-gray-200 hover:text-[color:var(--primary-brand)] transition-colors"
                      >
                        {link.name}
                      </motion.button>
                      <AnimatePresence>
                        {isMobileAppOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden mt-4"
                          >
                            <div className="scale-[0.85] origin-top">
                              <AppDropdown />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                if (link.name === "Guides") {
                  return null;
                }
                if (link.name === "$BUILDERS") {
                  return (
                    <div key={link.name} className="flex flex-col items-center">
                      <motion.button
                        variants={menuItemVariants}
                        onClick={() => setIsBuildersHovered(!isBuildersHovered)}
                        className="text-2xl font-medium text-gray-800 dark:text-gray-200 hover:text-[color:var(--primary-brand)] transition-colors"
                      >
                        {link.name}
                      </motion.button>
                      <AnimatePresence>
                        {isBuildersHovered && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden mt-4"
                          >
                            <div className="scale-[0.85] origin-top">
                              <BuildersDropdown />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    variants={menuItemVariants}
                    className="text-2xl font-medium text-gray-800 dark:text-gray-200 hover:text-[color:var(--primary-brand)] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
              <motion.a
                href="https://app.buildpcbs.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                }}
                variants={menuItemVariants}
                whileHover="hovered"
                className="flex items-center justify-center w-[180px] h-[50px] rounded-full bg-[color:var(--primary-brand)] text-lg font-medium text-white hover:opacity-90 overflow-hidden"
              >
                <div className="flex">
                  {"Launch App".split("").map((char, index) => (
                    <motion.span
                      key={index}
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
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </>
  );
};

export default Navbar;
