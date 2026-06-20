import About from "../components/sections/About";
import Courses from "../components/sections/Courses";
import CTA from "../components/sections/CTA";
import FAQ from "../components/sections/FAQ";
import Features from "../components/sections/Features";
import Hero from "../components/sections/Hero";
import Journey from "../components/sections/Journey";
import LearningPaths from "../components/sections/LearningPaths";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
    
    <Hero/>
    <About/>
    <LearningPaths/>
    <Courses/>
    <WhyChooseUs/>
    <Journey/>
    <Features/>
    <FAQ/>
    <CTA/>
    
        
    </motion.div>
    </>
  )
}

