"use client";

import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="m-8 text-center">
      <a className={`mr-8 ${pathname === "/retrieval_agents/arabic" ? "text-white border-b" : ""}`} href="/retrieval_agents/arabic">Arabic</a>
      <a className={`mr-8 ${pathname === "/retrieval_agents/english" ? "text-white border-b" : ""}`} href="/retrieval_agents/english">English</a>
      <a className={`mr-8 ${pathname === "/retrieval_agents/french" ? "text-white border-b" : ""}`} href="/retrieval_agents/french">French</a>
      <a className={`mr-8 ${pathname === "/retrieval_agents/hebrew" ? "text-white border-b" : ""}`} href="/retrieval_agents/hebrew">Hebrew</a>
      <a className={`mr-8 ${pathname === "/retrieval_agents/italian" ? "text-white border-b" : ""}`} href="/retrieval_agents/italian">Italian</a>
      <a className={`mr-8 ${pathname === "/retrieval_agents/kazakh" ? "text-white border-b" : ""}`} href="/retrieval_agents/kazakh">Kazakh</a>
      <a className={`mr-8 ${pathname === "/retrieval_agents/kurmanji" ? "text-white border-b" : ""}`} href="/retrieval_agents/kurmanji">Kurmanji</a>
      <a className={`mr-8 ${pathname === "/retrieval_agents/persian" ? "text-white border-b" : ""}`} href="/retrieval_agents/persian">Persian</a>
      <a className={`mr-8 ${pathname === "/retrieval_agents/russian" ? "text-white border-b" : ""}`} href="/retrieval_agents/russian">Russian</a>
      <a className={`mr-8 ${pathname === "/retrieval_agents/somali" ? "text-white border-b" : ""}`} href="/retrieval_agents/Somali">Somali</a>
      <a className={`mr-8 ${pathname === "/retrieval_agents/spanish" ? "text-white border-b" : ""}`} href="/retrieval_agents/spanish">Spanish</a>
      <a className={`mr-8 ${pathname === "/retrieval_agents/sorani" ? "text-white border-b" : ""}`} href="/retrieval_agents/sorani">Sorani</a>
      <a className={`mr-8 ${pathname === "/retrieval_agents/tajik" ? "text-white border-b" : ""}`} href="/retrieval_agents/tajik">Tajik</a>
      <a className={`mr-8 ${pathname === "/retrieval_agents/turkish" ? "text-white border-b" : ""}`} href="/retrieval_agents/turkish">Turkish</a>
      <a className={`mr-8 ${pathname === "/retrieval_agents/uyghur" ? "text-white border-b" : ""}`} href="/retrieval_agents/uyghur">Uyghur</a>
    </nav>
  );
}