import React from "react";

const OnlyTheBestSection = () => {
  return (
    <section className="w-full h-[30rem]">
      <div className="p-28 flex-col text-center leading-8 ">
        <h2 className="font-semibold text-gray-400 text-sm">ONLY THE BEST</h2>
        <div className="bg-yellow-700 w-10 h-1 p-0 m-auto" />
        <h2 className="mt-10 text-5xl"> Fresh Ingredient, Tasty Meals</h2>
        <p className="mt-10 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nemo
          cumque a obcaecati deserunt animi repudiandae v el molestias dolorum
          alias corporis quos, aspernatur odit vitae architecto sapiente maiores
          quae. Placeat.
        </p>
        <button className="bg-yellow-600 p-2 mt-10 text-sm">VIEW ITEMS</button>
      </div>
    </section>
  );
};

export default OnlyTheBestSection;
