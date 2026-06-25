
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { trackDetails } from "../data/trackDetails";
import { useEffect } from "react";
import TrackHero from "../components/track/TrackHero";
import CareerOutcomes from "../components/track/CareerOutcomes";
import ToolsSection from "../components/track/ToolsSection";
import SkillsSection from "../components/track/SkillsSection";
import LevelCard from "../components/track/LevelCard";
import InternshipSection from "../components/track/InternshipSection";

import Container from "../components/layout/Container";
import AnimatedBackground from "../components/sections/track-details/AnimatedBackground";

export default function TrackDetails() {
  const { slug } = useParams();

  const track = trackDetails.find(
    (item) => item.slug === slug
  );
useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, []);
  if (!track) {
    return (
      <div className="pt-40 text-center text-white">
        Track Not Found
      </div>
    );
  }

  return (
    <>
<motion.div


  initial={{
    opacity: 0,
    x: 100,
  }}
  animate={{
    opacity: 1,
    x: 0,
  }}
  exit={{
    opacity: 0,
    x: -100,
  }}
  transition={{
    duration: 0.5,
  }}
>


  <AnimatedBackground />

 <div
  className="
  fixed
  left-[-200px]
  top-[10%]
  h-[500px]
  w-[500px]
  rounded-full
  bg-cyan-500/10
  blur-[150px]
  animate-float
  -z-10
  "
/>

<div
  className="
  fixed
  right-[-200px]
  bottom-[10%]
  h-[450px]
  w-[450px]
  rounded-full
  bg-blue-500/10
  blur-[150px]
  animate-float
  -z-10
  "
/>

   <TrackHero
  key={slug}
  duration={track.duration}
  title={track.title}
  subtitle={track.subtitle}
  target={track.target}
  learningStyle={track.learningStyle}
    formUrl={track.qualificationFormUrl}

/>

  <CareerOutcomes
  key={`career-${slug}`}
  careers={track.careerOutcomes}
/>

<ToolsSection
  key={`tools-${slug}`}
  tools={track.tools}
/>

<SkillsSection
  key={`skills-${slug}`}
  skills={track.skills}
/>

      <section className="py-24">
        <Container>

          <div className="mb-14">
            <motion.h2
  initial={{
    opacity: 0,
    y: 30,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: true,
  }}
  transition={{
    duration: 0.5,
  }}
  className="text-4xl font-bold text-white"
>
  Learning Roadmap
</motion.h2>

            <p className="mt-4 text-slate-400">
              Step-by-step journey from beginner to
              internship-ready AI Engineer.
            </p>
          </div>

          <div className="space-y-10">
            {track.levels.map((level) => (
              <LevelCard
                key={level.level}
                level={level.level}
                title={level.title}
                description={level.description}
                topics={level.topics}
                outcomes={level.outcomes}
                deliverable={level.deliverable}
               
                trackTitle={track.title}
              />
            ))}
          </div>

        </Container>
      </section>

     <InternshipSection
  title={track.internshipTitle}
  description={track.internshipDescription}
  trackTitle={track.title}
/>

      </motion.div>
    </>
  );
}