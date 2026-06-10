type Props = {
  number: string;
  title: string;
  description: string;
};

const JourneyCard = ({
  number,
  title,
  description,
}: Props) => {
  return (
<div className="group w-full flex flex-col h-full relative min-h-65 rounded-3xl border border-white/5 bg-[#071533]/35 p-6 backdrop-blur-3xl transition-all duration-300 hover:scale-[1.02] hover:border-violet-950">

<h2 className="text-4xl sm:text-5xl font-bold text-blue-400">
            {number}
      </h2>

      <h4 className="mt-5 text-xl font-semibold text-white">
        {title}
      </h4>

      <p className="mt-4 text-slate-400">
        {description}
      </p>
    </div>
  );
};

export default JourneyCard;