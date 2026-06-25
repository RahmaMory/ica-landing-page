import { useEffect } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import {
  ShieldCheck,
  RefreshCcw,
  Copyright,
  GraduationCap,
  Scale,
  Clock3,
  Mail,
  ArrowUpRight,
} from "lucide-react";

import Container from "../components/layout/Container";

type PolicyBlock = {
  title: string;
  paragraphs?: string[];
  items?: string[];
  note?: string;
};

type PolicySection = {
  id: string;
  navigationTitle: string;
  title: string;
  description: string;
  icon: LucideIcon;
  blocks: PolicyBlock[];
};

const lastUpdated = "June 24, 2026";

// غيري الإيميل ده لإيميل الأكاديمية الحقيقي
const policyEmail = "info@icaacademy.com";

const policies: PolicySection[] = [
  {
    id: "privacy",
    navigationTitle: "Privacy Policy",
    title: "Privacy Policy",
    description:
      'At Infinity Code Academy ("ICA", "we", "our", or "us"), we value your privacy and are committed to protecting your personal information.',
    icon: ShieldCheck,

    blocks: [
      {
        title: "1. Information We Collect",
        paragraphs: [
          "We may collect information that you provide while interacting with our website, services, courses, qualification tests, and educational systems.",
        ],
        items: [
          "Full name",
          "Email address",
          "Phone number",
          "Educational background",
          "Course and track preferences",
          "Payment and transaction information",
          "Attendance records",
          "Assignment and project submissions",
          "Assessment and qualification test results",
          "Technical information such as IP address, browser type, and device information",
        ],
      },

      {
        title: "2. How We Use Your Information",
        paragraphs: [
          "The information collected may be used for the following purposes:",
        ],
        items: [
          "Course registration and enrollment",
          "Student communication and support",
          "Payment processing",
          "Academic progress tracking",
          "Internal reporting and analytics",
          "Sending announcements, updates, and educational notifications",
          "Improving our services, courses, and learning systems",
        ],
      },

      {
        title: "3. Data Protection",
        paragraphs: [
          "ICA applies reasonable administrative and technical security measures to protect student information.",
        ],
        items: [
          "Unauthorized access",
          "Data loss or leaks",
          "External attacks",
          "Misuse of personal information",
        ],
      },

      {
        title: "4. Third-Party Sharing",
        paragraphs: [
          "ICA does not sell or trade personal information.",
          "Information may only be shared with trusted service providers when necessary to operate our services, process payments, deliver educational services, or comply with legal obligations.",
        ],
      },

      {
        title: "5. Communication Consent",
        paragraphs: [
          "By registering with ICA, you agree that we may contact you regarding your enrollment, courses, services, and educational updates through:",
        ],
        items: [
          "Email",
          "Phone calls",
          "WhatsApp",
          "SMS notifications",
          "Educational platform notifications",
        ],
      },

      {
        title: "6. Data Retention",
        paragraphs: [
          "Student information may be retained for as long as reasonably necessary for operational, academic, financial, and legal purposes.",
          "Certain academic records may remain stored after course completion when required for certification, reporting, or student support.",
        ],
      },

      {
        title: "7. Policy Updates",
        paragraphs: [
          "ICA may update this Privacy Policy when necessary.",
          "Any updated version will be published on this page with a revised effective date.",
        ],
      },
    ],
  },

  {
    id: "refund",
    navigationTitle: "Refund Policy",
    title: "Refund Policy",
    description:
      "Infinity Code Academy maintains a clear and fair refund policy while protecting the integrity and operational requirements of its educational programs.",
    icon: RefreshCcw,

    blocks: [
      {
        title: "1. Before the Course Starts",
        paragraphs: [
          "A student may request a full refund when both of the following conditions are met:",
        ],
        items: [
          "The refund request is submitted within 48 hours of payment",
          "The course has not officially started",
        ],
      },

      {
        title: "2. After the Course Starts",
        paragraphs: [
          "Once the course or educational program has officially started:",
        ],
        items: [
          "Refunds will generally not be issued",
          "Partial attendance does not qualify for a refund",
          "Accessing course materials may be considered participation in the course",
        ],
        note:
          "This policy remains subject to any mandatory rights provided under applicable law.",
      },

      {
        title: "3. Exceptional Circumstances",
        paragraphs: [
          "Refund requests may be reviewed individually in exceptional situations, including:",
        ],
        items: [
          "Documented medical emergencies",
          "Serious personal circumstances",
          "Technical problems caused directly by ICA systems",
        ],
        note:
          "Approval of exceptional refund requests remains subject to management review.",
      },

      {
        title: "4. Non-Refundable Cases",
        paragraphs: [
          "A refund will generally not be provided in the following situations:",
        ],
        items: [
          "The student changes their mind after the course starts",
          "The student fails to attend scheduled sessions",
          "The student does not complete required assignments",
          "The student is removed due to serious policy violations",
          "The student has already accessed a substantial part of the educational content",
        ],
      },

      {
        title: "5. Payment Processing Fees",
        paragraphs: [
          "Payment gateway charges, bank fees, transfer fees, or other non-refundable transaction costs may be deducted from the refunded amount.",
        ],
      },

      {
        title: "6. Course Cancellation or Rescheduling",
        paragraphs: [
          "ICA reserves the right to cancel, postpone, or reschedule courses when operationally necessary.",
          "When ICA cancels a course, affected students may be offered:",
        ],
        items: [
          "A full refund",
          "Transfer to another available course",
          "An alternative enrollment option",
        ],
      },
    ],
  },

  {
    id: "intellectual-property",
    navigationTitle: "Intellectual Property",
    title: "Intellectual Property Rights",
    description:
      "Educational content, systems, branding, and materials provided by Infinity Code Academy are protected by applicable intellectual property laws.",
    icon: Copyright,

    blocks: [
      {
        title: "1. ICA Content Ownership",
        paragraphs: [
          "Unless otherwise stated, ICA owns or is authorized to use the educational and digital content made available through its programs.",
        ],
        items: [
          "Course materials",
          "Educational videos",
          "PDF files",
          "Presentations and slides",
          "Assignments and exercises",
          "Internal systems",
          "Learning platforms",
          "Documentation",
          "Recorded sessions",
          "Educational frameworks and methodologies",
        ],
      },

      {
        title: "2. Usage Restrictions",
        paragraphs: [
          "Students may use ICA content for their personal educational use only.",
          "Students are prohibited from:",
        ],
        items: [
          "Copying or reproducing paid course materials",
          "Selling or reselling educational content",
          "Sharing paid materials with non-enrolled individuals",
          "Uploading private ICA materials publicly",
          "Recording sessions without written permission",
          "Distributing assignments, answers, or solutions externally",
        ],
      },

      {
        title: "3. Unauthorized Use",
        paragraphs: [
          "Unauthorized reproduction, distribution, or commercial use of ICA content may result in:",
        ],
        items: [
          "A formal warning",
          "Temporary account suspension",
          "Permanent removal from the academy",
          "Legal action when necessary",
        ],
      },

      {
        title: "4. Student Projects",
        paragraphs: [
          "Students retain ownership of the original work they create unless a separate written agreement states otherwise.",
          "By participating in an ICA program, students may grant ICA permission to display completed projects for:",
        ],
        items: [
          "Student portfolio showcases",
          "Educational demonstrations",
          "Academy presentations",
          "Marketing and promotional purposes",
        ],
        note:
          "Where practical, ICA will credit the student when publicly displaying their work. A student may contact ICA regarding reasonable privacy concerns.",
      },

      {
        title: "5. Brand Protection",
        paragraphs: [
          "The following assets may not be used for commercial, misleading, or unauthorized purposes:",
        ],
        items: [
          "ICA name",
          "ICA logo",
          "Branding elements",
          "Website assets",
          "Marketing materials",
        ],
      },
    ],
  },

  {
    id: "student-rights",
    navigationTitle: "Student Rights",
    title: "Student Rights & Responsibilities",
    description:
      "Infinity Code Academy is committed to maintaining a professional, supportive, and respectful learning environment.",
    icon: GraduationCap,

    blocks: [
      {
        title: "Student Rights",
        items: [
          "Quality Education — Receive professional educational content designed according to relevant industry standards.",
          "Instructor Support — Access instructors and mentors for guidance throughout the learning journey.",
          "Fair Evaluation — Be assessed fairly based on assignments, projects, attendance, and academic performance.",
          "Respectful Environment — Learn in an environment free from discrimination, harassment, bullying, or disrespect.",
          "Access to Resources — Receive access to materials included within the enrolled course.",
          "Technical Support — Receive reasonable assistance when facing platform or system-related issues.",
          "Clear Communication — Receive important information regarding schedules, assessments, and course requirements.",
        ],
      },

      {
        title: "Student Responsibilities",
        items: [
          "Attendance Commitment — Maintain the attendance percentage required for course completion.",
          "Assignment Submission — Submit required tasks, assignments, and projects within the announced deadlines.",
          "Professional Conduct — Respect instructors, mentors, employees, and fellow students.",
          "Academic Integrity — Complete work honestly without plagiarism, impersonation, or cheating.",
          "Responsible Platform Usage — Use ICA systems and platforms responsibly and ethically.",
          "Intellectual Property — Avoid sharing private or paid course content externally.",
          "Communication Standards — Maintain professional behavior in groups, sessions, classrooms, and support channels.",
          "Account Security — Protect account credentials and avoid sharing access with another person.",
        ],
      },

      {
        title: "Policy Violations",
        paragraphs: [
          "Depending on the nature, frequency, and severity of a violation, ICA may take one or more of the following actions:",
        ],
        items: [
          "Verbal or written warning",
          "Temporary suspension",
          "Removal from a course",
          "Certificate denial",
          "Permanent account restriction",
          "Legal action in serious cases",
        ],
      },
    ],
  },
];

