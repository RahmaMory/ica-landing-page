// import { useParams } from "react-router-dom";

// import Container from "../components/layout/Container";

// import { trackDetails } from "../data/trackDetails";

// export default function TrackDetails() {
//   const { slug } = useParams();

//   const track = trackDetails.find(
//     (item) => item.slug === slug
//   );

//   if (!track) {
//     return (
//       <div className="pt-40 text-center text-white">
//         Track Not Found
//       </div>
//     );
//   }

//   return (
//     <section className="relative py-32">

//       <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[150px]" />

//       <Container>

//         {/* Hero */}

//         <div className="mx-auto max-w-4xl text-center">

//           <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
//             {track.duration}
//           </span>

//           <h1 className="mt-8 text-5xl font-bold text-white">
//             {track.title}
//           </h1>

//           <p className="mt-4 text-2xl text-blue-400">
//             {track.subtitle}
//           </p>

//           <p className="mt-8 text-lg text-slate-400">
//             {track.target}
//           </p>
//         </div>

//         {/* Learning Style */}

//         <div className="mt-24 grid gap-5 md:grid-cols-3">

//           {track.learningStyle.map((item) => (
//             <div
//               key={item}
//               className="rounded-2xl border border-white/10 bg-[#071533]/60 p-5 text-center text-white"
//             >
//               {item}
//             </div>
//           ))}
//         </div>

//         {/* Levels */}

//         <div className="mt-32 space-y-10">

//           {track.levels.map((level) => (
//             <div
//               key={level.level}
//               className="rounded-3xl border border-white/10 bg-[#071533]/60 p-8 backdrop-blur-xl"
//             >
//               <span className="text-blue-400">
//                 {level.level}
//               </span>

//               <h2 className="mt-2 text-3xl font-bold text-white">
//                 {level.title}
//               </h2>

//               <p className="mt-4 text-slate-400">
//                 {level.description}
//               </p>

//               <div className="mt-8 grid gap-8 lg:grid-cols-2">

//                 <div>
//                   <h4 className="mb-4 font-semibold text-white">
//                     Main Topics
//                   </h4>

//                   <ul className="space-y-2">
//                     {level.topics.map((topic) => (
//                       <li
//                         key={topic}
//                         className="text-slate-400"
//                       >
//                         • {topic}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div>
//                   <h4 className="mb-4 font-semibold text-white">
//                     Outcomes
//                   </h4>

//                   <ul className="space-y-2">
//                     {level.outcomes.map((item) => (
//                       <li
//                         key={item}
//                         className="text-slate-400"
//                       >
//                         • {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

//               <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5">
//                 <h4 className="font-semibold text-white">
//                   Deliverable
//                 </h4>

//                 <p className="mt-2 text-slate-400">
//                   {level.deliverable}
//                 </p>
//               </div>

//               <button className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500">
//                 {level.cta}
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Internship */}

//         <div className="mt-32 rounded-[40px] border border-blue-500/20 bg-[#071533]/60 p-10 text-center">

//           <h2 className="text-4xl font-bold text-white">
//             {track.internshipTitle}
//           </h2>

//           <p className="mx-auto mt-6 max-w-3xl text-slate-400">
//             {track.internshipDescription}
//           </p>

//           <button className="mt-8 rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-500">
//             Ask About Internships
//           </button>

//         </div>

//       </Container>
//     </section>
//   );
// }

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
                cta={level.cta}
              />
            ))}
          </div>

        </Container>
      </section>

      <InternshipSection
        title={track.internshipTitle}
        description={track.internshipDescription}
      />

      </motion.div>
    </>
  );
}