import { Link } from "react-router-dom";
type Props = {
  title: string;
  points: string[];
  slug: string;
};

const LearningCard = ({
  title,
  points,
  slug,
}: Props) => {
  return (
<div className="group flex h-full flex-col rounded-3xl border border-white/10 bg-[#071533]/70 p-6 backdrop-blur-xl transition-all duration-300  hover:border-blue-400/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]">      
      {/* Title */}
      <h3 className="text-xl font-bold text-white">
        {title}
      </h3>

      {/* Points */}
      <ul className="mt-5 mb-10 space-y-3 text-sm text-slate-300">
        {points.map((point) => (
          <li key={point} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            {point}
          </li>
        ))}
      </ul>

      {/* Button */}
     <Link
  to={`/track/${slug}`}
  className="
  mt-auto
  block
  w-full
  rounded-xl
  border
  border-white/10
  py-3
  text-center
  text-sm
  font-semibold
  text-white
  transition
  hover:border-blue-400/40
  hover:bg-blue-500/10
  "
>
  Explore Track
</Link>
    </div>
  );
};

export default LearningCard;