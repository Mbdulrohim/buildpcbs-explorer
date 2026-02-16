"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// --- SVG Icons for Left Panel ---

interface IconProps {
  color?: string;
  isActive?: boolean;
}

const BuildTokenIcon: React.FC<IconProps> = ({ color = "#292D32" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 8.5C22 12.09 19.09 15 15.5 15C15.33 15 15.15 14.99 14.98 14.98C14.73 11.81 12.19 9.27 9.01999 9.02C9.00999 8.85 9 8.67 9 8.5C9 4.91 11.91 2 15.5 2C19.09 2 22 4.91 22 8.5Z"
      fill={color}
    />
    <path
      opacity="0.4"
      d="M8.5 9.5L8.99023 9.51953C11.9074 9.7543 14.2447 12.0926 14.4795 15.0098H14.4805C14.4905 15.1808 14.5 15.3468 14.5 15.5C14.5 18.8139 11.8139 21.5 8.5 21.5C5.18614 21.5 2.5 18.8139 2.5 15.5C2.5 12.1861 5.18614 9.5 8.5 9.5Z"
      fill={color}
      stroke="white"
    />
    <path
      d="M7.62 14.62L8.5 13L9.38 14.62L11 15.5L9.38 16.38L8.5 18L7.62 16.38L6 15.5L7.62 14.62Z"
      fill={color}
    />
  </svg>
);

const DocumentationIcon: React.FC<IconProps> = ({ color = "#292D32" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.4"
      d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
      fill={color}
    />
    <path
      d="M15.8002 2.20999C15.3902 1.79999 14.6802 2.07999 14.6802 2.64999V6.13999C14.6802 7.59999 15.9202 8.80999 17.4302 8.80999C18.3802 8.81999 19.7002 8.81999 20.8302 8.81999C21.4002 8.81999 21.7002 8.14999 21.3002 7.74999C19.8602 6.29999 17.2802 3.68999 15.8002 2.20999Z"
      fill={color}
    />
    <path
      d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z"
      fill={color}
    />
    <path
      d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z"
      fill={color}
    />
  </svg>
);

const CommunityIcon: React.FC<IconProps> = ({ color = "#292D32" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.4"
      d="M17.53 7.77C17.46 7.76 17.39 7.76 17.32 7.77C15.77 7.72 14.54 6.45 14.54 4.89C14.54 3.3 15.83 2 17.43 2C19.02 2 20.32 3.29 20.32 4.89C20.31 6.45 19.08 7.72 17.53 7.77Z"
      fill={color}
    />
    <path
      opacity="0.4"
      d="M20.7901 14.6999C19.6701 15.4499 18.1001 15.7299 16.6501 15.5399C17.0301 14.7199 17.2301 13.8099 17.2401 12.8499C17.2401 11.8499 17.0201 10.8999 16.6001 10.0699C18.0801 9.86992 19.6501 10.1499 20.7801 10.8999C22.3601 11.9399 22.3601 13.6499 20.7901 14.6999Z"
      fill={color}
    />
    <path
      opacity="0.4"
      d="M6.4399 7.77C6.5099 7.76 6.5799 7.76 6.6499 7.77C8.1999 7.72 9.4299 6.45 9.4299 4.89C9.4299 3.3 8.1399 2 6.5399 2C4.9499 2 3.6499 3.29 3.6499 4.89C3.6599 6.45 4.8899 7.72 6.4399 7.77Z"
      fill={color}
    />
    <path
      opacity="0.4"
      d="M6.55012 12.8501C6.55012 13.8201 6.76012 14.7401 7.14012 15.5701C5.73012 15.7201 4.26012 15.4201 3.18012 14.7101C1.60012 13.6601 1.60012 11.9501 3.18012 10.9001C4.25012 10.1801 5.76012 9.8901 7.18012 10.0501C6.77012 10.8901 6.55012 11.8401 6.55012 12.8501Z"
      fill={color}
    />
    <path
      d="M12.1198 15.87C12.0398 15.86 11.9498 15.86 11.8598 15.87C10.0198 15.81 8.5498 14.3 8.5498 12.44C8.5498 10.54 10.0798 9 11.9898 9C13.8898 9 15.4298 10.54 15.4298 12.44C15.4298 14.3 13.9698 15.81 12.1198 15.87Z"
      fill={color}
    />
    <path
      d="M8.8698 17.9399C7.3598 18.9499 7.3598 20.6099 8.8698 21.6099C10.5898 22.7599 13.4098 22.7599 15.1298 21.6099C16.6398 20.5999 16.6398 18.9399 15.1298 17.9399C13.4198 16.7899 10.5998 16.7899 8.8698 17.9399Z"
      fill={color}
    />
  </svg>
);

const TokenomicsIcon: React.FC<IconProps> = ({ color = "#292D32" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.6697 6.9499C21.0297 4.7799 19.2197 2.9699 17.0497 2.3299C15.3997 1.8499 14.2597 1.8899 13.4697 2.4799C12.5197 3.1899 12.4097 4.4699 12.4097 5.3799V7.8699C12.4097 10.3299 13.5297 11.5799 15.7297 11.5799H18.5997C19.4997 11.5799 20.7897 11.4699 21.4997 10.5199C22.1097 9.7399 22.1597 8.5999 21.6697 6.9499Z"
      fill={color}
    />
    <path
      opacity="0.4"
      d="M18.9099 13.3599C18.6499 13.0599 18.2699 12.8899 17.8799 12.8899H14.2999C12.5399 12.8899 11.1099 11.4599 11.1099 9.69991V6.11991C11.1099 5.72991 10.9399 5.34991 10.6399 5.08991C10.3499 4.82991 9.9499 4.70991 9.5699 4.75991C7.2199 5.05991 5.0599 6.34991 3.6499 8.28991C2.2299 10.2399 1.7099 12.6199 2.1599 14.9999C2.8099 18.4399 5.5599 21.1899 9.0099 21.8399C9.5599 21.9499 10.1099 21.9999 10.6599 21.9999C12.4699 21.9999 14.2199 21.4399 15.7099 20.3499C17.6499 18.9399 18.9399 16.7799 19.2399 14.4299C19.2899 14.0399 19.1699 13.6499 18.9099 13.3599Z"
      fill={color}
    />
  </svg>
);

const RoadmapIcon: React.FC<IconProps> = ({ color = "#292D32" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
      fill={color}
      opacity="0.4"
    />
    <path
      d="M16.5 12C16.5 14.48 14.48 16.5 12 16.5C9.52 16.5 7.5 14.48 7.5 12C7.5 9.52 9.52 7.5 12 7.5C14.48 7.5 16.5 9.52 16.5 12Z"
      fill={color}
    />
  </svg>
);

// --- Social Icons ---
// Simple SVGs for better quality scaling
const SvgX = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const SvgIG = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const SvgLinkedin = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const SvgGithub = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path
      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);
const SvgTiktok = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v4a9 9 0 0 1-9-9v12z" />
  </svg>
);
const SvgTelegram = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.6 2.6c-.5-.2-1-.2-1.5 0l-18 7c-.6.2-.8.8-.4 1.3l4 4.8c.2.2.5.3.8.2l11.4-7c.1-.1.3 0 .2.2l-9.3 8.4c-.2.2-.3.5-.2.8l2.2 7c.2.6 1 .7 1.4.2l5.1-4.7c.3-.3.8-.3 1.1 0l4.5 3.3c.5.4 1.3 0 1.4-.7l3-18c.1-.6-.4-1.1-1-1.3z" />
  </svg>
);
const SvgDiscord = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037 13.56 13.56 0 0 0-.585 1.205 18.28 18.28 0 0 0-5.536 0 13.52 13.52 0 0 0-.59-1.205.071.071 0 0 0-.079-.037 19.73 19.73 0 0 0-4.885 1.515.068.068 0 0 0-.032.027C.533 9.046.22 13.575.61 18.057a.082.082 0 0 0 .03.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const BuilderItem = ({
  title,
  subtitle,
  Icon,
  href,
  isActive,
  onHover,
}: {
  title: string;
  subtitle: string;
  Icon: React.FC<IconProps>;
  href: string;
  isActive: boolean;
  onHover: (title: string) => void;
}) => {
  return (
    <Link
      href={href}
      className={`group flex items-center gap-[15px] p-[10px] w-[211px] h-[52px] rounded-[8px] transition-all duration-200 border ${isActive ? "bg-[#DDE2FF] dark:bg-[#0038DF]/20 border-[#A5B4FF] dark:border-[#0038DF]" : "bg-transparent border-transparent hover:bg-gray-50 dark:hover:bg-[#222]"}`}
      onMouseEnter={() => onHover(title)}
    >
      {/* Icon Container */}
      <div
        className={`w-[36px] h-[36px] flex items-center justify-center rounded-[4px] border-[0.5px] transition-colors ${isActive ? "bg-white dark:bg-[#111] border-[#DDE2FF] dark:border-[#0038DF]" : "bg-white dark:bg-[#111] border-[#EEEEEE] dark:border-[#333] text-[#292929] dark:text-[#E0E0E0]"}`}
      >
        <div className="relative w-[24px] h-[24px] flex items-center justify-center">
          <Icon color={isActive ? "#0038DF" : "currentColor"} />{" "}
          {/* Note: Icons might need dark mode handling if not using currentColor */}
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-[2px]">
        <span
          className={`text-[17px] font-medium leading-[110%] tracking-[-0.005em] transition-colors ${isActive ? "text-[#0038DF] dark:text-[#5C94FF]" : "text-[#4B4B4B] dark:text-[#E0E0E0]"}`}
        >
          {title}
        </span>
        <span
          className={`text-[14px] font-normal leading-[110%] tracking-[-0.01em] transition-colors ${isActive ? "text-[#597CEC] dark:text-[#8AA4FF]" : "text-[#777777] dark:text-[#AAAAAA]"}`}
        >
          {subtitle}
        </span>
      </div>
    </Link>
  );
};

// Social Media Item Component
const SocialItem = ({
  name,
  Icon,
  href,
}: {
  name: string;
  Icon: React.FC;
  href: string;
}) => {
  return (
    <div className="group relative w-full h-[24px] flex items-center text-black dark:text-[#E0E0E0]">
      <Link href={href} className="flex items-center">
        <div className="w-[24px] h-[24px] flex items-center justify-center hover:opacity-75 transition-opacity">
          <Icon />
        </div>
        {/* Name Expansion */}
        <motion.span
          initial={{ opacity: 0, x: -5, width: 0 }}
          whileHover={{ opacity: 1, x: 5, width: "auto" }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden whitespace-nowrap text-[14px] font-medium text-[#0038DF]"
        >
          <span className="pl-1">{name}</span>
        </motion.span>

        {/* Alternative: If the user meant "on hover [of the icon], put the name in front [next to it]",
                     I can use a parent hover state. Let's try simple Framer Motion variant on the text.
                     Wait, `Link` wraps both. So hovering anywhere near it might trigger.
                     Let's make text hidden by default and appear on hover.
                 */}
        <div className="w-0 overflow-hidden group-hover:w-auto transition-all duration-300 flex items-center">
          <span className="text-[14px] font-medium text-[#0038DF] ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {name}
          </span>
        </div>
      </Link>
    </div>
  );
};

const iconMap: Record<string, React.FC<IconProps>> = {
  $BUILD: BuildTokenIcon,
  Documentation: DocumentationIcon,
  Community: CommunityIcon,
  Tokenomics: TokenomicsIcon,
  Roadmap: RoadmapIcon,
};

const BuildersDropdown = () => {
  const [activeItem, setActiveItem] = useState("Community");
  const ActiveIcon = iconMap[activeItem];

  // Socials List Data
  const socials = [
    {
      name: "@buildpcbswithAI",
      Icon: SvgX,
      href: "https://x.com/buildpcbswithAI",
    },
    { name: "BuildPCBs", Icon: SvgIG, href: "https://instagram.com/buildpcbs" },
    { name: "LinkedIn", Icon: SvgLinkedin, href: "#" },
    { name: "GitHub", Icon: SvgGithub, href: "https://github.com/BuildPCbs" },
    { name: "TikTok", Icon: SvgTiktok, href: "#" },
    { name: "@BuildPCBs", Icon: SvgTelegram, href: "https://t.me/BuildPCBs" },
    { name: "Discord", Icon: SvgDiscord, href: "#" },
  ];

  return (
    <div className="w-[418px] h-[330px] relative bg-white dark:bg-[#111] border border-[#EEEEEE] dark:border-[#333] rounded-[20px] shadow-lg overflow-hidden font-['DM_Sans']">
      {/* Left Panel */}
      <div className="absolute left-[10px] top-[10px] w-[227px] h-[310px] bg-[#FAFAFA] dark:bg-[#1A1A1A] border-[0.3px] border-[#EEEEEE] dark:border-[#333] rounded-[12px] flex flex-col items-center py-[10px] justify-between z-10">
        <BuilderItem
          title="$BUILD"
          subtitle="The Token"
          Icon={BuildTokenIcon}
          href="/build"
          isActive={activeItem === "$BUILD"}
          onHover={setActiveItem}
        />
        <BuilderItem
          title="Documentation"
          subtitle="APIs & SDKs"
          Icon={DocumentationIcon}
          href="/docs"
          isActive={activeItem === "Documentation"}
          onHover={setActiveItem}
        />
        <BuilderItem
          title="Community"
          subtitle="Join the DAO."
          Icon={CommunityIcon}
          href="/community"
          isActive={activeItem === "Community"}
          onHover={setActiveItem}
        />
        <BuilderItem
          title="Tokenomics"
          subtitle="Supply & Vesting"
          Icon={TokenomicsIcon}
          href="/tokenomics"
          isActive={activeItem === "Tokenomics"}
          onHover={setActiveItem}
        />
        <BuilderItem
          title="Roadmap"
          subtitle="Future Plans"
          Icon={RoadmapIcon}
          href="/roadmap"
          isActive={activeItem === "Roadmap"}
          onHover={setActiveItem}
        />
      </div>

      {/* Right Panel */}
      <div className="absolute left-[247px] top-[10px] w-[162px] h-[310px] bg-[#DDE2FF] dark:bg-[#0038DF]/20 border-[0.3px] border-[#EEEEEE] dark:border-[#333] rounded-[12px] overflow-hidden flex flex-col items-center justify-center">
        {activeItem === "Community" ? (
          // --- Community Content (Socials) ---
          <div className="w-full h-full flex flex-col justify-center pl-4 gap-2">
            {/* Shifted left (pl-4 or similar). Using absolute positioning stack not needed, flex is better. */}
            {socials.map((social) => (
              <SocialItem key={social.name} {...social} />
            ))}
          </div>
        ) : (
          // --- Standard Content (Big Icon) ---
          <>
            {/* Background Visuals */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] bg-[#0038DF] opacity-20 blur-[40px] rounded-full" />
            </div>

            {/* Dynamic Visual */}
            <div className="relative w-full h-full flex flex-col items-center justify-center z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.25, ease: "backOut" }}
                  className="relative w-[80px] h-[80px] flex items-center justify-center [&_svg]:w-full [&_svg]:h-full"
                >
                  {ActiveIcon && <ActiveIcon color="#0038DF" />}
                </motion.div>
              </AnimatePresence>

              {/* Label */}
              <motion.span
                key={`label-${activeItem}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-[12px] font-medium text-[#0038DF] bg-white/60 backdrop-blur-md px-3 py-1 rounded-full pointer-events-none"
              >
                {activeItem}
              </motion.span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BuildersDropdown;
