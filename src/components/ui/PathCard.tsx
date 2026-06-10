type Props = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const PathCard = ({
  icon: Icon,
  title,
  description,
}: Props) => {
  return (
    <div
      className="
      group
      h-full
      rounded-3xl
      border
      border-white/10
      bg-[#071533]/60
      p-7
      backdrop-blur-xl
      transition-all
      duration-300
      
      hover:border-cyan-400/40
      "
    >
      <div
        className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        border
        border-cyan-400/20
        bg-cyan-500/10
        transition-all
        duration-300
        group-hover:border-blue-400/50
        group-hover:bg-blue-500/20
        "
      >
        <Icon
          size={26}
          className="
          text-cyan-400
          transition-all
          duration-300
          group-hover:text-blue-400
          "
        />
      </div>

      <h3 className="mt-6 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-slate-400">
        {description}
      </p>
    </div>
  );
};

export default PathCard;