import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Genesis_25 = () => {
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
          Report on GENESIS'25
        </motion.h1>
        <p className="text-sm text-gray-500 text-center">TEDcMIT - GENESIS'25</p>
        <motion.img
          src="/src/TedcMit/assets/Events/2026/Genesis.jpeg"
          alt="Genesis 25"
          className="w-full my-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <p className="text-gray-300 leading-relaxed">
          The TED Club of MIT organized its flagship event GENESIS'25 on 23rd October 2025 at
          1:00 p.m. in Rajam Hall, MIT Campus, Anna University. The event aimed to inspire students
          through thought-provoking talks and real-life experiences shared by distinguished speakers
          from diverse domains.
        </p>

        <p className="text-gray-300 leading-relaxed mt-4">
          The event commenced with a Welcome Address by Mr. Dhivakar, Vice Chairman of TED
          Club of MIT, followed by an overview of the club's activities presented by Mr. Sanjay A. R,
          Chairman. Mr. Prakash, President of TED Club of MIT, then delivered the Presidential
          Address and introduced the theme and purpose of GENESIS'25.
        </p>

        <p className="text-lg font-semibold text-red-500 mt-6">TED Talks – Speakers</p>
        <ul className="list-disc list-inside text-gray-300 space-y-4 mt-2">
          <li>
            <span className="font-semibold text-white">Ms. Padmaja Evuri</span>, Founder of Wiki Wonder Woman and a renowned Self-Happiness
            and Relationship Coach, spoke on topics of psychology, relationships, feminism,
            mental health, and inner confidence, inspiring students to pursue self-awareness and
            balance.
          </li>
          <li>
            <span className="font-semibold text-white">Mr. Karthick Jothi M</span>, Founder &amp; CEO of Allytriz Technologies, shared insights on
            startups and entrepreneurship, explaining how market analysis helps identify business
            opportunities. He also discussed his journey in developing TalkAlly, an assistive
            technology translating sign language into speech.
          </li>
          <li>
            <span className="font-semibold text-white">Mr. Shanmugam (Mr. KK – Kathai Kanthasamy)</span>, a digital creator
            and storyteller, spoke about his journey as a YouTuber, emphasizing the importance of
            passion, perseverance, and creativity in content creation.
          </li>
          <li>
            <span className="font-semibold text-white">Mr. J. Prem Anand</span>, Commissioner of Income Tax (Exemption), Chennai, and Senior
            Officer of the Indian Revenue Service, delivered an inspiring talk on the role of youth
            in nation-building, urging engineering students to channel their potential toward
            creating a better India.
          </li>
        </ul>

        <p className="text-gray-300 leading-relaxed mt-4">
          A Q&amp;A session followed, where students interacted with the speakers. As a token of
          appreciation, each speaker was presented with a hand-drawn pencil portrait made by students
          from Tamil Mandram, handed over by Club President, Mr. Prakash Sir, along with the
          respective artist.
        </p>

        <p className="text-gray-300 leading-relaxed mt-4">
          The event concluded with a Vote of Thanks delivered by Ms. Bhavishya, Vice Chairman of
          the club, followed by refreshments for the audience. The program concluded successfully
          around 4:00 p.m., marking another inspiring and memorable edition of GENESIS.
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
