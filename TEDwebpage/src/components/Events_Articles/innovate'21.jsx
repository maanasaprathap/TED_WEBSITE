import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Innovate_21 = () =>{
    return (
      <div className="p-8 bg-black min-h-screen flex flex-col overflow-hidden relative">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="p-8 bg-black text-white max-w-3xl mx-auto shadow-xl rounded-lg"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-3xl font-extrabold text-red-500 text-center mb-4"
        style={{ fontFamily: "'Cutive Mono', monospace" }}
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

      <motion.p
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
      <h1><strong>Day 1:</strong></h1><br>
       </br>

On the first day the event was inaugurated with a welcome address by the Chairperson and was continued with intruding and knowledgeable talks, interactive questionnaires from Mr. Adithya Iyer, Mr. Murali Shankarnarayanan and Ms. Bharathy Baskar. It was followed by an awestricking musical event by VIBEZ MIT. And continued with indulgent questionnaires, mesmerising talks from Ms. Sonia Jain, Dr. Sivaraman and Mr. Sumanth C. The first day ended with an enchanting musical experience by an individual artist named Mr. Keerthiwasan.
      </motion.p>

      <motion.p
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
       <h1><strong>Day 2:</strong></h1><br>
       </br>

Day two was followed by exceptional talks from various speakers such as Ms. Mubeen Irshad, Mr. Jangid IPS and Ms. Neelam Jain. After which there was a competitive and refreshing activity by Quiz Club MIT. Followed by fascinating and thought-provoking speeches from Ms. Sreelakshmi Bansidar and Mr. Vijay Anandh. These speeches were accompanied with a marvellous musical performance from VIBEZ MIT. The event was concluded with the vote of thanks by the treasurer of TEDCMIT making it one of the best events of 2021.
      </motion.p>

    </motion.div>
    </div>
  );
}