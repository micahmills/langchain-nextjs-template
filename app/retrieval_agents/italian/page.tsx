import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <h1>Digital Responder Agent - Italian</h1>
  );
  return (
    <ChatWindow
      endpoint="../api/chat/retrieval_agents"
      emptyStateComponent={InfoCard}
      showIngestForm={false}
      language="Italian"
      placeholder={
        'Chiedi qualsiasi cosa sul cristianesimo'
      }
      emoji="🤖"
      titleText="Digital Responder Bot - Italian"
    ></ChatWindow>
  );
}
