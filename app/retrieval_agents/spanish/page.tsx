import { ChatWindow } from "@/components/ChatWindow";
import { ContactForm } from "@/components/ContactForm";

export default function AgentsPage() {
  const InfoCard = (
    <h1>Digital Responder Agent - Spanish</h1>
  );
  return (
    <div>
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

        <ContactForm
          isOpen={false}
        ></ContactForm>
      </div>
  );
}
