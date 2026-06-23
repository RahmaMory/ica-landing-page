import {
  ArrowRight,
  Play,
  Code2,
  Database,
  Cpu,
  MonitorSmartphone,
  BrainCircuit,
} from "lucide-react";
import { motion } from "framer-motion";
const Hero = () => {
  return (
<section className="relative min-h-screen overflow-x-hidden pb-32 pt-32 lg:pt-40">   

<div className="relative mx-auto grid min-h-[90vh] max-w-400 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-12">
        {/* Left Side */}
        <div>

          
  <motion.span
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold tracking-[0.25em] text-blue-400"
>
  <span className="h-2 w-2 rounded-full bg-blue-400" />
  ICA ACADEMY
</motion.span>

          <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.8 }}
className="text-[42px] font-bold leading-[1.05] text-white sm:text-5xl md:text-7xl xl:text-8xl">
            From Your
            <br />
            First Line of
            <br />
            Code To Your
            <br />

           <span className="bg-linear-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,1)]">
  Career
  <br />
  Opportunity
</span>
          </motion.h1>

          <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5, duration: 0.8 }}
  className="mt-8 max-w-xl text-lg leading-relaxed text-slate-400"
>           Master industry-focused skills through practical
            learning, real-world projects, and mentorship
            designed to transform ambitious learners into
            professional tech talent.
</motion.p>
 
          <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.7 }}
className="mt-10 flex flex-col gap-4 sm:flex-row">

           <button
  className="
    group flex w-full sm:w-auto items-center justify-center gap-2

    rounded-xl
    bg-blue-600

    px-6 py-3 sm:px-7 sm:py-4

    text-sm sm:text-base
    font-semibold text-white

    transition-all duration-300

    hover:bg-blue-500
    hover:scale-[1.03]
    hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]
  "
>
  Start Your Journey

  <ArrowRight
    size={18}
    className="transition group-hover:translate-x-1"
  />
</button>

         <button
  className="
    group flex w-full sm:w-auto items-center justify-center gap-2

    rounded-xl
    border border-white/10

    px-6 py-3 sm:px-7 sm:py-4

    text-sm sm:text-base
    text-white

    transition-all duration-300

    hover:border-blue-500/50
    hover:bg-blue-500/10
    hover:scale-[1.02]
  "
>
  <Play size={16} className="transition group-hover:scale-110" />

  Explore Tracks
</button>

</motion.div>
          {/* Stats */}

<div className="mt-14 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 xl:grid-cols-5 lg:grid-cols-3">  
  <div className="border-s-2 border-white/10 ps-4 md:ps-6">
    <h3 className="text-xl font-bold text-cyan-400 md:text-2xl">
      500+
    </h3>
    <p className="mt-1 text-xs text-slate-500 md:text-sm">
      Students
    </p>
  </div>

  <div className="border-s-2 border-white/10 ps-4 md:ps-6">
    <h3 className="text-xl font-bold text-blue-400 md:text-2xl">
      3
    </h3>
    <p className="mt-1 text-xs text-slate-500 md:text-sm">
      Branches + Online
    </p>
  </div>


  <div className="border-s-2 border-white/10 ps-4 md:ps-6">
    <h3 className="text-xl font-bold text-violet-600 md:text-2xl">
      Industry
    </h3>
    <p className="mt-1 text-xs text-slate-500 md:text-sm">
      Mentors
    </p>
  </div>

  <div className="border-s-2 border-white/10 ps-4 md:ps-6">
    <h3 className="text-xl font-bold text-blue-400 md:text-2xl">
      Real
    </h3>
    <p className="mt-1 text-xs text-slate-500 md:text-sm">
      Projects
    </p>
  </div>

   <div className="border-s-2 border-white/10 ps-4 md:ps-6">
    <h3 className="text-xl font-bold text-blue-500 md:text-2xl">
      Career
    </h3>
    <p className="mt-1 text-xs text-slate-500 md:text-sm">
      Oriented
    </p>
  </div>

</div>
        </div>

        {/* Right Side */}

<div className="relative hidden h-175 items-center justify-center lg:flex lg:px-10">
<div className="absolute h-175 w-175 rounded-full bg-cyan-500/10 blur-[160px]" />
          {/* Outer Rings */}

