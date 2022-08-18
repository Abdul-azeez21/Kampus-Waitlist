import React from "react";

//motion
import { motion } from "framer-motion";

//icons
import { MdSchool } from "react-icons/md";
import { RiUserSettingsLine } from "react-icons/ri";
import { HiBriefcase } from "react-icons/hi";
import { HiOutlineBadgeCheck } from "react-icons/hi";

const Features = () => {
  return (
    <div className="p-5 bg-purple-200">
      <div className="grid grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 gap-x-4 gap-y-4 p-4 lg:p-16">
        <motion.div
          className="rounded-md bg-white py-3 px-3"
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 0 }}
          viewport={{ once: false }}
        >
          <div className="rounded-full bg-purple-100 h-10 w-10 my-2 flex items-center justify-center">
            <div className="flex justify-center items-center">
              <MdSchool className="h-5 w-5 text-purple-600" />
            </div>
          </div>
          <div className="lg:text-lg text-base font-medium text-gray-500">
            Register to learn tech skills in demand.
          </div>
        </motion.div>
        {/* .. */}
        <motion.div
          className="rounded-md bg-white py-3 px-3"
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 0 }}
          viewport={{ once: false }}
        >
          <div className="rounded-full bg-red-100 h-10 w-10 my-2 flex items-center justify-center">
            <div className="flex justify-center items-center">
              <RiUserSettingsLine className="h-5 w-5 text-red-600" />
            </div>
          </div>
          <div className="lg:text-lg text-base font-medium text-gray-500">
            Offer your service and earn as a freelancer while in school.
          </div>
        </motion.div>
        {/* .. */}
        <motion.div
          className="rounded-md bg-white py-3 px-3"
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 0 }}
          viewport={{ once: false }}
        >
          <div className="rounded-full bg-blue-100 h-10 w-10 my-2 flex items-center justify-center">
            <div className="flex justify-center items-center">
              <HiBriefcase className="h-5 w-5 text-blue-600" />
            </div>
          </div>
          <div className="lg:text-lg text-base font-medium text-gray-500">
            Register as a client and hire services of undergraduate freelancers
            for your business.
          </div>
        </motion.div>
        {/* .. */}
        <motion.div
          className="rounded-md bg-white py-3 px-3"
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 0 }}
          viewport={{ once: false }}
        >
          <div className="rounded-full bg-green-100 h-10 w-10 my-2 flex items-center justify-center">
            <div className="flex justify-center items-center">
              <HiOutlineBadgeCheck className="h-5 w-5 text-green-600" />
            </div>
          </div>
          <div className="lg:text-lg text-base font-medium text-gray-500">
            Find quality service at every price point.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
