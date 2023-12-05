import React from "react";
// import img1 from"
const EventSection = () => {
  return (
    <section className="w-full h-[70rem] bg-gray-100">
      <div className="text-center p-20">
        <h2 className="text-gray-500 font-semibold text-sm">DON'T MISS</h2>
        <div className="bg-yellow-700 w-12 h-1 p-0 m-auto" />
        <h2 className="italic  text-2xl mt-7">Our New And Events</h2>
        <p className="mt-5 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
          adipisci quas recusandae nihil quos veritatis excepturi ut officiis
          perspiciatis dolorum veniam quisquam. Incidunt, corrupti a. Optio
          voluptatum tenetur quam dicta!
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3 m-auto  p-20 ">
        <div className="w-auto h-[35rem] bg-white text-justify">
          <img
            src="img1.png"
            alt=""
            className="w-[100%] h-[50%] object-cover"
          />
          <div className="p-5">
            <h2 className="mt-5">NumAttoto</h2>
            <h3 className=" text-xs mt-5 text-yellow-700 ">CATOGORY</h3>
            <p className="text-gray-500 text-sm mt-5">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              est odit autem temporibus officiis fuga in aspernatur animi
              placeat dolorum neque perspiciatis voluptatibus, harum voluptatum
              ea adipisci error sed."
            </p>
          </div>
        </div>
        <div className="w-auto h-[35rem] bg-white text-justify">
          <img
            src="img3.png"
            alt=""
            className="w-[100%] h-[50%] object-cover"
          />
          <div className="p-5">
            <h2 className="mt-5">Pattoto</h2>
            <h3 className=" text-xs mt-5 text-yellow-700 ">CATOGORY</h3>
            <p className="text-gray-500 text-sm mt-5">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              est odit autem temporibus officiis fuga in aspernatur animi
              placeat dolorum neque perspiciatis voluptatibus, harum voluptatum
              ea adipisci error sed."
            </p>
          </div>
        </div>
        <div className="w-auto h-[35rem] bg-white text-justify">
          <img
            src="img2.png"
            alt=""
            className="w-[100%] h-[50%] object-cover"
          />
          <div className="p-5">
            <h2 className="mt-5">Totoma</h2>
            <h3 className=" text-xs mt-5 text-yellow-700 ">CATOGORY</h3>
            <p className="text-gray-500 text-sm mt-5">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              est odit autem temporibus officiis fuga in aspernatur animi
              placeat dolorum neque perspiciatis voluptatibus, harum voluptatum
              ea adipisci error sed."
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-yellow-600 p-2 text-sm text-center text-white">
          RESERVATION
        </button>
      </div>
    </section>
  );
};

export default EventSection;
