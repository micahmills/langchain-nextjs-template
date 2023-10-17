import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <h1>Digital Responder Agent - Kazakh</h1>
  );
  return (
    <ChatWindow
      endpoint="../api/chat/retrieval_agents"
      emptyStateComponent={InfoCard}
      showIngestForm={false}
      
      language="Kazakh"
      placeholder={
        'Христиан діні туралы сұрақтар қойыңыз'
      }
      emoji="🤖"
      titleText="Digital Responder Bot - Kazakh"
    ></ChatWindow>
  );
}
