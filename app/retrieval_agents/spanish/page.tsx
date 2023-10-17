import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <h1>Digital Responder Agent - Spanish</h1>
  );
  return (
    <ChatWindow
      endpoint="../api/chat/retrieval_agents"
      emptyStateComponent={InfoCard}
      showIngestForm={false}
      
      language="Spanish"
      placeholder={
        'Preguntar Cualquier duda sobre el cristianismo'
      }
      emoji="🤖"
      titleText="Digital Responder Bot - Spanish"
    ></ChatWindow>
  );
}
