import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Originate_24 = () => {
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
          ORIGINATE'24: Capturing the Essence of VICTORY
        </motion.h1>
        <p className="text-sm text-gray-500 text-center">TEDcMIT - ORIGINATE 24</p>
        <motion.img
          src="/assets/Events/2024/originate-24.jpg"
          alt="Originate 24"
          className="w-full my-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <p className="text-gray-300">
          The TED Club of MIT proudly hosted ORIGINATE'24, an electrifying event designed to sharpen the focus on the exhilarating and unpredictable journey of one’s 20s. With the theme "Blueprints of Success," the event brought together a stellar lineup of speakers who framed their journeys through bold perspectives, helping young minds develop a high-definition vision of their defining decade.
        </p>

        <p className="text-lg font-semibold text-red-500 mt-6">Guest Speakers</p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Vikkals Vikram - Resilience & Adaptability</li>
          <li>Epaphra - Passion & Purpose</li>
          <li>Sethu - Breaking Exposure Limits</li>
          <li>Aishwarya - Mental Well-being & Growth</li>
          <li>Jaya Jagadheesan - Language & Communication</li>
        </ul>

        <p className="text-lg font-bold text-red-500 text-center mt-6">INSPIRE. INNOVATE. INVENT.</p>

        <motion.div className="text-center mt-6" whileHover={{ scale: 1.1 }}>
          <Link to="/" className="text-red-500 hover:underline">← Back to Gallery</Link>
        </motion.div>
      </motion.div>
    </div>
  );
};
