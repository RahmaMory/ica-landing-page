import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import { whyChooseUs } from "../../data/features";
import Container from "../layout/Container";

const WhyChooseUs = () => {
  return (

  <section
    id="why"
    className="relative py-32"
  >
    {/* Glow */}
    <div className="absolute left-0 top-20 h-125 w-125 rounded-full bg-blue-500/10 blur-[180px]" />
<Container>
    <div className="relative">
      <div className="text-center">
        <SectionTitle
          badge="WHY CHOOSE US"
          title="Why Students Choose ICA"
          description="Discover what makes ICA Academy the preferred choice for aspiring technology professionals."
        />
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
       {whyChooseUs.map((item, index) => (
  <motion.div
    key={item.title}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.5,
      delay: index * 0.1,
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
    </div>
      </Container>
  </section>


  );
};

export default WhyChooseUs;