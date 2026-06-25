// import { motion } from "framer-motion";
// type Props = {
//   level: string;
//   title: string;
//   description: string;

//   topics: string[];
//   outcomes: string[];

//   deliverable: string;
//   cta: string;

//   trackTitle: string;
// };
// const LevelCard = ({
//   level,
//   title,
//   description,
//   topics,
//   outcomes,
//   deliverable,
//   cta,
//   trackTitle,
// }: Props) => {

//   const message =
//   cta.toLowerCase().includes("internship")
//     ? `Hello ICA Academy,

// I'm interested in internship opportunities in the ${trackTitle}.

// Could you please provide me with details about the requirements, application process, and available positions?

// Thank you.`
//     : `Hello ICA Academy,

// I'm interested in the ${title} (${level}) of the ${trackTitle}.

// Could you please provide me with more details about enrollment, schedule, fees, and the application process?

// Thank you.`;
//   return (
//  <motion.div
//   initial={{
//     opacity: 0,
//     y: 60,
//   }}
// whileInView={{
//   opacity: 1,
//   y: 0,
// }}

//   viewport={{
//     once: true,
//     amount: 0.2,
//   }}
 
//   whileHover={{
//     y: -8,
//     scale: 1.01,
//   }}
//   className="
//   rounded-3xl
//   border
//   border-white/10
//   bg-[#071533]/50
//   p-8
//   backdrop-blur-xl
//   transition-all
//   duration-300
//   "
// >
//       <span className="text-cyan-400">
//         {level}
//       </span>

//       <h3 className="mt-2 text-3xl font-bold text-white">
//         {title}
//       </h3>

//       <p className="mt-4 text-slate-400">
//         {description}
//       </p>

//       <div className="mt-8 grid gap-8 lg:grid-cols-2">

//         <div>
//           <h4 className="mb-4 font-semibold text-white">
//             Main Topics
//           </h4>

//           <ul className="space-y-3 text-slate-300">
//             {topics.map((topic) => (
//               <li key={topic}>• {topic}</li>
//             ))}
//           </ul>
//         </div>

//         <div>
//           <h4 className="mb-4 font-semibold text-white">
//             Outcomes
//           </h4>

//           <ul className="space-y-3 text-slate-300">
//             {outcomes.map((outcome) => (
//               <li key={outcome}>• {outcome}</li>
//             ))}
//           </ul>
//         </div>

//       </div>

//       <div className="mt-8 rounded-2xl border border-cyan-400/10 bg-cyan-500/5 p-5">
//         <h5 className="font-semibold text-cyan-300">
//           Deliverable
//         </h5>

//         <p className="mt-2 text-slate-300">
//           {deliverable}
//         </p>
//       </div>

// <a
//   href={`https://wa.me/201038862184?text=${encodeURIComponent(message)}`}
//   target="_blank"
//   rel="noopener noreferrer"
//   className="
//     mt-8 inline-block
//     rounded-xl
//     bg-blue-600
//     px-6 py-3
//     font-semibold
//     text-white
//     transition
//     hover:bg-blue-500
//   "
// >
//   {cta}
// </a>
//     </motion.div>
//   );
// };

// export default LevelCard;

import { useState } from "react";
import { motion } from "framer-motion";

import {
  MessageCircle,
  UserPlus,
} from "lucide-react";

import EnrollmentModal from "./EnrollmentModal";

type Props = {
  level: string;
  title: string;
  description: string;
  topics: string[];
  outcomes: string[];
  deliverable: string;
  trackTitle: string;
};

const LevelCard = ({
  level,
  title,
  description,
  topics,
  outcomes,
  deliverable,
  trackTitle,
}: Props) => {
  const [
    isEnrollmentOpen,
    setIsEnrollmentOpen,
  ] = useState(false);

  const inquiryMessage = `Hello ICA Academy,

 I'm interested in the ${title} (${level}) of the ${trackTitle}.
 
 Could you please provide me with more details about enrollment, schedule, fees, and the application process?

Thank you.`;

  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        whileHover={{
          y: -8,
          scale: 1.01,
        }}
        className="
          rounded-3xl
          border
          border-white/10
          bg-[#071533]/50
          p-6
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-cyan-400/20
          sm:p-8
        "
      >
        <span className="text-cyan-400">
          {level}
        </span>

        <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          {title}
        </h3>

        <p className="mt-4 leading-relaxed text-slate-400">
          {description}
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {/* Main Topics */}
          <div>
            <h4 className="mb-4 font-semibold text-white">
              Main Topics
            </h4>

            <ul className="space-y-3 text-slate-300">
              {topics.map((topic) => (
                <li
                  key={topic}
                  className="flex items-start gap-3"
                >
                  <span
                    className="
                      mt-2
                      h-1.5
                      w-1.5
                      shrink-0
                      rounded-full
                      bg-cyan-400
                    "
                  />

                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outcomes */}
          <div>
            <h4 className="mb-4 font-semibold text-white">
              Outcomes
            </h4>

            <ul className="space-y-3 text-slate-300">
              {outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-start gap-3"
                >
                  <span
                    className="
                      mt-2
                      h-1.5
                      w-1.5
                      shrink-0
                      rounded-full
                      bg-blue-400
                    "
                  />

                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Deliverable */}
        <div
          className="
            mt-8
            rounded-2xl
            border
            border-cyan-400/10
            bg-cyan-500/5
            p-5
          "
        >
          <h5 className="font-semibold text-cyan-300">
            Deliverable
          </h5>

          <p className="mt-2 leading-relaxed text-slate-300">
            {deliverable}
          </p>
        </div>

        {/* Buttons */}
        <div
          className="
            mt-8
            flex
            flex-col
            gap-3
            sm:flex-row
          "
        >
          <a
            href={`https://wa.me/201038862184?text=${encodeURIComponent(
              inquiryMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-white/10
              px-6
              py-3
              font-semibold
              text-white
              transition-all
              duration-300
              hover:border-blue-400/40
              hover:bg-blue-500/10
              sm:w-auto
            "
          >
            <MessageCircle size={18} />

            Ask About This Level
          </a>

          <button
            type="button"
            onClick={() =>
              setIsEnrollmentOpen(true)
            }
            className="
              group
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-blue-600
              px-6
              py-3
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-blue-500
              hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]
              sm:w-auto
            "
          >
            <UserPlus
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:scale-110
              "
            />

            Request Enrollment
          </button>
        </div>
      </motion.div>

      <EnrollmentModal
        isOpen={isEnrollmentOpen}
        onClose={() =>
          setIsEnrollmentOpen(false)
        }
        trackTitle={trackTitle}
        level={level}
        levelTitle={title}
      />
    </>
  );
};

export default LevelCard;