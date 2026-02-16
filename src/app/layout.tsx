import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BuildPCBs Explorer",
  description: "Hardware as Code. Decentralized manufacturing network.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${dmMono.variable} antialiased min-h-screen bg-pcb-dark font-sans flex flex-col relative overflow-x-hidden`}
      >
        {/* Background Circles - REMOVED, now in Hero.tsx */}
        {/* <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute w-[1200px] h-[1200px] top-[300px] left-[-250px] rounded-full z-[-1] bg-[linear-gradient(181.98deg,_rgba(45,45,45,0.12)_1.67%,_rgba(23,23,23,0.02)_14.01%,_rgba(0,0,0,0.02)_68.93%)] dark:bg-[linear-gradient(181.98deg,_#2D2D2D_1.67%,_#171717_14.01%,_#000000_68.93%)]"></div>
          <div className="absolute w-[900px] h-[900px] top-[450px] left-[-100px] rounded-full z-[-1] bg-[linear-gradient(167.43deg,_rgba(45,45,45,0.06)_9.12%,_rgba(18,18,18,0.02)_36.53%,_rgba(0,0,0,0.01)_62.27%,_rgba(0,0,0,0.01)_84.55%)] dark:bg-[linear-gradient(167.43deg,_#2D2D2D_9.12%,_rgba(18,18,18,0.44)_36.53%,_rgba(0,0,0,0.01)_62.27%,_rgba(0,0,0,0.01)_84.55%)]"></div>
        </div> */}

        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
