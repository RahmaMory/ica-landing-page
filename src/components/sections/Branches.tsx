import { branches } from "../../data/branches";
import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";
import { Globe, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Branches() {
    const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

  return (
    
 <motion.section
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  variants={container}
  className="relative py-20 md:py-28 lg:py-32"
  id="braches"
>
<div className="absolute left-0 top-20 -z-10 h-[250px] w-[250px] md:h-[400px] md:w-[400px] rounded-full bg-[#102344] blur-[160px]" />
  <Container>

    <div className="max-w-3xl">
      <SectionTitle
        badge="Our Branches"
        title="Learn Tech Your Way"
        description="Study on-campus or join online from anywhere."
      />
    </div>

    <div className="mt-12 space-y-6">

      {branches.map((item, index) => (
<motion.div
  key={item.title}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{
    duration: 0.5,
    delay: index * 0.1,
  }}
  className="
    flex flex-col sm:flex-row
    gap-4 sm:gap-6
    rounded-2xl
    border border-white/10
    bg-[#071533]/60
    p-4 sm:p-6
    backdrop-blur-xl
    transition-all
    hover:scale-[1.02]
  "

  >
    {/* Icon */}
<div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/10 shrink-0">      {item.type === "online" ? (
        <Globe className="text-cyan-400" size={20} />
      ) : (
        <MapPin className="text-cyan-400" size={20} />
      )}
    </div>

    {/* Content */}
  <div className="w-full">

  <h3 className="text-base sm:text-lg font-semibold text-white">
    {item.title}
  </h3>

  <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
    {item.address}
  </p>

  <span className="mt-2 inline-block text-xs sm:text-sm text-cyan-400">
    {item.note}
  </span>

</div>
  </motion.div>
))}

    </div>

  </Container>
</motion.section>
  );
}