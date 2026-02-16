import React from "react";
import Image from "next/image";

const featuresData = [
  {
    title: "AI Hardware Compiler",
    description:
      "Describe a device in plain text. The system generates the PCB, schematic, BOM, enclosure, and firmware automatically.",
    image: "/natural.png",
  },
  {
    title: "Web3 Manufacturing",
    description:
      "A decentralized network where CNC owners and fabricators stake $BUILD to receive and process jobs.",
    image: "/checks.png",
  },
  {
    title: "Closed Marketplace",
    description:
      "Publish your designs to a closed ecosystem. Ownership, logs, and version history are tracked on-chain.",
    image: "/end.png",
  },
  {
    title: "Mobile Execution",
    description:
      "Chat with the AI to design hardware, manage builds, or publish products entirely from your phone.",
    image: "/godspeed.png",
  },
];

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
}

const FeatureCard = ({ title, description, image }: FeatureCardProps) => {
  return (
    <div className="group relative p-8 bg-white dark:bg-black border-[0.5px] border-[#0038DF] rounded-xl transition-all duration-300 hover:bg-gradient-to-b from-[#255CFF] to-[#0038DF]">
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center md:items-start">
        <div className="text-left max-w-[476px]">
          <h3 className="text-[24px] font-medium leading-[150%] tracking-[-0.005em] text-[#999999] group-hover:text-white">
            {title}
          </h3>
          <p className="mt-2 text-[14px] font-normal leading-[125%] tracking-[-0.005em] text-[#C3C3C3] group-hover:text-white/80 max-w-[409px]">
            {description}
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <Image
            src={image}
            alt={title}
            width={144}
            height={144}
            className="transition-transform duration-700 ease-in-out group-hover:scale-[1] group-hover:-translate-y-[40px]"
          />
        </div>
      </div>
    </div>
  );
};

import MobileFeatures from "@/components/MobileFeatures";

// ... (existing imports and FeatureCard)

const Features = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-0 md:px-6 lg:px-8 py-0 md:py-24">
      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 gap-8 px-4">
        {featuresData.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>

      {/* Mobile View */}
      <MobileFeatures />
    </section>
  );
};

export default Features;
