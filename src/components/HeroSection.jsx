import React from "react";
import { IoMdArrowDown } from "react-icons/io";
import hero from "../assets/hero.png";
const HeroSection = () => {
  return (
    <section className="w-full h-[30rem] relative bg-black ">
      <img
        src={hero}
        alt="hero"
        className="w-full h-[100%] object-cover opacity-50"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 ">
        <div className="flex flex-col justify-center p-28 items-center">
          <h1 className="text-5xl font-bold text-white">ONLY QUALITY FOOD</h1>
          <p className="text-lg text-white mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
            veniam quis reprehenderit nisi, repudiandae perspiciatis doloremque
            corrupti delectus est totam non cumque enim quas? Autem id
            voluptatem itaque sit possimus.
          </p>
          <div className="flex gap-5 text-white text-semibold mt-5">
            <button className="border-white border-2 p-2 text-sm">
              VIEW MENU
            </button>
            <button className="bg-yellow-600 p-2 text-sm">RESERVATION</button>
          </div>
          <IoMdArrowDown className="text-5xl mt-10 text-white" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
