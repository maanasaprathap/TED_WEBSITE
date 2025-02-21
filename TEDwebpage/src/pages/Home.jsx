import { motion } from "framer-motion";
import EventCard from "../components/EventCard";

const Home = () => {
  return (
    <div className="text-center p-8 bg-black min-h-screen flex flex-col justify-center items-center overflow-y-hidden">

      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-extrabold text-red-500 drop-shadow-lg text-center"
        style={{ fontFamily: "'Cutive Mono', monospace" }}
      >
        Welcome to TEDcMIT
      </motion.h1>

      {/* About Header */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-extrabold text-red-500 drop-shadow-lg text-center mt-4"
        style={{ fontFamily: "'Cutive Mono', monospace" }}
      >
        Inspiring ideas, spreading knowledge.
      </motion.h1>

      {/* Upcoming Events Section */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-2xl text-red-600 font-semibold mt-6"
      >
        Upcoming Events
      </motion.h2>

      {/* Event Card with Motion */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-4 text-white"
      >
        <EventCard 
          title="Innovate'25" 
          date="March 8, 2025" 
          description="An event showcasing groundbreaking innovations and ideas." 
        />
      </motion.div>

    </div>
  );
};

export default Home;
