import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <h1>Digital Responder Agent - Uyghur</h1>
  );
  return (
    <ChatWindow
      endpoint="../api/chat/retrieval_agents"
      emptyStateComponent={InfoCard}
      showIngestForm={false}
      
      language="Uyghur"
      placeholder={
        'خىرىستىئان دىنى ھەققىدە سوئال سوراڭ'
      }
      emoji="🤖"
      titleText="Digital Responder Bot - Uyghur"
    ></ChatWindow>
  );
}
