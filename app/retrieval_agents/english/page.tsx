import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <h1>Digital Responder Agent - English</h1>
  );
  return (
    <ChatWindow
      endpoint="../api/chat/retrieval_agents"
      emptyStateComponent={InfoCard}
      showIngestForm={false}
      language="English"
      placeholder={
        'Ask anything about Christianity'
      }
      emoji="🤖"
      titleText="Digital Responder Bot - English"
    ></ChatWindow>
  );
}
