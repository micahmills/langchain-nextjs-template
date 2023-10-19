import { ChatWindow } from "@/components/ChatWindow";
import { ContactForm } from "@/components/ContactForm";

export default function AgentsPage() {
  const InfoCard = (
    <h1>Digital Responder Agent - Arabic</h1>
  );
  return (
    <div>
      <ChatWindow
      endpoint="../api/chat/retrieval_agents"
      emptyStateComponent={InfoCard}
      showIngestForm={false}
      
      language="Arabic"
      placeholder={
        'اطرح أي سؤال حول المسيحية'
      }
      emoji="🤖"
      titleText="Digital Responder Bot - Arabic"
    ></ChatWindow>

        <ContactForm
          isOpen={false}
        ></ContactForm>
      </div>
  );
}
