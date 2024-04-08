"use client";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="w-screen h-screen flex justify-center items-center bg-sky-50">
        <div className="w-[375px] h-[650px] rounded-lg border-2 border-slate-400 bg-white"></div>
      </main>
    </NextUIProvider>
  );
}
