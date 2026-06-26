import {
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { motion } from "framer-motion";

import About from "../components/sections/About";
import Courses from "../components/sections/Courses";
import CTA from "../components/sections/CTA";
import FAQ from "../components/sections/FAQ";
import Features from "../components/sections/Features";
import Hero from "../components/sections/Hero";
import Journey from "../components/sections/Journey";
import LearningPaths from "../components/sections/LearningPaths";
import WhyChooseUs from "../components/sections/WhyChooseUs";

const HomeContent = () => {
  return (
    <>
      <Hero />
      <About />
      <LearningPaths />
      <Courses />
      <WhyChooseUs />
      <Journey />
      <Features />
      <FAQ />
      <CTA />

      {/* <Branches /> */}
    </>
  );
};

export default function Home() {
  const [isDesktop, setIsDesktop] =
    useState(() => {
      if (typeof window === "undefined") {
        return false;
      }

      return window.matchMedia(
        "(min-width: 1024px)"
      ).matches;
    });

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(min-width: 1024px)"
    );

    const handleChange = (
      event: MediaQueryListEvent
    ) => {
      setIsDesktop(event.matches);
    };

    mediaQuery.addEventListener(
      "change",
      handleChange
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleChange
      );
    };
  }, []);

  const content: ReactNode = <HomeContent />;

  if (!isDesktop) {
    return (
      <main className="relative">
        {content}
      </main>
    );
  }

  return (
    <motion.main
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="relative"
    >
      {content}
    </motion.main>
  );
}