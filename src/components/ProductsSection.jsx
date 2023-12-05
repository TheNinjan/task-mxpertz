import React from "react";
import products from "../utils/index.js";
const ProductsSection = () => {
  return (
    <section className="w-full h-[84rem] bg-black">
      <div className=" bg-white w-[80%] h-full m-auto ">
        <div className="grid grid-cols-3">
          {products.map((product) => {
            return (
              <>
                <div key={product.id} className="w-auto text-center p-20">
                  <h2 className="text-yellow-500 text-xl">{product.price}</h2>
                  <h2 className="text-lg font-semibold"> {product.name}</h2>
                  <p className="text-sm">{product.description}</p>
                </div>
                <div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
