import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Innovate_21 = () => {
  return (
    <div className="p-8 bg-black min-h-screen flex flex-col overflow-hidden relative pb-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="p-6 bg-gray-900 text-white max-w-4xl mx-auto shadow-lg rounded-lg"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl font-extrabold text-red-500 text-center"
        >
          Past the Impasse
        </motion.h1>
        <p className="text-sm text-gray-500 text-center">TEDcMIT - Innovate 21, February 12 and 13, 2021</p>
        <motion.img
          src="/assets/Events/2021/innovate2k21_poster.png"
          alt="Imposter Syndrome"
          className="w-full my-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <p className="text-gray-300">
          Innovate 2021 brought together brilliant minds for an unforgettable two-day experience, filled with inspiring talks, engaging discussions, and musical performances.
        </p>
        
        <p className="text-lg font-semibold text-red-500 mt-6">Day 1 Highlights</p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Welcome address by the Chairperson</li>
          <li>Talks and interactive Q&A sessions with Mr. Adithya Iyer, Mr. Murali Shankarnarayanan, and Ms. Bharathy Baskar</li>
          <li>Musical performance by VIBEZ MIT</li>
          <li>Insightful talks from Ms. Sonia Jain, Dr. Sivaraman, and Mr. Sumanth C</li>
          <li>Closing musical performance by Mr. Keerthiwasan</li>
        </ul>
        
        <p className="text-lg font-semibold text-red-500 mt-6">Day 2 Highlights</p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Talks by Ms. Mubeen Irshad, Mr. Jangid IPS, and Ms. Neelam Jain</li>
          <li>Competitive activity by Quiz Club MIT</li>
          <li>Speeches from Ms. Sreelakshmi Bansidar and Mr. Vijay Anandh</li>
          <li>Final musical performance by VIBEZ MIT</li>
          <li>Vote of thanks by the TEDcMIT treasurer</li>
        </ul>
        
        <p className="text-lg font-bold text-red-500 text-center mt-6">INSPIRE. INNOVATE. INVENT.</p>
        <motion.div className="text-center mt-6" whileHover={{ scale: 1.1 }}>
          <Link to="/events" className="text-red-500 hover:underline">← Back to Gallery</Link>
        </motion.div>
      </motion.div>
    </div>
  );
};
