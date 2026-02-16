"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- Adapted Icons (No Background Rects) ---

const Icon1 = () => (
  <svg width="222" height="221" viewBox="0 0 222 221" fill="none" className="w-full h-full">
    {/* Inner Graphic - Positioned absolute in Figma, mapped to viewBox */}
    <g transform="translate(41 44)">
      {/* Active colors (White/Light) for Blue Card */}
      <path
        d="M126.247 87.2372L76.9989 126.474L49.5703 140.187L69.072 124.65L98.8183 100.951C100.505 99.6486 100.834 97.3721 99.792 94.1355C98.736 90.8989 96.912 88.5263 94.32 87.0315L71.1292 73.6326L98.5577 59.9183L121.749 73.3172C124.341 74.812 126.165 77.1846 127.221 80.4212C128.263 83.6578 127.934 85.9343 126.247 87.2372Z"
        fill="white"
        stroke="white"
        strokeWidth="1.37143"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M76.9984 126.474C76.5732 126.803 76.1207 127.036 75.627 127.16L76.9984 126.474Z"
        fill="white"
        stroke="white"
        strokeWidth="1.37143"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M98.8186 100.951L69.0722 124.65L49.5706 140.187C48.4734 141.051 47.1294 141.243 45.5386 140.777C43.934 140.311 42.398 139.255 40.8894 137.582C39.3946 135.923 38.2289 134.017 37.3786 131.863C36.5283 129.71 36.199 127.722 36.4047 125.898L41.191 90.7069L22.6357 79.996C20.2357 78.6109 18.4665 76.348 17.3283 73.2349C16.1763 70.108 16.2996 67.804 17.6985 66.3229L62.4482 18.3091C62.695 18.0486 62.9556 17.8429 63.2436 17.6646L63.3397 17.6097L63.751 17.4177C64.4916 17.0886 65.3557 17.0337 66.3432 17.212C67.934 17.5 69.5796 18.4737 71.2802 20.1469C72.0207 20.8737 72.6654 21.6417 73.2277 22.4646C73.9683 23.5206 74.5717 24.6726 75.0243 25.9069C75.8197 28.0874 76.1213 30.0897 75.9156 31.9274L71.1293 73.6326L94.3203 87.0314C96.9123 88.5263 98.7363 90.8989 99.7923 94.1354C100.835 97.372 100.505 99.6486 98.8186 100.951Z"
        fill="white"
        stroke="white"
        strokeWidth="1.37143"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M103.344 18.2131L98.5578 59.9183L71.1293 73.6325L75.9155 31.9274C76.1213 30.0897 75.8195 28.0874 75.0241 25.9068C74.5715 24.6725 73.9681 23.5205 73.2275 22.4645C72.6653 21.6417 72.0207 20.8737 71.2801 20.1468C69.5795 18.4737 67.9338 17.5 66.343 17.212C65.3555 17.0337 64.4915 17.0885 63.751 17.4177L90.823 3.86801C91.6595 3.40172 92.6333 3.27829 93.7715 3.49772C95.3624 3.78572 97.0081 4.75944 98.7087 6.43258C100.396 8.09201 101.644 10.012 102.453 12.1926C103.248 14.3731 103.55 16.3754 103.344 18.2131Z"
        fill="white"
        stroke="white"
        strokeWidth="1.37143"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M90.9741 3.78571L90.8232 3.86799Z" fill="white" />
      <path
        d="M90.9741 3.78571L90.8232 3.86799"
        stroke="white"
        strokeWidth="1.37143"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

const Icon2 = () => (
  <svg width="222" height="221" viewBox="0 0 222 221" fill="none" className="w-full h-full">
    <g transform="translate(41 44)">
      {/* Inactive colors (Blue/Dark) for White Card */}
      <path
        d="M141.217 65.3882V89.5082C141.205 89.9522 141.145 90.3722 141.025 90.8162C140.545 92.5562 139.225 94.0562 137.041 95.3042L112.332 109.572C100.14 116.616 85.2363 121.176 67.6323 123.24C50.0283 125.304 33.3362 124.044 17.5802 119.472C16.8842 119.268 16.2242 119.04 15.6122 118.788C15.0002 118.536 14.3763 118.236 13.7643 117.876C13.1523 117.516 12.6242 117.168 12.1922 116.808C11.7482 116.46 11.3523 116.076 11.0043 115.68C5.54425 109.404 2.82031 102.888 2.82031 96.1082V72.1082C2.82031 76.1042 3.7683 80.0042 5.6643 83.8202C6.9843 86.4842 8.76025 89.1002 11.0043 91.6802C11.3523 92.0762 11.7482 92.4602 12.1922 92.8082C12.6242 93.1682 13.1523 93.5162 13.7643 93.8762C14.3763 94.2362 15.0002 94.5362 15.6122 94.7882C16.2242 95.0402 16.8842 95.2683 17.5802 95.4723C33.3362 100.044 50.0283 101.304 67.6323 99.2402C74.6163 98.4242 81.1922 97.2122 87.3362 95.5922C92.0762 94.3562 96.5762 92.8802 100.812 91.1642C104.892 89.5202 108.732 87.6602 112.332 85.5722L131.125 74.7242L137.041 71.3042C139.225 70.0562 140.545 68.5562 141.025 66.8162C141.157 66.3362 141.217 65.8682 141.217 65.3882Z"
        fill="#292D32"
        stroke="#0038DF"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M139.885 61.7762L120.073 36.7562C119.28 35.7962 118.272 34.9562 117.048 34.2482C115.812 33.5402 114.372 32.9642 112.704 32.4962L69.3723 21.0722C66.5643 20.3522 63.6603 20.1362 60.6483 20.4122C57.6243 20.6762 55.0323 21.4442 52.8603 22.7042L28.1523 36.9722C15.9483 44.0162 8.06432 52.6202 4.48832 62.7842C3.37232 65.9402 2.82031 69.0602 2.82031 72.1082C2.82031 76.1042 3.7683 80.0042 5.6643 83.8202C6.9843 86.4842 8.76025 89.1002 11.0043 91.6802C11.3523 92.0762 11.7482 92.4602 12.1922 92.8082C12.6242 93.1682 13.1523 93.5162 13.7643 93.8762C14.3763 94.2362 15.0002 94.5362 15.6122 94.7882C16.2242 95.0402 16.8842 95.2682 17.5802 95.4722C33.3362 100.044 50.0283 101.304 67.6323 99.2402C74.6163 98.4242 81.1922 97.2122 87.3362 95.5922C92.0762 94.3562 96.5762 92.8802 100.812 91.1642C104.892 89.5202 108.732 87.6602 112.332 85.5722L131.125 74.7242L137.041 71.3042C139.225 70.0562 140.545 68.5562 141.025 66.8162C141.157 66.3362 141.217 65.8682 141.217 65.3882C141.217 64.1522 140.773 62.9522 139.885 61.7762ZM98.6883 70.3682C97.2483 71.1962 95.4723 71.6162 93.3843 71.6042L56.3523 71.5442H48.7922C46.6922 71.5202 44.9402 71.1242 43.5362 70.3082C42.1322 69.4922 41.4362 68.4842 41.4242 67.2722L41.4843 54.4802C41.4843 53.9642 41.6162 53.4962 41.8682 53.0522C42.2162 52.4402 42.8043 51.9002 43.6323 51.4202C44.4603 50.9402 45.3963 50.6042 46.4523 50.4122C47.2203 50.2562 48.0482 50.1842 48.9362 50.1842C51.0362 50.1842 52.7882 50.5922 54.1922 51.3962C55.5962 52.2122 56.3043 53.2202 56.3043 54.4322L56.3523 62.9162L93.3362 62.9762C95.4242 62.9762 97.2003 63.3962 98.6523 64.2362C100.092 65.0762 100.824 66.0962 100.824 67.3082C100.836 68.5202 100.116 69.5402 98.6883 70.3682Z"
        fill="#FFFFFF"
        stroke="#0038DF"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M100.823 67.3083C100.835 68.5203 100.116 69.5403 98.6876 70.3683C97.2476 71.1963 95.4716 71.6163 93.3836 71.6043L56.3516 71.5443V62.9163L93.3354 62.9763C95.4234 62.9763 97.1996 63.3963 98.6516 64.2363C100.092 65.0763 100.823 66.0963 100.823 67.3083Z"
        fill="#FFFFFF"
        stroke="#0038DF"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M56.3519 62.9161V71.5441H48.7918C46.6918 71.5201 44.9398 71.1241 43.5358 70.3081C42.1318 69.4921 41.4358 68.4841 41.4238 67.2721L41.4839 54.4801C41.4839 53.9641 41.6158 53.4961 41.8678 53.0521C42.2158 52.4401 42.8039 51.9001 43.6319 51.4201C44.4599 50.9401 45.3959 50.6041 46.4519 50.4121C47.2199 50.2561 48.0478 50.1841 48.9358 50.1841C51.0358 50.1841 52.7878 50.5921 54.1918 51.3961C55.5958 52.2121 56.3039 53.2201 56.3039 54.4321L56.3519 62.9161Z"
        fill="#FFFFFF"
        stroke="#0038DF"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

const Icon3 = () => (
  <svg width="222" height="221" viewBox="0 0 222 221" fill="none" className="w-full h-full">
    <g transform="translate(41 44)">
      {/* Inactive colors */}
      <path
        d="M140.216 46.4015C140.216 47.2967 140.099 48.1918 139.853 49.1129C139.606 50.034 139.205 50.9938 138.622 52.0057L117.722 88.1484C116.567 90.1592 115.205 91.6122 113.661 92.4944C112.104 93.3895 110.755 93.5063 109.588 92.8446C108.42 92.183 107.836 90.9246 107.836 89.0954C107.836 87.2663 108.42 85.3333 109.575 83.3225L120.459 64.4987L89.1033 82.596L48.6667 105.947L59.5898 112.187C60.6536 112.901 61.2114 114.172 61.2633 115.976C61.3152 117.792 60.7574 119.699 59.6028 121.71C58.4352 123.72 57.0859 125.16 55.5292 126.055C53.9854 126.951 52.6233 127.067 51.4558 126.406L30.5045 114.419C29.9856 114.133 29.6093 113.718 29.3758 113.186C29.3368 113.122 29.2978 113.044 29.2719 112.966C29.0254 112.33 28.9085 111.565 28.8955 110.67C28.8955 109.774 29.0254 108.866 29.2589 107.945C29.5054 107.037 29.9208 106.064 30.4916 105.065L33.7994 99.3441L44.8783 80.183L51.3908 68.9226C52.5583 66.9118 53.9078 65.4588 55.4516 64.5637C56.8397 63.7594 58.0719 63.5907 59.1486 64.0448L59.5248 64.2264C60.6924 64.888 61.2763 66.1464 61.2763 67.9756C61.2763 68.9615 61.1075 69.9603 60.7832 70.9981C60.4978 71.8933 60.0828 72.8144 59.5379 73.7484L48.6537 92.5722L82.3964 73.0868L98.2883 63.915L120.446 51.1237L109.536 44.8836C109.536 44.8836 109.419 44.8058 109.367 44.754C108.407 44.0275 107.901 42.8079 107.849 41.0954C107.797 39.2792 108.355 37.3723 109.523 35.3615C110.677 33.3507 112.039 31.8977 113.583 31.0026C113.648 30.9637 113.726 30.9246 113.791 30.8987C115.257 30.0944 116.541 30.0296 117.657 30.6653L138.609 42.6394C139.193 42.9767 139.606 43.4696 139.853 44.1053C140.086 44.741 140.216 45.5064 140.216 46.4015Z"
        fill="#FFFFFF"
        stroke="#0038DF"
        strokeWidth="0.648649"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M59.1482 64.045C58.0715 63.5909 56.8393 63.7596 55.4512 64.5639C53.9074 65.4591 52.5579 66.912 51.3904 68.9228L44.8779 80.1832L33.799 99.3443L30.4912 105.066C29.9204 106.064 29.505 107.037 29.2585 107.945C29.025 108.866 28.8951 109.775 28.8951 110.67C28.9081 111.565 29.025 112.33 29.2715 112.966C29.2974 113.044 29.3365 113.122 29.3754 113.187C29.6089 113.719 29.9852 114.134 30.5042 114.419L51.4554 126.406L25.8856 113.615L25.5094 113.433L4.55817 101.446C3.97438 101.122 3.559 100.629 3.32549 99.993C3.079 99.3573 2.96219 98.5919 2.94922 97.6968C2.94922 96.8016 3.07899 95.8935 3.3125 94.9724C3.55899 94.0643 3.97437 93.0915 4.54518 92.0926L25.4444 55.9499C26.612 53.939 27.9614 52.4861 29.5052 51.5909C31.062 50.6958 32.4239 50.592 33.5785 51.2536L54.0629 61.5023L59.1482 64.045Z"
        fill="#FFFFFF"
        stroke="#0038DF"
        strokeWidth="0.648649"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

const Icon4 = () => (
  <svg width="222" height="221" viewBox="0 0 222 221" fill="none" className="w-full h-full">
    <g transform="translate(41 44)">
      {/* Inactive colors */}
      <path
        d="M80.6943 64.3246V65.7375C80.8438 65.7239 80.9796 65.7103 81.1155 65.6831C80.8438 65.262 80.6943 64.8001 80.6943 64.3246ZM120.539 53.1035C120.552 53.2122 120.552 53.3345 120.552 53.4431V53.1171C120.552 53.1171 120.552 53.1035 120.539 53.1035Z"
        fill="#FFFFFF"
        stroke="#0038DF"
        strokeWidth="1.35849"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M120.553 53.443V67.4762C119.452 68.4815 118.23 69.4732 116.871 70.4105C115.757 71.2121 114.548 71.9728 113.258 72.72L112.605 73.1004V67.3268C112.85 67.1366 113.081 66.9328 113.312 66.7426C114.956 65.357 116.328 63.9305 117.401 62.4634C119.507 59.6105 120.553 56.6083 120.553 53.443Z"
        fill="#FFFFFF"
        stroke="#0038DF"
        strokeWidth="1.35849"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M64.909 47.031C64.909 48.1314 64.2162 49.0959 62.8033 49.911C61.4041 50.7125 59.7469 51.1201 57.8314 51.1201C55.9159 51.1201 54.2584 50.6989 52.8456 49.8839C51.4328 49.0688 50.7129 48.1042 50.7129 47.0039C50.7129 46.9359 50.7129 46.868 50.7129 46.8137C50.7672 45.7948 51.4735 44.8982 52.7912 44.1374C54.2041 43.3223 55.8614 42.9148 57.7769 42.9148C59.6788 42.9284 61.3499 43.3359 62.7627 44.151C62.8986 44.2325 63.0343 44.314 63.1565 44.3955C64.3112 45.1563 64.8954 46.0393 64.8954 47.031H64.909Z"
        fill="#FFFFFF"
        stroke="#0038DF"
        strokeWidth="1.35849"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M141.093 52.954C141.093 56.5133 140.183 60.0589 138.362 63.5638C137.833 64.5691 137.235 65.5608 136.569 66.5389C134.396 69.6906 131.434 72.6657 127.712 75.4778L127.236 75.7903L121.626 79.431C122.115 80.2053 122.359 80.9797 122.359 81.754C122.359 82.3382 122.224 82.9087 121.966 83.4929C121.436 84.6612 120.526 85.6801 119.235 86.5495C119.018 86.6989 118.8 86.8348 118.556 86.9706L112.606 90.4076L109.25 92.3367L107.131 93.5593C105.487 94.5238 103.476 95.1759 101.113 95.5291C98.7353 95.8823 96.3987 95.828 94.0621 95.3389L87.9897 98.8574C85.2455 100.433 81.9308 101.208 78.0319 101.208C74.1331 101.194 70.8046 100.406 68.0605 98.8167L33.0658 78.6159C31.6529 77.8008 30.9466 76.8363 30.9331 75.7359C30.9331 74.6355 31.6259 73.671 33.0387 72.8695C34.4516 72.0544 36.1089 71.6469 38.0108 71.6469C39.9263 71.6604 41.5836 72.068 42.9965 72.8831L77.9912 93.0838L80.6946 91.5216L87.8267 87.4053L94.8908 83.3299L98.7625 81.0884L112.606 73.1004L113.258 72.7201C114.548 71.9729 115.757 71.2121 116.871 70.4106C118.23 69.4733 119.452 68.4816 120.553 67.4763C120.987 67.0823 121.409 66.6748 121.802 66.2672C124.519 63.4552 126.313 60.4257 127.155 57.1789C127.535 55.6982 127.726 54.1767 127.712 52.6144C127.671 44.8031 122.781 38.0786 113.027 32.4544C103.286 26.8167 91.644 23.991 78.1134 23.9774C64.5693 23.9503 52.9678 26.7352 43.2817 32.3186L17.9458 46.9495C16.5465 47.7646 14.8893 48.1586 12.9738 48.1586C11.0584 48.1586 9.40096 47.751 7.98813 46.9359C5.24398 45.3465 3.85841 43.4174 3.84483 41.1759C3.83124 38.9208 5.18973 37.0053 7.9203 35.4295L17.8508 29.6831C19.5897 28.6914 21.668 27.9986 24.0725 27.6182C26.4771 27.2378 28.9225 27.2378 31.4221 27.6182L38.3776 24.0318C44.6674 21.1653 51.5278 19.1004 58.9587 17.8506C66.3897 16.5872 73.8478 16.071 81.3738 16.3019C88.8863 16.5329 96.1949 17.5518 103.313 19.3721C110.418 21.1789 116.803 23.7193 122.468 26.9933C128.133 30.2536 132.507 33.9352 135.605 38.0106C138.702 42.0997 140.495 46.311 140.971 50.6446C141.052 51.4053 141.093 52.1797 141.093 52.9404V52.954Z"
        fill="#FFFFFF"
        stroke="#0038DF"
        strokeWidth="1.35849"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);


type Feature = {
  id: string;
  label: string;
  icon?: any;
  variant?: "blue" | "white";
};

const FEATURES: Feature[] = [
  { id: "godspeed", label: "God-Speed Design", variant: "blue", icon: Icon1 },
  { id: "checks", label: "Built-In Checks", variant: "white", icon: Icon2 },
  { id: "workflow", label: "Workflow", variant: "white", icon: Icon3 },
  { id: "nl", label: "Natural Language", variant: "white", icon: Icon4 },
];

function FeatureCard({ item }: { item: Feature }) {
  const isBlue = item.variant === "blue";

  return (
    <div
      className={[
        "relative w-full aspect-square rounded-[12px] overflow-hidden",
        isBlue
          ? "bg-gradient-to-b from-[#255CFF] to-[#0038DF] border border-[#F5F5F5]"
          : "bg-white border border-[rgba(0,56,223,0.54)]",
      ].join(" ")}
      style={{ transformOrigin: "bottom center" }}
    >
      {/* ✅ icon area (centered 144x144 like your spec, scales naturally) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[144px] h-[144px]">
          {/* Replace this placeholder with your actual icon */}
          {item.icon ? (
            <div className="w-full h-full relative">
              <item.icon />
            </div>
          ) : (
            <div
              className={[
                "w-full h-full rounded-[16px]",
                isBlue ? "bg-white/15" : "bg-[#0038DF]/5",
              ].join(" ")}
            />
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Mobile-only: left mini-nav + right sticky stack of 4 cards.
 * - Left list is tappable (nice UX) AND highlights as you scroll.
 * - Right column stays pinned while you scroll through cards.
 * - Each card scales in from tiny at the base, stacked perfectly.
 */
export default function MobileFeatureStack() {
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

      const steps = cards.length; // 4 cards
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

    // Each card is roughly one “step” worth of scroll, so jump proportionally
    // We adjust progress slightly to ensure snapping aligns perfectly
    const progress = index / Math.max(1, FEATURES.length - 1);

    // For ScrollTrigger scrub, we want to scroll the WINDOW position to match the progress inside the trigger area
    const y = st.start + (st.end - st.start) * progress;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section ref={sectionRef as any} className="lg:hidden w-full bg-white relative">
      {/* pinned stage */}
      <div ref={pinRef} className="relative h-[100vh] overflow-hidden px-[13px]">
        {/* This matches your 375px wide concept, but responsive */}
        <div className="mx-auto w-full max-w-[375px] h-full pt-[70px]">
          <div className="flex gap-[12px]">
            {/* LEFT COLUMN (labels) */}
            <div className="w-[139px] flex flex-col items-start gap-[25px]">
              <div className="flex flex-col gap-[3px]">
                {FEATURES.map((f, i) => (
                  <button
                    key={f.id}
                    onClick={() => jumpTo(i)}
                    className="group w-[130px] text-left"
                    type="button"
                  >
                    <div className="flex items-center justify-between gap-[23px] h-[17px]">
                      <span
                        className={[
                          "font-['DM_Sans'] text-[14px] leading-[120%] tracking-[-0.005em]",
                          i === active ? "text-[#4F4F4F]" : "text-[#888888]",
                        ].join(" ")}
                      >
                        {f.label}
                      </span>

                      {/* only show the little divider line on the active item (cleaner) */}
                      <span
                        className={[
                          "h-[1px] w-[9px] transition-opacity",
                          i === active ? "opacity-100 bg-[#4F4F4F]" : "opacity-0 bg-[#888888]",
                        ].join(" ")}
                      />
                    </div>

                    {/* subtle underline indicator */}
                    <div
                      className={[
                        "mt-[10px] h-[1px] w-full transition-opacity",
                        i === active ? "opacity-20 bg-[#0038DF]" : "opacity-0",
                      ].join(" ")}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN (sticky stacked cards) */}
            <div className="w-[222px] flex flex-col gap-[10px] relative">
              {/* card stage uses stacking so everything shares the same base */}
              <div className="relative w-[222px] h-[221px]">
                {FEATURES.map((item, idx) => (
                  <div
                    key={item.id}
                    ref={addCardRef}
                    className="absolute inset-0"
                    style={{ zIndex: 10 + idx }}
                  >
                    <FeatureCard item={item} />
                  </div>
                ))}
              </div>

              {/* If you truly need 914px total height like figma, keep some breathing room */}
              <div className="h-[calc(100vh-221px-120px)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
