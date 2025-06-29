// import Image from "next/image";
import { Dashboard } from "./components/__organism";

export default function Home() {
  return (
    <section className="w-full min-h-screen bg-green-300  min-h-[calc(100vh-72px)] md:min-h-[calc(100vh-74px)]">
      <Dashboard />
    </section>
  );
}
