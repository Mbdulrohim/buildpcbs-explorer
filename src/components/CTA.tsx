import React from "react";

const CTA = () => {
  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-center text-center py-12 md:py-20">
      {/* Decorative shapes will be added here as images */}

      {/* CTA Content */}
      <h2 className="font-medium text-white text-[32px] w-[367px] md:text-[40px] md:w-[609px] leading-none max-w-full z-10">
        Design PCBs at the speed of thought.
      </h2>
      <p
        className="font-normal text-[17px] leading-[150%] tracking-[-0.005em] mt-6 w-[341px] max-w-full z-10"
        style={{ color: "#9FADFF" }}
      >
        The first AI copilot for circuit boards is here.
      </p>
      <a
        href="https://app.buildpcbs.com"
        className="flex items-center justify-center w-[171px] h-[50px] md:w-[203px] rounded-full bg-white mt-8 text-[#777777] font-medium text-base hover:opacity-90 transition-opacity z-10"
      >
        Start Now
      </a>
    </section>
  );
};

export default CTA;