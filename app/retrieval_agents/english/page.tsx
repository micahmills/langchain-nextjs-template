import { ChatWindow } from "@/components/ChatWindow";
import { ContactForm } from "@/components/ContactForm";

export default function AgentsPage() {
  const InfoCard = (
    <h1>Digital Responder Agent - English</h1>
  );
  return (
    <div>
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

        <ContactForm
          isOpen={false}
        ></ContactForm>
      </div>
  );
}
