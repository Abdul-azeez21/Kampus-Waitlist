import React from "react";

//motion
import { motion } from "framer-motion";

//icons
import { MdOutlineDraw } from "react-icons/md";
import { HiOutlineCode } from "react-icons/hi";
import { MdOutlineEditNote } from "react-icons/md";
import { AiOutlineBarChart } from "react-icons/ai";

const TechSkills = () => {
  return (
    <div>
      <div className="grid grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-2 gap-x-5 gap-y-4 p-12">
        <motion.div
          className="py-3 px-3"
          initial={{ opacity: 0, translateY: 50, scale: 0.5 }}
          whileInView={{ opacity: 1, translateY: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0 }}
          viewport={{ once: false }}
        >
          <div className="flex justify-center items-center">
            <div>
              <div className="flex justify-center py-1">
                <MdOutlineDraw className="lg:text-4xl text-2xl text-purple-500" />
              </div>
              <div className="lg:text-lg lg:text-base text-sm text-center font-medium text-gray-700 py-1">
                Graphics & Design
              </div>
            </div>
          </div>
        </motion.div>
        {/* .. */}
        <motion.div
          className="py-3 px-3"
          initial={{ opacity: 0, translateY: 50, scale: 0.5 }}
          whileInView={{ opacity: 1, translateY: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0 }}
          viewport={{ once: false }}
        >
          <div className="flex justify-center items-center">
            <div>
              <div className="flex justify-center py-1">
                <HiOutlineCode className="lg:text-4xl text-2xl text-purple-500" />
              </div>
              <div className="lg:text-lg lg:text-base text-sm text-center font-medium text-gray-700 py-1">
                Programming & Tech
              </div>
            </div>
          </div>
        </motion.div>
        {/* .. */}
        <motion.div
          className="py-3 px-3"
          initial={{ opacity: 0, translateY: 50, scale: 0.5 }}
          whileInView={{ opacity: 1, translateY: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0 }}
          viewport={{ once: false }}
        >
          <div className="flex justify-center items-center">
            <div>
              <div className="flex justify-center py-1">
                <MdOutlineEditNote className="lg:text-4xl text-2xl text-purple-500" />
              </div>
              <div className="lg:text-lg lg:text-base text-sm text-center font-medium text-gray-700 py-1">
                Copywriting
              </div>
            </div>
          </div>
        </motion.div>
        {/* .. */}
        <motion.div
          className="py-3 px-3"
          initial={{ opacity: 0, translateY: 50, scale: 0.5 }}
          whileInView={{ opacity: 1, translateY: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0 }}
          viewport={{ once: false }}
        >
          <div className="flex justify-center items-center">
            <div>
              <div className="flex justify-center py-1">
                <AiOutlineBarChart className="lg:text-4xl text-2xl text-purple-500" />
              </div>
              <div className="lg:text-lg lg:text-base text-sm text-center font-medium text-gray-700 py-1">
                Data
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechSkills;
