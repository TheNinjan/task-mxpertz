import React from "react";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="w-full h-16 flex justify-between p-4 bg-white">
      <div className="text-2xl font-bold">Restrorent Landing Page</div>
      <div className=" text-xl p-2">
        <ul className="flex gap-5">
          <li>
            <a className="hover:text-gray-500" href="#">
              Landing
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500" href="#">
              Gallary
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500" href="#">
              Shop
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500" href="#">
              Blog
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500" href="#">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500" href="#">
              Team
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500" href="#">
              Contact
            </a>
          </li>
          <li>
            <a href="#">
              <span className="">
                <FaShoppingCart className="text-lg hover:text-gray-500 mt-1" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
