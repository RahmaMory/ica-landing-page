import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import { aboutFeatures } from "../../data/features";
import { motion } from "framer-motion";
import Container from "../layout/Container";

const About = () => {
  return (

      <section
      id="about"
      className="relative overflow-hidden py-32"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
 <Container>
      <div className="relative">
<div className="text-center">
        <SectionTitle
          badge="ABOUT ICA"
          title="Who We Are"
          description="ICA Academy is a technology academy designed to help students and aspiring professionals learn practical skills, gain real experience, and confidently enter the technology industry."
        />
</div>
 <div className="mt-20 grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
  {aboutFeatures.map((feature, index) => (
    <motion.div
      key={feature.title}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
      }}
    >
      <Card
        icon={feature.icon}
        title={feature.title}
        description={feature.description}
        cardHover="hover:border-blue-400/40"
        iconBg="bg-violet-600/10 group-hover:bg-blue-500/20"
        iconBorder="border border-violet-500/20 group-hover:border-blue-400/50"
        iconColor="text-violet-500 group-hover:text-blue-300"
      />
    </motion.div>
  ))}
</div>
      </div>
      </Container>
    </section>
  );
};

export default About;