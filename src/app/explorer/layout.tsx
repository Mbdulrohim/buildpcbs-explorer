
import React from 'react';
import Navbar from "@/components/Navbar";

export default function ExplorerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
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
        </>
    );
}
