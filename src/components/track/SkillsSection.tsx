import Container from "../layout/Container";
import { motion } from "framer-motion";
type Props = {
  skills: string[];
};

const SkillsSection = ({
  skills,
}: Props) => {
  return (
    <section className="py-24">
      <Container>

        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white">
            What You'll Be Able To Do
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill, index) => (
          <motion.div
  key={skill}
  initial={{
    opacity: 0,
    y: 40,
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
    delay: index * 0.08,
  }}
  whileHover={{
    y: -8,
    scale: 1.02,
  }}
  className="
  rounded-3xl
  border
  border-white/10
  bg-[#071533]/50
  p-6
  text-slate-300
  hover:border-cyan-400/40
  hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
  transition-all
  duration-300
  "
>
  {skill}
</motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default SkillsSection;