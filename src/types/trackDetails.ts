export type Level = {
  level: string;
  title: string;
  description: string;

  topics: string[];
  outcomes: string[];
  deliverable: string;

  cta: string;
};

export type TrackDetails = {
  slug: string;

  title: string;

  subtitle: string;

  duration: string;

  target: string;

  learningStyle: string[];

  finalOutcomes: string[];
  
    careerOutcomes: string[];


 tools: string[];

  skills: string[];

  levels: Level[];

  internshipTitle: string;

  internshipDescription: string;

    internshipCta: string;

};

