type Props = {
  badge?: string;
  title: string;
  description?: string;
    className?: string;
};

const SectionTitle = ({
    className = "",
  badge,
  title,
  description,
}: Props) => {
  return (
<div className={`mx-auto max-w-3xl  ${className}`}>
  <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold tracking-[0.25em] text-blue-400">
    
    <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,1)]" />

    {badge}
  </span>

  <h2 className="mt-6 text-4xl font-bold text-[#E0E0E0] md:text-5xl">
    {title}
  </h2>

  <p className="mt-6 text-lg leading-relaxed text-slate-400">
    {description}
  </p>
</div>
  );
};

export default SectionTitle;