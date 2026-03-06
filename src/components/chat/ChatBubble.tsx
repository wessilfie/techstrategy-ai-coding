import { useState, useEffect } from 'react';
import styles from './ChatBubble.module.css';

interface ChatBubbleProps {
    onClick: () => void;
    showPreview: boolean;
}

export default function ChatBubble({ onClick, showPreview }: ChatBubbleProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        // Small delay to animate in the bubble itself when first loaded
        const timer = setTimeout(() => setIsVisible(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const handleDismiss = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsDismissed(true);
    };

    if (!isVisible) return null;

    const showingPreview = showPreview && !isDismissed;

    return (
        <div className={styles.bubbleContainer}>
            {showingPreview && (
                <div className={styles.previewMessage} onClick={onClick}>
                    <button className={styles.dismissButton} onClick={handleDismiss} aria-label="Dismiss preview">
                        &times;
                    </button>
                    <p>Hi! We&apos;re here to help if you have any questions about the EMBA program. 👋</p>
                </div>
            )}

            <button
                className={`${styles.chatBubble} ${showingPreview ? styles.pulse : ''}`}
                onClick={onClick}
                aria-label="Open chat"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
            </button>
        </div>
    );
}
