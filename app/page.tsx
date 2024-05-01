import Booking from "@/components/Booking";

import Hero from "@/components/Hero";
import Info from "@/components/Info";
import WorkingDays from "@/components/WorkingDays";

export default function Home() {
  return (
    <main className="bg-black flex h-screen w-full items-center justify-center">
      <Hero />
      <Info />
      <Booking />
      <WorkingDays />
    </main>
  );
}
