"use client";

import dynamic from "next/dynamic";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

const CustomCursor = dynamic(
  () => import("@/components/effects/CustomCursor"),
  { ssr: false }
);

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
