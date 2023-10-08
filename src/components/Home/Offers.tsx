"use client"
import Image from "next/image";
import { useState } from "react";


export const featuresList = [
    {title : "Log in" ,
     text:'Download the mobile from the apple store. Please enter your details, top register, and get our exclusive one-year special discounts membership.',
   },
    {title :  "Search for deals" ,
     text:'mobile from the apple store. Please enter your details, top register, and get our exclusive one-year special discounts membership.',
 },
    {title : "save more" ,
     text:'mobile from the apple store. Please enter your details, top register, and get our exclusive one-year special discounts membership.',
},
]

const Offers = () => {
    const tabItems = ["Log in", "Search for deals", "save more"];
    const [selectedItem, setSelectedItem] = useState<number>(0);


    
  return (
    <section className="bg-white md:my-28">
      <div className="container px-6 py-10 mx-auto flex items-center flex-col justify-start gap-6">
        <button className=" px-6 py-3 text-sm font-normal tracking-wide text-white bg-gradient-to-l from-[#912980] via-[#d68253] to-[#fcb43a] hover:scale-105 transition duration-300 transform rounded-3xl focus:outline-none ">
          How it works
        </button>
        <h1 className="text-2xl font-semibold text-gray-800 lg:text-5xl  text-center max-w-lg !leading-tight">
          Amazing online offers are waiting for you!
        </h1>
        <span className="text-gray-400 font-semibold text-base md:text-xl text-center">In 3 simples steps, you can start saving!</span>
        <p className=" text-gray-500  max-w-xl text-center">
          Our user-friendly mobile app lets you find deals and offers in-store
          and promo codes to shop online with a sophisticated geo-location
          system.
        </p>
        <Image src="/content.png" width={600} height={400} alt="content"/>
      </div>

      {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="w-11/12 mt-10   mx-auto">
            <ul role="tablist" className="max-w-screen-xl mx-auto md:border-t flex flex-col sm:flex-row items-center justify-center gap-x-10 overflow-x-auto text-sm">
                {
                    featuresList.map((item, idx) => (
                        <li key={idx} onClick={() => setSelectedItem(idx)} className={` max-sm:w-10/12 max-w-sm text-center py-2 md:border-t-2 ${selectedItem == idx ? "gradient-border text-[#912980]" : "md:border-transparent"} transition duration-300 ease-in-out`}>
                            <legend
                                role="tab"
                                aria-selected={selectedItem == idx ? true : false}
                                aria-controls={`tabpanel-${idx + 1}`}
                                className="py-2.5 px-4  duration-150 text-xl lg:text-2xl hover:text-[#912980]  font-medium"
                                
                            >
                                {item.title}
                            </legend>
                            <p className="!text-gray-600">{item.text}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    </section>
  );
};

export default Offers;
