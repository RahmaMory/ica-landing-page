import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";
import { journeySteps } from "../../data/journey";
import JourneyCard from "../ui/JourneyCard";
import { motion } from "framer-motion";

const Journey = () => {
  return (
    <section
      id="journey"
      className="relative py-32 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <Container>
        <div className="text-center">
          <SectionTitle
            badge="LEARNING JOURNEY"
            title="Your Premium Learning Path"
            description="A structured roadmap designed to take you from learning fundamentals to becoming industry-ready."
          />
        </div>

        <div className="relative mt-24">

          {/* Timeline */}
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-linear-to-r from-cyan-500 via-blue-500 to-violet-500 lg:block" />

          <div className="grid items-stretch grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">

            {journeySteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 60,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                }}
                className="relative flex flex-col items-center"
              >
                {/* Dot */}
                <div className="absolute -top-10 left-1/2 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-blue-500 bg-[#071533] shadow-[0_0_25px_rgba(34,211,238,0.8)] lg:block" />

                <JourneyCard
                  number={step.number}
                  title={step.title}
                  description={step.description}
                />
              </motion.div>
            ))}

          </div>

        </div>
      </Container>
    </section>
  );
};

export default Journey;