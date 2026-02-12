import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
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
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen bg-pcb-dark font-sans flex flex-col relative overflow-x-hidden`}
      >
        {/* Tech Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-tech-grid bg-[length:40px_40px] opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-pcb-dark opacity-90"></div>
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />

          <main className="flex-grow">{children}</main>

          <footer className="border-t border-pcb-border py-8 bg-pcb-panel/50 backdrop-blur-sm mt-20">
            <div className="container mx-auto px-4 text-center">
              <p className="text-zinc-600 text-xs font-mono tracking-wider">
                BUILD_PCBS_NETWORK_V1.0 // SECURED_BY_SILICON_SEAL
              </p>
              <div className="flex justify-center gap-6 mt-4 text-xs text-zinc-500 font-mono">
                <a
                  href="#"
                  className="hover:text-pcb-primary-light transition-colors"
                >
                  [PRIVACY]
                </a>
                <a
                  href="#"
                  className="hover:text-pcb-primary-light transition-colors"
                >
                  [TERMS]
                </a>
                <a
                  href="#"
                  className="hover:text-pcb-primary-light transition-colors"
                >
                  [CONTRACTS]
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
