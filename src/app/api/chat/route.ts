import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const { message, language } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Message required" }, { status: 400 });
    }

    const systemPrompt =
      language === "bengali"
        ? "You are a helpful assistant. Always reply in natural conversational Bengali (Bangladesh style)."
        : "You are a helpful assistant. Always reply in English.";

    const { data } = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message },
        ],
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
      },
    );

    const reply = data?.choices?.[0]?.message?.content;

    return NextResponse.json({ reply });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.response?.data || "Server Error" },
      { status: 500 },
    );
  }
}
