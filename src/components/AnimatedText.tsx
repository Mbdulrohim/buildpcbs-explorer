import React from 'react';

const AnimatedText = ({ text, className }: { text: string; className?: string }) => (
    <span className={className}>
        {text}
    </span>
);

export default AnimatedText;
