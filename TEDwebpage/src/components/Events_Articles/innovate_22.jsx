import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Innovate_22 = () => {
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
          Truth and Dare
        </motion.h1>
        <p className="text-sm text-gray-500 text-center">TEDcMIT - Innovate 22, March 19, 2022</p>
        <motion.img
          src="/src/TedcMit/assets/Events/2022/INNOVATE'22_Poster.jpg"
          alt="Innovate 22"
          className="w-full my-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <p className="text-gray-300">
          With the pandemic putting our lives on pause for the past two years, Innovate 2022 returned with a powerful lineup of inspiring speakers, insightful discussions, and an engaging hybrid event format.
        </p>
        
        <p className="text-lg font-semibold text-red-500 mt-6">Event Highlights</p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Inspiring speeches from distinguished speakers across various fields</li>
          <li>Discussions on truth, courage, and transformative decisions</li>
          <li>Musical performances and engaging activities</li>
          <li>Interactive Q&A sessions with industry leaders</li>
        </ul>
        
        <p className="text-lg font-semibold text-red-500 mt-6">Guest Speakers</p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Mr. Suresh Kumar - Founder of Pepul</li>
          <li>Ms. Padmini Janaki - CEO of Mind and Mom</li>
          <li>Mr. Sivaraman - Founder of deHub for Architects</li>
          <li>Mr. Senthil Raj - Founder of On the Streets Musical Community</li>
          <li>Mr. Mathur Sathya - Public Policy Expert</li>
          <li>Mr. Jayakumar Kanagarajan - Industry Leader at Caterpillar</li>
          <li>Ms. Kanishsri - Para Asian Games 2018 Champion</li>
        </ul>
        
        <p className="text-lg font-bold text-red-500 text-center mt-6">INSPIRE. INNOVATE. INVENT.</p>
        
        <motion.div className="text-center mt-6" whileHover={{ scale: 1.1 }}>
          <Link to="/src/TedcMit/events" className="text-red-500 hover:underline">← Back to Gallery</Link>
        </motion.div>
      </motion.div>
    </div>
  );
};
