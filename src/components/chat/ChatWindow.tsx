import { useState, useRef, useEffect } from 'react';
import styles from './ChatWindow.module.css';

interface Message {
    id: string;
    role: 'user' | 'bot';
    content: string;
}

interface ChatWindowProps {
    onClose: () => void;
    apiKey?: string;
    mode?: 'ai' | 'simulated';
}

const INITIAL_MESSAGE: Message = {
    id: 'init-1',
    role: 'bot',
    content: "Hi! Welcome to Columbia Business School Executive MBA Admissions. I'm Aria, and we're here to help! How can I assist you today?"
};

const QUICK_REPLIES = [
    "Program overview",
    "Admissions requirements",
    "Tuition & financial aid",
    "Talk to admissions"
];

const SIMULATED_BANK: Record<string, string[]> = {
    'greeting': [
        "Hello! How can I help you regarding the Columbia EMBA program?",
        "Hi there! Welcome to Columbia Business School Admissions. What questions can I answer for you today?",
        "Greetings! I'm here to help you learn more about our Executive MBA. What's on your mind?"
    ],
    'human': [
        "I'm Aria, a member of the Columbia Business School Admissions team! I'm here to help answer any questions you have about our Executive MBA program.",
        "I'm Aria from the CBS Admissions office. I'd love to help you learn more about what makes our EMBA program so special."
    ],
    'location': [
        "Columbia Business School is located in New York City on our beautiful new Manhattanville campus.",
        "Our campus is situated in Manhattanville, New York City, offering a vibrant ecosystem for business education at the very center of business."
    ],
    'gmat': [
        "We encourage all EMBA candidates to submit a valid standardized test score (GMAT, GRE, or EA). However, it is possible to request a waiver based on a review of your resume and transcripts.",
        "Test scores (GMAT/GRE/EA) are a data point we use, but you may be eligible for a test waiver depending on your professional background and academic history."
    ],
    'tuition': [
        "The current tuition for the Columbia EMBA program is approximately $239,880.",
        "Tuition is approximately $239,880 and covers all courses, textbooks, accommodations for residence weeks, and most meals during class days."
    ],
    'weekend': [
        "We offer several formats: the EMBA-NY Friday/Saturday option (every other week), the EMBA-NY Saturday-only option, and the EMBA-Americas program (week-long sessions once a month).",
        "Depending on your schedule, you can choose our alternating Friday/Saturday format, a Saturday-only format, or a block-week format (EMBA-Americas)."
    ],
    'time': [
        "The EMBA program takes 20 to 24 months to complete, depending on the format you choose.",
        "You can expect to complete the program in 20-24 months. Students typically spend 15-20 hours per week outside of class on coursework."
    ],
    'overview': [
        "The Columbia EMBA is designed for working professionals. It offers the exact same rigorous curriculum and MBA degree as our full-time program, just delivered in a format that accommodates your career."
    ],
    'requirements': [
        "Key requirements include an online application, resume, transcripts, essays, letters of recommendation, and a standardized test score (or waiver). We look for candidates with 8-20 years of work experience.",
        "Our process requires transcripts, a resume, essays, recommendations, and a test score (or waiver). Full-time employment is required for admission, and Friday/Saturday applicants need a time-sponsorship letter from their employer."
    ],
    'sponsor': [
        "For the Friday/Saturday program, you must submit a signed letter from your employer granting permission for time away from work. Financial sponsorship is not required.",
        "Employer time sponsorship is required for formats that meet during the workweek (like the Friday/Saturday option) to ensure you have the time to attend classes."
    ],
    'interview': [
        "Interviews are by invitation only and are a mandatory part of the process. They are typically conducted blind by a member of the Admissions Office.",
        "If you are selected to move forward, we will invite you to an interview. Interviews help us understand your goals and how you'll contribute to our community."
    ],
    'financial': [
        "While many students are partially or fully sponsored by their employers, we also offer financial aid in the form of loans and limited fellowships based on merit and need.",
        "Financial aid is available! We offer loans and limited merit/need-based fellowships. Many students also receive some level of employer support."
    ],
    'talk': [
        "I'd be happy to connect you with an admissions officer! Please email us at apply@gsb.columbia.edu or call our office to schedule a consultation.",
        "We're here to help! You can reach our admissions team directly at apply@gsb.columbia.edu for a personalized conversation."
    ],
    'acceptance': [
        "We aim to provide an initial decision within six weeks of receiving your application. After an interview, final decisions typically take about two weeks."
    ],
    'default': [
        "That's a great question. The Executive MBA program is highly customizable and every student's journey is unique. Could you tell me a little more about your background?",
        "I'd love to share more about that! Have you had a chance to look at our class profile or upcoming admissions deadlines?",
        "We're here to help figure out if Columbia is the right fit for you. Could you tell me more about what you're looking for?"
    ]
};

