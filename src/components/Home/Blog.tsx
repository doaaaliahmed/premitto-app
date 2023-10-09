"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <section className=" bg-white md:my-28">
      <div className="w-11/12 container px-6 py-10 md:flex items-center justify-between">
        <div className="flex flex-col gap-6">
          <button className="w-fit px-6 py-3 text-sm font-normal tracking-wide text-white bg-gradient-to-l from-[#912980] via-[#d68253] to-[#fcb43a] hover:scale-105 transition duration-300 transform rounded-3xl focus:outline-none ">
            Our Blog
          </button>
          <h1 className="text-2xl font-semibold text-gray-800  lg:text-4xl max-w-lg !leading-tight">
            A 360<sup>o</sup> tour with the <br></br> best places for you!
          </h1>
        </div>
        <p className="mt-4 text-gray-500 text-sm w-64 leading-relaxed ">
          Discover trends and news about the best restaurants, hotels, and
          shopping places.
        </p>
      </div>
      <div className="w-[90%] max-w-5xl	  mx-auto flex-items-center justify-center">
      
        <div className="review-swiper-button-prev ">
          <Image
            src="/arrow-right-svgrepo-com.svg"
            width={30}
            height={30}
            alt="prev-arrow"
          />
        </div>
        <div className="review-swiper-button-next ">
          <Image
            src="/arrow-right-svgrepo-com.svg"
            width={30}
            height={30}
            alt="next-arrow"
          />
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
            navigation={{
            nextEl: ".review-swiper-button-next",
            prevEl: ".review-swiper-button-prev",
          }}
          modules={[Pagination , Navigation]}
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
          className="!pb-[35px] w-full my-20"
        >
          {technicalDivingExamples.map((tech) => (
            <SwiperSlide
              key={tech.title}
              className=" overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white rounded shadow-sm"
            >
              <Image
                src={tech.img}
                className="object-cover w-full h-64"
                width={400}
                height={400}
                alt=""
              />
              <div className="p-5 border border-t-0  flex flex-col justify-start">
                <legend
                  aria-label="Category"
                  title="Visit the East"
                  className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  {tech.title}
                </legend>
                <TruncateString text={tech.text} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </section>
  );
};

export default Blog;
