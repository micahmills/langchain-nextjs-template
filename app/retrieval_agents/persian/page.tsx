import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <h1>Digital Responder Agent - Persian</h1>
  );
  return (
    <ChatWindow
      endpoint="../api/chat/retrieval_agents"
      emptyStateComponent={InfoCard}
      showIngestForm={false}
      
      language="Persian"
      placeholder={
        'هر سوالی در مورد مسیحیت بپرسید'
      }
      emoji="🤖"
      titleText="Digital Responder Bot - Persian"
    ></ChatWindow>
  );
}
