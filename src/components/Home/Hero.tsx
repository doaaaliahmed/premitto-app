import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="container px-6 md:py-16 mx-auto min-h-screen md:mb-28">
      <div className="items-center flex flex-col lg:flex-row lg:items-start">
        <div className="w-full lg:w-1/2 lg:max-w-xl flex-col gap-6 flex mt-20">
          <h1 className="text-3xl font-semibold text-gray-800  lg:text-5xl !leading-tight">
            Get the best deals and <br></br> offers in your favorite <br></br>{" "}
            <span className="text-transparent bg-gradient-to-l bg-clip-text  from-[#fcb43a] via-[#d68253]  to-[#912980]">
              permium stores!
            </span>
          </h1>
          <p className=" text-gray-600 dark:text-gray-400 leading-loose">
            Premitto is your best shopping ally, enjoy a whole year od
            discounts, new offers, and exclusive access to online promo codes
            for the top best products and services. Your options are endless!
          </p>
          <div className=" flex items-center justify-start gap-3 ">
            <Link href="" className=" block hover:scale-105 transition duration-200 ease">
              <Image
                src="/Mobile-app-store-badge.png"
                width={150}
                height={150}
                className="w-32 h-12 "
                alt="app store logo"
              />
            </Link>
            <Link href="" className="mt-2 block hover:scale-105 transition duration-200 ease">
              <Image
                src="/Mobile-google-play-badge.png"
                width={150}
                height={150}
                className="w-32 h-14 "
                alt="app store logo"
              />
            </Link>
          </div>
        </div>

        <div className=" flex items-start justify-end w-full lg:mt-0 lg:w-1/2 md:-mt-20 ">
          <Image
            width={500}
            height={500}
            className="md:mt-10 "
            src="/mobile comment.png"
            alt="Hero Img"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
