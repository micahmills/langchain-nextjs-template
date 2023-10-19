import { ChatWindow } from "@/components/ChatWindow";
import { ContactForm } from "@/components/ContactForm";

export default function AgentsPage() {
  const InfoCard = (
    <h1>Digital Responder Agent - Persian</h1>
  );
  return (
    <div>
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

        <ContactForm
          isOpen={false}
        ></ContactForm>
      </div>
  );
}
