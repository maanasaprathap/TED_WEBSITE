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
        <motion.img
          src="/assets/Events/2024/Innovate-24.jpeg"
          alt="Innovate 24"
          className="w-full my-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <p className="text-sm text-gray-500 text-center">TEDcMIT - Innovate 24, February 29, 2024 <br />The most eagerly awaited flagship event of TEDcMIT, Innovate 2024, took place on 29th February 2024 at Rajam Hall, MIT Campus. As the name suggests, Innovate is all about bringing new ideas to the table and inspiring the student community. This year’s theme, "Navigating the 20s," focused on the challenges and opportunities that define this crucial decade of life, guiding students through career growth, financial independence, relationships, and self-development. <br></br></p>
        
        <p className="text-gray-300">
          Innovate 2024, TEDcMIT’s flagship event, brought new ideas to the table and inspired the student community. The theme "Navigating the 20s" explored the challenges and opportunities of this defining decade—career growth, financial independence, relationships, and self-development.
        </p>
        <p className="text-lg font-semibold text-red-500 mt-6">Event Highlights</p>
        <p className="text-gray-300">The event commenced with Tamizh Thai Vaazhthu and the Lighting of Kuthuvilaku, followed by a welcome address by Mr. S Yashraj, Chairperson of TED Club MIT. Dr. P Prakash, President of TED Club MIT, introduced the audience to the vision of TED and its impact, while Mr. R V Vighnesh, Vice Chairperson, elaborated on the significance of Innovate 2024. The Presidential Address was delivered by Dr. K Ravichandran, Dean of MIT, Anna University, setting the stage for an insightful evening. The highlight of the event was the Speaker’s Address, where six distinguished speakers—Ms. Nikhila Sankar, Dr. G. Sivaraman, Mr. Agnel John, Mr. Anbuthasan, Ms. Kirtanya Krishnamoorthy, and Mr. Tamil Selvan—shared their unique experiences and knowledge, resonating deeply with the audience. Each session was packed with thought-provoking ideas, motivating students to think differently and take charge of their personal and professional journeys.<br></br>The event concluded with a heartfelt Vote of Thanks by Ms. Sabharna Shanjitha M, Vice Chairperson of TED Club MIT, acknowledging the efforts of all contributors who made Innovate 2024 a grand success. <br></br>One of the key highlights of Innovate 2024 was the interactive Q&A sessions, where students engaged directly with the speakers, sparking meaningful conversations and exchanging ideas. These discussions gave attendees valuable takeaways that extended beyond the walls of the auditorium.
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
