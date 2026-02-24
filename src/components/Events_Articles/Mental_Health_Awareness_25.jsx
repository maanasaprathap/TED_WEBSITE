import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Mental_Health_Awareness_25 = () => {
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
          Event Report – Mental Health Awareness Session
        </motion.h1>
        <p className="text-sm text-gray-500 text-center">TEDcMIT - MENTAL HEALTH AWARENESS 25</p>
        <motion.img
          src="/src/TedcMit/assets/Events/2026/Mental_health_awareness.jpg"
          alt="Mental Health Awareness 25"
          className="w-full my-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <p className="text-gray-300 leading-relaxed">
          The TED Club of MIT organized a Mental Health &amp; Anti-Drug Awareness Session on
          11.09.2025 from 3:00 PM to 4:00 PM at the Placement Hall, Dr. Kalam Computing Centre.
          The session aimed to spread awareness about mental well-being and substance abuse
          prevention among students.
        </p>

        <p className="text-gray-300 leading-relaxed mt-4">
          The session featured <span className="font-semibold text-white">Ms. Aishwarya Krish</span>, Counselling Psychologist, who served as the
          Chief Guest and Speaker. The program began with a welcome address by the Club
          Chairman, followed by the introduction of the chief guest. After her talk, a memento was
          presented to the speaker by Ms. Piratheba from KCC, and the event concluded with a vote
          of thanks.
        </p>

        <p className="text-lg font-semibold text-red-500 mt-6">Key Topics Addressed</p>
        <p className="text-gray-300 mt-2">
          The session by Ms. Aishwarya Krish addressed key aspects of student mental health and
          anti-drug awareness, including:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
          <li>Difference between good stress and bad stress</li>
          <li>Coping with placement pressure and future uncertainties</li>
          <li>Global statistics on anxiety and suicide among youth</li>
          <li>Recognizing signs of struggle and commitment issues</li>
          <li>Distinction between anxiety, disorder, fear, and nervousness</li>
          <li>Role of hormones like dopamine and oxytocin in well-being</li>
          <li>Brain effects of drug use, causes of student addiction, and prevention methods</li>
          <li>Interactive Q&amp;A with personalized guidance to students</li>
        </ul>

        <p className="text-lg font-bold text-red-500 text-center mt-6">INSPIRE. INNOVATE. INVENT.</p>

        <motion.div className="text-center mt-6" whileHover={{ scale: 1.1 }}>
          <Link to="/src/TedcMit/events" className="text-red-500 hover:underline">← Back to Gallery</Link>
        </motion.div>
      </motion.div>
    </div>
  );
};
