'use client';

import { useState, useEffect } from 'react';
import ChatBubble from './ChatBubble';
import ChatWindow from './ChatWindow';
import styles from './ChatWidget.module.css';

interface ChatWidgetProps {
    apiKey?: string;
    mode?: 'ai' | 'simulated';
}

export default function ChatWidget({ apiKey, mode = 'ai' }: ChatWidgetProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [showPreview, setShowPreview] = useState(false);

    useEffect(() => {
        // Show preview message after 10 seconds if chat isn't opened
        const timer = setTimeout(() => {
            if (!isOpen) {
                setShowPreview(true);
            }
        }, 10000);

        return () => clearTimeout(timer);
    }, [isOpen]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setShowPreview(false);
        }
    };

    return (
        <div className={styles.widgetContainer}>
            {!isOpen && (
                <ChatBubble
                    onClick={toggleChat}
                    showPreview={showPreview}
                />
            )}

            {isOpen && (
                <ChatWindow
                    onClose={toggleChat}
                    apiKey={apiKey}
                    mode={mode}
                />
            )}
        </div>
    );
}
