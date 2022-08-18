import React from "react";

//icon
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white">
        <div className="container px-6 py-4 mx-auto">
          <div className="flex justify-center items-center">
            <div className="text-center text-gray-500 text-lg font-medium">
              Kampus360
              <a
                href="https://twitter.com/kampus360ng?s=11&t=EJQTouSXdxwuoAH9tNgnHQ"
                className="flex justify-center items-center py-2"
              >
                <FaTwitter className="lg:text-lg text-base" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
