import React from "react";
import Logo from "../component/images/Logo.png";

const Header = () => {
  return (
    <div>
      <nav className="bg-white py-6 px-20 shadow-lg sticky w-full">
        <a href="/">
          <span class="self-center text-lg font-bold lg:text-3xl whitespace-nowrap dark:text-white">
            <a href="/" class="">
              <img
                src={Logo}
                alt="Kampus360"
                className="lg:w-36 md:w-36 xl:w-36 w-24 object-contain"
              />
            </a>
          </span>
        </a>
      </nav>
    </div>
  );
};

export default Header;
