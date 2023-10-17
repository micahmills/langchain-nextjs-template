import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <h1>Digital Responder Agent - French</h1>
  );
  return (
    <ChatWindow
      endpoint="../api/chat/retrieval_agents"
      emptyStateComponent={InfoCard}
      showIngestForm={false}
      
      language="Turkish"
      placeholder={
        "Posez n'importe quelle question sur le christianisme"
      }
      emoji="🤖"
      titleText="Digital Responder Bot - French"
    ></ChatWindow>
  );
}