<motion.div
  animate={{ rotate: 360 }}
  transition={{
    duration: 35,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute h-140 w-140 rounded-full border border-cyan-500/15"
>
  <div className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_30px_#22d3ee]" />
</motion.div>
<motion.div
  animate={{ rotate: -360 }}
  transition={{
    duration: 25,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute h-105 w-105 rounded-full border border-blue-500/15"
>
  <div className="absolute top-1/2 -right-3 h-5 w-5 -translate-y-1/2 rounded-full bg-blue-500 shadow-[0_0_25px_#3b82f6]" />
</motion.div>
<motion.div
  animate={{ rotate: 360 }}
  transition={{
    duration: 18,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute h-70 w-70 rounded-full border border-indigo-500/15"
>
  <div className="absolute bottom-0 left-1/2 h-4 w-4 -translate-x-1/2 translate-y-2 rounded-full bg-purple-400 shadow-[0_0_20px_#a855f7]" />
</motion.div>
<motion.div
  animate={{ rotate: -360 }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "linear",
  }}
>
  <div className="absolute left-1/2 -top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" />
</motion.div>
          {/* Glow Center */}

       
<div className="absolute h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />
<motion.div
  animate={{
    y: [0, -10, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute flex h-28 w-28 rotate-45 items-center justify-center rounded-[22px] border border-cyan-400/40 bg-linear-to-br from-blue-600 via-blue-500 to-indigo-600 shadow-[0_0_80px_rgba(59,130,246,0.9)]"
>
  {/* Glass Border */}
  <div className="absolute inset-2 rounded-2xl border border-white/10" />

  {/* Reflection */}
  <div className="absolute left-2 top-1 h-20 w-8 rounded-full bg-white/50 blur-md" />

  {/* Reflection 2 */}
  <div className="absolute right-3 bottom-3 h-6 w-6 rounded-full bg-white/15 blur-lg" />

  <Cpu
    size={36}
    className="-rotate-45 text-white/85"
  />
</motion.div>
          {/* Floating Cards */}

         
          <motion.div
             
  animate={{
    y: [0, -15, 0],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
  }}
    whileHover={{
    scale: 1.05,
  }}
  className="absolute  lg:top-16 lg:right-6 rotate-6  flex items-center gap-3 rounded-2xl border border-white/10 bg-[#071533] px-5 py-4 backdrop-blur-xl"
>
    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/30 bg-[#132343]">

            <MonitorSmartphone size={18} className="text-blue-400" />
            </div>
            <span className="text-white">
              Mopile Development

            </span>
          {/* </div> */}
</motion.div>
          <motion.div
             
  animate={{
    y: [0, 15, 0],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
  }}
    whileHover={{
    scale: 1.05,
  }}
className="absolute lg:left-10 lg:top-[55%] -rotate-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#071533] px-5 py-4 backdrop-blur-xl"
>
    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/30 bg-[#132343]">

            <BrainCircuit size={18} className="text-violet-300" />
            </div>
            <span className="text-white">
              AI
            </span>
          {/* </div> */}
</motion.div>
          <motion.div
             
  animate={{
    y: [0, -20, 0],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
  }}
    whileHover={{
    scale: 1.05,
  }}
  className="absolute lg:bottom-16 lg:right-10 rotate-3  flex items-center gap-3 rounded-2xl border border-white/10 bg-[#071533] px-5 py-4 backdrop-blur-xl"
>
    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/30 bg-[#132343]">

            <Database size={18} className="text-violet-400" />
            </div>
            <span className="text-white">

            Data Engineering

            </span>
          {/* </div> */}
</motion.div>

<motion.div
  animate={{
    y: [0, 18, 0],
  }}
  transition={{
    duration: 7,
    repeat: Infinity,
  }}
  whileHover={{
    scale: 1.05,
  }}
  className="absolute lg:left-16 lg:top-16 -rotate-3 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#071533]/90 px-5 py-4 backdrop-blur-xl"
>
<div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/30 bg-[#132343]">
  <Code2
    size={20}
    className="text-blue-400"
  />
</div>

  <span className="text-white">
   Web Development
  </span>
</motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;