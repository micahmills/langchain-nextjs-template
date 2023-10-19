import { ChatWindow } from "@/components/ChatWindow";
import { ContactForm } from "@/components/ContactForm";

export default function AgentsPage() {
  const InfoCard = (
    <h1>Digital Responder Agent</h1>
  );
  return (
    <div>
      <ChatWindow
      endpoint="api/chat/retrieval_agents"
      emptyStateComponent={InfoCard}
      showIngestForm={true}
      
      placeholder={
        'Ask Any question about Christianity?'
      }
      emoji="🤖"
      titleText="Digital Responder Bot"
    ></ChatWindow>

        <ContactForm
          isOpen={false}
        ></ContactForm>
      </div>
  );
}
