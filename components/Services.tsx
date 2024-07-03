import React from "react";
import { Button } from "./ui/button";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { GiRazor, GiBeard } from "react-icons/gi";
import { HiMiniScissors } from "react-icons/hi2";
import { PiHairDryerFill } from "react-icons/pi";

import { LuArmchair } from "react-icons/lu";

import Image from "next/image";

config.autoAddCss = false;

function Services() {
  return (
    <section className="my-24">
      <div className="px-24 flex justify-around text-center">
        <div className="flex flex-col gap-6">
          <p className="text-[#FBB034]">Services</p>
          <h2 className="text-5xl font-bold mb-5">
            Popular Hair Cutting and Salon
          </h2>
          <div className="flex gap-3 justify-evenly">
            <div className="rounded-md bg-white w-36 h-36 flex-col flex justify-center items-center gap-3 text-sm">
              <HiMiniScissors size={32} />
              <span>Saç Kesimi</span>
            </div>
            <div className="rounded-md bg-white w-36 h-36 flex flex-col  justify-center items-center gap-3 text-sm">
              <GiBeard size={32} />
              <span>Sakal Tıraşı</span>
            </div>
            <div className="rounded-md bg-white w-36 h-36 flex flex-col  justify-center items-center gap-3 text-sm">
              <GiRazor size={32} />
              <span>Saç ve Sakal</span>
            </div>
            <div className="rounded-md bg-white w-36 h-36 flex flex-col  justify-center items-center gap-3 text-sm">
              <PiHairDryerFill size={32} />
              <span>Saç Şekillendirme</span>
            </div>
          </div>
          <div className="flex gap-5 justify-between mt-10">
            <Image
              src="/images/services.jpg"
              alt="booking"
              width={570}
              height={390}
            />
            <div className="text-left w-[570px] h-[390px]">
              <h2 className="text-3xl font-bold mb-5">Best Facial Hair Trim</h2>
              <p className="text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci commodi illum provident perspiciatis ratione illo
                maxime blanditiis error soluta. Deserunt exercitationem
                doloribus id laboriosam velit quas voluptate odio reprehenderit
                fugit!
              </p>
              <ul className="mt-5 text-md">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores, vel.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis.
                </li>
              </ul>
              <div className="flex gap-5 mt-10">
                <Button
                  variant="primary"
                  size="custom"
                  className="text-white text-lg"
                >
                  Randevu Al
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
