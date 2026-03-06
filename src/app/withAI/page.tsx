'use client';

import { useState } from 'react';
import ReplicaUI from '@/components/ReplicaUI';
import ChatWidget from '@/components/chat/ChatWidget';

export default function WithAIHome() {
    const [apiKey, setApiKey] = useState('');
    const [isKeySet, setIsKeySet] = useState(false);

    const handleSetKey = (e: React.FormEvent) => {
        e.preventDefault();
        if (apiKey.trim()) {
            setIsKeySet(true);
        }
    };

    return (
        <ReplicaUI>
            {!isKeySet ? (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    zIndex: 1000,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <div style={{
                        maxWidth: '500px',
                        width: '100%',
                        padding: '2.5rem',
                        borderRadius: '12px',
                        background: 'var(--cbs-bg-white)',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
                    }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--cbs-primary-blue)', fontFamily: 'var(--font-serif)' }}>
                            Enable AI Agent Demo
                        </h2>
                        <p style={{ fontSize: '0.95rem', color: 'var(--cbs-text-secondary)', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                            Please enter your OpenAI API key to enable Aria, the EMBA admissions chatbot powered by GPT-4o. Your key is not stored and is only used locally for this demo session.
                        </p>
                        <form onSubmit={handleSetKey} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <input
                                type="password"
                                placeholder="sk-..."
                                value={apiKey}
                                onChange={(e) => setApiKey(e.target.value)}
                                style={{
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    border: '1px solid var(--cbs-border)',
                                    fontSize: '1rem',
                                    width: '100%',
                                    outline: 'none',
                                }}
                                required
                            />
                            <button
                                type="submit"
                                style={{
                                    padding: '1rem',
                                    backgroundColor: 'var(--cbs-primary-blue)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    fontWeight: '600',
                                    transition: 'background-color 0.2s',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}
                            >
                                Authenticate & Start Demo
                            </button>
                        </form>
                    </div>
                </div>
            ) : (
                <ChatWidget apiKey={apiKey} mode="ai" />
            )}
        </ReplicaUI>
    );
}
