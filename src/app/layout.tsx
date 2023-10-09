"use client";

import "./globals.css";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import { motion } from "framer-motion";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <motion.div
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
        >
          <Navbar />
          {children}
          <Footer />
        </motion.div>
      </body>
    </html>
  );
}
