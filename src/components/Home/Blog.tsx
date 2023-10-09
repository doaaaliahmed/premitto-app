"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import Image from "next/image";
import Link from "next/link";
import slide1 from "../../../public/logo-image.png";
import slide2 from "../../../public/logo-image-2.png";
import slide3 from "../../../public/logo-image-3.png";
import slide4 from "../../../public/logo-image-4.png";
import { motion } from "framer-motion";
import { itemVariant, listVariant } from "../../../framer-variables";

const Blog = () => {
  const posts = [
    {
      title: "Blog Title goes here",
      desc: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      img: slide3,
      date: "Olivia Rhye * 20 Jan 2022",
      href: "",
    },
    {
      title: "Blog Title goes here",
      desc: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      img: slide2,
      date: "Phoenix Baker * 19 Jan 2022",
      href: "",
    },
    {
      title: "Blog Title goes here",
      desc: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      img: slide1,
      date: "Alec Whitten * 17 Jan 2022",
      href: "",
    },
    {
      title: "Blog Title goes here",
      desc: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      img: slide4,
      date: "Olivia Rhye * 20 Jan 2022",
      href: "",
    },
  ];

  return (
    <section className=" bg-white md:my-28">
      <div className="mx-auto w-11/12 max-w-screen px-6 py-10 md:flex items-center justify-between">
        <div className="flex flex-col gap-6">
          <button className="w-fit px-6 py-3 text-sm font-normal tracking-wide text-white bg-gradient-to-l from-[#912980] via-[#d68253] to-[#fcb43a] hover:scale-105 transition duration-300 transform rounded-3xl focus:outline-none ">
            Our Blog
          </button>
          <h3 className="text-2xl font-semibold text-gray-800  lg:text-4xl max-w-lg !leading-tight">
            A 360<sup>o</sup> tour with the <br></br> best places for you!
          </h3>
        </div>
        <p className="mt-4 text-gray-500 text-sm w-64 leading-relaxed ">
          Discover trends and news about the best restaurants, hotels, and
          shopping places.
        </p>
      </div>
      <motion.div
        variants={listVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative w-11/12 max-w-screen	 mx-auto flex-items-center justify-center pb-4"
      >
        <div className="z-10 absolute bottom-0 left-0 w-fit flex items-center justify-center gap-4">
          <div className="grid place-items-center cursor-pointer hover:bg-gray-300 transition duration-200 ease-in review-swiper-button-prev w-14 h-14 rounded-full border-[1px] border-gray-400">
            <Image
              src="/arrow-sm-left-svgrepo-com.svg"
              width={30}
              height={30}
              alt="prev-arrow"
            />
          </div>
          <div className="grid place-items-center cursor-pointer hover:bg-gray-300 transition duration-200 ease-in review-swiper-button-next w-14 h-14 rounded-full border-[1px] border-gray-400">
            <Image
              src="/arrow-sm-right-svgrepo-com.svg"
              width={30}
              height={30}
              alt="next-arrow"
            />
          </div>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".review-swiper-button-next",
            prevEl: ".review-swiper-button-prev",
          }}
          modules={[Navigation]}
          breakpoints={{
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
            990: {
              width: 990,
              slidesPerView: 3,
            },
          }}
          className="w-full"
        >
          {posts.map((item, idx) => (
            <SwiperSlide key={idx}>
              <motion.li
                variants={itemVariant}
                whileHover={{
                  scale: 1.02,
                }}
                className="w-full mx-auto group sm:w-72 my-20 pb-4 rounded"
                key={item.title}
              >
                <Image
                  src={item.img}
                  width={200}
                  height={200}
                  alt={item.title}
                  className="w-full rounded-lg"
                />
                <div className="mt-3 space-y-2">
                  <span className="block text-[#912980] text-sm font-semibold">
                    {item.date}
                  </span>
                  <div className="flex items-center justify-between ">
                    <legend className="text-lg text-gray-800  font-bold">
                      {item.title}
                    </legend>
                    <Link
                      href={item.href}
                      className="transition duration-150 hover:scale-110 ease-in-out"
                    >
                      <Image
                        src="/arrow-up-right-svgrepo-com.svg"
                        width={20}
                        height={20}
                        alt="arrow"
                      />
                    </Link>
                  </div>

                  <p className="text-gray-500 text-sm duration-150">
                    {item.desc}
                  </p>
                </div>
              </motion.li>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Blog;
