"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// --- SVG Components ---

interface IconProps {
  color?: string;
}

const PricingIcon: React.FC<IconProps> = ({ color = "#292D32" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.8"
      d="M12.9002 2.52009L12.8702 2.59009L9.9702 9.32009H7.1202C6.4402 9.32009 5.8002 9.45009 5.2002 9.71009L6.9502 5.53009L6.9902 5.44009L7.0502 5.28009C7.0802 5.21009 7.1002 5.15009 7.1302 5.10009C8.4402 2.07009 9.9202 1.38009 12.9002 2.52009Z"
      fill={color}
    />
    <path
      d="M18.2897 9.52002C17.8397 9.39002 17.3697 9.32002 16.8797 9.32002H9.96973L12.8697 2.59002L12.8997 2.52002C13.0397 2.57002 13.1897 2.64002 13.3397 2.69002L15.5497 3.62002C16.7797 4.13002 17.6397 4.66002 18.1697 5.30002C18.2597 5.42002 18.3397 5.53002 18.4197 5.66002C18.5097 5.80002 18.5797 5.94002 18.6197 6.09002C18.6597 6.18002 18.6897 6.26002 18.7097 6.35002C18.9697 7.20002 18.8097 8.23002 18.2897 9.52002Z"
      fill={color}
    />
    <path
      opacity="0.4"
      d="M21.7602 14.1998V16.1498C21.7602 16.3498 21.7502 16.5498 21.7402 16.7398C21.5502 20.2398 19.6002 21.9998 15.9002 21.9998H8.10023C7.85023 21.9998 7.62023 21.9798 7.39023 21.9498C4.21023 21.7398 2.51023 20.0398 2.29023 16.8598C2.26023 16.6198 2.24023 16.3898 2.24023 16.1498V14.1998C2.24023 12.1898 3.46023 10.4598 5.20023 9.70982C5.80023 9.44982 6.44023 9.31982 7.12023 9.31982H16.8802C17.3702 9.31982 17.8402 9.38982 18.2902 9.51982C20.2902 10.1298 21.7602 11.9898 21.7602 14.1998Z"
      fill={color}
    />
    <path
      opacity="0.6"
      d="M6.95023 5.52979L5.20023 9.70978C3.46023 10.4598 2.24023 12.1898 2.24023 14.1998V11.2698C2.24023 8.42979 4.26023 6.05979 6.95023 5.52979Z"
      fill={color}
    />
    <path
      opacity="0.6"
      d="M21.76 11.2698V14.1998C21.76 11.9898 20.29 10.1298 18.29 9.51984C18.81 8.22984 18.97 7.19984 18.71 6.34984C18.69 6.25984 18.66 6.17984 18.62 6.08984C20.49 7.05984 21.76 9.02984 21.76 11.2698Z"
      fill={color}
    />
  </svg>
);

const BlogIcon: React.FC<IconProps> = ({ color = "#292D32" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.0602 11.8201L20.9002 11.6001C20.6202 11.2601 20.2902 10.9901 19.9102 10.7901C19.4002 10.5001 18.8202 10.3501 18.2202 10.3501H5.7702C5.1702 10.3501 4.6002 10.5001 4.0802 10.7901C3.6902 11.0001 3.3402 11.2901 3.0502 11.6501C2.4802 12.3801 2.2102 13.2801 2.3002 14.1801L2.6702 18.8501C2.8002 20.2601 2.9702 22.0001 6.1402 22.0001H17.8602C21.0302 22.0001 21.1902 20.2601 21.3302 18.8401L21.7002 14.1901C21.7902 13.3501 21.5702 12.5101 21.0602 11.8201ZM14.3902 17.3401H9.6002C9.2102 17.3401 8.9002 17.0201 8.9002 16.6401C8.9002 16.2601 9.2102 15.9401 9.6002 15.9401H14.3902C14.7802 15.9401 15.0902 16.2601 15.0902 16.6401C15.0902 17.0301 14.7802 17.3401 14.3902 17.3401Z"
      fill={color}
    />
    <path
      opacity="0.4"
      d="M3.37988 11.31C3.59988 11.11 3.81988 10.93 4.07988 10.79C4.58988 10.5 5.16988 10.35 5.76988 10.35H18.2299C18.8299 10.35 19.3999 10.5 19.9199 10.79C20.1799 10.93 20.4099 11.11 20.6199 11.32V10.79V9.82C20.6199 6.25 19.5299 5.16 15.9599 5.16H13.5799C13.1399 5.16 13.1299 5.15 12.8699 4.81L11.6699 3.2C11.0999 2.46 10.6499 2 9.21988 2H8.03988C4.46988 2 3.37988 3.09 3.37988 6.66V10.8V11.31Z"
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
      d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z"
      fill={color}
    />
    <path
      d="M17 8.75H7C6.59 8.75 6.25 9.09 6.25 9.5C6.25 9.91 6.59 10.25 7 10.25H17C17.41 10.25 17.75 9.91 17.75 9.5C17.75 9.09 17.41 8.75 17 8.75Z"
      fill={color}
    />
    <path
      d="M14 13.75H7C6.59 13.75 6.25 14.09 6.25 14.5C6.25 14.91 6.59 15.25 7 15.25H14C14.41 15.25 14.75 14.91 14.75 14.5C14.75 14.09 14.41 13.75 14 13.75Z"
      fill={color}
    />
  </svg>
);

const CareersIcon: React.FC<IconProps> = ({ color = "#292D32" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.4"
      d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z"
      fill={color}
    />
    <path
      d="M14.08 14.1499C11.29 12.2899 6.73996 12.2899 3.92996 14.1499C2.65996 14.9999 1.95996 16.1499 1.95996 17.3799C1.95996 18.6099 2.65996 19.7499 3.91996 20.5899C5.31996 21.5299 7.15996 21.9999 8.99996 21.9999C10.84 21.9999 12.68 21.5299 14.08 20.5899C15.34 19.7399 16.04 18.5999 16.04 17.3599C16.03 16.1299 15.34 14.9899 14.08 14.1499Z"
      fill={color}
    />
    <path
      opacity="0.4"
      d="M19.9904 7.3401C20.1504 9.2801 18.7704 10.9801 16.8604 11.2101C16.8504 11.2101 16.8504 11.2101 16.8404 11.2101H16.8104C16.7504 11.2101 16.6904 11.2101 16.6404 11.2301C15.6704 11.2801 14.7804 10.9701 14.1104 10.4001C15.1404 9.4801 15.7304 8.1001 15.6104 6.6001C15.5404 5.7901 15.2604 5.0501 14.8404 4.4201C15.2204 4.2301 15.6604 4.1101 16.1104 4.0701C18.0704 3.9001 19.8204 5.3601 19.9904 7.3401Z"
      fill={color}
    />
    <path
      d="M21.9902 16.5899C21.9102 17.5599 21.2902 18.3999 20.2502 18.9699C19.2502 19.5199 17.9902 19.7799 16.7402 19.7499C17.4602 19.0999 17.8802 18.2899 17.9602 17.4299C18.0602 16.1899 17.4702 14.9999 16.2902 14.0499C15.6202 13.5199 14.8402 13.0999 13.9902 12.7899C16.2002 12.1499 18.9802 12.5799 20.6902 13.9599C21.6102 14.6999 22.0802 15.6299 21.9902 16.5899Z"
      fill={color}
    />
  </svg>
);

const GuideItem = ({
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
        className={`w-[36px] h-[36px] flex items-center justify-center rounded-[4px] border-[0.5px] transition-colors ${isActive ? "bg-white dark:bg-[#111] border-[#DDE2FF] dark:border-[#0038DF]" : "bg-white dark:bg-[#111] border-[#EEEEEE] dark:border-[#333] text-[#292D32] dark:text-[#E0E0E0]"}`}
      >
        <div className="relative w-[24px] h-[24px]">
          <Icon color={isActive ? "#0038DF" : "currentColor"} />{" "}
          {/* Note: Ideally Icon component handles dark mode color internally or we pass distinct props */}
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

const iconMap: Record<string, React.FC<IconProps>> = {
  Pricing: PricingIcon,
  Careers: CareersIcon,
  Blog: BlogIcon,
  Documentation: DocumentationIcon,
};

const GuidesDropdown = () => {
  const [activeItem, setActiveItem] = useState("Pricing");
  const ActiveIcon = iconMap[activeItem];

  return (
    <div className="w-[418px] h-[276px] relative bg-white dark:bg-[#111] border border-[#EEEEEE] dark:border-[#333] rounded-[20px] shadow-lg overflow-hidden font-['DM_Sans']">
      {/* Left Panel */}
      <div className="absolute left-[10px] top-[10px] w-[227px] h-[255px] bg-[#FAFAFA] dark:bg-[#1A1A1A] border-[0.3px] border-[#EEEEEE] dark:border-[#333] rounded-[12px] flex flex-col items-center py-[10px] justify-between z-10">
        <GuideItem
          title="Pricing"
          subtitle="How much it costs"
          Icon={PricingIcon}
          href="/pricing"
          isActive={activeItem === "Pricing"}
          onHover={setActiveItem}
        />
        <GuideItem
          title="Careers"
          subtitle="Who & when we hire"
          Icon={CareersIcon}
          href="/careers"
          isActive={activeItem === "Careers"}
          onHover={setActiveItem}
        />
        <GuideItem
          title="Blog"
          subtitle="Important Updates"
          Icon={BlogIcon}
          href="/blog"
          isActive={activeItem === "Blog"}
          onHover={setActiveItem}
        />
        <GuideItem
          title="Documentation"
          subtitle="How and why it works"
          Icon={DocumentationIcon}
          href="/docs"
          isActive={activeItem === "Documentation"}
          onHover={setActiveItem}
        />
      </div>

      {/* Right Panel - Illustration Area */}
      <div className="absolute left-[247px] top-[10px] w-[162px] h-[255px] bg-[#DDE2FF] dark:bg-[#0038DF]/20 border-[0.3px] border-[#EEEEEE] dark:border-[#333] rounded-[12px] overflow-hidden flex flex-col items-center justify-center">
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
      </div>
    </div>
  );
};

export default GuidesDropdown;
