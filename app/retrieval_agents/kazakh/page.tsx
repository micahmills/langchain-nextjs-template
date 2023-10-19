import { ChatWindow } from "@/components/ChatWindow";
import { ContactForm } from "@/components/ContactForm";

export default function AgentsPage() {
  const InfoCard = (
    <h1>Digital Responder Agent - Kazakh</h1>
  );
  return (
    <div>
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

        <ContactForm
          isOpen={false}
        ></ContactForm>
      </div>
  );
}
