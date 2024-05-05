import Image from "next/image";
import { Button } from "./ui/button";

function About() {
  return (
    <section className="bg-[url('/images/bg-about.png')] bg-no-repeat bg-cover text-white w-full relative">
      <div className="px-24 py-8 flex">
        <div className="w-1/2 mt-14 flex justify-center">
          <Image src="/images/about.png" alt="about" width={500} height={465} />
        </div>
        <div className="w-1/2 flex flex-col gap-6 mt-52">
          <p className="text-[#FBB034]">About Us</p>
          <h2 className="text-5xl font-bold text-black">
            Best Hair Salon For Men
          </h2>
          <p className="text-xl text-[#9A9A9A] w-2/3">
            Let your hairdressers do their amazing job. Trim the hair to get
            your desired look. Book appointment with us for your favorite hair
            Styles!
          </p>
          <div className="flex gap-5 mt-10">
            <Button
              variant="custom"
              size="custom"
              className="text-white text-xl"
            >
              Devamını Oku
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
