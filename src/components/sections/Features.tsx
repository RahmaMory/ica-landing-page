import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import { ecosystemFeatures } from "../../data/features";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <section className="relative py-32">
<div className="absolute left-0 top-20 -z-10 h-125 w-125 rounded-full bg-[#102344] blur-[180px]" />
      <Container>
        
    <div className="max-w-3xl">
      <SectionTitle
        badge="WHY CHOOSE US"
        title="More Than Just Courses"
        description="We provide a comprehensive learning ecosystem designed to transform your career and set you up for long-term success."
      />
    </div>

    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {ecosystemFeatures.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <Card
                icon={item.icon}
                title={item.title}
                description={item.description}
                cardHover="hover:border-blue-400/40"
                iconBg="bg-cyan-500/10 group-hover:bg-blue-500/20"
                iconBorder="border border-cyan-400/20 group-hover:border-blue-400/50"
                iconColor="text-cyan-400 group-hover:text-blue-300"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;