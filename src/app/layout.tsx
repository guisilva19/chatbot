import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chatbot",
  description:
    "O projeto de desenvolvimento de um chatbot utilizando a API da OpenAI é uma iniciativa emocionante. Com a API da OpenAI, temos acesso a uma tecnologia avançada de processamento de linguagem natural, permitindo ao chatbot entender e gerar textos de forma fluente e relevante. ",
    icons: {
      icon: "./icon.png"
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
