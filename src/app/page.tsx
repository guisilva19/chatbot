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

export default function Home() {
  return (
    <NextUIProvider>
      <main className="w-screen h-screen flex justify-center items-center bg-sky-50">
        <Card className="py-4 w-[375px] h-[650px] rounded-lg bg-white">
          <CardHeader className="pt-2 px-4 flex-col items-start">
            <h1 className="font-bold text-3xl">Chat AI</h1>
            <p className="text-slate-500">Use the chatbot for free</p>
          </CardHeader>
          <CardBody className="overflow-visible py-2 px-4">
            <div className="flex gap-1 text-slate-600 text-sm">
              <div className="w-2/12">
                <Avatar
                  isBordered
                  color="primary"
                  src="https://i.ibb.co/rdv6VWg/371172117-806976371162397-9154886213629138040-n.jpg"
                  name="GS"
                  showFallback
                />
              </div>
              <p className="leading-relaxed w-10/12">
                <span className="block font-bold text-slate-700">Usuario:</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                veniam voluptas modi quisquam quis natus distinctio, cum,
                assumenda blanditiis provident repellendus, dolorem soluta?
                Natus, modi praesentium beatae dicta sunt distinctio.
              </p>
            </div>
          </CardBody>
          <CardFooter>
            <form className="flex gap-2 w-full">
              <Input placeholder="How can i help you?" variant="bordered" />
              <Button variant="shadow" color="primary">
                Send
              </Button>
            </form>
          </CardFooter>
        </Card>
      </main>
    </NextUIProvider>
  );
}
