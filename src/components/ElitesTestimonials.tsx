import React, { useState, useLayoutEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import EricAv from "@/assets/Eric Av.png";
import EricQuote from "@/assets/Eric Quote.png";
import RemyAv from "@/assets/Remy Av.png";
import RemyQuote from "@/assets/Remy Quote.png";
import VinceAv from "@/assets/Vince Av.png";
import VinceQuote from "@/assets/Vince Quote.png";
import PaulAv from "@/assets/Paul Graham's Av.png";
import PaulQuote from "@/assets/Paul Graham's Quote.png";
import FigureSvg from "@/assets/Figure Svg.svg";
import MITSvg from "@/assets/MIT SVG.svg";
import ZTESvg from "@/assets/ZTE Svg.svg";

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS_DATA = [
    {
        id: "eric",
        name: "Eric Migicovsky",
        avatar: EricAv,
        content: EricQuote,
        isCustom: false
    },
    {
        id: "paul",
        name: "Paul Graham",
        avatar: PaulAv,
        content: PaulQuote,
        isCustom: false
    },
    {
        id: "vince",
        name: "Vincent Himpe",
        avatar: VinceAv,
        content: VinceQuote,
        isCustom: false
    },
    {
        id: "remi",
        name: "Remi Cadene",
        avatar: RemyAv,
        content: RemyQuote,
        isCustom: false
    }
];

const PartnerTicker = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <motion.div
        className={`bg-[#F1F1F1] dark:bg-neutral-800 border-[0.2px] border-[#EDECEC] dark:border-neutral-700 rounded-full overflow-hidden flex items-center ${className}`}
        style={style}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true }}
    >
        <div className="flex items-center gap-6 whitespace-nowrap overflow-hidden w-full mask-linear-fade">
            <motion.div
                className="flex items-center gap-8 min-w-full"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            >
                {[...Array(2)].map((_, setIndex) => (
                    <React.Fragment key={setIndex}>
                        <div className="relative w-[72px] h-[36px] grayscale opacity-70 hover:opacity-100 transition-opacity flex-shrink-0 invert dark:invert-0">
                            <Image src={MITSvg} alt="MIT" fill className="object-contain dark:brightness-200" />
                        </div>
                        <div className="relative w-12 h-6 grayscale opacity-70 hover:opacity-100 transition-opacity flex-shrink-0">
                            <Image src={FigureSvg} alt="Figure" fill className="object-contain dark:brightness-200" />
                        </div>
                        <div className="relative w-12 h-6 opacity-100 hover:opacity-100 transition-opacity flex-shrink-0">
                            <Image src={ZTESvg} alt="ZTE" fill className="object-contain dark:brightness-200" />
                        </div>
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    </motion.div>
);

interface TestimonialCardProps {
    name: string;
    avatarUrl: string | any;
    content: string | any; // Back to accepting Image
    badgeSrc?: string | any;
    // Dimensions & Positioning
    width: number;
    height: number;
    top: number;
    left: number;
    // Internal Layout
    contentTop?: number;
    contentHeight?: number;
    infoTop?: number; // Distance from top to the info row
    infoLeft?: number;
    delay?: number;
    // Hover Interaction
    onHoverStart?: () => void;
    onHoverEnd?: () => void;
    isHovered?: boolean;
    isAnyHovered?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    name,
    avatarUrl,
    content,
    badgeSrc,
    width,
    height,
    top,
    left,
    contentTop = 8,
    contentHeight = 59,
    infoTop = 84,
    infoLeft = 4,
    delay = 0,
    onHoverStart,
    onHoverEnd,
    isHovered,
    isAnyHovered,
}) => {
    return (
        <motion.div
            className="absolute bg-[#F1F1F1] dark:bg-neutral-800 border-[0.2px] border-[#DCDBDB] dark:border-neutral-700 rounded-lg box-border hidden lg:block cursor-pointer flex flex-col"
            style={{
                width: `${width}px`,
                height: `${height}px`,
                top: `${top}px`,
                left: `${left}px`,
                zIndex: isHovered ? 50 : (isAnyHovered ? 1 : 10), // Lower z-index if another is hovered
            }}
            initial={{ opacity: 0, y: 20, scale: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{
                scale: isHovered ? 2 : 1, // Restored original scale
                filter: (isAnyHovered && !isHovered) ? "blur(2px) brightness(0.8)" : "none",
            }}
            transition={{
                duration: 0.3,
                ease: "easeOut",
            }}
            viewport={{ once: true }}
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
        >
            {/* Content Image Area (Top) */}
            <div
                className="absolute bg-white rounded-md overflow-hidden"
                style={{
                    left: '7px',
                    width: `${width - 14}px`,
                    top: `${contentTop}px`,
                    height: `${contentHeight}px`
                }}
            >
                {/* Render content as Image */}
                <Image
                    src={content}
                    alt="Testimonial content"
                    className="w-full h-full object-cover"
                    fill={false}
                    style={{ objectFit: 'contain' }}
                />
            </div>

            {/* User Info Row (Bottom) */}
            <div
                className="absolute flex items-center gap-1"
                style={{
                    top: `${infoTop}px`,
                    left: `${infoLeft}px`,
                    width: '99px', // from frame 1000015379
                    height: '26px'
                }}
            >
                {/* Avatar */}
                <div className="relative w-[26px] h-[26px] rounded-full overflow-hidden bg-white border border-[#EDECEC] dark:border-neutral-600 shrink-0">
                    <Image
                        src={avatarUrl}
                        alt={name}
                        className="w-full h-full object-cover"
                        width={26}
                        height={26}
                    />
                </div>

                {/* Text Group */}
                <div className="flex flex-col gap-[1px]">
                    <span className="font-['DM_Sans'] text-[8px] font-normal text-[#4F4F4F] dark:text-gray-200 leading-none whitespace-nowrap">
                        {name}
                    </span>
                    {/* Badge */}
                    {badgeSrc && (
                        <div className="w-[25px] h-[9px] relative rounded-md overflow-hidden">
                            <Image
                                src={badgeSrc}
                                alt="Badge"
                                className="w-full h-full object-contain"
                                fill={false}
                                width={25}
                                height={9}
                            />
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

// --- Mobile Sticky Stack (Replicates God-Speed Layout) ---

const ElitesMobileStackCard = ({ item }: { item: typeof TESTIMONIALS_DATA[0] }) => {
    return (
        <div
            className="relative w-full aspect-square rounded-[12px] bg-[#F1F1F1] dark:bg-neutral-800 border border-[#DCDBDB] dark:border-neutral-700 overflow-hidden"
            style={{ transformOrigin: "bottom center" }}
        >
            {/* Quote Content (Image) */}
            <div className="absolute top-[8px] left-[8px] right-[8px] h-[146px] bg-white rounded-[8px] overflow-hidden border border-[#EDECEC] dark:border-neutral-600">
                <Image
                    src={item.content}
                    alt="Quote"
                    fill
                    className="object-contain p-2"
                />
            </div>

            {/* User Info */}
            <div className="absolute bottom-[20px] left-[14px] flex items-center gap-3">
                <div className="relative w-[32px] h-[32px] rounded-full overflow-hidden bg-white border border-[#EDECEC] dark:border-neutral-600">
                    {item.avatar && (
                        <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                    )}
                </div>
                <span className="font-['DM_Sans'] text-[14px] leading-tight text-[#4F4F4F] dark:text-gray-200">
                    {item.name}
                </span>
            </div>
        </div>
    );
};

function ElitesMobileStack() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const pinRef = useRef<HTMLDivElement | null>(null);

    const cardRefs = useRef<HTMLDivElement[]>([]);
    cardRefs.current = [];
    const addCardRef = (el: HTMLDivElement | null) => {
        if (!el) return;
        if (!cardRefs.current.includes(el)) cardRefs.current.push(el);
    };

    const [active, setActive] = useState(0);

    useLayoutEffect(() => {
        const reduce =
            typeof window !== "undefined" &&
            window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (reduce) return;

        const ctx = gsap.context(() => {
            const cards = cardRefs.current;

            // Start all cards tiny at the base (bottom), hidden
            gsap.set(cards, { opacity: 0, scale: 0.06, y: 120, transformOrigin: "bottom center" });

            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            cards.forEach((card, i) => {
                tl.addLabel(`card-${i}`, i === 0 ? 0 : "+=1");
                tl.to(
                    card,
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.55,
                        onStart: () => setActive(i),
                    },
                    `card-${i}`
                );
            });

            const steps = cards.length;
            const end = () => `+=${Math.round(window.innerHeight * (steps + 0.8))}`;

            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: end(),
                pin: pinRef.current,
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                snap: {
                    snapTo: "labelsDirectional",
                    duration: { min: 0.08, max: 0.22 },
                    delay: 0.02,
                    ease: "power1.inOut",
                },
                animation: tl,
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const jumpTo = (index: number) => {
        const st = ScrollTrigger.getAll().find((t) => t.trigger === sectionRef.current);
        if (!st) return;

        const progress = index / Math.max(1, TESTIMONIALS_DATA.length - 1);
        const y = st.start + (st.end - st.start) * progress;

        window.scrollTo({ top: y, behavior: "smooth" });
    };

    return (
        <section ref={sectionRef as any} className="lg:hidden w-full bg-white dark:bg-black relative">
            <div ref={pinRef} className="relative h-[100vh] overflow-hidden px-[13px]">
                <div className="mx-auto w-full max-w-[375px] h-full pt-[70px]">
                    <div className="flex gap-[12px]">
                        {/* LEFT COLUMN (Names) */}
                        <div className="w-[139px] flex flex-col items-start gap-[25px]">
                            <div className="flex flex-col gap-[12px]">
                                {TESTIMONIALS_DATA.map((f, i) => (
                                    <button
                                        key={f.id}
                                        onClick={() => jumpTo(i)}
                                        className="group w-[130px] text-left"
                                        type="button"
                                    >
                                        <div className="flex items-center justify-between gap-[10px] h-auto min-h-[17px]">
                                            <span
                                                className={[
                                                    "font-['DM_Sans'] text-[14px] leading-[140%] tracking-[-0.005em]",
                                                    i === active
                                                        ? "text-[#4F4F4F] dark:text-gray-100"
                                                        : "text-[#888888] dark:text-gray-500",
                                                ].join(" ")}
                                            >
                                                {f.name}
                                            </span>

                                            <span
                                                className={[
                                                    "h-[1px] w-[9px] transition-opacity shrink-0 mt-2",
                                                    i === active
                                                        ? "opacity-100 bg-[#4F4F4F] dark:bg-gray-100"
                                                        : "opacity-0 bg-[#888888] dark:bg-gray-500",
                                                ].join(" ")}
                                            />
                                        </div>

                                        <div
                                            className={[
                                                "mt-[4px] h-[1px] w-full transition-opacity",
                                                i === active ? "opacity-20 bg-[#0038DF]" : "opacity-0",
                                            ].join(" ")}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT COLUMN (Stacked Cards) */}
                        <div className="w-[222px] flex flex-col gap-[10px] relative">
                            <div className="relative w-[222px] h-[221px]">
                                {TESTIMONIALS_DATA.map((item, idx) => (
                                    <div
                                        key={item.id}
                                        ref={addCardRef}
                                        className="absolute inset-0"
                                        style={{ zIndex: 10 + idx }}
                                    >
                                        <ElitesMobileStackCard item={item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Partners Ticker (Below layout) */}
                    <div className="absolute bottom-10 left-0 right-0 flex justify-center">
                        <PartnerTicker className="w-[280px] h-[48px]" />
                    </div>
                </div>
            </div>
        </section>
    );
}

const ElitesTestimonials = () => {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);

    return (
        <React.Fragment>
            {/* Desktop Section */}
            <section
                className="
                    hidden lg:block
                    w-full bg-white dark:bg-black relative px-4 overflow-visible min-h-[500px]
                    py-16 mt-[-80px]
                    lg:py-[140px]
                "
            >
                {/* ✅ Desktop: create a stable "stage" and center it vertically */}
                <div
                    className="
            max-w-[1240px] mx-auto relative
            lg:min-h-[600px]        /* Reduced stage height */
            lg:flex lg:items-center /* vertically centers the stage inside the section */
            "
                >
                    {/* ✅ Desktop: everything inside this gets shifted up slightly */}
                    <div className="w-full relative lg:-translate-y-20">
                        {/* Backdrop Blur Overlay - Moved here to share stacking context */}
                        <AnimatePresence>
                            {hoveredCard && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 z-40 bg-white/30 dark:bg-black/30 backdrop-blur-sm pointer-events-none rounded-xl"
                                    style={{
                                        padding: '200px', margin: '-200px'
                                    }}
                                />
                            )}
                        </AnimatePresence>

                        {/* Left Text Section */}
                        <div className="relative z-10 lg:absolute lg:top-[352px] lg:left-[94px] lg:w-[315px] flex flex-col gap-5 mb-12 lg:mb-0">
                            <h2 className="font-['DM_Sans'] font-light text-[36px] leading-[150%] tracking-[-0.01em] text-[#4F4F4F] dark:text-white">
                                Words from elites
                            </h2>
                            <p className="font-['DM_Sans'] font-normal text-[14px] leading-[150%] tracking-[-0.005em] text-[#777777] dark:text-gray-400">
                                Industry leaders and everyone’s mentor have given us directives from early.
                            </p>
                        </div>

                        {/* Desktop Cards (Absolute) */}
                        <div className="relative w-full h-[600px] hidden lg:block">
                            {/* Eric Migicovsky */}
                            <TestimonialCard
                                name="Eric Migicovsky"
                                avatarUrl={EricAv}
                                content={EricQuote}
                                width={168}
                                height={129}
                                left={539}
                                top={258}
                                contentTop={8}
                                contentHeight={59}
                                infoTop={96}
                                delay={0}
                                onHoverStart={() => setHoveredCard("eric")}
                                onHoverEnd={() => setHoveredCard(null)}
                                isHovered={hoveredCard === "eric"}
                                isAnyHovered={!!hoveredCard}
                            />

                            {/* Paul Graham */}
                            <TestimonialCard
                                name="Paul Graham"
                                avatarUrl={PaulAv}
                                content={PaulQuote}
                                width={199.5}
                                height={234}
                                left={731}
                                top={166}
                                contentTop={8}
                                contentHeight={176}
                                infoTop={195}
                                infoLeft={5}
                                delay={1}
                                onHoverStart={() => setHoveredCard("paul")}
                                onHoverEnd={() => setHoveredCard(null)}
                                isHovered={hoveredCard === "paul"}
                                isAnyHovered={!!hoveredCard}
                            />

                            {/* Vincent Himpe */}
                            <TestimonialCard
                                name="Vincent Himpe"
                                avatarUrl={VinceAv}
                                content={VinceQuote}
                                width={168}
                                height={144}
                                left={709}
                                top={498}
                                contentTop={8}
                                contentHeight={68.7}
                                infoTop={113}
                                infoLeft={6}
                                delay={2}
                                onHoverStart={() => setHoveredCard("vince")}
                                onHoverEnd={() => setHoveredCard(null)}
                                isHovered={hoveredCard === "vince"}
                                isAnyHovered={!!hoveredCard}
                            />

                            {/* Remi Cadene */}
                            <TestimonialCard
                                name="Remi Cadene"
                                avatarUrl={RemyAv}
                                content={RemyQuote}
                                width={168}
                                height={115}
                                left={504}
                                top={446}
                                contentTop={9}
                                contentHeight={55}
                                infoTop={84}
                                delay={1.5}
                                onHoverStart={() => setHoveredCard("remi")}
                                onHoverEnd={() => setHoveredCard(null)}
                                isHovered={hoveredCard === "remi"}
                                isAnyHovered={!!hoveredCard}
                            />

                            {/* Partners Bar (Desktop) */}
                            <PartnerTicker
                                className="absolute"
                                style={{
                                    width: "234px",
                                    height: "45px",
                                    left: "690px",
                                    top: "423px",
                                    zIndex: 20,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile Sticky Stack (Replicates God-Speed Effect) */}
            <ElitesMobileStack />
        </React.Fragment>
    );
};

export default ElitesTestimonials;
