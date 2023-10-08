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
      <div>
        <Swiper
          initialSlide={0}
          slidesPerView={1}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          grabCursor={true}
          slideToClickedSlide={true}
          modules={[Navigation]}
          breakpoints={{
            600: {
              centeredSlides: true,
              initialSlide: 0,
              slidesPerView: 2,
              spaceBetween: 50,
            },
            900: {
              centeredSlides: true,
              initialSlide: 0,
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="w-11/12 container"
        >
          <SwiperSlide className="w-full group max-w-[20rem]">
            <Link href="">
              <Image
                src="/logo-image-2.png"
                width={200}
                height={200}
                alt="image 1"
                className="w-full rounded-lg"
              />
              <div className="mt-3 space-y-2">
                <span className="block text-indigo-600 text-sm">
                  Jan 4 2022
                </span>
                <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                  What is SaaS? Software as a Service Explained
                </h3>
                <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                  Going into this journey, I had a standard therapy regimen,
                  based on looking at the research literature. After I saw the
                  movie, I started to ask other people.
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="w-full group max-w-[20rem]">
            <Link href="">
              <Image
                src="/logo-image-2.png"
                width={200}
                height={200}
                alt="image 1"
                className="w-full rounded-lg"
              />
              <div className="mt-3 space-y-2">
                <span className="block text-indigo-600 text-sm">
                  Jan 4 2022
                </span>
                <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                  What is SaaS? Software as a Service Explained
                </h3>
                <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                  Going into this journey, I had a standard therapy regimen,
                  based on looking at the research literature. After I saw the
                  movie, I started to ask other people.
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="w-full group max-w-[20rem]">
            <Link href="">
              <Image
                src="/logo-image-2.png"
                width={200}
                height={200}
                alt="image 1"
                className="w-full rounded-lg"
              />
              <div className="mt-3 space-y-2">
                <span className="block text-indigo-600 text-sm">
                  Jan 4 2022
                </span>
                <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                  What is SaaS? Software as a Service Explained
                </h3>
                <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                  Going into this journey, I had a standard therapy regimen,
                  based on looking at the research literature. After I saw the
                  movie, I started to ask other people.
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="w-full group max-w-[20rem]">
            <Link href="">
              <Image
                src="/logo-image-2.png"
                width={200}
                height={200}
                alt="image 1"
                className="w-full rounded-lg"
              />
              <div className="mt-3 space-y-2">
                <span className="block text-indigo-600 text-sm">
                  Jan 4 2022
                </span>
                <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                  What is SaaS? Software as a Service Explained
                </h3>
                <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                  Going into this journey, I had a standard therapy regimen,
                  based on looking at the research literature. After I saw the
                  movie, I started to ask other people.
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="w-full group max-w-[20rem]">
            <Link href="">
              <Image
                src="/logo-image-2.png"
                width={200}
                height={200}
                alt="image 1"
                className="w-full rounded-lg"
              />
              <div className="mt-3 space-y-2">
                <span className="block text-indigo-600 text-sm">
                  Jan 4 2022
                </span>
                <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                  What is SaaS? Software as a Service Explained
                </h3>
                <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                  Going into this journey, I had a standard therapy regimen,
                  based on looking at the research literature. After I saw the
                  movie, I started to ask other people.
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="w-full group max-w-[20rem]">
            <Link href="">
              <Image
                src="/logo-image-2.png"
                width={200}
                height={200}
                alt="image 1"
                className="w-full rounded-lg"
              />
              <div className="mt-3 space-y-2">
                <span className="block text-indigo-600 text-sm">
                  Jan 4 2022
                </span>
                <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                  What is SaaS? Software as a Service Explained
                </h3>
                <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                  Going into this journey, I had a standard therapy regimen,
                  based on looking at the research literature. After I saw the
                  movie, I started to ask other people.
                </p>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Blog;
