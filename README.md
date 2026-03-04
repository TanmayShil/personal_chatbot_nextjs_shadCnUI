# 🤖 Personal Chatbot

A modern AI Chatbot built using:

* ⚡ Next.js 14 (App Router)
* 🟦 TypeScript
* 🎨 Tailwind CSS
* 🧩 shadcn/ui
* 🔁 Custom Hook (useChat)
* 🌍 Groq Free AI API
* 📦 Axios

Supports:

* 🇬🇧 English Mode
* 🇧🇩 Bengali Mode
* 📱 Mobile Friendly UI

---

# 🚀 Live Features

✅ Clean component-based architecture
✅ Custom hook for chat logic
✅ API Route integration
✅ Language switching

---

# 📁 Project Structure

```
/src
  /app
    /api/chat/route.ts
    /page.tsx
    /layout.tsx
    /globals.css

  /components
    /ui     #shadcn ui components
    ChatContainer.tsx
    ChatInput.tsx
    MessageBubble.tsx

  /hooks
    useChat.ts

  /lib
    utils.ts
```

---

# 🛠️ Installation Guide

## 1️⃣ Clone Repository

```bash
git clone https://github.com/TanmayShil/personal_chatbot_nextjs_shadCnUI.git
cd personal_chatbot_nextjs_shadCnUI
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Setup Environment Variables

Create a `.env.local` file in root directory:

```
GROQ_API_KEY=your_groq_api_key_here
```

Get your free API key from:

👉 [https://console.groq.com](https://console.groq.com)

---

## 4️⃣ Run Development Server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

# 🧠 How It Works

```
User → Custom Hook (useChat)
     → Axios → Next.js API Route
     → Groq API
     → Response → UI
```

---

# 🌍 Language Mode System

We dynamically control AI response language using system prompts:

```ts
const systemPrompt =
  language === "bengali"
    ? "Reply in natural conversational Bengali."
    : "Reply in English.";
```

---

# 📦 Tech Stack Details

| Technology   | Purpose       |
| ------------ | ------------- |
| Next.js      | Framework     |
| TypeScript   | Type Safety   |
| Tailwind CSS | Styling       |
| shadcn/ui    | UI Components |
| Axios        | HTTP Client   |
| Groq API     | AI Model      |

---

# 🚀 Deployment (Vercel)

1. Push project to GitHub
2. Go to [https://vercel.com](https://vercel.com)
3. Import repository
4. Add Environment Variable:

```
GROQ_API_KEY=your_key
```

5. Deploy 🎉
```
https://personal-chatbot-nextjs-shad-cn-ui.vercel.app
```
---

# 👨‍💻 Author

Built by Tanmay 🚀
If you like this project, give it a ⭐ on GitHub!
