import React, { useState } from "react";
import FaqData from "../component/FaqData";
//icon
import { HiChevronUp, HiChevronDown } from "react-icons/hi";
//motion
import { motion } from "framer-motion";

const Faq = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <div className="lg:p-10 md:p-10 p-6">
      <h1 className="font-bold text-gray-700 lg:text-2xl text-lg py-3">
        Frequently Asked Questions
      </h1>
      <div className="grid grid-cols-1 gap-y-5 flex items-center justify-center">
        {FaqData.map((item, index) => {
          return (
            <motion.div
              onClick={() => toggle(index)}
              key={index}
              className="rounded-md bg-purple-200 shadow-lg"
              initial={{ opacity: 0, translateY: 50 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1, delay: 0 }}
              viewport={{ once: true }}
            >
              <button className="flex justify-between items-center w-full py-3 px-5">
                <span className="lg:text-lg text-sm text-gray-600 font-semibold">
                  {item.question}
                </span>
                <div>
                  {clicked === index ? (
                    <HiChevronUp className="h-4 w-4 text-black" />
                  ) : (
                    <HiChevronDown className="h-4 w-4 text-black" />
                  )}
                </div>
              </button>
              {clicked === index ? (
                <div className="bg-purple-100 flex justify-between items-center w-full py-3 px-5">
                  <span className="lg:text-base text-xs text-gray-600 font-semibold">
                    {item.answer}
                  </span>
                </div>
              ) : null}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
