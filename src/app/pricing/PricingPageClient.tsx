"use client";

import React, { useState } from "react";
import PricingToggle from "@/components/PricingToggle";
import PricingCard from "@/components/PricingCard";

const PricingPageClient = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(
    "Standard Plan"
  );
  const isBlurred = true;

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
  };

  const perks = {
    basic: ["", "", "", "", "", "", ""],
    standard: ["", "", "", "", "", "", ""],
    premium: ["", "", "", "", "", "", ""],
  };

  const pricing = {
    monthly: {
      basic: "00",
      standard: "000",
      premium: "000",
    },
    yearly: {
      basic: "00",
      standard: "000",
      premium: "000",
    },
  };

  return (
    <div className="container mx-auto py-6 md:py-12 px-4">
      <div className="text-left md:text-center">
        <h1 className="text-[32px] font-sans font-normal text-[#444444] leading-[1.2] mb-4">
          Pricing
        </h1>
        <p className="text-[13px] font-geist-sans font-normal text-[#4A4A4A] leading-none tracking-[-0.02em] mb-4 md:mb-8">
          Same amount at checkout!
        </p>
        <div className="flex justify-center mb-6 md:mb-12">
          <PricingToggle isYearly={isYearly} setIsYearly={setIsYearly} />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-4">
          <PricingCard
            planName="Basic Plan"
            price={isYearly ? pricing.yearly.basic : pricing.monthly.basic}
            perks={isBlurred ? Array(7).fill("") : perks.basic}
            isSelected={selectedPlan === "Basic Plan"}
            onSelect={() => handleSelectPlan("Basic Plan")}
            blurred={isBlurred}
          />
          <PricingCard
            planName="Standard Plan"
            price={
              isYearly ? pricing.yearly.standard : pricing.monthly.standard
            }
            perks={isBlurred ? Array(7).fill("") : perks.standard}
            isPopular
            isSelected={selectedPlan === "Standard Plan"}
            onSelect={() => handleSelectPlan("Standard Plan")}
            blurred={isBlurred}
          />
          <PricingCard
            planName="Premium Plan"
            price={isYearly ? pricing.yearly.premium : pricing.monthly.premium}
            perks={isBlurred ? Array(7).fill("") : perks.premium}
            isSelected={selectedPlan === "Premium Plan"}
            onSelect={() => handleSelectPlan("Premium Plan")}
            blurred={isBlurred}
          />
        </div>
      </div>
    </div>
  );
};

export default PricingPageClient;
