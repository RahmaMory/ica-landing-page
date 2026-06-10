import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};
const FAQItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: Props) => {
  return (
  <div
  className="
  group
  rounded-3xl
  border
  border-white/10
  bg-[#071533]/40
  backdrop-blur-xl
  overflow-hidden
  transition-all
  duration-300
  hover:border-blue-400/40
  hover:bg-[#071533]/60
  "
>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-8 py-6 text-left"
      >
        <h3 className="text-lg font-semibold text-white">
          {question}
        </h3>

      <motion.div
  animate={{
   rotate: isOpen ? 180 : 0,
  }}
  transition={{
    duration: 0.3,
  }}
  className="
  flex h-10 w-10 items-center justify-center
  rounded-xl
  bg-blue-500/10
  text-cyan-400
  group-hover:bg-blue-500/20
  "
>
  <ChevronDown size={18} />
</motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
          >
<div className="border-t border-white/5 px-8 py-5 text-slate-400 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;