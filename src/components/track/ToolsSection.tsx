import Container from "../layout/Container";
import { motion } from "framer-motion";
type Props = {
  tools: string[];
};

const ToolsSection = ({
  tools,
}: Props) => {
  return (
    <section className="py-24">
      <Container>

        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white">
            Tools & Technologies
          </h2>
        </div>

<div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool) => (
        <motion.span
  key={tool}
  whileHover={{
    y: -5,
    scale: 1.05,
  }}
  transition={{
    duration: 0.2,
  }}
  className="
  rounded-full
  border
  border-cyan-400/20
  bg-cyan-500/10
  px-5
  py-3
  text-cyan-300
  transition-all
  duration-300
  hover:bg-cyan-500/20
  hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]
  "
>
  {tool}
</motion.span>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default ToolsSection;