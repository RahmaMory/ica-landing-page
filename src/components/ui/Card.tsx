type Props = {
  icon: React.ElementType;
  title: string;
  description: string;
  cardHover?: string;
  iconColor?: string;
  iconBg?: string;
  iconBorder?: string;
};

const Card = ({
  icon: Icon,
  title,
  description,
  cardHover = "",
  iconColor = "",
  iconBg = "",
  iconBorder = "",
}: Props) => {
  return (
    <div
  className={`group h-full rounded-3xl border border-white/10 bg-[#071533]/70 p-8 backdrop-blur-xl transition-all duration-300 ${cardHover}`}
>
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 ${iconBg} ${iconBorder}`}
      >
        <Icon
          size={26}
          className={`${iconColor} transition-all duration-300`}
        />
      </div>

      <h3 className="mt-6 text-2xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-4 leading-relaxed text-slate-400">
        {description}
      </p>
    </div>
  );
};

export default Card;