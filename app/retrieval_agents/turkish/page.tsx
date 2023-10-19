import { ChatWindow } from "@/components/ChatWindow";
import { ContactForm } from "@/components/ContactForm";

export default function AgentsPage() {
  const InfoCard = (
    <h1>Digital Responder Agent - Turkish</h1>
  );
  return (
    <div>
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

        <ContactForm
          isOpen={false}
        ></ContactForm>
      </div>
  );
}
