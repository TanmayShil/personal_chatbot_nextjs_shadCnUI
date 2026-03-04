import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://personal-chatbot-nextjs-shad-cn-ui.vercel.app"
  ),

  title: {
    default: "Personal Chatbot",
    template: "%s | Personal Chatbot",
  },

  description:
    "Personal AI Chatbot built with Next.js, TypeScript, Tailwind CSS, shadcn/ui and Groq API. Supports English and Bengali mode.",

  keywords: [
    "Personal Chatbot",
    "Tanmay Shil",
    "AI Chatbot",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "Groq API",
  ],

  authors: [
    {
      name: "Tanmay Shil",
      url: "https://personal-chatbot-nextjs-shad-cn-ui.vercel.app",
    },
  ],

  creator: "Tanmay Shil",
  publisher: "Tanmay Shil",

  openGraph: {
    title: "Personal Chatbot",
    description:
      "AI Chatbot built using Next.js, TypeScript and Groq API with English & Bengali support.",
    url: "https://personal-chatbot-nextjs-shad-cn-ui.vercel.app",
    siteName: "Personal Chatbot",
    images: [
      {
        url: "/chatboot.png",
        width: 1200,
        height: 630,
        alt: "Personal Chatbot Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Personal Chatbot",
    description:
      "AI Chatbot built using Next.js, TypeScript and Groq API.",
    images: ["/chatboot.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tanmay Shil",
    url: "https://personal-chatbot-nextjs-shad-cn-ui.vercel.app",
    sameAs: [
      "https://www.facebook.com/Tanmay Shil",
      "https://www.linkedin.com/in/tanmay93",
    ],
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable} antialiased`}>
        {children}

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </body>
    </html>
  );
}