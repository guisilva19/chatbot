"use client";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  NextUIProvider,
} from "@nextui-org/react";
import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <NextUIProvider>
      <Card className="py-4 w-[375px] h-[650px] rounded-lg bg-white">
        <CardHeader className="pt-2 px-4 flex-col items-start">
          <h1 className="font-bold text-3xl">Chat AI</h1>
          <p className="text-slate-500">Use the chatbot for free</p>
        </CardHeader>
        <CardBody className="overflow-visible py-2 px-4">
          {messages.map((message) => (
            <div key={message.id} className="flex gap-1 text-slate-600 text-sm">
              <div className="w-2/12">
                {message.role === "user" ? (
                  <Avatar
                    isBordered
                    src="https://i.ibb.co/rdv6VWg/371172117-806976371162397-9154886213629138040-n.jpg"
                    name="GS"
                    showFallback
                  />
                ) : (
                  <Avatar
                    isBordered
                    src="https://i.ibb.co/1rQZKpZ/icon.png"
                    name="GS"
                    showFallback
                  />
                )}
              </div>
              <p className="leading-relaxed w-10/12">
                <span className="block font-bold text-slate-700">
                  {message.role === "user" ? "Usuário" : "Bot"}:
                </span>
                {message.content}
              </p>
            </div>
          ))}
        </CardBody>
        <CardFooter>
          <form onSubmit={handleSubmit} className="flex gap-2 w-full">
            <Input
              placeholder="How can i help you?"
              variant="bordered"
              onChange={handleInputChange}
              value={input}
            />
            <Button variant="shadow" type="submit" color="primary">
              Send
            </Button>
          </form>
        </CardFooter>
      </Card>
    </NextUIProvider>
  );
}
