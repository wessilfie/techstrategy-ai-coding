import ReplicaUI from '@/components/ReplicaUI';
import ChatWidget from '@/components/chat/ChatWidget';

export default function Home() {
  return (
    <ReplicaUI>
      <ChatWidget mode="simulated" />
    </ReplicaUI>
  );
}
