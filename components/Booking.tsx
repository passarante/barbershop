import React from "react";
import { Button } from "./ui/button";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;

function Booking() {
  return (
    <section className="bg-[url('/images/bg-booking.png')] bg-no-repeat bg-cover text-white pt-40 pb-24 w-full">
      <div className="px-24 flex justify-around">
        <div className="w-1/2 flex flex-col gap-6">
          <p className="text-[#FBB034]">Book Now</p>
          <h2 className="text-5xl font-bold">Book your Appointment Online.</h2>
          <p className="text-xl text-[#9A9A9A] w-2/3">
            Get 10% Discount on your first hair cut by using our website.
          </p>
          <div className="flex gap-5 mt-10">
            <Button
              variant="primary"
              size="custom"
              className="text-white text-xl"
            >
              Randevu Al
            </Button>
          </div>
        </div>
        <div className="bg-white w-80 h-72 flex flex-col justify-center items-center gap-3 rounded-md">
          <div className=" w-28 h-28 bg-gray-200 rounded-full flex justify-center items-center">
            <FontAwesomeIcon icon={faPhone} size="3x" color="#FBB034" />
          </div>
          <p className="text-gray-300 font-bold text-2xl">Call Now</p>
          <a href="tel:905376520200" className="text-black font-bold text-3xl">
            0537 652 02 00
          </a>
        </div>
      </div>
    </section>
  );
}

export default Booking;
