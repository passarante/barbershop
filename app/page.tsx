import About from "@/components/About";
import Booking from "@/components/Booking";

import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Navbar from "@/components/Navbar";
import WorkingDays from "@/components/WorkingDays";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Booking />
      <WorkingDays />
    </>
  );
}
