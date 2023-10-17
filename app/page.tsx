import { ChatWindow } from "@/components/ChatWindow";
import { Navbar } from "@/components/Navbar";

export default function AgentsPage() {
  const InfoCard = (
    <h1>Digital Responder Agents</h1>
  );
  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-center">Digital Responder Agents</h1>
      <Navbar></Navbar>
    </div>
  );
}
