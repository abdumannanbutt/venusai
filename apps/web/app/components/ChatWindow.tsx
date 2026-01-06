"use client";

import { useState } from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

export default function ChatWindow() {
  const [messages, setMessages] = useState<any[]>([]);

  async function send(content: string) {
    const updated = [...messages, { role: "user", content }];
    setMessages(updated);

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ messages: updated })
    });

    const data = await res.json();
    setMessages([...updated, data.message]);
  }

  return (
    <div className="max-w-3xl mx-auto h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m, i) => (
          <ChatMessage key={i} message={m} />
        ))}
      </div>
      <ChatInput onSend={send} />
    </div>
  );
}
