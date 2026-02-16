import React from 'react';

interface WaitlistModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
            <div
                className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl w-full max-w-md m-4"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-2xl font-bold mb-4 text-white">Join the Waitlist</h2>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-zinc-800 border-zinc-700 rounded-lg p-3 mb-4 text-white placeholder-zinc-500"
                />
                <div className="flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 hover:bg-zinc-800 rounded-lg text-zinc-400"
                    >
                        Cancel
                    </button>
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-medium">
                        Join
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WaitlistModal;
