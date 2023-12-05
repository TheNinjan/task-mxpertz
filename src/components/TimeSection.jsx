import React from "react";
import hero from "../assets/hero.png";
const TimeSection = () => {
  return (
    <footer className="w-full h-[50rem] relative bg-black">
      <img
        src={hero}
        alt=""
        className="w-full h-[100%] object-cover opacity-50"
      />

      <div className="absolute left-0 right-0 top-0 bottom-0">
        <div className="grid grid-cols-2 m-10 gap-10 p-20">
          <div className="bg-black opacity-70 text-center text-white w-[50%] h-[120%]">
            <h2 className="text-2xl mt-5">Hours Of Operation</h2>
            <p className="mt-5">MON-FRI</p>
            <p className="mt-5">10:00 AM - 01:00 PM</p>
            <p className="mt-2">04:00 PM - 10:30 PM</p>
            <div className="bg-yellow-700 w-full h-1 p-0 m-auto mt-5" />
            <p className="mt-3">SAT</p>
            <p className="mt-2">03:00 PM - 10:00 PM</p>
            <div className="bg-yellow-700 w-full h-1 p-0 m-auto mt-5" />
            <p className="mt-5">SUN</p>
            <p className="mt-3">We Are Close</p>
            <button className="bg-yellow-600 p-2 text-sm mt-5">
              RESERVATION
            </button>
          </div>
          <div className="bg-black opacity-70 text-center text-white w-[50%] h-[120%]">
            <h2 className="mt-5 text-2xl">Drop Us A Line</h2>
            <p className="text-sm mt-3">Don't be shy,let us know</p>
            <button className="bg-yellow-600 p-2 text-sm mt-5">
              CONTACT US
            </button>
            <h2 className="mt-10 text-2xl">OUR NEWS LATTER </h2>
            <p className="mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              consequatur voluptates nostrum. Iure cum in aspernatur saepe ipsam
              quibusdam maiores!
            </p>
            <input className="mt-2" type="text" placeholder="Name" />
            <input className="mt-2" type="text" placeholder="Email" />
            <button className="bg-yellow-600 p-0 text-sm mt-5 w-[60%]">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TimeSection;
