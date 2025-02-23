import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Innovate_24 = () => {
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
          Innovate 2024 – Navigating the 20s
        </motion.h1>
        <p className="text-sm text-gray-500 text-center">TEDcMIT - Innovate 24, February 29, 2024</p>
        
        <p className="text-gray-300">
          Innovate 2024, TEDcMIT’s flagship event, brought new ideas to the table and inspired the student community. The theme "Navigating the 20s" explored the challenges and opportunities of this defining decade—career growth, financial independence, relationships, and self-development.
        </p>
        <p className="text-lg font-semibold text-red-500 mt-6">Event Highlights</p>
        <p className="text-gray-300">
          The event began with Tamizh Thai Vaazhthu and the Lighting of Kuthuvilaku, followed by an insightful Speaker’s Address featuring six distinguished speakers:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
          <li>Dr. G Sivaraman – Chief Siddha Physician</li>
          <li>Ms. Nikhila Sankar – Actress</li>
          <li>Ms. Kirtanya Krishnamoorthy – CEO of Mind Fresh Training</li>
          <li>Mr. Anbuthasan – Actor</li>
          <li>Mr. Tamil Selvan – Founder of Tamil Tech</li>
          <li>Mr. Agnel John – Founder & CEO of EMC Academy</li>
        </ul>
        <p className="text-gray-300 mt-4">
          The event also featured engaging Q&A sessions, allowing students to interact with the speakers and gain valuable insights. The event concluded with a Vote of Thanks, acknowledging the contributors who made Innovate 2024 a grand success.
        </p>
        <p className="text-lg font-bold text-red-500 text-center mt-6">INSPIRE. INNOVATE. INVENT.</p>
        <motion.div className="text-center mt-6" whileHover={{ scale: 1.1 }}>
          <Link to="/" className="text-red-500 hover:underline">← Back to Gallery</Link>
        </motion.div>
      </motion.div>
    </div>
  );
};