const Policies = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden pb-28 pt-32 sm:pt-36">
      {/* Background glows */}
      <div className="pointer-events-none fixed left-[-250px] top-[15%] -z-10 h-[550px] w-[550px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="pointer-events-none fixed bottom-[10%] right-[-250px] -z-10 h-[550px] w-[550px] rounded-full bg-blue-500/10 blur-[180px]" />

      <Container>
        {/* Hero */}
        <motion.header
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-white/10
            bg-[#071533]/60
            px-6
            py-12
            text-center
            backdrop-blur-xl
            sm:px-10
            sm:py-16
          "
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

          <div className="relative">
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-blue-400/20
                bg-blue-500/10
                px-4
                py-2
                text-sm
                font-medium
                text-blue-300
              "
            >
              <Scale size={16} />
              ICA Legal Center
            </span>

            <h1
              className="
                mx-auto
                mt-6
                max-w-4xl
                text-4xl
                font-black
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              Policies & Student Guidelines
            </h1>

            <p
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-base
                leading-relaxed
                text-slate-400
                sm:text-lg
              "
            >
              Review the policies that govern the use of ICA
              services, educational programs, course materials,
              student participation, and personal information.
            </p>

            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
              <Clock3 size={16} />
              Last updated: {lastUpdated}
            </div>
          </div>
        </motion.header>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
          {/* Sidebar navigation */}
          <aside
            className="
              rounded-3xl
              border
              border-white/10
              bg-[#071533]/60
              p-5
              backdrop-blur-xl
              lg:sticky
              lg:top-28
            "
          >
            <p className="px-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              On this page
            </p>

            <nav className="mt-4 space-y-2">
              {policies.map((policy, index) => {
                const Icon = policy.icon;

                return (
                  <a
                    key={policy.id}
                    href={`#${policy.id}`}
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      rounded-2xl
                      px-3
                      py-3
                      text-sm
                      text-slate-400
                      transition-all
                      duration-300
                      hover:bg-blue-500/10
                      hover:text-white
                    "
                  >
                    <span
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/10
                        bg-white/5
                        text-blue-400
                        transition
                        group-hover:border-blue-400/30
                      "
                    >
                      <Icon size={17} />
                    </span>

                    <span className="flex-1">
                      {index + 1}. {policy.navigationTitle}
                    </span>

                    <ArrowUpRight
                      size={15}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </a>
                );
              })}
            </nav>
          </aside>

          {/* Policies content */}
          <div className="space-y-10">
            {policies.map((policy, policyIndex) => {
              const Icon = policy.icon;

              return (
                <motion.section
                  key={policy.id}
                  id={policy.id}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.1,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="
                    scroll-mt-32
                    rounded-[32px]
                    border
                    border-white/10
                    bg-[#071533]/50
                    p-6
                    backdrop-blur-xl
                    sm:p-8
                    lg:p-10
                  "
                >
                  {/* Policy heading */}
                  <div className="flex flex-col gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-start">
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-blue-400/20
                        bg-blue-500/10
                        text-blue-400
                      "
                    >
                      <Icon size={26} />
                    </div>

                    <div>
                      <span className="text-sm font-semibold text-blue-400">
                        Policy {policyIndex + 1}
                      </span>

                      <h2 className="mt-1 text-3xl font-bold text-white sm:text-4xl">
                        {policy.title}
                      </h2>

                      <p className="mt-4 max-w-3xl leading-relaxed text-slate-400">
                        {policy.description}
                      </p>
                    </div>
                  </div>

                  {/* Policy blocks */}
                  <div className="mt-8 space-y-10">
                    {policy.blocks.map((block) => (
                      <div key={block.title}>
                        <h3 className="text-xl font-semibold text-white">
                          {block.title}
                        </h3>

                        {block.paragraphs && (
                          <div className="mt-4 space-y-3">
                            {block.paragraphs.map((paragraph) => (
                              <p
                                key={paragraph}
                                className="leading-relaxed text-slate-400"
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        )}

                        {block.items && (
                          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                            {block.items.map((item) => (
                              <li
                                key={item}
                                className="
                                  flex
                                  items-start
                                  gap-3
                                  rounded-2xl
                                  border
                                  border-white/5
                                  bg-white/[0.025]
                                  p-4
                                  leading-relaxed
                                  text-slate-300
                                "
                              >
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />

                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {block.note && (
                          <div
                            className="
                              mt-5
                              rounded-2xl
                              border
                              border-amber-400/15
                              bg-amber-400/5
                              p-4
                              text-sm
                              leading-relaxed
                              text-amber-100/70
                            "
                          >
                            {block.note}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.section>
              );
            })}

            {/* Contact box */}
            <section
              className="
                rounded-[32px]
                border
                border-blue-400/20
                bg-blue-500/10
                p-7
                sm:p-9
              "
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Questions About Our Policies?
                  </h2>

                  <p className="mt-3 max-w-2xl leading-relaxed text-slate-400">
                    Contact the ICA team if you need clarification
                    about your personal information, payments,
                    course materials, or student responsibilities.
                  </p>
                </div>

                <a
                  href={`mailto:${policyEmail}`}
                  className="
                    flex
                    shrink-0
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    bg-blue-600
                    px-6
                    py-4
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-blue-500
                    hover:shadow-[0_0_35px_rgba(59,130,246,0.3)]
                  "
                >
                  <Mail size={18} />
                  Contact ICA
                </a>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Policies;