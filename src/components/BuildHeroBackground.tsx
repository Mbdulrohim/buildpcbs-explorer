import React from 'react';

const BuildHeroBackground = () => {
    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            {/* 
                Scaled to 0.75 and positioned bottom-left.
                Using transform for scaling and flex/positioning for placement.
            */}
            <div
                className="absolute left-0 bottom-0 origin-bottom-left transform scale-75 w-full h-full flex items-end justify-start"
                style={{
                    // Optional: fine-tune if "more closer" implies offset
                    transform: 'scale(0.75) translate(-5%, 10%)' // Pushing it a bit more "into" the corner if needed, or just pure scale
                }}
            >
                <svg
                    className="w-full h-full object-cover" // object-cover might crop it weirdly if we just want the circles.
                    // If we want the circles to be exactly as drawn in the SVG relative to 995x605 frame:
                    // The SVG has fixed viewBox 0 0 995 605.
                    // Responsive behavior: maintain aspect ratio?
                    // User said: "scale the svg in the bg to 0.75 of its current size"
                    // "current size" likely means full viewport cover.
                    // So 0.75 of full viewport?
                    // And "put it more closer to the bottom left".
                    // Let's try to preserve aspect ratio xMidYMid slice (cover) but inside a scaled container?
                    // Actually, if it's "bg of hero section", it was covering the screen.
                    // Now it should be 75% size, anchored bottom-left.
                    width="100%"
                    height="100%"
                    viewBox="0 0 995 605"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMinYMax meet" // Align bottom-left, meet/contain or slice/cover?
                // "Scale to 0.75 of its current size"
                // If it was cover, 0.75 of cover is... smaller cover?
                // Let's assume the user wants the VISUAL circles to be smaller and anchored bottom-left.
                >
                    <circle cx="395" cy="600" r="600" fill="url(#paint0_linear_build_hero)" />
                    <circle cx="450" cy="648" r="460" fill="url(#paint1_linear_build_hero)" />
                    <defs>
                        <linearGradient
                            id="paint0_linear_build_hero"
                            x1="395"
                            y1="1.71553e-06"
                            x2="366.215"
                            y2="833.997"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#2D2D2D" />
                            <stop offset="0.183526" stopColor="#171717" />
                            <stop offset="1" stopColor="#000000" stopOpacity="0" />
                            <stop offset="1" stopColor="#000000" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_build_hero"
                            x1="450"
                            y1="188"
                            x2="630.25"
                            y2="996.5"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#2D2D2D" />
                            <stop offset="0.363415" stopColor="#121212" stopOpacity="0.44" />
                            <stop offset="0.70463" stopColor="#000000" stopOpacity="0.01" />
                            <stop offset="1" stopColor="#000000" stopOpacity="0.01" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    );
};

export default BuildHeroBackground;