export default function ChatWindow({ onClose, apiKey, mode = 'ai' }: ChatWindowProps) {
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = async (text: string) => {
        if (!text.trim()) return;

        const userMsg: Message = { id: Date.now().toString(), role: 'user', content: text };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        if (mode === 'simulated') {
            // Simulated local logic (Slower, 2.5s to 4.5s delay)
            const delay = Math.floor(Math.random() * 2000) + 2500;

            setTimeout(() => {
                const lowerText = text.toLowerCase();
                let bankKey = 'default';

                // Simple keyword matching for simulated bank
                if (lowerText.match(/\b(hi|hello|hey|greetings|howdy)\b/)) {
                    bankKey = 'greeting';
                } else if (lowerText.includes('human') || lowerText.includes('bot') || lowerText.includes('ai') || lowerText.includes('real person')) {
                    bankKey = 'human';
                } else if (lowerText.includes('where') || lowerText.includes('location') || lowerText.includes('campus') || lowerText.includes('city')) {
                    bankKey = 'location';
                } else if (lowerText.includes('gmat') || lowerText.includes('gre') || lowerText.includes('test') || lowerText.includes('ea') || lowerText.includes('assessment')) {
                    bankKey = 'gmat';
                } else if (lowerText.includes('tuition') || lowerText.includes('cost') || lowerText.includes('price') || lowerText.includes('pay') || lowerText.includes('fee')) {
                    bankKey = 'tuition';
                } else if (lowerText.includes('weekend') || lowerText.includes('schedule') || lowerText.includes('format') || lowerText.includes('friday') || lowerText.includes('saturday')) {
                    bankKey = 'weekend';
                } else if (lowerText.includes('time') || lowerText.includes('long') || lowerText.includes('duration') || lowerText.includes('months')) {
                    bankKey = 'time';
                } else if (lowerText.includes('overview') || lowerText.includes('program') || lowerText.includes('about')) {
                    bankKey = 'overview';
                } else if (lowerText.includes('requirement') || lowerText.includes('apply') || lowerText.includes('admission') || lowerText.includes('resume') || lowerText.includes('transcript')) {
                    bankKey = 'requirements';
                } else if (lowerText.includes('sponsor') || lowerText.includes('employer') || lowerText.includes('company') || lowerText.includes('letter')) {
                    bankKey = 'sponsor';
                } else if (lowerText.includes('interview')) {
                    bankKey = 'interview';
                } else if (lowerText.includes('financial') || lowerText.includes('aid') || lowerText.includes('scholarship') || lowerText.includes('fellowship') || lowerText.includes('loan')) {
                    bankKey = 'financial';
                } else if (lowerText.includes('accept') || lowerText.includes('decision') || lowerText.includes('hear back')) {
                    bankKey = 'acceptance';
                } else if (lowerText.includes('talk') || lowerText.includes('officer') || lowerText.includes('contact') || lowerText.includes('advisor') || lowerText.includes('email')) {
                    bankKey = 'talk';
                }

                const responses = SIMULATED_BANK[bankKey];
                const reply = responses[Math.floor(Math.random() * responses.length)];

                setMessages(prev => [
                    ...prev,
                    { id: Date.now().toString(), role: 'bot', content: reply }
                ]);
                setIsTyping(false);
            }, delay);
            return;
        }

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: [...messages, userMsg], apiKey })
            });

            if (!res.ok) {
                throw new Error('Chat API returned an error');
            }

            const data = await res.json();

            setMessages(prev => [
                ...prev,
                { id: (Date.now() + 1).toString(), role: 'bot', content: data.reply }
            ]);
        } catch (error) {
            console.error(error);
            setMessages(prev => [
                ...prev,
                { id: (Date.now() + 1).toString(), role: 'bot', content: "I'm sorry, I'm having trouble connecting to my system right now. Please try again later or reach out to admissions directly at apply@gsb.columbia.edu." }
            ]);
        } finally {
            if (mode === 'ai') setIsTyping(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSend(inputValue);
        }
    };

    return (
        <div className={styles.windowContainer}>
            <div className={styles.heroHeader}>

                <button className={styles.closeButton} onClick={onClose} aria-label="Close chat">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div className={styles.heroProfileInfo}>
                    <div className={styles.heroAvatarContainer}>
                        <div className={styles.heroAvatar}>
                            <img
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
                                alt="Aria Profile"
                                className={styles.avatarImage}
                            />
                        </div>
                        <div className={styles.heroOnlineDot}></div>
                    </div>
                    <div className={styles.heroText}>
                        <h2 className={styles.botName}>Aria</h2>
                        <p className={styles.botSubtitle}>Columbia Business School Admissions</p>
                    </div>
                </div>
            </div>

            <div className={styles.messagesContainer}>
                {messages.map((msg) => (
                    <div key={msg.id} className={`${styles.messageWrapper} ${msg.role === 'user' ? styles.messageWrapperUser : styles.messageWrapperBot}`}>
                        {msg.role === 'bot' && (
                            <div className={styles.messageAvatar}>
                                <img
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
                                    alt="Aria"
                                    className={styles.avatarImage}
                                />
                            </div>
                        )}
                        <div className={`${styles.message} ${msg.role === 'user' ? styles.messageUser : styles.messageBot}`}>
                            {msg.content}
                        </div>
                    </div>
                ))}

                {messages.length === 1 && (
                    <div className={styles.quickRepliesContainer}>
                        {QUICK_REPLIES.map(reply => (
                            <button
                                key={reply}
                                className={styles.quickReply}
                                onClick={() => handleSend(reply)}
                            >
                                {reply}
                            </button>
                        ))}
                    </div>
                )}

                {isTyping && (
                    <div className={`${styles.messageWrapper} ${styles.messageWrapperBot}`}>
                        <div className={styles.messageAvatar}>
                            <img
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
                                alt="Aria Typing"
                                className={styles.avatarImage}
                            />
                        </div>
                        <div className={`${styles.message} ${styles.messageBot} ${styles.typingIndicator}`}>
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <div className={styles.inputArea}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask me anything..."
                    className={styles.inputField}
                    disabled={isTyping}
                />
                <button
                    className={styles.sendButton}
                    onClick={() => handleSend(inputValue)}
                    disabled={!inputValue.trim() || isTyping}
                    aria-label="Send message"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                </button>
            </div>
        </div>
    );
}
