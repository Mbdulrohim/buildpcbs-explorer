import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ActivityTrackerSvg from "@/assets/Activity Analysis tracker.svg";
import ComponentLibrarySvg from "@/assets/Library of Components.svg";
import InviteExportSvg from "@/assets/Invite Team& Export Files.svg";
import PromptUISvg from "@/assets/Detailed Prompt UI.svg";

// --- Visual Components (Meticulously recreated from Figma) ---

const MeticulousAnalytics = () => (
  <div className="relative w-[586px] h-[486px] overflow-visible">
    {/* Main Background Card - Frame 1000010605 */}
    <div
      style={{
        boxSizing: "border-box",
        position: "absolute",
        width: "469.8px",
        height: "297.9px",
        left: "7px",
        top: "85px",
        borderRadius: "18px",
        transform: "matrix(0.99, -0.1, 0.37, 0.93, 0, 0)",
        zIndex: 1,
      }}
      className="bg-white dark:bg-neutral-900 border-[0.9px] border-[#BABABA] dark:border-neutral-700"
    />
    {/* Blurry Overlay Card - Frame 6037 */}
    <div
      style={{
        position: "absolute",
        width: "429.3px",
        height: "265.5px",
        left: "84.76px",
        top: "17.09px",
        backdropFilter: "blur(18px)",
        borderRadius: "14.4px",
        transform: "matrix(0.99, -0.1, 0.37, 0.93, 0, 0)",
        zIndex: 2,
      }}
      className="bg-white/80 dark:bg-neutral-800/80 border border-white/50 dark:border-white/10"
    ></div>
    {/* --- DATAPOINTS (The huge list of Frames) --- */}
    {renderDot("61.93px", "134.1px", "#0038DF")}
    {renderDot("61.93px", "134.1px", "#5772FF")}{" "}
    {/* Duplicate pos? maybe stacked */}
    {renderDot("69.01px", "151.62px", "#AAB8FF")}
    {renderDot("76.09px", "169.15px", "#0038DF")}
    {renderDot("83.17px", "186.67px", "#0038DF")}
    {renderDot("96.65px", "220.05px", "#0038DF")}
    {/* Render flipped dots */}
    {renderDot("451.52px", "165.36px", "#0038DF", true)}
    {/* More standard dots */}
    {renderDot("134.43px", "126.48px", "#0038DF")}
    {renderDot("141.51px", "144px", "#5772FF")}
    {renderDot("148.59px", "161.53px", "#DDE2FF")}
    {renderDot("155.67px", "179.05px", "#0038DF")}
    {renderDot("169.15px", "212.43px", "#0038DF")}
    {renderDot("379.02px", "172.98px", "#0038DF", true)}
    <MetricDots />
    {/* Labels and Text */}
    <div
      style={{
        position: "absolute",
        width: "133px",
        height: "21px",
        left: "31.58px",
        top: "46.79px",
        fontFamily: "DM Sans",
        fontWeight: 400,
        fontSize: "16.2px",
        lineHeight: "21px",
        letterSpacing: "0.005em",
        transform: "matrix(0.99, -0.1, 0.37, 0.93, 0, 0)",
        zIndex: 10,
      }}
      className="text-[#555555] dark:text-gray-300"
    >
      Activity Analytics
    </div>
    <div
      style={{
        position: "absolute",
        width: "169px",
        height: "14px",
        left: "37.33px",
        top: "64.17px",
        fontFamily: "DM Sans",
        fontSize: "10.8px",
        lineHeight: "14px",
        letterSpacing: "0.005em",
        transform: "matrix(0.99, -0.1, 0.37, 0.93, 0, 0)",
        zIndex: 10,
      }}
      className="text-[#555555] dark:text-gray-400"
    >
      Live Performance Stats on editor
    </div>
    {/* Months */}
    {renderText("Jan", "115.53px", "267.01px")}
    {renderText("Feb", "170.13px", "261.27px")}
    {renderText("Mar", "224.73px", "255.43px")}
    {renderText("Apr", "281.12px", "249.61px")}
    {/* Floating Settings/Menu Icon */}
    <div
      style={{
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "9px",
        gap: "7.2px",
        position: "absolute",
        width: "70.2px",
        height: "21.6px",
        left: "337.46px",
        top: "15.99px",
        borderRadius: "89.1px",
        transform: "matrix(0.99, -0.1, 0.37, 0.93, 0, 0)",
        zIndex: 10,
      }}
      className="bg-white dark:bg-neutral-800 border-[0.36px] border-[#E5E5E5] dark:border-neutral-600"
    >
      <div className="w-[10px] h-[10px] bg-gray-400 rounded-full" />
      <div className="text-[8px] text-gray-500">Monthly</div>
    </div>
  </div>
);

