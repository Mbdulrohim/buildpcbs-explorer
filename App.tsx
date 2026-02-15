
import React, { useState, useEffect } from 'react';
import { AppState } from './types';
import IntroAnimation from './components/IntroAnimation';
import LandingPage from './components/LandingPage';

const App: React.FC = () => {
  const [viewState, setViewState] = useState<AppState>(AppState.INTRO);

  // The App component now relies on IntroAnimation's onComplete callback
  // rather than a hard-coded timer to ensure the "dust" finishes.

  return (
    <div className="min-h-screen bg-black text-white">
      {viewState === AppState.INTRO ? (
        <IntroAnimation onComplete={() => setViewState(AppState.LANDING)} />
      ) : (
        <LandingPage />
      )}
    </div>
  );
};

export default App;
