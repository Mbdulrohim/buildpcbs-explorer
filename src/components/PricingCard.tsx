import React from "react";
import { Info } from "lucide-react";

interface PricingCardProps {
  planName: string;
  price: string;
  perks: string[];
  isPopular?: boolean;
  isSelected?: boolean;
  onSelect?: () => void;
  blurred?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  planName,
  price,
  perks,
  isPopular,
  isSelected,
  onSelect,
  blurred,
}) => {
  const active = isPopular || isSelected;

  return (
    <div
      onClick={onSelect}
      className="relative group w-full md:w-[340px] h-auto md:h-[600px] flex items-center justify-center mx-2 md:mx-0 my-4 cursor-pointer"
    >
      {/* Blue background card */}
      <div
        className={`absolute bottom-2 md:bottom-[37px] w-full md:w-[326px] h-[105%] md:h-[526px]
                    rounded-[24px] md:rounded-[28px] z-0 transition-all duration-300 ease-in-out
                    ${
                      active
                        ? "h-[109%] md:h-[563px] bg-[#0038DF]"
                        : "bg-transparent group-hover:h-[109%] md:group-hover:h-[563px] group-hover:bg-[#0038DF]"
                    }`}
      >
        <div className="absolute top-3 md:top-4 left-6 md:left-8">
          {isPopular && (
            <span className="text-white font-geist-sans font-medium text-[16px] md:text-[18px] leading-none tracking-[-0.02em]">
              Popular
            </span>
          )}
        </div>
      </div>

      {/* White foreground card */}
      <div
        className="relative z-10 w-[calc(100%-12px)] md:w-[320px] h-auto md:h-[520px] rounded-[16px] md:rounded-[24px] flex flex-col
                   bg-[#F5F6F7] border border-[#F0F1F3]
                   dark:bg-[#151515] dark:border-[#2A2A2A]
                   md:bg-white md:dark:bg-black md:border-transparent
                   pt-6 px-4 pb-5 md:pt-[40px] md:px-[20px] md:pb-[20px]"
      >
        <div className="text-left">
          <h3 className="font-geist-sans font-medium text-[18px] leading-[1.3] tracking-[-0.02em] text-[#666666] dark:text-[#CCCCCC]">
            {planName}
          </h3>
          <p
            className={`text-4xl md:text-[44px] font-geist-sans font-normal text-[#4A4A4A] dark:text-white leading-[1.1] tracking-[-0.03em] my-2 ${
              blurred ? "blur-sm" : ""
            }`}
          >
            {blurred ? "$XX/m" : price}
          </p>
        </div>

        <a
          href="https://app.buildpcbs.com"
          className="w-full bg-[#0038DF] text-white py-3 rounded-full transition-all duration-300 hover:opacity-90 flex items-center justify-center"
        >
          Get Started
        </a>

        <ul className="mt-4 md:mt-8 space-y-2 md:space-y-4">
          {perks.map((perk, index) => (
            <li
              key={index}
              className={`flex items-center ${blurred ? "blur-sm" : ""}`}
            >
              <span className="font-geist-sans font-normal text-[14px] leading-[1.3] tracking-[-0.02em] text-gray-600 dark:text-gray-300">
                {blurred ? "Feature" : perk}
              </span>
              <Info className="w-5 h-5 text-gray-400 ml-2 dark:text-gray-500" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
