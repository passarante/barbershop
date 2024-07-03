import About from "@/components/About";
import Booking from "@/components/Booking";
import Services from "@/components/Services";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WorkingDays from "@/components/WorkingDays";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Booking />
      <WorkingDays />
      <Services />
    </>
  );
}
