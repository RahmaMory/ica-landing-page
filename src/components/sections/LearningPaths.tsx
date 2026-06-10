import SectionTitle from "../ui/SectionTitle";
import PathCard from "../ui/PathCard";
import { learningPaths } from "../../data/learningPath";
import { motion } from "framer-motion";
import Container from "../layout/Container";

const LearningPaths = () => {
  return (
   

    <section
      id="learning-paths"
      className="relative py-32"
    >

      {/* Glow */}
      <div className="absolute right-0 top-20 h-125 w-125 rounded-full bg-blue-500/10 blur-[180px]" />
 <Container>
      <div className="relative ">
<div className="text-center">

        <SectionTitle
          badge="WHO WE HELP"
          title="Learning Paths for Every Aspiring Tech Professional"
          description="Whether you're starting from scratch or advancing your career, ICA Academy has a learning path designed for you."
        />
</div>
        <div className="mt-20 grid gap-6  xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2">

       {learningPaths.map((path, index) => (
  <motion.div
    key={path.title}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.5,
      delay: index * 0.15,
    }}
  >
    <PathCard
      icon={path.icon}
      title={path.title}
      description={path.description}
    />
  </motion.div>
))}

        </div>

      </div>
      </Container>
    </section>
  

  );
};

export default LearningPaths;