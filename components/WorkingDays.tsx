import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

function WorkingDays() {
  return (
    <section>
      <div className="px-24">
        <div className="flex mt-20">
          <Image
            src="/images/working-days.png"
            alt="man"
            width={570}
            height={390}
          />
          <div className="w-[570px] h-[390px] bg-[#FBB034] p-16">
            <h2 className="text-2xl font-bold text-white">WORKING DAYS</h2>
            <p className="mb-5">We are open on all six days in a week </p>
            <div className="flex justify-between pb-2 mb-6 border-dotted border-b-2">
              <p className="text-white font-bold">Monday</p>
              <p className="text-black font-bold">10:00 - 22:00</p>
            </div>
            <div className="flex justify-between pb-2 mb-6 border-dotted border-b-2">
              <p className="text-white font-bold">Friday</p>
              <p className="text-black font-bold">10:00 - 22:00</p>
            </div>
            <Button
              variant="outline"
              size="custom"
              className="border-black mt-4 hover:shadow-md"
            >
              <span className="text-black">Şimdi Randevu Al</span>
            </Button>
          </div>
        </div>
      </div>
      <Button
        variant="outline"
        size="custom"
        className="bg-transparent text-xl  transition-colors duration-300"
      >
        Hizmetlerimiz
      </Button>
    </section>
  );
}

export default WorkingDays;
