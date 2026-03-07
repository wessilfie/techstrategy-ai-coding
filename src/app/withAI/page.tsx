'use client';

import ReplicaUI from '@/components/ReplicaUI';
import ChatWidget from '@/components/chat/ChatWidget';

export default function WithAIHome() {
    return (
        <ReplicaUI>
            <ChatWidget mode="ai" />
        </ReplicaUI>
    );
}
