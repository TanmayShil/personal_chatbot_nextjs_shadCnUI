"use client";

import { useState } from "react";
import { useChat } from "@/hooks/useChat";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ChatContainer() {
  const { messages, loading, sendMessage } = useChat();
  const [language, setLanguage] = useState("english");

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto">
      <div className="p-4 border-b flex justify-between items-center">
        <h1 className="font-bold text-lg">Personal Chatbot</h1>
        <Select
          onValueChange={(val) => setLanguage(val)}
          defaultValue="english"
        >
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="bengali">Bengali</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
        {messages.map((msg, i) => (
          <MessageBubble key={i} message={msg} />
        ))}
        {loading && <p className="text-sm text-gray-500">Typing...</p>}
      </div>

      <ChatInput
        language={language}
        onSend={(msg) => sendMessage(msg, language)}
      />
    </div>
  );
}
