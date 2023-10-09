import Blog from "@/components/Home/Blog";
import CTA from "@/components/Home/CTA";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import Offers from "@/components/Home/Offers";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";

export default function Home() {
  return (
    <main className="md:px-20">
      <Hero />
      <Features />
      <Offers />
      <Blog />
      <CTA />
    </main>
  );
}
