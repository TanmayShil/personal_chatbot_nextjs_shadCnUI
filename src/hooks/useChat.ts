import { useState } from "react";
import axios from "axios";
import { Message } from "../type/global.interface";

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (message: string, language: string) => {
    if (!message.trim()) return;

    const userMessage: Message = { role: "user", content: message };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    try {
      const { data } = await axios.post("/api/chat", {
        message,
        language,
      });

      const botMessage: Message = {
        role: "bot",
        content: data.reply,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error: any) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: error?.message || "Error fetching response." },
      ]);
    }

    setLoading(false);
  };

  return { messages, loading, sendMessage };
};
