import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

function Hero() {
  return (
    <section className="bg-[url('/images/bg.png')] bg-no-repeat bg-cover text-white h-[calc(100vh-120px)] w-full relative">
      <div className="px-24">
        <div className="w-1/2 flex flex-col gap-6 mt-52">
          <p className="text-[#FBB034]">Welcome To Choppers</p>
          <h1 className="text-5xl font-bold">
            Best Hair Salon For A Professional Look
          </h1>
          <p className="text-xl text-[#9A9A9A] w-2/3">
            Choppers offers high performance customized facials to provide you
            with visible results.
          </p>
          <div className="flex gap-5 mt-10">
            <Button
              variant="custom"
              size="custom"
              className="text-white text-xl"
            >
              Randevu Al
            </Button>
            <Button
              variant="outline"
              size="custom"
              className="bg-transparent text-xl  transition-colors duration-300"
            >
              Hizmetlerimiz
            </Button>
          </div>
        </div>
        <Image
          src="/images/bg-man.png"
          alt="man"
          width={980}
          height={940}
          className="absolute right-0 bottom-0"
        />
      </div>
    </section>
  );
}

export default Hero;
