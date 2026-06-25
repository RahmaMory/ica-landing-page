import { motion } from "framer-motion";
import Container from "../layout/Container";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative overflow-hidden py-40">
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[180px]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative text-center"
        >
          <h2 className="mx-auto max-w-5xl text-5xl font-bold text-[#E0E0E0] md:text-6xl xl:text-7xl">
            Ready To Start Your Journey?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-400">
            Take the first step towards your tech career. Join ICA Academy and transform your future today.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#tracks"
  className="
    group flex w-full sm:w-auto items-center justify-center gap-2

    rounded-2xl
    bg-blue-600
    px-6 py-3 sm:px-8 sm:py-4

    text-sm sm:text-base
    font-semibold
    text-white

    transition-all duration-300

    hover:scale-[1.03]
    hover:bg-blue-500
    hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]
  "
>
  Choose Your Track
  <ArrowRight
    size={18}
    className="transition group-hover:translate-x-1"
  />
</a>

        <a  target="_blank" rel="noopener noreferrer" href="https://wa.me/201038862184"
  className="
    w-full sm:w-auto

    rounded-2xl
    border border-white/10

    px-6 py-3 sm:px-8 sm:py-4

    text-sm sm:text-base
    font-semibold text-white

    transition-all duration-300

    hover:border-blue-400/40
    hover:bg-blue-500/10
  "
>
  Contact Us
</a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTA;