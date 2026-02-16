"use client";

import React, { useState } from 'react';
import IntroAnimation from '@/components/IntroAnimation';
import LandingPage from '@/components/LandingPage';
import { AppState } from '@/types';

export default function Home() {
    const [appState, setAppState] = useState<AppState>(AppState.INTRO);

    return (
        <div className="min-h-screen bg-black text-white">
            {appState === AppState.INTRO ? (
                <IntroAnimation onComplete={() => setAppState(AppState.LANDING)} />
            ) : (
                <LandingPage />
            )}
        </div>
    );
}
