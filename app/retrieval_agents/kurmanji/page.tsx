import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <h1>Digital Responder Agent - Kurmanji</h1>
  );
  return (
    <ChatWindow
      endpoint="../api/chat/retrieval_agents"
      emptyStateComponent={InfoCard}
      showIngestForm={false}
      
      language="Kurmanji Kurdish"
      placeholder={
        'Pirsên li ser Xirîstiyantiyê bipirsin'
      }
      emoji="🤖"
      titleText="Digital Responder Bot - Kurmanji"
    ></ChatWindow>
  );
}
