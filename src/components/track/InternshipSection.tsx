import Container from "../layout/Container";

type Props = {
  title: string;
  description: string;
  trackTitle: string;
};

const InternshipSection = ({
  title,
  description,
  trackTitle,
}: Props) => {

  const message = `Hello ICA Academy,

I'm interested in internship opportunities in the ${trackTitle}.

Could you please provide me with details about the requirements, application process, and available positions?

Thank you.`;

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

          <a
            href={`https://wa.me/201038862184?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-8 inline-block
              rounded-xl
              bg-blue-600
              px-8 py-3
              font-semibold
              text-white
              transition
              hover:bg-blue-500
            "
          >
            Ask About Internships
          </a>
          
        </div>
      </Container>
    </section>
  );
};

export default InternshipSection;