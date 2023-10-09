import Blog from "@/components/Home/Blog";
import CTA from "@/components/Home/CTA";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import Offers from "@/components/Home/Offers";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Premitto is a subscription based service",
  description:  "Premitto is an exclusive subscription based service that offers a variety of deals and discounts on premium experiences across six categories including food and beverages, beauty and wellness, entertainment,",
}

export default function Home() {
  return (
    <>
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
