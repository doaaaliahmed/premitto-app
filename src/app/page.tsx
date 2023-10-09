import Blog from "@/components/Home/Blog";
import CTA from "@/components/Home/CTA";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import Offers from "@/components/Home/Offers";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
    <title>Premitto is an exclusive subscription based service</title>
    <meta name="title" content={`Premitto is an exclusive subscription based service`} />
    <meta
      name={`description`}
      content={`Premitto is an exclusive subscription based service that offers a variety of deals and discounts on premium experiences across six categories including food and beverages, beauty and wellness, entertainment,`}
    />
</Head>
    <main className="md:px-20">
      <Hero />
      <Features />
      <Offers />
      <Blog />
      <CTA />
    </main>
    </>
  );
}
