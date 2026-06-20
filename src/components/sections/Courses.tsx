import { tracks } from "../../data/tracks";
import { motion } from "framer-motion";
import LearningCard from "../ui/LearningCard";
import SectionTitle from "../ui/SectionTitle";
import Container from "../layout/Container";
const Courses = () => {
  return (
   
    <section className="relative py-32 overflow-hidden" id="tracks">
      <div className="absolute left-1/4 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      
 <Container>
      <div className="relative ">
       <div className="max-w-3xl ">
         <SectionTitle
          badge="Learning Tracks"
          title="Structured Paths to Tech Mastery"
          description="Our carefully curated learning tracks combine theory, hands-on projects, and real-world applications to ensure you're job-ready."
        />
       </div>


        {/* Grid */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <LearningCard
  title={track.title}
  points={track.points}
  slug={track.slug}
/>
            </motion.div>
          ))}
        </div>

      </div>
        </Container>
    </section>
  );
};

export default Courses;