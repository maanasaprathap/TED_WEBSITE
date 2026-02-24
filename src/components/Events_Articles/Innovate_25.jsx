import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Innovate_25 = () => {
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
          Report on INNOVATE'25 – Ideas to Reality
        </motion.h1>
        <p className="text-sm text-gray-500 text-center">TEDcMIT - INNOVATE'25</p>
        <motion.img
          src="/src/TedcMit/assets/Events/2025/Innovate_25.jpeg"
          alt="Innovate 25"
          className="w-full my-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <p className="text-gray-300 leading-relaxed">
          The TED Club of MIT organized its most awaited flagship event, INNOVATE'25, on 8th March
          2025 at Rajam Hall, MIT Campus, Anna University. Built around the theme{" "}
          <span className="font-semibold text-white">"Ideas to Reality"</span>, the event aimed to
          bridge the gap between visionary thinking and practical execution, inspiring students to
          transform their ideas into meaningful impact across diverse fields.
        </p>

        <p className="text-gray-300 leading-relaxed mt-4">
          The event commenced with <span className="italic">Tamizh Thai Vaazhthu</span> and the
          Lighting of Kuthuvilaku, setting a culturally vibrant tone for the evening. The Welcome
          Address was delivered by{" "}
          <span className="font-semibold text-white">Mr. Selvalingam B</span>, Chairperson of
          TED Club of MIT, who highlighted the club's mission and the significance of Innovate as a
          platform for intellectual growth.{" "}
          <span className="font-semibold text-white">Dr. P. Prakash</span>, Professor, Electronics
          Department and President of TED Club of MIT, then delivered the Presidential Address,
          introducing the audience to the vision behind INNOVATE'25 and its relevance in shaping
          the future of aspiring professionals.
        </p>

        <p className="text-lg font-semibold text-red-500 mt-6">TED Talks – Speakers</p>
        <ul className="list-disc list-inside text-gray-300 space-y-4 mt-2">
          <li>
            <span className="font-semibold text-white">Ms. Aishwarya Krish</span>, Psychologist,
            delivered a deeply engaging talk on the importance of mental well-being in a
            fast-paced world. She explored how self-awareness and emotional resilience play a
            critical role in turning ideas into reality, urging students to prioritize mental health
            as the foundation for sustained success and creativity.
          </li>
          <li>
            <span className="font-semibold text-white">Ms. Aravinda Suresh</span>, Psychotherapist,
            spoke about the power of understanding human behaviour and the subconscious mind. She
            highlighted how addressing inner conflicts and building psychological strength can
            empower individuals to overcome obstacles and bring their boldest ideas to life with
            clarity and conviction.
          </li>
          <li>
            <span className="font-semibold text-white">Ms. Preetha Manikandan</span>, Entrepreneur,
            shared her inspiring journey of building a venture from the ground up. She discussed the
            challenges of entrepreneurship — from ideation to execution — and emphasized the
            importance of perseverance, adaptability, and believing in one's vision even in the face
            of uncertainty.
          </li>
          <li>
            <span className="font-semibold text-white">Mr. R.R. Clement (IRS)</span>, Commissioner
            of Income Tax, delivered a thought-provoking talk on discipline, governance, and the
            role of youth in nation-building. Drawing from his distinguished career in the Indian
            Revenue Service, he encouraged students to channel their knowledge and skills toward
            contributing to society and making a lasting impact on the nation.
          </li>
        </ul>

        <p className="text-gray-300 leading-relaxed mt-4">
          Each speaker session was followed by interactive Q&amp;A rounds, where students engaged
          directly with the speakers, sparking meaningful conversations and exchanging valuable
          perspectives. The discussions provided attendees with practical takeaways that extended
          well beyond the auditorium.
        </p>

        <p className="text-gray-300 leading-relaxed mt-4">
          The event concluded with a heartfelt Vote of Thanks delivered by{" "}
          <span className="font-semibold text-white">Mr. Shanthosh S</span> and{" "}
          <span className="font-semibold text-white">Ms. Shalini M</span>, Vice-Chairpersons of
          TED Club of MIT, acknowledging the efforts of the speakers, organizers, faculty, and all
          participants who made INNOVATE'25 a grand success. The program concluded on a high note,
          marking yet another inspiring and memorable edition of INNOVATE.
        </p>

        <p className="text-sm text-gray-500 text-center mt-4">
          MADRAS INSTITUTE OF TECHNOLOGY — ANNA UNIVERSITY, CHENNAI – 44
        </p>

        <p className="text-lg font-bold text-red-500 text-center mt-6">INSPIRE. INNOVATE. INVENT.</p>

        <motion.div className="text-center mt-6" whileHover={{ scale: 1.1 }}>
          <Link to="/src/TedcMit/events" className="text-red-500 hover:underline">← Back to Gallery</Link>
        </motion.div>
      </motion.div>
    </div>
  );
};
