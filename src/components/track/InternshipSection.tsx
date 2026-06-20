import Container from "../layout/Container";

type Props = {
  title: string;
  description: string;
};

const InternshipSection = ({
  title,
  description,
}: Props) => {
  return (
    <section className="relative py-32">

      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

      <Container>

        <div
          className="
          rounded-[40px]
          border
          border-white/10
          bg-[#071533]/50
          p-10
          text-center
          backdrop-blur-xl
          "
        >
          <h2 className="text-4xl font-bold text-white">
            {title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            {description}
          </p>

          <button
            className="
            mt-10
            rounded-xl
            bg-blue-600
            px-8
            py-4
            font-semibold
            text-white
            transition
            hover:bg-blue-500
            "
          >
            Ask About Internships
          </button>
        </div>

      </Container>
    </section>
  );
};

export default InternshipSection;