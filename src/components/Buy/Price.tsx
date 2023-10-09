"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { itemVariant, listVariant } from "../../../framer-variables";

const Price = () => {
  const checkList = [
    "Includes hundreds of offers across six categories",
    "Unlimited offer usage for the full subscription period",
    "Valid for 365 days from the date of purchase",
    "Includes offers in all the cities in Saudi Arabia",
  ];
  return (
    <section className="bg-white md:my-20">
      <div className="container px-6 py-10 mx-auto flex items-center flex-col justify-start gap-6">
        <button className=" px-6 py-3 text-sm font-normal tracking-wide text-white bg-gradient-to-l from-[#912980] via-[#d68253] to-[#fcb43a] hover:scale-105 transition duration-300 transform rounded-3xl focus:outline-none ">
          Do more and spend less
        </button>
        <h1 className="text-2xl font-semibold text-gray-800 lg:text-5xl  text-center max-w-xl !leading-tight">
          You&apos;ll wonder how you ever{" "}
          <span className="text-transparent bg-gradient-to-l bg-clip-text  from-[#fcb43a] via-[#d68253]  to-[#912980]">
            lived without it
          </span>
        </h1>

        <div className="p-4  max-w-3xl w-full">
          <div className="h-full p-6 rounded-lg border-[1px] border-gray-600 flex flex-col items-center relative overflow-hidden">
            <legend className="text-5xl text-gray-900flex items-center">
              <span className="!tracking-tighter font-medium">72 SAR</span>
              <span className="text-lg mt-4 font-normal text-gray-600">
                /month
              </span>
            </legend>
            <p className="w-11/12 text-center text-sm font-medium text-gray-600 mt-3 pb-6 !tracking-tighter border-b-[1px] border-gray-600">
              1 Year Premium membership
            </p>
            {/* <hr className="mt-6 border-[1px] border-gray-600"></hr> */}

            <motion.ul
              variants={listVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
             className="mt-10 text-left">
              {checkList.map((l, idex) => (
                <motion.li key={idex}
                whileHover={{
                  scale: 1.06,
                }}
                 variants={itemVariant} className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center border-[1px] border-gray-800 text-gray-800 rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  {l}
                </motion.li>
              ))}
            </motion.ul>
            <button className="text-center font-medium sm:px-36 mt-10 text-gray-900 bg-[#912980] border-0 py-2 px-4  focus:outline-none hover:scale-105 transition duration-200 ease rounded">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
