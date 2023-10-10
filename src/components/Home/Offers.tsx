"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { itemVariant, listVariant } from "../../../framer-variables";

export const featuresList = [
  {
    title: "Log in",
    text: "Download the mobile from the apple store. Please enter your details, top register, and get our exclusive one-year special discounts membership.",
  },
  {
    title: "Search for deals",
    text: "mobile from the apple store. Please enter your details, top register, and get our exclusive one-year special discounts membership.",
  },
  {
    title: "Save more",
    text: "mobile from the apple store. Please enter your details, top register, and get our exclusive one-year special discounts membership.",
  },
];

const Offers = () => {
  const tabItems = ["Log in", "Search for deals", "Save more"];
  const [selectedItem, setSelectedItem] = useState<number>(0);

  return (
    <section id="how-it-works" className="bg-white md:my-28">
      <div className="container px-6 py-10 mx-auto flex items-center flex-col justify-start gap-6">
        <button className=" px-6 py-3 text-sm font-normal tracking-wide text-white bg-gradient-to-l from-[#912980] via-[#d68253] to-[#fcb43a] hover:scale-105 transition duration-300 transform rounded-3xl focus:outline-none ">
          How it works
        </button>
        <h3 className="text-2xl font-semibold text-gray-800 lg:text-5xl  text-center max-w-lg !leading-tight">
          Amazing online offers are waiting for you!
        </h3>
        <span className="text-gray-400 font-semibold text-base md:text-xl text-center">
          In 3 simples steps, you can start saving!
        </span>
        <p className=" text-gray-500  max-w-xl text-center">
          Log in to Premitto today and discover a uniqe way to save, with hundreds of in-store deals and offers and online promo codes to enjoy the pleasure of shopping
        </p>
        <Image src="/content.png" width={600} height={400} alt="content" />
      </div>

      {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="w-11/12 mt-10   mx-auto">
        <motion.ul
          variants={listVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          role="tablist"
          className="max-w-screen-xl mx-auto md:border-t flex flex-col sm:flex-row items-center justify-center gap-x-10 overflow-x-auto text-sm"
        >
          {featuresList.map((item, idx) => (
            <motion.li
              key={idx}
              variants={itemVariant}
              onClick={() => setSelectedItem(idx)}
              className={` max-sm:w-10/12 max-w-sm text-center py-2 md:border-t-2 ${
                selectedItem == idx
                  ? "gradient-border text-[#912980] hover:text-[#912980]"
                  : "md:border-transparent"
              } transition duration-300 ease-in-out`}
            >
              <legend
                role="tab"
                aria-selected={selectedItem == idx ? true : false}
                aria-controls={`tabpanel-${idx + 1}`}
                className="py-2.5 px-4  duration-150 text-xl lg:text-2xl   font-medium"
              >
                {item.title}
              </legend>
              <p className="">{item.text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Offers;
