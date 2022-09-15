import React from "react";
import Mockup from "./images/Homepage Tabview Mockup.png";

//motion
import { motion } from "framer-motion";

const Headbanner = () => {
  return (
    <div className="w-full bg-gradient-to-b from-purple-500 via-purple-300 to-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 px-10 lg:px-16 py-10 gap-x-10">
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, translateX: -50 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, delay: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <h1 className="lg:text-6xl md:text-4xl text-xl xl:text-6xl font-semibold py-3">
              Work and earn freelancing as a student in Africa.
            </h1>
            <p className="xl:text-lg lg:text-lg md:text-lg text-sm font-normal py-2">
              We are helping undergraduates on campus make money by teaching
              them tech skills and connecting them to clients who need their
              services.
            </p>
            <div className="py-8">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSftUGw5H2vYPV4KZ3cpQI27czdh6zhophHzSdmgOrgJSosbGw/viewform">
                <button className="cursor-pointer bg-purple-600 px-6 py-4 rounded-lg text-white hover:text-purple-600 lg:text-base text-sm font-semibold hover:bg-transparent hover:border-purple-600 hover:border">
                  Join Waitlist
                </button>
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="px-3 relative"
          initial={{ opacity: 0, translateX: 50 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, delay: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-purple-700 rounded-full h-24 w-24 top-0 left-0 z-0 absolute"></div>
          <div className="bg-purple-500 rounded-full h-12 w-12 bottom-0 right-0 z-0 absolute"></div>
          <img src={Mockup} alt="mockup" className="-z-50 scale-75" />
        </motion.div>
      </div>
    </div>
  );
};

export default Headbanner;
