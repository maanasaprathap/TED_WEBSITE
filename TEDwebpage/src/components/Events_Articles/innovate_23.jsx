import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Innovate_23 = () => {
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
          One World One Voice
        </motion.h1>
        <p className="text-sm text-gray-500 text-center">TEDcMIT - Innovate 23, April 28, 2023</p>
        <motion.img
          src="/assets/Events/2023/innovate-23.jpg"
          alt="Innovate 23"
          className="w-full my-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <p className="text-gray-300">
          Innovate 23, TEDcMIT’s flagship event, embraced the theme "One World, One Voice," advocating for global unity and equality. The event featured a diverse lineup of impactful speakers, insightful discussions, and creative performances.
        </p>
        
        <p className="text-lg font-semibold text-red-500 mt-6">Guest Speakers</p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Mr. A. Gokulnath - Registrar of Companies, Puducherry</li>
          <li>Mr. Milton Samsundar - Artist and Educator</li>
          <li>Mr. Vignesh Vellappan - Founder of Seyal Foundation</li>
          <li>Dr. Prahallathan K. K - Co-founder of Bhumi NGO</li>
          <li>Mr. Thozhamaiyan - Founder of Deleted Drafts</li>
          <li>Mr. Arivarasu Kalainesan - Rapper and Lyricist</li>
        </ul>
        
        <p className="text-lg font-bold text-red-500 text-center mt-6">INSPIRE. INNOVATE. INVENT.</p>
        
        <motion.div className="text-center mt-6" whileHover={{ scale: 1.1 }}>
          <Link to="/" className="text-red-500 hover:underline">← Back to Gallery</Link>
        </motion.div>
      </motion.div>
    </div>
  );
};
