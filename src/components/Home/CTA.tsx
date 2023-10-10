"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { isMobile } from "../../../framer-variables";
const CTA = () => {
  return (
    <motion.div
      id="for-partner"
        initial={{ x: !isMobile ? -800 : 0, opacity: !isMobile ? 0 : 1}}
        whileInView={{ x: 0, opacity: 1}}
        viewport={{ once: true }}
        transition={{
          type: `tween`,
          ease: `easeInOut`,
          delay: 0.5,
          duration: 0.2,
        }}
         className="my-28 py-0 pt-10 mx-auto w-11/12 max-w-screen-xl flex flex-col px-2 max-sm:pt-4 sm:pl-8 sm:flex-row items-center justify-center gap-10 shadow-2xl rounded-xl bg-gradient-to-r from-[#912980] via-[#d68253] to-[#fcb43a]">
      <div className="w-full sm:w-1/2 max-w-lg">
        <h4 className="max-sm:text-2xl text-4xl text-gray-300/75 font-medium lg:text-5xl lg:leading-[3rem]">
          Enjoy the experience of shopping more and{" "}
          <span className="text-white">paying less!</span>
        </h4>
        <div className="mt-6">
          <div className=" flex items-center justify-start gap-3 mt-3 ">
            <Link href="" className=" block  hover:scale-105 transition duration-200 ease">
              <Image
                src="/app-store-white.png"
                width={100}
                height={100}
                className="w-32"
                alt="app store logo"
              />
            </Link>
            <Link href="" className=" block hover:scale-105 transition duration-200 ease">
              <Image
                src="/google-play-white.png"
                width={100}
                height={100}
                className="w-32 "
                alt="app store logo"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2">
        <Image
          src="/last-LP.png"
          className=""
          width={600}
          height={600}
          quality={100}
          alt="mobile comment"
        />
      </div>
    </motion.div>
  );
};

export default CTA;
