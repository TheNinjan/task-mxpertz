import React from "react";
import story from "../assets/story.png";
const OurStorySection = () => {
  return (
    <section className="bg-white w-full h-[60rem] mt-0">
      <div className="flex felx-col-2 p-20 gap-10">
        <div className="w-[50%]">
          <h1 className="text-gray-300 font-semibold">OUR STORY</h1>
          <div className="bg-yellow-700 w-12 h-1 p-0 my-1" />
          <h2 className="text-bold text-5xl mt-5">Welcome To Royal</h2>
          <p className="mt-10 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus voluptate, error nostrum sunt atque nemo est ipsum
            enim! Iusto ea blanditiis quisquam omnis dolor a expedita eos
            maiores tenetur excepturi, ratione repellendus nihil nesciunt
            ducimus? Eius ducimus sed impedit, quidem expedita dolore ab,
            voluptatum commodi architecto quos nobis, praesentium esse.
          </p>
        </div>
        <div className="w-[50%]">
          <img src={story} alt="" className="h-[45rem] -mt-5" />
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
