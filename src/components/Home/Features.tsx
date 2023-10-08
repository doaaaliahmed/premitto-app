import Image from "next/image";
import feature1 from "../../../public/Featured-icon-1.png";
import feature2 from "../../../public/Featured-icon-2.png";
import feature3 from "../../../public/Featured-icon-3.png";
import feature4 from "../../../public/Featured-icon-4.png";
import feature5 from "../../../public/Featured-icon-5.png";
import feature6 from "../../../public/Featured-icon-6.png";

const Features = () => {
  const featuresList = [
    {
      icon: feature1,
      title: "Restaurants & Cafes",
      text: "Get discounts and pffers from your favourite restaurants & cafes! Let's enjoy the best experiences for your plate.",
    },
    {
      icon: feature2,
      title: "Retial & Services",
      text: "Get discounts and pffers from your favourite restaurants & cafes! Let's enjoy the best experiences for your plate.",
    },
    {
      icon: feature3,
      title: "Beauty & Wellness",
      text: "Get discounts and pffers from your favourite restaurants & cafes! Let's enjoy the best experiences for your plate.",
    },
    {
      icon: feature4,
      title: "TRavel & Hotels",
      text: "Get discounts and pffers from your favourite restaurants & cafes! Let's enjoy the best experiences for your plate.",
    },
    {
      icon: feature5,
      title: "Entertainment",
      text: "Get discounts and pffers from your favourite restaurants & cafes! Let's enjoy the best experiences for your plate.",
    },
    {
      icon: feature6,
      title: "Online Shopping",
      text: "Get discounts and pffers from your favourite restaurants & cafes! Let's enjoy the best experiences for your plate.",
    },
  ];

  return (
    <section className="bg-white md:my-28">
      <div className="container px-6 py-10 mx-auto">
      <button className="mb-10 px-6 py-3 text-sm font-normal tracking-wide text-white bg-gradient-to-l from-[#912980] via-[#d68253] to-[#fcb43a] hover:scale-105 transition duration-300 transform rounded-3xl focus:outline-none ">
    Discover the best discounts and offers nears you
</button>
        <h1 className="text-2xl font-semibold text-gray-800  lg:text-5xl  ">
          Enjoy the art of purchasing <br></br> and saving!
        </h1>

        <p className="mt-4 text-gray-500 xl:mt-6 max-w-xl">
          Our user-friendly mobile app lets you find deals and offers in-store and promo codes to shop online with a sophisticated geo-location system.
        </p>

        <div className="my-20 items-center lg:flex">
          <div className="w-full lg:w-3/5 grid grid-cols-1 gap-8  xl:gap-16 md:grid-cols-2">
            {featuresList.map((feature) => (
              <div key={feature.title} className="space-y-3">
                <Image
                  src={feature.icon}
                  width={50}
                  height={50}
                  alt={feature.title}
                />

                <h1 className="text-xl font-medium text-gray-700 capitalize">
                  {feature.title}
                </h1>

                <p className="text-gray-500 ">{feature.text}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center w-full lg:w-2/5">
            <Image
              width={300}
              height={300}
              className=""
              src="/mockup-1.jpeg"
              alt="Hero Img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
