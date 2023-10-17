import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <h1>Digital Responder Agent - Sorani</h1>
  );
  return (
    <ChatWindow
      endpoint="../api/chat/retrieval_agents"
      emptyStateComponent={InfoCard}
      showIngestForm={false}
      
      language="Sorani Kurdish"
      placeholder={
        'پرسیار دەربارەی ئایینی مەسیحی بکە'
      }
      emoji="🤖"
      titleText="Digital Responder Bot - Sorani"
    ></ChatWindow>
  );
}
