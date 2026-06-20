import Container from "../layout/Container";
import { motion } from "framer-motion";

type Props = {
  careers: string[];
};

const CareerOutcomes = ({
  careers,
}: Props) => {
  return (
    <section className="py-24">
      <Container>

        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white">
            Career Outcomes
          </h2>

          <p className="mt-4 text-slate-400">
            Career paths available after completing this track.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {careers.map((career) => (
            <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  whileHover={{
    y: -10,
    scale: 1.03,
  }}
              key={career}
className="
group
rounded-3xl
border
border-white/10
bg-[#071533]/50
p-6
backdrop-blur-xl
transition-all
duration-300
hover:-translate-y-2
hover:border-cyan-400/40
hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
"            >
              <h3 className="font-semibold text-white">
                {career}
              </h3>
            </motion.div>
          ))}
    
        </div>

      </Container>
    </section>
  );
};

export default CareerOutcomes;