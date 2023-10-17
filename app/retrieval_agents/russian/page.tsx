import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <h1>Digital Responder Agent - Russian</h1>
  );
  return (
    <ChatWindow
      endpoint="../api/chat/retrieval_agents"
      emptyStateComponent={InfoCard}
      showIngestForm={false}
      
      language="Russian"
      placeholder={
        'Задайте любой вопрос о христианстве'
      }
      emoji="🤖"
      titleText="Digital Responder Bot - Russian"
    ></ChatWindow>
  );
}
