import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
const FooterSection = () => {
  return (
    <footer className="flex justify-around py-3 bg-gray-900 text-gray-500">
      <div>
        <h5>
          Designed by <span className="font-semibold">Niranjan Solanki</span> |
          Powered by <span className="font-semibold">React + Tailwind</span>
        </h5>
      </div>
      <div className="flex gap-3 text-md items-center">
        <FaFacebookF />
        <FaTwitter />
        <span className="text-2xl">
          <IoLogoGoogleplus />
        </span>
      </div>
    </footer>
  );
};

export default FooterSection;
