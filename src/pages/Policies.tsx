
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
  BookOpenCheck,
  Users,
  Laptop,
  TriangleAlert,
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

const lastUpdated = "June 25, 2026";

// Replace this email if the official ICA email is different.
const policyEmail = "info@icaacademy.com";

const policies: PolicySection[] = [
  {
    id: "privacy",
    navigationTitle: "Privacy & Data",
    title: "Privacy & Data Protection Policy",
    description:
      'At IO Code Academy — Input Output Code Academy ("ICA", "the Academy", "we", "our", or "us"), we respect the privacy of students, applicants, visitors, instructors, team members, and all individuals who interact with our educational services and digital platforms.',
    icon: ShieldCheck,

    blocks: [
      {
        title: "1. Purpose of This Privacy Policy",

        paragraphs: [
          "This Privacy Policy explains the general principles followed by IO Code Academy when collecting, using, processing, organizing, storing, reviewing, and protecting information provided through our website, registration forms, qualification tests, courses, learning platforms, communication channels, events, and educational services.",

          "By interacting with IO Code Academy, submitting information, enrolling in a course, using an Academy platform, communicating with our team, or participating in an educational activity, you acknowledge that certain information may be collected and used for legitimate educational, administrative, operational, communication, support, security, and quality-improvement purposes.",

          "The Academy aims to handle personal information responsibly and to limit its use to purposes reasonably connected with providing, managing, improving, and protecting its services.",
        ],
      },

      {
        title: "2. Information We May Collect",

        paragraphs: [
          "The type of information collected may vary depending on the service, program, platform, form, or communication channel used.",

          "We may collect information directly from you, automatically through technical systems, or through authorized Academy representatives and service providers.",
        ],

        items: [
          "Full name and basic identity information",
          "Email address and contact information",
          "Phone number and messaging details",
          "Age range or date-of-birth information when reasonably required",
          "Educational background and current education level",
          "Professional background and previous experience",
          "Programming, technology, and computer experience",
          "Preferred learning track, course, level, or specialization",
          "Preferred branch, attendance method, schedule, and session time",
          "Registration, application, and enrollment information",
          "Qualification test answers, results, and assessment information",
          "Attendance, participation, and session records",
          "Assignment, project, exercise, and examination submissions",
          "Academic progress, feedback, evaluation, and performance records",
          "Certificates, achievements, and completion information",
          "Payment status and transaction-related information",
          "Support requests, complaints, inquiries, and correspondence",
          "Information submitted through WhatsApp, email, phone calls, or forms",
          "Account activity and educational platform usage information",
          "Technical information such as device, browser, and general connection details",
          "Security, login, access, and system activity records",
          "Any other information voluntarily provided to the Academy",
        ],
      },

      {
        title: "3. Information Provided Through Forms",

        paragraphs: [
          "When you complete a registration form, qualification test, placement assessment, enrollment request, support form, survey, or Academy application, the information submitted may be reviewed by authorized members of the IO Code Academy team.",

          "Applicants and students are responsible for providing information that is reasonably accurate, complete, current, and not intentionally misleading.",

          "The Academy may contact an applicant or student to verify, complete, clarify, or update information when necessary for registration, scheduling, academic placement, payment confirmation, technical support, or operational purposes.",
        ],
      },

      {
        title: "4. How We May Use Information",

        paragraphs: [
          "Information may be used where reasonably necessary to provide educational services and manage the relationship between the individual and IO Code Academy.",

          "The Academy may also use information to maintain service quality, protect its systems, support students, and improve educational operations.",
        ],

        items: [
          "Processing course applications and enrollment requests",
          "Identifying applicants, students, and platform users",
          "Determining suitable course levels or learning paths",
          "Reviewing qualification and placement test results",
          "Organizing classes, groups, branches, and schedules",
          "Providing access to educational systems and course materials",
          "Communicating course information and administrative updates",
          "Responding to inquiries, complaints, and support requests",
          "Tracking academic progress and participation",
          "Reviewing assignments, assessments, projects, and attendance",
          "Managing certificates and completion requirements",
          "Confirming payments and administrative records",
          "Improving courses, platforms, learning experiences, and support systems",
          "Conducting internal reporting and operational analysis",
          "Maintaining the security and integrity of Academy systems",
          "Preventing unauthorized access, misuse, or fraudulent activity",
          "Sending educational announcements and service-related notifications",
          "Maintaining appropriate historical and academic records",
          "Supporting internal planning and resource allocation",
          "Complying with reasonable administrative or legal obligations",
        ],
      },

      {
        title: "5. Communication and Contact Consent",

        paragraphs: [
          "Individuals who provide their contact information may receive communications related to their application, enrollment, course, schedule, payment, assessment, attendance, certificate, support request, or educational participation.",

          "Communications may also include general educational updates, course announcements, branch information, event notifications, registration reminders, new learning opportunities, and relevant Academy news.",

          "The Academy may use different communication channels depending on the information provided and the nature of the communication.",
        ],

        items: [
          "Email messages",
          "Phone calls",
          "WhatsApp messages",
          "SMS notifications",
          "Educational platform notifications",
          "Website notices",
          "Group announcements",
          "Direct messages from authorized Academy representatives",
        ],

        note:
          "Individuals should ensure that the contact information provided to the Academy remains accurate and accessible.",
      },

      {
        title: "6. Data Accuracy and Student Responsibility",

        paragraphs: [
          "Students and applicants are responsible for reviewing the information they provide and for notifying the Academy when important information changes.",

          "Providing false, misleading, incomplete, unauthorized, or impersonated information may affect enrollment, communication, academic records, account access, certificate eligibility, or continued participation.",

          "The Academy may request additional confirmation when information appears inconsistent, incomplete, duplicated, inaccurate, or potentially unauthorized.",
        ],
      },

      {
        title: "7. Information Security",

        paragraphs: [
          "IO Code Academy applies reasonable administrative, organizational, and technical practices intended to reduce the risk of unauthorized access, accidental loss, misuse, alteration, inappropriate disclosure, or disruption of information.",

          "However, no website, network, communication method, storage system, online service, or digital platform can be guaranteed to remain completely free from technical failure, unauthorized activity, security incidents, or external risks.",

          "Students and users are also expected to take reasonable steps to protect their accounts, devices, passwords, messages, and personal information.",
        ],

        items: [
          "Using strong and private passwords",
          "Avoiding password sharing",
          "Keeping devices reasonably secure",
          "Logging out from shared devices",
          "Avoiding suspicious links and unauthorized software",
          "Not sharing verification codes",
          "Reporting suspicious account activity",
          "Protecting personal course accounts",
          "Avoiding public disclosure of private student information",
          "Following Academy security instructions",
        ],
      },

      {
        title: "8. Account and Credential Protection",

        paragraphs: [
          "Any account, access link, password, code, invitation, platform credential, or private course access provided by IO Code Academy is intended for the authorized user only.",

          "Students must not sell, transfer, lend, publish, distribute, or share access credentials with another individual.",

          "The Academy may temporarily restrict access when unusual activity, account sharing, unauthorized access, or a possible security concern is detected.",
        ],
      },

      {
        title: "9. Sharing and Service Providers",

        paragraphs: [
          "IO Code Academy does not sell personal information as part of its ordinary educational operations.",

          "Information may be shared with authorized instructors, mentors, administrators, technical teams, branches, payment providers, communication providers, hosting providers, platform providers, or other service providers when reasonably necessary to deliver and manage Academy services.",

          "The Academy may also disclose information where reasonably necessary to protect students, users, team members, systems, intellectual property, contractual rights, or the safety and integrity of Academy operations.",
        ],
      },

      {
        title: "10. Educational Records",

        paragraphs: [
          "The Academy may maintain educational records relating to enrollment, attendance, participation, assignments, projects, assessments, certificates, communications, and course completion.",

          "These records may be used to support student services, resolve administrative questions, verify participation, evaluate completion requirements, improve programs, and maintain reasonable operational continuity.",

          "Not all records will necessarily be stored for the same period, and the Academy may retain, archive, anonymize, update, restrict, or remove information based on operational needs and applicable requirements.",
        ],
      },

      {
        title: "11. Images, Recordings, and Educational Activities",

        paragraphs: [
          "Certain classes, workshops, events, presentations, group activities, projects, or Academy occasions may involve photography, screenshots, audio, video, or other forms of documentation.",

          "Where appropriate, the Academy may use approved educational media for internal documentation, academic demonstrations, student showcases, community updates, or promotional purposes.",

          "Students should communicate reasonable privacy concerns to the Academy team so that the matter can be reviewed appropriately.",
        ],
      },

      {
        title: "12. External Links and Platforms",

        paragraphs: [
          "Academy websites, messages, materials, or learning systems may contain links to third-party websites, platforms, tools, applications, or external services.",

          "IO Code Academy does not control every external platform and is not responsible for the independent privacy, security, availability, content, or operational practices of third-party services.",

          "Students should review the terms and privacy information of external services before submitting sensitive information or creating accounts.",
        ],
      },

      {
        title: "13. Privacy Requests and Questions",

        paragraphs: [
          "Individuals may contact the Academy regarding reasonable questions about information submitted to IO Code Academy.",

          "The Academy may need to verify the identity of the person making a request before reviewing, updating, discussing, or disclosing information.",

          "Certain information may need to remain in Academy records for operational, academic, security, financial, contractual, or administrative purposes.",
        ],
      },
    ],
  },

  {
    id: "enrollment-payment",
    navigationTitle: "Enrollment & Payment",
    title: "Enrollment, Payment & Refund Policy",

    description:
      "This policy explains the general principles related to applications, registration, enrollment, payments, transfers, cancellations, rescheduling, and refund requests at IO Code Academy.",

    icon: RefreshCcw,

    blocks: [
      {
        title: "1. Enrollment Requests",

        paragraphs: [
          "Submitting an application, qualification test, WhatsApp request, registration form, or enrollment request does not automatically guarantee a confirmed place in a course, group, branch, schedule, level, or training program.",

          "Enrollment is generally considered confirmed after the Academy completes the required administrative steps and communicates confirmation to the student through an authorized channel.",

          "Course availability may depend on capacity, instructor availability, branch availability, student level, required prerequisites, scheduling, payment status, and operational considerations.",
        ],
      },

      {
        title: "2. Student Information During Enrollment",

        paragraphs: [
          "Students are expected to provide accurate and complete enrollment information.",

          "The Academy may contact students to confirm their preferred track, level, branch, schedule, attendance method, practice session, payment method, or other relevant enrollment information.",

          "Providing inaccurate or incomplete information may delay or affect registration and group placement.",
        ],
      },

      {
        title: "3. Course Placement",

        paragraphs: [
          "Course and level placement may be based on qualification tests, previous knowledge, practical experience, educational background, interviews, assessments, available groups, or Academy recommendations.",

          "A student may be advised to begin at a different level when the Academy reasonably believes that another starting point would provide a more suitable learning experience.",

          "Placement recommendations are intended to support learning quality and do not guarantee a specific outcome, employment opportunity, internship, certificate, or professional result.",
        ],
      },

      {
        title: "4. Payment Responsibilities",

        paragraphs: [
          "Students are responsible for reviewing the communicated payment information before completing a transaction.",

          "Payments should be made through authorized methods and to accounts, representatives, or channels officially approved by IO Code Academy.",

          "The student should keep reasonable proof of payment until the Academy confirms the transaction and registration status.",
        ],

        items: [
          "Use authorized Academy payment channels",
          "Verify payment details before sending funds",
          "Retain receipts or transaction records",
          "Avoid transferring money to unauthorized individuals",
          "Report payment discrepancies promptly",
          "Confirm installment or payment arrangements",
          "Meet communicated payment responsibilities",
          "Provide accurate payment references when requested",
        ],
      },

      {
        title: "5. Fees and Program Information",

        paragraphs: [
          "Fees may vary depending on the course, level, duration, branch, attendance method, included services, resources, available offers, or program structure.",

          "The Academy may update fees, packages, offers, schedules, or program structures for future enrollments.",

          "A student should rely on the most recent written information communicated through an official Academy channel.",
        ],
      },

      {
        title: "6. Refund Requests",

        paragraphs: [
          "Refund requests may be reviewed according to the circumstances of the request, the status of the course, services already provided, materials accessed, administrative work completed, payment processing status, and any arrangements communicated during enrollment.",

          "Submitting a refund request does not automatically mean that the request will be approved.",

          "The Academy may request supporting information and may review each request individually before issuing a final response.",
        ],
      },

      {
        title: "7. General Refund Considerations",

        items: [
          "Whether the course or service has started",
          "Whether the student has accessed private materials",
          "Whether administrative processing has been completed",
          "Whether a seat was reserved in a limited-capacity group",
          "Whether sessions, support, assessments, or services were provided",
          "Whether the request relates to an Academy-controlled issue",
          "Whether the student complied with the communicated process",
          "Whether transaction or payment-provider fees apply",
          "Whether an alternative schedule or transfer is reasonably available",
          "Whether exceptional circumstances should be reviewed",
        ],
      },

      {
        title: "8. Course Transfer Requests",

        paragraphs: [
          "Students may request a transfer between groups, schedules, branches, attendance methods, levels, or programs.",

          "Transfers are subject to availability, suitability, administrative approval, academic requirements, capacity, instructor arrangements, payment status, and operational considerations.",

          "The Academy is not required to approve every requested transfer and may recommend an alternative arrangement.",
        ],
      },

      {
        title: "9. Course Changes by the Academy",

        paragraphs: [
          "IO Code Academy may update, postpone, reschedule, merge, relocate, reorganize, replace, or cancel a session, group, instructor, branch arrangement, learning method, or educational activity when reasonably necessary.",

          "Such changes may occur because of operational requirements, instructor availability, student numbers, safety concerns, technical issues, branch availability, scheduling conflicts, quality considerations, or circumstances outside the Academy's reasonable control.",

          "Where practical, the Academy will communicate material changes through an available contact channel.",
        ],
      },

      {
        title: "10. Failure to Attend",

        paragraphs: [
          "Failure to attend sessions does not automatically cancel enrollment or remove the student's payment and academic responsibilities.",

          "Students are expected to communicate absences and review available arrangements through authorized Academy channels.",

          "Repeated absence, failure to communicate, or extended inactivity may affect course participation, access, academic progress, group placement, and certificate eligibility.",
        ],
      },

      {
        title: "11. Offers and Promotional Arrangements",

        paragraphs: [
          "Promotional offers, discounts, scholarships, bundles, referral arrangements, and special packages may be subject to separate eligibility, availability, duration, and usage conditions.",

          "An offer cannot necessarily be combined with another offer unless the Academy explicitly approves the combination.",

          "The Academy may modify or discontinue future promotional arrangements without affecting already confirmed arrangements unless otherwise communicated.",
        ],
      },
    ],
  },

  {
    id: "student-rights",
    navigationTitle: "Student Rights",
    title: "Student Rights & Academy Commitments",

    description:
      "IO Code Academy aims to provide a professional, respectful, supportive, organized, and practical educational environment while maintaining appropriate academic and operational standards.",

    icon: GraduationCap,

    blocks: [
      {
        title: "1. Respectful Learning Environment",

        paragraphs: [
          "Students have the right to participate in an environment that values professionalism, dignity, reasonable fairness, respectful communication, and responsible learning.",

          "The Academy expects instructors, mentors, administrators, support team members, and students to communicate professionally and avoid inappropriate, abusive, threatening, discriminatory, or deliberately disruptive behavior.",
        ],
      },

      {
        title: "2. Access to Course Information",

        items: [
          "Reasonable information about the selected course or track",
          "General information about the learning level",
          "Communication of major schedule updates",
          "Information about assignments and assessments",
          "Access to included educational resources",
          "Information about general completion expectations",
          "Guidance regarding available support channels",
          "Clarification of major administrative requirements",
        ],
      },

      {
        title: "3. Educational Support",

        paragraphs: [
          "Students may receive educational guidance through instructors, mentors, assistants, practice sessions, support channels, learning groups, feedback, or other resources included in their program.",

          "The exact type, availability, timing, and method of support may vary by course, level, group, branch, instructor, and program structure.",

          "Support is intended to guide student learning and does not replace the student's responsibility to study, practice, attend, research, complete assignments, and develop independent problem-solving skills.",
        ],
      },

      {
        title: "4. Fair Academic Treatment",

        paragraphs: [
          "Students should be evaluated using reasonable academic considerations relevant to their program, assignments, assessments, projects, attendance, participation, and required outcomes.",

          "Feedback may differ between students because performance, submissions, progress, participation, and educational needs may differ.",

          "Academic decisions may be reviewed internally when a student raises a clear and respectful concern through the appropriate channel.",
        ],
      },

      {
        title: "5. Reasonable Technical Support",

        paragraphs: [
          "Students may request reasonable assistance when experiencing Academy-related platform, access, account, or technical issues.",

          "Students are expected to provide sufficient information about the issue and cooperate with troubleshooting instructions.",

          "The Academy cannot guarantee full support for every personal device, internet provider, operating system, unauthorized application, unsupported tool, or external service.",
        ],
      },

      {
        title: "6. Right to Raise Concerns",

        paragraphs: [
          "Students may submit questions, feedback, complaints, or concerns through authorized Academy communication channels.",

          "Concerns should be communicated clearly, respectfully, and with sufficient information to allow the Academy to review the matter.",

          "Submitting a complaint does not guarantee a particular result, but the Academy may review the matter and take action it considers reasonably appropriate.",
        ],
      },

      {
        title: "7. Privacy and Confidentiality",

        paragraphs: [
          "Students may reasonably expect personal and academic information to be handled according to the Academy's privacy and operational practices.",

          "Students must also respect the privacy of classmates, instructors, mentors, staff members, and other individuals.",

          "Private conversations, student information, contact details, screenshots, recordings, evaluations, or group content should not be publicly shared without appropriate permission.",
        ],
      },

      {
        title: "8. Accessibility and Individual Circumstances",

        paragraphs: [
          "Students may communicate relevant circumstances that could reasonably affect participation or access to learning.",

          "The Academy may review reasonable support requests according to available resources, program requirements, operational limitations, and the nature of the request.",

          "Not every requested adjustment can necessarily be provided, but requests may be considered respectfully and individually.",
        ],
      },
    ],
  },

  {
    id: "student-responsibilities",
    navigationTitle: "Student Responsibilities",
    title: "Student Responsibilities & General Conduct",

    description:
      "Every student is responsible for contributing to an organized, disciplined, respectful, safe, productive, and professional learning environment.",

    icon: Users,

    blocks: [
      {
        title: "1. General Responsibility",

        paragraphs: [
          "Students are expected to take responsibility for their learning, behavior, communication, attendance, academic work, accounts, devices, submitted information, and interactions with the Academy community.",

          "Enrollment in an IO Code Academy program requires cooperation with reasonable academic, administrative, technical, and conduct expectations.",

          "Students should act in a manner that supports their own learning and does not interfere with the learning, safety, privacy, or rights of others.",
        ],
      },

      {
        title: "2. Professional Conduct",

        items: [
          "Communicate respectfully with instructors and team members",
          "Treat classmates with dignity and professionalism",
          "Avoid aggressive, abusive, insulting, or threatening behavior",
          "Avoid unnecessary disruption during sessions",
          "Follow reasonable instructor and branch instructions",
          "Use appropriate language in Academy spaces",
          "Respect different levels of knowledge and experience",
          "Avoid humiliating, mocking, or targeting other students",
          "Participate constructively in discussions",
          "Maintain appropriate behavior in online and physical environments",
          "Respect Academy property and resources",
          "Avoid behavior that may damage the Academy's learning environment",
        ],
      },

      {
        title: "3. Discipline and Commitment",

        paragraphs: [
          "Students are expected to demonstrate reasonable commitment, consistency, punctuality, preparation, participation, and respect for the structure of the program.",

          "Progress depends on continued effort and cannot be achieved solely through registration or passive attendance.",

          "Students should organize their time, follow course announcements, complete required work, attend scheduled activities, and seek clarification when needed.",
        ],

        items: [
          "Review course announcements",
          "Attend scheduled sessions",
          "Arrive prepared",
          "Complete required assignments",
          "Participate in practical work",
          "Follow submission instructions",
          "Respect communicated deadlines",
          "Respond to important administrative messages",
          "Maintain consistent practice",
          "Notify the Academy of major attendance issues",
        ],
      },

      {
        title: "4. Respect for Academy Decisions",

        paragraphs: [
          "Students are expected to follow reasonable decisions related to course organization, group management, scheduling, branch arrangements, academic placement, assessment, instructor management, system access, safety, and conduct.",

          "A student may respectfully request clarification or review, but must not respond through disruption, threats, abuse, public harassment, misinformation, or unauthorized interference with Academy operations.",
        ],
      },

      {
        title: "5. Prohibited General Behavior",

        items: [
          "Harassment, bullying, intimidation, or threats",
          "Discriminatory or degrading behavior",
          "Deliberate disruption of sessions or groups",
          "Impersonating another student or team member",
          "Providing intentionally false information",
          "Attempting to gain unauthorized system access",
          "Sharing private information without permission",
          "Publishing misleading claims as official Academy statements",
          "Damaging Academy property or equipment",
          "Using Academy channels for unrelated spam",
          "Promoting unauthorized commercial services",
          "Repeatedly ignoring reasonable Academy instructions",
          "Encouraging others to violate Academy policies",
          "Interfering with another student's learning",
          "Using Academy spaces for unlawful or harmful activity",
        ],
      },

      {
        title: "6. Respectful Communication",

        paragraphs: [
          "Communication with the Academy should remain clear, respectful, relevant, and professional.",

          "Students should avoid excessive repeated messages, inappropriate calls, hostile language, public arguments, personal attacks, spreading unverified information, or contacting team members through inappropriate private channels.",

          "The Academy may direct a student to a specific communication channel in order to organize and document a request.",
        ],
      },

      {
        title: "7. Responsibility for Personal Belongings",

        paragraphs: [
          "Students are generally responsible for their personal devices, bags, accessories, documents, accounts, storage media, and other belongings.",

          "Students should not leave valuable items unattended and should immediately report a significant issue to an authorized Academy representative.",

          "The Academy may take reasonable steps to assist but cannot guarantee recovery or protection of personal belongings in every circumstance.",
        ],
      },

      {
        title: "8. Safety and Responsible Behavior",

        items: [
          "Follow branch and workspace safety instructions",
          "Use equipment only for its intended purpose",
          "Avoid unsafe technical experiments",
          "Do not interfere with network or electrical systems",
          "Report hazards or suspicious activity",
          "Avoid installing unauthorized software on Academy devices",
          "Follow emergency and evacuation instructions",
          "Do not bring dangerous or prohibited items",
          "Respect shared workspaces and facilities",
          "Maintain appropriate behavior during events and activities",
        ],
      },
    ],
  },

  {
    id: "attendance",
    navigationTitle: "Attendance & Discipline",
    title: "Attendance, Punctuality & Participation Policy",

    description:
      "Consistent attendance, punctuality, preparation, participation, and practice are important parts of the learning process at IO Code Academy.",

    icon: Clock3,

    blocks: [
      {
        title: "1. Attendance Expectations",

        paragraphs: [
          "Students are expected to attend scheduled sessions, workshops, assessments, practice sessions, meetings, and required educational activities.",

          "Attendance expectations may vary depending on the program, level, format, branch, instructor, and course structure.",

          "Students should monitor announcements and confirm that they understand their current schedule.",
        ],
      },

      {
        title: "2. Punctuality",

        paragraphs: [
          "Students should arrive or join on time and be ready to participate.",

          "Repeated late arrival may interrupt the session, affect the student's understanding, reduce practical participation, and negatively affect academic progress.",

          "An instructor or Academy representative may apply reasonable session-management procedures when late arrival becomes disruptive.",
        ],
      },

      {
        title: "3. Absence Communication",

        paragraphs: [
          "When possible, students should notify the Academy through an authorized channel if they expect to miss an important session, assessment, presentation, project review, or required activity.",

          "Notification of absence does not automatically remove academic requirements, guarantee a replacement session, or excuse incomplete work.",

          "Students remain responsible for reviewing missed content and following any instructions provided by the Academy.",
        ],
      },

      {
        title: "4. Repeated Absence",

        paragraphs: [
          "Repeated absence, extended inactivity, failure to communicate, or continued lack of participation may affect the student's learning experience, assessment status, project progress, access to support, course completion, or certificate eligibility.",

          "The Academy may contact the student, request clarification, recommend a different arrangement, place participation under review, or take another reasonable administrative action.",
        ],
      },

      {
        title: "5. Participation",

        items: [
          "Engaging with practical exercises",
          "Following instructor explanations",
          "Asking relevant questions",
          "Participating in appropriate discussions",
          "Completing individual work",
          "Contributing responsibly to group projects",
          "Reviewing feedback",
          "Applying corrections",
          "Practicing outside scheduled sessions",
          "Maintaining progress throughout the program",
        ],
      },

      {
        title: "6. Practice Sessions",

        paragraphs: [
          "Practice sessions are intended to reinforce learning and provide opportunities for guided application, revision, questions, exercises, project support, or additional academic interaction.",

          "Practice session schedules may be adjusted based on availability, capacity, branch arrangements, instructor availability, and operational requirements.",

          "Students should not treat practice sessions as a complete replacement for the main course sessions or independent practice.",
        ],
      },

      {
        title: "7. Missed Content",

        paragraphs: [
          "Students are responsible for reviewing missed announcements, assignments, resources, and academic requirements.",

          "The Academy may provide recordings, notes, resources, alternative guidance, or support where available, but such resources are not guaranteed for every session or activity.",

          "A missed live explanation, activity, assessment, presentation, or practical exercise may not always be repeated individually.",
        ],
      },

      {
        title: "8. Schedule Changes",

        paragraphs: [
          "Schedules may be updated when reasonably required because of instructor availability, branch conditions, operational needs, holidays, technical issues, safety concerns, group organization, or circumstances beyond the Academy's reasonable control.",

          "Students should check official communication channels and avoid relying exclusively on old screenshots, unofficial messages, or information shared by another student.",
        ],
      },
    ],
  },

  {
    id: "academic-integrity",
    navigationTitle: "Academic Integrity",
    title: "Academic Integrity & Assessment Policy",

    description:
      "IO Code Academy expects students to complete academic work honestly, responsibly, independently, and in accordance with the instructions of each course or assessment.",

    icon: BookOpenCheck,

    blocks: [
      {
        title: "1. Academic Honesty",

        paragraphs: [
          "Students must represent their own knowledge, effort, participation, identity, and work honestly.",

          "Collaboration may be permitted in some activities, but students must follow the specific instructions provided for each assignment, project, assessment, test, or exercise.",

          "When individual work is required, submitting another person's work as one's own is not acceptable.",
        ],
      },

      {
        title: "2. Examples of Academic Misconduct",

        items: [
          "Copying another student's work",
          "Submitting downloaded work without proper acknowledgment",
          "Sharing answers during an individual assessment",
          "Using unauthorized assistance",
          "Impersonating another student",
          "Allowing another person to complete an assessment",
          "Submitting the same work under misleading circumstances",
          "Falsifying project participation",
          "Manipulating attendance or completion records",
          "Using leaked assessments or private answer materials",
          "Misrepresenting external work as original work",
          "Ignoring assessment instructions",
          "Using automated tools in a prohibited or misleading manner",
          "Removing or changing authorship information",
        ],
      },

      {
        title: "3. Use of Artificial Intelligence Tools",

        paragraphs: [
          "Artificial intelligence tools may be useful for learning, explanation, research, brainstorming, debugging, revision, and productivity when used responsibly.",

          "Students must follow instructor instructions regarding whether AI-assisted work is permitted, restricted, or required for a particular task.",

          "Submitting AI-generated work without understanding it, reviewing it, testing it, or following the assignment requirements may affect evaluation and learning outcomes.",

          "Students remain responsible for the accuracy, security, originality, functionality, and appropriateness of work submitted under their name.",
        ],
      },

      {
        title: "4. Sources and Attribution",

        paragraphs: [
          "Students should acknowledge external sources, libraries, tutorials, assets, templates, datasets, code examples, images, articles, and assistance when reasonably appropriate.",

          "Using external resources does not automatically constitute misconduct, but presenting substantial external work as fully original may be considered misleading.",

          "Course-specific citation or documentation requirements should be followed.",
        ],
      },

      {
        title: "5. Assessments and Evaluation",

        paragraphs: [
          "Assessments may include quizzes, tests, exercises, assignments, projects, presentations, attendance, practical tasks, interviews, code reviews, portfolio work, participation, or other methods relevant to the program.",

          "Evaluation methods may vary by course, level, instructor, project, and learning objective.",

          "Completion of an activity does not automatically guarantee a passing result, certificate, internship, recommendation, or professional opportunity.",
        ],
      },

      {
        title: "6. Feedback and Corrections",

        paragraphs: [
          "Feedback is intended to support improvement and may identify errors, missing requirements, weak understanding, incomplete implementation, quality issues, communication issues, or areas requiring more practice.",

          "Students are expected to review feedback professionally and apply reasonable corrections.",

          "Disagreement with feedback should be discussed respectfully and with specific academic reasons.",
        ],
      },

      {
        title: "7. Project Authenticity",

        paragraphs: [
          "Students may be asked to explain their projects, demonstrate functionality, answer questions, modify code, discuss decisions, or provide evidence of their contribution.",

          "Inability to explain submitted work may lead to additional review.",

          "Group-project participants should represent their own contribution honestly and should not claim work completed entirely by others.",
        ],
      },

      {
        title: "8. Assessment Integrity",

        items: [
          "Follow assessment instructions",
          "Use only authorized tools",
          "Do not share private assessment content",
          "Do not photograph or record assessments without permission",
          "Do not distribute answers",
          "Do not communicate with unauthorized individuals during assessments",
          "Do not manipulate systems or technical controls",
          "Report significant technical problems honestly",
          "Submit work through the required method",
          "Respect assessment time and access limitations",
        ],
      },

      {
        title: "9. Review of Suspected Misconduct",

        paragraphs: [
          "When academic misconduct is suspected, the Academy may review submissions, system activity, communication, project history, assessment behavior, similarity, explanations, or other relevant information.",

          "The student may be asked to provide clarification, complete an additional review, demonstrate their work, repeat an assessment, revise a submission, or participate in an academic discussion.",

          "The Academy may take reasonable academic or administrative action based on the circumstances and seriousness of the matter.",
        ],
      },
    ],
  },

  {
    id: "intellectual-property",
    navigationTitle: "Intellectual Property",
    title: "Intellectual Property & Content Usage Policy",

    description:
      "Educational materials, branding, systems, recordings, documents, designs, and original Academy content are valuable assets that must be used responsibly and only for authorized educational purposes.",

    icon: Copyright,

    blocks: [
      {
        title: "1. Academy Content",

        paragraphs: [
          "Unless otherwise stated, content created, commissioned, licensed, organized, or provided by IO Code Academy remains the property of the Academy or its relevant rights holder.",

          "Receiving access to content does not transfer ownership of that content to the student.",

          "Students generally receive limited permission to use authorized materials for their own personal learning within the scope of the relevant program.",
        ],

        items: [
          "Course materials",
          "Recorded sessions",
          "Live-session content",
          "PDF documents",
          "Presentations and slides",
          "Assignments and exercises",
          "Assessment materials",
          "Project instructions",
          "Code examples",
          "Templates and starter files",
          "Internal documentation",
          "Learning roadmaps",
          "Educational frameworks",
          "Graphics and visual assets",
          "Platform content",
          "Website content",
          "Academy branding",
          "Instructor-created resources",
          "Private group content",
        ],
      },

      {
        title: "2. Permitted Personal Use",

        paragraphs: [
          "Students may generally access and use authorized course content for personal educational purposes connected with their enrollment.",

          "Students may create personal notes, complete exercises, build their own projects, and apply learned concepts in their professional development.",

          "Permission for personal educational use does not include permission to redistribute, resell, publicly upload, commercially exploit, or provide unauthorized access to private Academy materials.",
        ],
      },

      {
        title: "3. Restricted Content Use",

        items: [
          "Copying private materials for public distribution",
          "Selling or reselling Academy content",
          "Sharing paid materials with non-enrolled individuals",
          "Uploading recorded sessions publicly",
          "Publishing private assessment questions",
          "Distributing instructor resources without permission",
          "Removing Academy ownership notices",
          "Presenting Academy materials as personally created content",
          "Using Academy branding to misrepresent an official relationship",
          "Creating unauthorized copies of Academy platforms",
          "Sharing private access links",
          "Repackaging Academy content as another course",
          "Using private materials for unauthorized commercial training",
          "Recording live sessions without permission",
        ],
      },

      {
        title: "4. Recordings and Screenshots",

        paragraphs: [
          "Students must not record, photograph, stream, reproduce, or publicly share sessions, conversations, presentations, assessments, student information, group discussions, or private platform content without appropriate permission.",

          "Screenshots may contain personal information, private messages, student names, contact details, educational records, or confidential Academy content.",

          "Students are responsible for ensuring that any permitted recording or screenshot is used only for its approved purpose.",
        ],
      },

      {
        title: "5. Student-Created Work",

        paragraphs: [
          "Students generally retain ownership of original work they create, subject to any third-party materials, team contributions, Academy resources, separate agreements, or project-specific terms.",

          "Students must not include unauthorized copyrighted content, confidential information, illegal material, copied work, private data, or unlicensed assets in submitted projects.",

          "The Academy may request permission to display selected student projects, achievements, testimonials, presentations, or portfolios for educational, community, showcase, or promotional purposes.",
        ],
      },

      {
        title: "6. Group Projects",

        paragraphs: [
          "Ownership and contribution within a group project may involve multiple students, external resources, open-source tools, Academy materials, or other rights holders.",

          "Students should accurately identify their contributions and should not claim exclusive ownership over work created collaboratively.",

          "Project participants should respect agreed responsibilities and avoid deleting, withholding, damaging, or misusing shared project assets.",
        ],
      },

      {
        title: "7. Open-Source and Third-Party Content",

        paragraphs: [
          "Students may use open-source software, libraries, frameworks, assets, datasets, APIs, and external resources when permitted by the relevant license and project instructions.",

          "Students are responsible for reviewing relevant usage conditions and for avoiding unauthorized use of proprietary or restricted content.",

          "The Academy does not grant rights over third-party materials merely because they are referenced or used in a course.",
        ],
      },

      {
        title: "8. Academy Name and Branding",

        paragraphs: [
          "The IO Code Academy name, ICA abbreviation, logos, visual identity, designs, website assets, promotional materials, and official representations may not be used in a misleading, unauthorized, harmful, or commercial manner.",

          "Students must not create the false impression that they officially represent, manage, partner with, speak for, or operate on behalf of IO Code Academy without authorization.",
        ],

        items: [
          "IO Code Academy name",
          "ICA abbreviation",
          "Academy logos",
          "Brand colors and visual assets",
          "Official certificates",
          "Website designs",
          "Marketing materials",
          "Social media graphics",
          "Official announcements",
          "Academy presentations",
        ],
      },

      {
        title: "9. Unauthorized Distribution",

        paragraphs: [
          "Unauthorized distribution may affect the Academy, instructors, students, partners, rights holders, and the integrity of educational programs.",

          "The Academy may investigate unauthorized sharing and may restrict access, remove content, issue warnings, suspend participation, or take other reasonable action.",

          "Serious or repeated misuse may be referred for further review where appropriate.",
        ],
      },
    ],
  },

  {
    id: "digital-platforms",
    navigationTitle: "Digital Platforms",
    title: "Digital Platforms, Accounts & Communication Policy",

    description:
      "Students must use Academy accounts, groups, platforms, websites, networks, devices, communication channels, and digital resources responsibly and securely.",

    icon: Laptop,

    blocks: [
      {
        title: "1. Authorized Access",

        paragraphs: [
          "Access to Academy platforms, private groups, course resources, dashboards, repositories, cloud storage, meetings, and communication channels is provided only for authorized educational and administrative purposes.",

          "Students must not attempt to access systems, accounts, groups, files, records, or resources that have not been assigned or made available to them.",

          "Technical ability does not create permission to bypass access controls or inspect private systems.",
        ],
      },

      {
        title: "2. Account Responsibility",

        items: [
          "Keep login information private",
          "Use accurate account details",
          "Do not share private access links",
          "Do not allow another person to use your account",
          "Do not impersonate another user",
          "Report suspicious access",
          "Use Academy systems only for authorized purposes",
          "Log out from shared devices",
          "Avoid storing passwords in insecure locations",
          "Follow account-recovery instructions",
        ],
      },

      {
        title: "3. Acceptable Platform Use",

        paragraphs: [
          "Academy digital resources should be used for learning, administration, communication, assignments, projects, collaboration, support, and other approved activities.",

          "Students must not use Academy systems to distribute harmful, misleading, offensive, illegal, unauthorized, or unrelated commercial content.",

          "Usage that affects system performance, security, privacy, availability, or other users may be restricted.",
        ],
      },

      {
        title: "4. Prohibited Technical Activity",

        items: [
          "Attempting unauthorized access",
          "Testing Academy systems without permission",
          "Introducing malware or harmful code",
          "Circumventing account or platform restrictions",
          "Collecting private user information",
          "Scraping restricted content",
          "Interfering with network operation",
          "Manipulating attendance or assessment systems",
          "Attempting to expose system vulnerabilities",
          "Disrupting online sessions",
          "Using automation for unauthorized activity",
          "Sharing private system information",
          "Attempting to obtain another user's password",
        ],
      },

      {
        title: "5. Online Session Conduct",

        items: [
          "Join using an identifiable and appropriate name",
          "Keep communication relevant to the session",
          "Avoid interrupting the instructor or other students",
          "Use chat responsibly",
          "Do not share meeting links publicly",
          "Do not record without permission",
          "Avoid inappropriate backgrounds or content",
          "Follow microphone and camera instructions",
          "Protect the privacy of participants",
          "Do not invite unauthorized participants",
        ],
      },

      {
        title: "6. Academy Groups",

        paragraphs: [
          "Official or Academy-managed groups may be used for announcements, educational discussion, support, scheduling, and communication.",

          "Group membership does not authorize students to collect contact information, send unsolicited messages, advertise unrelated products, create unofficial paid services, or contact members inappropriately.",

          "The Academy may moderate, restrict, archive, reorganize, or close groups when reasonably necessary.",
        ],
      },

      {
        title: "7. Communication Records",

        paragraphs: [
          "Messages sent through Academy channels may be retained where reasonably necessary for support, administration, security, quality review, dispute resolution, or operational continuity.",

          "Students should avoid submitting unnecessary sensitive information through public or group communication channels.",

          "Important requests should be sent through the appropriate official channel rather than relying on informal discussions.",
        ],
      },

      {
        title: "8. Personal Devices and Internet Access",

        paragraphs: [
          "Students are responsible for maintaining devices and internet access reasonably suitable for their selected attendance method and technical course requirements.",

          "The Academy may provide general setup guidance but cannot guarantee compatibility with every device, operating system, configuration, network, or third-party tool.",

          "Students should back up important work and protect their local files and accounts.",
        ],
      },

      {
        title: "9. External Tools",

        paragraphs: [
          "Courses may use third-party tools, repositories, platforms, development environments, communication services, cloud services, or educational applications.",

          "Students may be required to create external accounts and comply with the relevant third-party terms.",

          "The Academy is not responsible for every independent decision, outage, restriction, policy, security practice, or service change made by an external provider.",
        ],
      },
    ],
  },

  {
    id: "general-rules",
    navigationTitle: "General Rules",
    title: "General Academy Rules & Expectations",

    description:
      "These general rules support consistency, accountability, professionalism, cooperation, safety, and the effective management of IO Code Academy programs.",

    icon: Scale,

    blocks: [
      {
        title: "1. Acceptance of General Rules",

        paragraphs: [
          "By enrolling, attending, accessing course materials, using Academy systems, or participating in Academy activities, students agree to follow the policies, instructions, standards, and reasonable operational decisions communicated by IO Code Academy.",

          "Students are responsible for reviewing available policies and asking for clarification when they do not understand an important requirement.",

          "Failure to read a policy does not automatically remove the student's responsibility to follow it.",
        ],
      },

      {
        title: "2. Good Faith and Cooperation",

        paragraphs: [
          "Students, instructors, mentors, administrators, and Academy representatives are expected to act in good faith and cooperate reasonably.",

          "The learning environment depends on honest communication, responsible behavior, respect for shared time, and willingness to resolve concerns professionally.",

          "Attempts to manipulate processes, exploit misunderstandings, misrepresent communications, or create unnecessary conflict may be reviewed as conduct concerns.",
        ],
      },

      {
        title: "3. Compliance With Instructions",

        items: [
          "Follow course and branch instructions",
          "Respect instructor session-management decisions",
          "Comply with safety procedures",
          "Use systems and equipment properly",
          "Follow assessment requirements",
          "Respect deadlines and submission methods",
          "Use authorized communication channels",
          "Provide requested administrative information",
          "Avoid unauthorized activities",
          "Cooperate with reasonable internal reviews",
        ],
      },

      {
        title: "4. No Guarantee of Individual Results",

        paragraphs: [
          "IO Code Academy provides educational content, practical activities, guidance, feedback, support, and learning opportunities.",

          "Individual results depend on many factors including attendance, effort, practice, previous knowledge, consistency, performance, communication, personal circumstances, market conditions, and completion of requirements.",

          "Enrollment does not guarantee employment, freelancing income, internship placement, promotion, certification, a specific academic result, or acceptance by another organization.",
        ],
      },

      {
        title: "5. Internship and Career Opportunities",

        paragraphs: [
          "Any internship, project participation, recommendation, interview, career support, or professional opportunity may depend on availability, performance, attendance, conduct, technical ability, communication skills, project quality, eligibility, and organizational requirements.",

          "Completing a course does not automatically create a right to an internship or job opportunity.",

          "The Academy may recommend students it reasonably considers suitable, but final decisions may be made by the Academy, partner organizations, employers, clients, or project managers.",
        ],
      },

      {
        title: "6. Certificates",

        paragraphs: [
          "Certificate eligibility may depend on completion of communicated requirements such as attendance, assignments, assessments, projects, conduct, payment status, participation, and administrative records.",

          "The Academy may delay, withhold, correct, replace, verify, or cancel a certificate where information is incomplete, inaccurate, unauthorized, fraudulent, or inconsistent with program requirements.",

          "Certificates represent participation or completion according to the relevant Academy program and do not necessarily represent external accreditation unless expressly stated.",
        ],
      },

      {
        title: "7. Academy Property",

        items: [
          "Use furniture responsibly",
          "Protect Academy devices and equipment",
          "Do not remove property without permission",
          "Avoid damaging shared resources",
          "Keep learning spaces reasonably clean",
          "Report damaged equipment",
          "Use internet and network resources responsibly",
          "Respect coworking-space rules",
          "Avoid unauthorized installation or modification",
          "Return borrowed items when requested",
        ],
      },

      {
        title: "8. Visitors and Unauthorized Participants",

        paragraphs: [
          "Students must not bring unauthorized participants into physical sessions, online meetings, private groups, practice sessions, assessments, or Academy activities without permission.",

          "Access may be limited based on enrollment, group assignment, capacity, safety, privacy, and operational requirements.",

          "The Academy may request identification or confirmation before allowing access to certain activities or resources.",
        ],
      },

      {
        title: "9. Public Statements and Social Media",

        paragraphs: [
          "Students may share genuine personal opinions and experiences, but must not present personal statements as official Academy announcements.",

          "Students must not publish confidential information, private student data, unauthorized recordings, misleading edited content, false accusations, or content that unlawfully infringes the rights of others.",

          "Concerns should be raised through appropriate channels so that they can be reviewed with relevant information.",
        ],
      },

      {
        title: "10. Changes to Programs and Services",

        paragraphs: [
          "The Academy may update course content, tools, instructors, projects, platforms, schedules, delivery methods, branches, assessments, support structures, and program requirements to maintain quality, respond to operational needs, or reflect changes in technology and education.",

          "Not every update requires individual approval from every student.",

          "Where practical, significant changes affecting an active group will be communicated through an available Academy channel.",
        ],
      },
    ],
  },

  {
    id: "violations",
    navigationTitle: "Violations & Enforcement",
    title: "Policy Violations & Administrative Action",

    description:
      "IO Code Academy may review behavior, activity, submissions, access, communication, and other relevant circumstances when a possible policy violation or operational concern is reported or detected.",

    icon: TriangleAlert,

    blocks: [
      {
        title: "1. General Review Process",

        paragraphs: [
          "The Academy may collect and review relevant information before making an academic, technical, access, conduct, or administrative decision.",

          "The type and extent of review may depend on the nature, urgency, seriousness, frequency, impact, available evidence, and potential risk associated with the matter.",

          "The Academy may contact involved individuals for clarification but is not required to disclose private information about another student, employee, instructor, reporter, or internal process.",
        ],
      },

      {
        title: "2. Factors That May Be Considered",

        items: [
          "Nature of the conduct",
          "Seriousness of the issue",
          "Frequency or repetition",
          "Impact on other students",
          "Impact on instructors or team members",
          "Impact on Academy systems or property",
          "Academic consequences",
          "Safety and privacy concerns",
          "Whether the behavior was intentional",
          "Whether the student cooperated",
          "Previous warnings or related concerns",
          "Available information and evidence",
          "Whether corrective action is possible",
          "Whether urgent action is necessary",
        ],
      },

      {
        title: "3. Possible Administrative or Academic Actions",

        paragraphs: [
          "Depending on the circumstances, IO Code Academy may take one or more reasonable actions.",

          "The list below is illustrative and does not require the Academy to apply actions in a fixed order.",
        ],

        items: [
          "Informal guidance",
          "Verbal warning",
          "Written warning",
          "Request for clarification",
          "Required correction or resubmission",
          "Additional academic review",
          "Temporary restriction from a group or activity",
          "Temporary platform-access restriction",
          "Change of group or schedule",
          "Removal from a specific activity",
          "Assessment cancellation or review",
          "Project or submission rejection",
          "Certificate review or withholding",
          "Temporary suspension",
          "Course removal",
          "Permanent account restriction",
          "Termination of enrollment",
          "Referral for further internal or external review",
        ],
      },

      {
        title: "4. Immediate Protective Action",

        paragraphs: [
          "Where the Academy reasonably believes that there may be a serious security, safety, privacy, academic integrity, system, harassment, or operational risk, temporary action may be taken before a full review is completed.",

          "Temporary action does not necessarily represent a final conclusion and may be adjusted after further review.",
        ],
      },

      {
        title: "5. Cooperation With Reviews",

        paragraphs: [
          "Students are expected to cooperate reasonably with legitimate Academy reviews and provide accurate information.",

          "Destroying evidence, providing knowingly false information, threatening participants, pressuring witnesses, manipulating records, or interfering with a review may be treated as an additional concern.",
        ],
      },

      {
        title: "6. Repeated Violations",

        paragraphs: [
          "Repeated minor violations may collectively be treated as a more serious conduct or participation issue.",

          "A previous warning or corrective instruction may be considered when reviewing later behavior.",

          "Continued non-compliance may affect access, participation, completion, certification, or enrollment status.",
        ],
      },

      {
        title: "7. Review Requests",

        paragraphs: [
          "A student may respectfully request clarification or reconsideration of an important Academy decision through the appropriate communication channel.",

          "The request should explain the relevant facts, provide supporting information where available, and avoid abusive, threatening, or misleading language.",

          "Submitting a review request does not automatically suspend or reverse the original decision.",
        ],
      },

      {
        title: "8. Confidentiality of Internal Matters",

        paragraphs: [
          "The Academy may keep internal reviews, student records, reports, communications, technical information, and personnel matters confidential where appropriate.",

          "Students are not automatically entitled to access every internal message, report, system record, discussion, or document used during an Academy review.",

          "The Academy may provide an appropriate summary or outcome without disclosing private or protected information.",
        ],
      },
    ],
  },

  {
    id: "updates-acceptance",
    navigationTitle: "Updates & Acceptance",
    title: "Policy Updates, Interpretation & Acceptance",

    description:
      "These policies are intended to provide a broad and organized framework for the relationship between IO Code Academy and individuals using or participating in its services.",

    icon: RefreshCcw,

    blocks: [
      {
        title: "1. Policy Updates",

        paragraphs: [
          "IO Code Academy may update, reorganize, clarify, expand, replace, or revise these policies when reasonably necessary.",

          "Updates may reflect changes in Academy operations, educational programs, technology, platforms, branches, services, security practices, payment processes, communication methods, or administrative requirements.",

          "The most recently published version should generally be treated as the current version unless the Academy communicates otherwise.",
        ],
      },

      {
        title: "2. Communication of Changes",

        paragraphs: [
          "Policy updates may be communicated through the Academy website, platform, email, WhatsApp, student groups, announcements, forms, or other available channels.",

          "Not every minor clarification or formatting update will necessarily result in individual notification.",

          "Students are encouraged to review relevant policies periodically.",
        ],
      },

      {
        title: "3. Continued Participation",

        paragraphs: [
          "Continued enrollment, attendance, platform access, course participation, or use of Academy services after an update may indicate acknowledgment of the updated policies.",

          "A student who has an important concern regarding an update should contact the Academy through an authorized channel for clarification.",
        ],
      },

      {
        title: "4. Interpretation",

        paragraphs: [
          "Policy headings, examples, lists, descriptions, and summaries are provided to improve organization and understanding.",

          "Examples are not necessarily exhaustive and may not cover every possible situation.",

          "The Academy may interpret and apply policies reasonably according to the facts, context, program, operational requirements, and seriousness of each matter.",
        ],
      },

      {
        title: "5. Separate Agreements",

        paragraphs: [
          "Certain courses, services, projects, internships, partnerships, scholarships, payment plans, events, or special programs may include additional written terms.",

          "Where additional terms apply, they should be read together with these general policies.",

          "A specific written arrangement may apply to a particular service or situation where appropriate.",
        ],
      },

      {
        title: "6. Partial Invalidity",

        paragraphs: [
          "If a particular provision is found to be unavailable, inappropriate, or unenforceable in a specific context, the remaining policies may continue to apply to the extent reasonably possible.",

          "The Academy may replace or clarify an affected provision with a reasonable alternative.",
        ],
      },

      {
        title: "7. No Waiver",

        paragraphs: [
          "A delay or decision not to enforce a policy in one situation does not necessarily prevent the Academy from applying the same or another policy in a later situation.",

          "An exception provided to one student or circumstance does not automatically create a general entitlement for all students.",
        ],
      },

      {
        title: "8. Contact and Clarification",

        paragraphs: [
          "Questions about these policies should be submitted through an official IO Code Academy communication channel.",

          "Students should provide sufficient information to identify the relevant course, level, branch, group, payment, account, or issue.",

          "The Academy may request identity verification or additional information before discussing private records or account details.",
        ],
      },

      {
        title: "9. General Acceptance",

        paragraphs: [
          "By registering, enrolling, paying, attending, submitting work, accessing private content, joining Academy groups, using Academy platforms, or participating in Academy activities, the individual acknowledges the general policies applicable to their relationship with IO Code Academy.",

          "Students remain responsible for their conduct, accounts, communication, submissions, attendance, use of materials, and compliance with reasonable Academy instructions.",

          "These policies are intended to support an organized, professional, respectful, secure, and productive educational environment for the entire IO Code Academy community.",
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

              ICA Policy Center
            </span>

            <h1
              className="
                mx-auto
                mt-6
                max-w-5xl
                text-4xl
                font-black
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              Policies, Terms & Student Guidelines
            </h1>

            <p
              className="
                mx-auto
                mt-6
                max-w-4xl
                text-base
                leading-relaxed
                text-slate-400
                sm:text-lg
              "
            >
              These policies explain the general standards,
              responsibilities, rules, expectations, and practices
              that apply when interacting with IO Code Academy —
              Input Output Code Academy.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-500">
              Please review this page before registering,
              enrolling, accessing educational content, using
              Academy platforms, or participating in Academy
              activities.
            </p>

            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
              <Clock3 size={16} />

              Last updated: {lastUpdated}
            </div>
          </div>
        </motion.header>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[300px_minmax(0,1fr)]">
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

          {/* Policies */}
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
                    amount: 0.05,
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
                  <div className="mt-8 space-y-12">
                    {policy.blocks.map((block) => (
                      <div key={block.title}>
                        <h3 className="text-xl font-semibold text-white sm:text-2xl">
                          {block.title}
                        </h3>

                        {block.paragraphs && (
                          <div className="mt-4 space-y-4">
                            {block.paragraphs.map((paragraph) => (
                              <p
                                key={paragraph}
                                className="leading-8 text-slate-400"
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
                    Questions About ICA Policies?
                  </h2>

                  <p className="mt-3 max-w-2xl leading-relaxed text-slate-400">
                    Contact the IO Code Academy team if you need
                    clarification about enrollment, payments,
                    student responsibilities, personal
                    information, educational content, academic
                    requirements, or platform usage.
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