// Helper for the massive amount of dots
const renderDot = (left: string, top: string, bg: string, flipped = false) => (
  <div
    style={{
      position: "absolute",
      width: "16.2px",
      height: "16.2px",
      left,
      top,
      background: bg,
      borderRadius: "2.7px",
      transform: flipped
        ? "matrix(-0.99, 0.1, 0.37, 0.93, 0, 0)"
        : "matrix(0.99, -0.1, 0.37, 0.93, 0, 0)",
      zIndex: 5,
    }}
  />
);

const renderText = (text: string, left: string, top: string) => (
  <div
    style={{
      position: "absolute",
      width: "14px",
      height: "11px",
      left,
      top,
      fontFamily: "DM Sans",
      fontWeight: 400,
      fontSize: "8.1px",
      lineHeight: "11px",
      letterSpacing: "0.005em",
      transform: "matrix(0.99, -0.1, 0.37, 0.93, 0, 0)",
      zIndex: 10,
    }}
    className="text-[#555555] dark:text-gray-300"
  >
    {text}
  </div>
);

const MetricDots = () => (
  <>
    {renderDot("61.93px", "134.1px", "#0038DF")}
    {renderDot("69.01px", "151.62px", "#AAB8FF")}
    {renderDot("76.09px", "169.15px", "#0038DF")}
    {renderDot("83.17px", "186.67px", "#0038DF")}
    {renderDot("96.65px", "220.05px", "#0038DF")}

    {renderDot("134.43px", "126.48px", "#0038DF")}
    {renderDot("141.51px", "144px", "#5772FF")}
    {renderDot("148.59px", "161.53px", "#DDE2FF")}
    {renderDot("155.67px", "179.05px", "#0038DF")}
    {renderDot("169.15px", "212.43px", "#0038DF")}

    {renderDot("206.93px", "118.86px", "#DDE2FF")}
    {renderDot("214.01px", "136.38px", "#AAB8FF")}
    {renderDot("221.09px", "153.91px", "#DDE2FF")}
    {renderDot("228.17px", "171.43px", "#DDE2FF")}
    {renderDot("241.65px", "204.81px", "#DDE2FF")}

    {renderDot("279.43px", "111.24px", "#DDE2FF")}
    {renderDot("286.51px", "128.76px", "#DDE2FF")}
    {renderDot("293.59px", "146.29px", "#5772FF")}
    {renderDot("300.67px", "163.81px", "#0038DF")}
    {renderDot("314.15px", "197.19px", "#0038DF")}

    {renderDot("369.83px", "101.74px", "#DDE2FF")}
    {renderDot("376.91px", "119.26px", "#AAB8FF")}
    {renderDot("383.99px", "136.79px", "#DDE2FF")}
    {renderDot("391.07px", "154.31px", "#DDE2FF")}
    {renderDot("404.56px", "187.69px", "#DDE2FF")}

    {renderDot("451.52px", "165.36px", "#0038DF", true)}
    {renderDot("379.02px", "172.98px", "#0038DF", true)}
    {renderDot("306.52px", "180.6px", "#DDE2FF", true)}
    {renderDot("234.02px", "188.22px", "#0038DF", true)}
    {renderDot("143.61px", "197.72px", "#DDE2FF", true)}
  </>
);

const VisualExport = () => (
  <div className="relative w-full h-full flex items-center justify-center bg-[#F9F9F9] dark:bg-neutral-900 rounded-2xl border border-gray-100 dark:border-neutral-800">
    <div className="text-gray-400 dark:text-gray-500 text-sm">
      Visual: Export & Invite
    </div>
  </div>
);
const VisualLibrary = () => (
  <div className="relative w-full h-full flex items-center justify-center bg-[#F9F9F9] dark:bg-neutral-900 rounded-2xl border border-gray-100 dark:border-neutral-800">
    <div className="text-gray-400 dark:text-gray-500 text-sm">
      Visual: Library
    </div>
  </div>
);
const VisualInterpreter = () => (
  <div className="relative w-full h-full flex items-center justify-center bg-[#F9F9F9] dark:bg-neutral-900 rounded-2xl border border-gray-100 dark:border-neutral-800">
    <div className="text-gray-400 dark:text-gray-500 text-sm">
      Visual: AI Interpreter
    </div>
  </div>
);

