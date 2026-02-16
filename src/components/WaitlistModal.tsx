"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission logic here
    console.log("Submitted email:", email);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-[2px] md:backdrop-blur-md"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[367px] h-auto min-h-[421px] bg-white rounded-xl border-[0.5px] border-[#DEDEDE] shadow-xl overflow-hidden flex flex-col items-center"
              style={{
                boxShadow: "0px 4px 24px -1px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-[#444444]" />
              </button>

              {/* Content Wrapper */}
              <div className="flex flex-col items-start w-full px-[28px] pt-[75px] gap-[11px]">
                {/* Title */}
                <h2 className="w-[311px] font-[family-name:var(--font-sans)] font-normal text-[32px] leading-[120%] text-[#444444]">
                  A cracked, better version.
                </h2>

                {/* Subtitle */}
                <p className="w-[311px] font-[family-name:var(--font-geist-sans)] font-normal text-[13px] leading-[100%] tracking-[-0.01em] text-[#4A4A4A]">
                  Enter your mail for early access.
                </p>
              </div>

              {/* Form Area */}
              <div className="w-full px-[32px] mt-auto pb-[55px] flex flex-col gap-3">

                {/* Email Input Frame */}
                <div className="box-border flex flex-row justify-center items-center px-[10px] gap-[8px] w-[294px] h-[40px] border border-[#E7E7E7] rounded-[99px]">
                  <input
                    type="email"
                    placeholder="buildpcbs@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-[255px] h-[13px] font-[family-name:var(--font-geist-sans)] font-medium text-[13px] leading-[100%] tracking-[-0.02em] text-[#444444] placeholder:text-[#BCBCBC] bg-transparent border-none outline-none focus:ring-0 p-0"
                  />
                </div>

                {/* Submit Button Frame */}
                <button
                  onClick={handleSubmit}
                  className="box-border flex flex-row justify-center items-center px-[10px] gap-[8px] w-[294px] h-[40px] bg-[#E7E7E7] border border-[#0038E1] rounded-[99px] hover:bg-[#dcdcdc] transition-colors cursor-pointer group"
                >
                  <span className="w-[80px] h-[13px] font-[family-name:var(--font-geist-sans)] font-medium text-[13px] leading-[100%] text-center tracking-[-0.005em] text-[#0038DF]">
                    Join Waitlist
                  </span>
                </button>

              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WaitlistModal;
