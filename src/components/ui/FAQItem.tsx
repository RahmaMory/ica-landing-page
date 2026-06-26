import {
  useEffect,
  useId,
  useState,
} from "react";

import { ChevronDown } from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

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
  const answerId = useId();

  const [isDesktop, setIsDesktop] =
    useState(() => {
      if (typeof window === "undefined") {
        return false;
      }

      return window.matchMedia(
        "(min-width: 1024px)"
      ).matches;
    });

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(min-width: 1024px)"
    );

    const handleChange = (
      event: MediaQueryListEvent
    ) => {
      setIsDesktop(event.matches);
    };

    mediaQuery.addEventListener(
      "change",
      handleChange
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleChange
      );
    };
  }, []);

  return (
    <div
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#071533]/90
        transition-all
        duration-300
        hover:border-blue-400/40
        hover:bg-[#071533]/60
        lg:bg-[#071533]/40
        lg:backdrop-blur-xl
      "
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={answerId}
        className="
          flex
          w-full
          items-center
          justify-between
          gap-5
          px-5
          py-5
          text-left
          sm:px-8
          sm:py-6
        "
      >
        <h3 className="text-base font-semibold leading-relaxed text-white sm:text-lg">
          {question}
        </h3>

        {isDesktop ? (
          <motion.div
            animate={{
              rotate: isOpen ? 180 : 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-blue-500/10
              text-cyan-400
              group-hover:bg-blue-500/20
            "
          >
            <ChevronDown size={18} />
          </motion.div>
        ) : (
          <span
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-blue-500/10
              text-cyan-400
              group-hover:bg-blue-500/20
            "
          >
            <ChevronDown
              size={18}
              className={`
                transition-transform
                duration-200
                ${
                  isOpen
                    ? "rotate-180"
                    : "rotate-0"
                }
              `}
            />
          </span>
        )}
      </button>

      {isDesktop ? (
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={answerId}
              role="region"
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
              className="overflow-hidden"
            >
              <div className="border-t border-white/5 px-8 py-5 leading-relaxed text-slate-400">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      ) : (
        isOpen && (
          <div
            id={answerId}
            role="region"
            className="
              border-t
              border-white/5
              px-5
              py-5
              leading-relaxed
              text-slate-400
              sm:px-8
            "
          >
            {answer}
          </div>
        )
      )}
    </div>
  );
};

export default FAQItem;