const WhySwitch = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const FEATURES = [
    {
      title: "Activity Analytics Tracker",
      component: (
        <div className="relative w-full h-full">
          <Image
            src={ActivityTrackerSvg}
            alt="Activity Analytics Tracker"
            fill
            className="object-contain"
          />
        </div>
      ),
      label: "Activity Analytics Tracker",
    },
    {
      title: "Ready to-use Component Library",
      component: (
        <div className="relative w-full h-full">
          <Image
            src={ComponentLibrarySvg}
            alt="Ready to-use Component Library"
            fill
            className="object-contain"
          />
        </div>
      ),
      label: "Ready to-use Component Library",
    },
    {
      title: "Exportable files & Invite team",
      component: (
        <div className="relative w-full h-full">
          <Image
            src={InviteExportSvg}
            alt="Exportable files & Invite team"
            fill
            className="object-contain"
          />
        </div>
      ),
      label: "Exportable files & Invite team",
    },
    {
      title: "AI-powered prompt interpreter",
      component: (
        <div className="relative w-full h-full">
          <Image
            src={PromptUISvg}
            alt="AI-powered prompt interpreter"
            fill
            className="object-contain"
          />
        </div>
      ),
      label: "AI-powered prompt interpreter",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % FEATURES.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [FEATURES.length]);

  return (
    <section className="w-full relative bg-white dark:bg-black pb-24 overflow-hidden mt-32 md:mt-0">
      {/* "WHY?" Background Text */}
      <div className="w-full flex justify-center pointer-events-none select-none relative z-0 mb-[-130px]">
        <h1
          className="bg-gradient-to-b from-[#888888] to-white dark:to-black bg-clip-text text-transparent text-center flex items-center justify-center font-['DM_Sans'] font-extrabold text-[190px] leading-[150%] tracking-[-0.005em]"
          style={{
            width: "1140px",
            height: "285px",
          }}
        >
          WHY?
        </h1>
      </div>

      <div className="max-w-[1140px] mx-auto relative z-10 px-4">
        {/* Desktop Content Layout - Frame 1000015056 */}
        <div className="hidden md:flex flex-row gap-[28px] items-center">
          {/* Visual Area (Left) */}
          <div className="w-[586px] h-[486px] relative flex-shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
              >
                {FEATURES[activeIndex].component}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Features List (Right) */}
          <div className="w-full w-[526px] flex flex-col gap-[40px] justify-center ml-auto">
            <h3 className="font-['DM_Sans'] font-normal text-[17px] leading-[150%] tracking-[-0.005em] text-[#777777] dark:text-gray-400">
              Why Engineers switch to buildpcb:
            </h3>

            <div className="flex flex-col gap-[36px] items-start">
              {FEATURES.map((feature, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={index}
                    className="group cursor-pointer flex flex-col items-start gap-2"
                    onClick={() => setActiveIndex(index)}
                  >
                    <h2
                      style={{
                        fontFamily: "DM Sans",
                        fontWeight: 400,
                        fontSize: "36px",
                        lineHeight: "47px",
                        color: isActive ? undefined : undefined, // Handled by className
                        transition: "color 0.3s",
                      }}
                      className={`${isActive ? "text-[#4A4A4A] dark:text-white" : "text-[#BBBBBB] dark:text-gray-600"}`}
                    >
                      {feature.title}
                    </h2>

                    {isActive && (
                      <div
                        style={{
                          width: "340px",
                          height: "2px",
                          background: "#DDDDDD",
                          borderRadius: "99px",
                          position: "relative",
                          overflow: "hidden",
                        }}
                      >
                        <motion.div
                          style={{
                            height: "100%",
                            borderRadius: "99px",
                            position: "absolute",
                            left: 0,
                            top: 0,
                          }}
                          className="bg-[#4A4A4A] dark:bg-white"
                          layoutId="active-bar-indicator"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: 3.5,
                            ease: "linear",
                          }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Sticky Stack */}
        <div className="md:hidden">
          <StickyMobileStack />
        </div>
      </div>
    </section>
  );
};

export default WhySwitch;

// --- Mobile Sticky Stack Component ---

type CardData = {
  id: string;
  title: string;
  subtitle: string;
  renderArt?: (progress: number) => React.ReactNode;
};

const clamp01 = (n: number) => Math.max(0, Math.min(1, n));

function StickyMobileStack() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [scrollY, setScrollY] = useState(0);

  const cards: CardData[] = useMemo(
    () => [
      {
        id: "analytics",
        title: "Activity Analytics Tracker",
        subtitle: "Live performance stats on editor",
        renderArt: (p) => <MiniTiltedPanel progress={p} variant="dots" />,
      },
      {
        id: "export",
        title: "Exportable files & Team Invite",
        subtitle: "Invite + download + feedback",
        renderArt: (p) => <MiniTiltedPanel progress={p} variant="invite" />,
      },
      {
        id: "schemas",
        title: "Ready-to-use Component Library",
        subtitle: "Components / Schemas / layout items",
        renderArt: (p) => <MiniTiltedPanel progress={p} variant="list" />,
      },
      {
        id: "prompt",
        title: "AI-powered prompt interpreter",
        subtitle: "Build your circuits here..",
        renderArt: (p) => <MiniTiltedPanel progress={p} variant="chat" />,
      },
    ],
    [],
  );

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrollY(window.scrollY || 0));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const progresses = useMemo(() => {
    const out = cards.map(() => 0);
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      const start = vh * 0.2;
      const end = -vh * 0.3;
      const t = (start - rect.top) / (start - end);
      out[i] = clamp01(t);
    });
    return out;
  }, [scrollY, cards.length]);

  return (
    <div className="bg-white dark:bg-black text-[#333333] dark:text-gray-300 pt-10">
      <section
        ref={sectionRef}
        className="relative mx-auto w-full max-w-[360px] px-0"
        style={{
          height: `calc(${cards.length} * 70vh)`,
        }}
      >
        <div className="sticky top-20">
          <div className="flex flex-col gap-[22px]">
            {cards.map((c, i) => {
              const p = progresses[i] ?? 0;
              const cardLift = (1 - p) * 6;
              const cardScale = 0.98 + p * 0.02;

              return (
                <div
                  key={c.id}
                  ref={(node) => {
                    cardRefs.current[i] = node;
                  }}
                  className="relative w-full aspect-square rounded-[12px] border border-[#EBEBEB] dark:border-neutral-700 bg-gradient-to-b from-white to-[#F3F3F3] dark:from-neutral-800 dark:to-neutral-900"
                  style={{
                    transform: `translateY(${cardLift}px) scale(${cardScale})`,
                    transition: "transform 120ms linear",
                    overflow: "hidden",
                  }}
                >
                  <div className="absolute left-4 bottom-4 right-4 z-10">
                    <div className="text-[20px] leading-[150%] tracking-[-0.005em] text-[#8E8E8E] dark:text-gray-400">
                      {c.title}
                    </div>
                    <div className="mt-1 text-[11px] tracking-[0.005em] text-[#555555] dark:text-gray-500">
                      {c.subtitle}
                    </div>
                  </div>
                  <div className="absolute inset-0">{c.renderArt?.(p)}</div>
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      backgroundImage:
                        "radial-gradient(rgba(0,0,0,0.03) 1px, transparent 1px)",
                      backgroundSize: "8px 8px",
                      opacity: 0.25,
                      mixBlendMode: "multiply",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

function MiniTiltedPanel({
  progress,
  variant,
}: {
  progress: number;
  variant: "dots" | "invite" | "list" | "chat";
}) {
  const tilt = (1 - progress) * -10;
  const skew = (1 - progress) * 8;
  const x = (1 - progress) * -18;
  const y = (1 - progress) * 10;
  const opacity = 0.65 + progress * 0.35;

  return (
    <div
      className="absolute left-1/2 top-10"
      style={{
        transform: `translateX(-50%) translate(${x}px, ${y}px) rotate(${tilt}deg) skewX(${skew}deg)`,
        transition: "transform 120ms linear, opacity 120ms linear",
        opacity,
      }}
    >
      <div className="relative w-[320px] h-[220px] rounded-[14px] border border-[#E6E6E6] dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-[0_18px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_18px_60px_rgba(0,0,0,0.3)]">
        <div className="absolute left-3 right-3 top-3 flex items-center justify-between">
          <div className="text-[10px] text-[#555555] dark:text-gray-400 font-medium">
            {variant === "dots"
              ? "Activity Analytics"
              : variant === "invite"
                ? "Export this project"
                : variant === "list"
                  ? "Components"
                  : "Prompt"}
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-[2px] bg-[#0038DF]" />
            <span className="w-2 h-2 rounded-[2px] bg-[#5772FF]" />
            <span className="w-2 h-2 rounded-[2px] bg-[#AAB8FF]" />
          </div>
        </div>

        <div className="absolute left-3 right-3 top-10 bottom-3 rounded-[12px] bg-[#FAFAFA] dark:bg-neutral-900 border border-[#EAEAEA] dark:border-neutral-700 overflow-hidden">
          {variant === "dots" && <DotField />}
          {variant === "invite" && <InviteMock />}
          {variant === "list" && <ListMock />}
          {variant === "chat" && <ChatMock />}
        </div>
      </div>
    </div>
  );
}

function DotField() {
  const dots = Array.from({ length: 42 }).map((_, i) => {
    const left = (i * 17) % 280;
    const top = (i * 11) % 140;
    const colors = ["#0038DF", "#5772FF", "#AAB8FF", "#DDE2FF"];
    const c = colors[i % colors.length];
    return (
      <span
        key={i}
        className="absolute"
        style={{
          left: `${left}px`,
          top: `${top}px`,
          width: 10,
          height: 10,
          borderRadius: 2,
          background: c,
          opacity: 0.9,
        }}
      />
    );
  });

  return (
    <div className="relative w-full h-full">
      <div className="absolute left-3 top-3 text-[9px] text-[#777777] dark:text-gray-400">
        Live Performance Stats on editor
      </div>
      <div className="absolute left-4 top-8 right-4 bottom-4">{dots}</div>
    </div>
  );
}

function InviteMock() {
  return (
    <div className="p-4">
      <div className="flex items-center gap-2">
        <div className="h-7 flex-1 rounded-md border border-[#EAEAEA] dark:border-neutral-700 bg-[#F8F8F8] dark:bg-neutral-800 px-3 flex items-center text-[10px] text-[#CCCBCB] dark:text-gray-500">
          Enter email to invite
        </div>
        <button className="h-7 px-3 rounded-md bg-[#0038DF] text-white text-[10px] border border-[#0021CD]">
          Invite
        </button>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <button className="h-7 rounded-md border border-[#EAEAEA] dark:border-neutral-700 bg-[#F8F8F8] dark:bg-neutral-800 text-[10px] text-[#999999] dark:text-gray-400">
          Download
        </button>
        <button className="h-7 rounded-md border border-[#0021CD] bg-[#0038DF] text-[10px] text-white">
          Send Feedback
        </button>
      </div>
    </div>
  );
}

function ListMock() {
  const items = [
    "USB Port Layout",
    "LED Battery Connector",
    "Arduino Connector board",
    "Joule thief circuit",
    "ESP345-S3 bridge router",
    "Li-ion battery jump lay",
  ];
  return (
    <div className="p-4">
      <div className="text-[10px] text-[#0038DF] font-medium mb-2">
        Components
      </div>
      <div className="space-y-2">
        {items.map((t) => (
          <div
            key={t}
            className="flex items-center justify-between text-[11px] text-[#999999] dark:text-gray-400"
          >
            <span>{t}</span>
            <span className="text-[#C0C0C0]">{">"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChatMock() {
  return (
    <div className="p-4">
      <div className="inline-flex max-w-[90%] rounded-xl rounded-bl-sm bg-[#0038DF] text-white text-[10px] leading-[140%] px-3 py-2 border border-[#002FBB]">
        give me a USB type-c board layout PCB design for an android phone
      </div>

      <div className="mt-3 inline-flex max-w-[95%] rounded-xl rounded-br-sm bg-[#F8F8F8] dark:bg-neutral-800 text-[#777777] dark:text-gray-400 text-[10px] leading-[140%] px-3 py-2 border border-[#EAEAEA] dark:border-neutral-700">
        Created a complete USB-C breakout board with CC pull-downs, ESD
        protection, and power decoupling, suitable for connecting peripherals or
        test equipment.
      </div>

      <div className="mt-3 flex gap-2">
        <button className="h-6 px-2 rounded-md border border-[#EAEAEA] dark:border-neutral-700 bg-[#F7F7F7] dark:bg-neutral-800 text-[9px] text-[#777777] dark:text-gray-400">
          Copy
        </button>
        <button className="h-6 px-2 rounded-md border border-[#EAEAEA] dark:border-neutral-700 bg-[#F7F7F7] dark:bg-neutral-800 text-[9px] text-[#777777] dark:text-gray-400">
          Refresh
        </button>
        <button className="h-6 px-2 rounded-md border border-[#EAEAEA] dark:border-neutral-700 bg-[#F7F7F7] dark:bg-neutral-800 text-[9px] text-[#777777] dark:text-gray-400">
          Like
        </button>
      </div>
    </div>
  );
}
