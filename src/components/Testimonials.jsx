import React from "react";
import { FaStar } from "react-icons/fa";
const Testimonials = () => {
  return (
    <section className="w-full h-[40rem] bg-white">
      <div className="text-center p-20">
        <h2 className="text-gray-500 font-semibold text-sm">Testimonials</h2>
        <div className="bg-yellow-700 w-12 h-1 p-0 m-auto" />
        <h2 className="italic  text-2xl mt-7">What Peaople are Saying</h2>
      </div>
      <div className="grid grid-cols-4 gap-3 m-auto p-10 ">
        <div className="">
          <p className="flex gap-2">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
          </p>
          <h3 className=" text-lg mt-5">"A Fabulous food"</h3>
          <p className="text-gray-500 text-sm mt-5">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            est odit autem temporibus officiis fuga in aspernatur animi placeat
            dolorum neque perspiciatis voluptatibus, harum voluptatum ea
            adipisci error sed."
          </p>
          <p className="mt-3 text-sm font-semibold ">Bloom</p>
        </div>
        <div>
          <p className="flex gap-2">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
          </p>
          <h3 className=" text-lg mt-5">"Another successfull experience "</h3>
          <p className="text-gray-500 text-sm mt-5">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            est odit autem temporibus officiis fuga in aspernatur animi placeat
            dolorum neque perspiciatis voluptatibus, harum voluptatum ea
            adipisci error sed."
          </p>
          <p className="mt-3 text-sm font-semibold ">Extra</p>
        </div>
        <div>
          <p className="flex gap-2">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
          </p>
          <h3 className=" text-lg mt-5">"A Great Find "</h3>
          <p className="text-gray-500 text-sm mt-5">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            est odit autem temporibus officiis fuga in aspernatur animi placeat
            dolorum neque perspiciatis voluptatibus, harum voluptatum ea
            adipisci error sed."
          </p>
          <p className="mt-3 text-sm font-semibold ">Divi</p>
        </div>
        <div>
          <p className="flex gap-2">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
          </p>
          <h3 className=" text-lg mt-5">"Speechless"</h3>
          <p className="text-gray-500 text-sm mt-5">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            est odit autem temporibus officiis fuga in aspernatur animi placeat
            dolorum neque perspiciatis voluptatibus, harum voluptatum ea
            adipisci error sed."
          </p>
          <p className="mt-3 text-sm font-semibold ">Monica</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
