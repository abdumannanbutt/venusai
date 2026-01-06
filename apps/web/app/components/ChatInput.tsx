"use client";
import { useState } from "react";

export default function ChatInput({ onSend }: any) {
  const [value, setValue] = useState("");

  return (
    <form
      className="p-4 border-t"
      onSubmit={e => {
        e.preventDefault();
        onSend(value);
        setValue("");
      }}
    >
      <input
        className="w-full p-3 bg-gray-800 rounded"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Ask VenusAI..."
      />
    </form>
  );
}
