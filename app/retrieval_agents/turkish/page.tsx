import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <h1>Digital Responder Agent - Turkish</h1>
  );
  return (
    <ChatWindow
      endpoint="../api/chat/retrieval_agents"
      emptyStateComponent={InfoCard}
      showIngestForm={false}
      
      language="Turkish"
      placeholder={
        'Hıristiyanlık hakkında herhangi bir soru sorun'
      }
      emoji="🤖"
      titleText="Digital Responder Bot - Turkish"
    ></ChatWindow>
  );
}
