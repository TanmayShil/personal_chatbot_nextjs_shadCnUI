import { Message } from "@/type/global.interface";

export default function MessageBubble({ message }: { message: Message }) {
  return (
    <div
      className={`max-w-xs md:max-w-md p-3 rounded-2xl text-sm ${
        message.role === "user"
          ? "bg-blue-500 text-white self-end"
          : "bg-gray-200 text-black self-start"
      }`}
    >
      {message.content}
    </div>
  );
}
