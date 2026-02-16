"use client";
import React, { createContext, useContext, useState } from 'react';

const WaitlistContext = createContext<any>({
    isWaitlistOpen: false,
    openWaitlist: () => { },
    closeWaitlist: () => { },
});

export const WaitlistProvider = ({ children }: { children: React.ReactNode }) => {
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
    const openWaitlist = () => setIsWaitlistOpen(true);
    const closeWaitlist = () => setIsWaitlistOpen(false);

    return (
        <WaitlistContext.Provider value={{ isWaitlistOpen, openWaitlist, closeWaitlist }}>
            {children}
        </WaitlistContext.Provider>
    );
};

export const useWaitlist = () => useContext(WaitlistContext);
