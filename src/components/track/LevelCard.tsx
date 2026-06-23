import { motion } from "framer-motion";
type Props = {
  level: string;
  title: string;
  description: string;

  topics: string[];
  outcomes: string[];

  deliverable: string;
  cta: string;

  trackTitle: string;
};
const LevelCard = ({
  level,
  title,
  description,
  topics,
  outcomes,
  deliverable,
  cta,
  trackTitle,
}: Props) => {

  const message =
  cta.toLowerCase().includes("internship")
    ? `Hello ICA Academy,

I'm interested in internship opportunities in the ${trackTitle}.

Could you please provide me with details about the requirements, application process, and available positions?

Thank you.`
    : `Hello ICA Academy,

I'm interested in the ${title} (${level}) of the ${trackTitle}.

Could you please provide me with more details about enrollment, schedule, fees, and the application process?

Thank you.`;
  return (
 <motion.div
  initial={{
    opacity: 0,
    y: 60,
  }}
whileInView={{
  opacity: 1,
  y: 0,
}}

  viewport={{
    once: true,
    amount: 0.2,
  }}
 
  whileHover={{
    y: -8,
    scale: 1.01,
  }}
  className="
  rounded-3xl
  border
  border-white/10
  bg-[#071533]/50
  p-8
  backdrop-blur-xl
  transition-all
  duration-300
  "
>
      <span className="text-cyan-400">
        {level}
      </span>

      <h3 className="mt-2 text-3xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-4 text-slate-400">
        {description}
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">

        <div>
          <h4 className="mb-4 font-semibold text-white">
            Main Topics
          </h4>

          <ul className="space-y-3 text-slate-300">
            {topics.map((topic) => (
              <li key={topic}>• {topic}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">
            Outcomes
          </h4>

          <ul className="space-y-3 text-slate-300">
            {outcomes.map((outcome) => (
              <li key={outcome}>• {outcome}</li>
            ))}
          </ul>
        </div>

      </div>

      <div className="mt-8 rounded-2xl border border-cyan-400/10 bg-cyan-500/5 p-5">
        <h5 className="font-semibold text-cyan-300">
          Deliverable
        </h5>

        <p className="mt-2 text-slate-300">
          {deliverable}
        </p>
      </div>

<a
  href={`https://wa.me/201038862184?text=${encodeURIComponent(message)}`}
  target="_blank"
  rel="noopener noreferrer"
  className="
    mt-8 inline-block
    rounded-xl
    bg-blue-600
    px-6 py-3
    font-semibold
    text-white
    transition
    hover:bg-blue-500
  "
>
  {cta}
</a>
    </motion.div>
  );
};

export default LevelCard;