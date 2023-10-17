import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <h1>Digital Responder Agent - Tajik</h1>
  );
  return (
    <ChatWindow
      endpoint="../api/chat/retrieval_agents"
      emptyStateComponent={InfoCard}
      showIngestForm={false}
      
      language="Tajik"
      placeholder={
        'Дар бораи масеҳият саволҳо диҳед'
      }
      emoji="🤖"
      titleText="Digital Responder Bot - Tajik"
    ></ChatWindow>
  );
}
