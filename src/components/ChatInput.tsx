"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ChatInput({
  onSend,
  language,
}: {
  onSend: (msg: string) => void;
  language: string;
}) {
  const [input, setInput] = useState("");

  return (
    <div className="flex gap-2 p-3 border-t">
    <Input
        placeholder="Type message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSend(input);
            setInput("");
          }
        }}
      />
      <Button
        onClick={() => {
          onSend(input);
          setInput("");
        }}
      >
        Send
      </Button>
    </div>
      );
}