import Container from "../layout/Container";
import { motion } from "framer-motion";
type Props = {
  duration: string;
  title: string;
  subtitle: string;
  target: string;
  learningStyle: string[];
};

const TrackHero = ({
  duration,
  title,
  subtitle,
  target,
  learningStyle,
}: Props) => {
  return (
    
    <section className="relative overflow-hidden pt-40 pb-24">
        
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-center"
>
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <Container>
        <div className="text-center">

          <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
            {duration}
          </span>

        <h1
className="
mt-6
text-4xl
sm:text-5xl
lg:text-7xl
font-black
bg-gradient-to-r
from-blue-300
via-blue-500
to-violet-600
bg-clip-text
text-transparent
"
>
  {title}
</h1>

          <p className="mt-4 text-xl text-cyan-300">
            {subtitle}
          </p>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-400">
            {target}
          </p>

          <div
className="
mx-auto
mt-12
grid
max-w-5xl
gap-4
sm:grid-cols-2
lg:grid-cols-3
"
>
            {learningStyle.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-[#071533]/50 p-4 text-slate-300 backdrop-blur-xl"
              >
                {item}
              </div>
            ))}
          </div>

        </div>
      </Container>

      </motion.div>
    </section>
  );
};

export default TrackHero;