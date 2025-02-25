import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ImposterSyndromeArticle = () => {
  return (
     <div className="p-8 bg-black min-h-screen flex flex-col overflow-hidden relative pb-24">
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
        IMPOSTER SYNDROME: TAKING IMPOSTERS BEYOND AMONG US
      </motion.h1>
      <p className="text-sm text-gray-500 text-center">By SABHARNA SHANJITHA M - September 18, 2021</p>

      <motion.img
        src="/assets/Articles/ImpoSyn_1.jpg"
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
        Imposters have infiltrated and now they’re among us. At a prestigious conference with renowned tycoons and artists, Neil Armstrong remarked,
        <i> “I just look at all these people, and I think, what am I doing here? They’ve made amazing things. I just went where I was sent.”</i>
        The man who made history was convinced he was an imposter, and there’s a 70% chance you might be one too.
      </motion.p>

      <motion.p
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        As psychologists phrase it, imposter syndrome is the feeling of inadequacy that persists despite evident accomplishments. It’s the idea that one’s
        success was just a mere stroke of luck, coupled with the terror of being exposed for not having what it takes.
      </motion.p>

      <motion.img
        src="/assets/Articles/Feeling_inad.jpg"
        alt="Feeling of inadequacy"
        className="w-full my-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.ul
        className="list-disc pl-5 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <li>Shy away from receiving compliments</li>
        <li>Are embarrassed to ask for help</li>
        <li>Get humiliated when things don’t go your way</li>
      </motion.ul>

      <motion.p
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        If you can relate to most of these, join the club. To compensate for such feelings, people tend to become procrastinators or end up as perfectionists, thus attributing the outcome to either luck or extra effort.
      </motion.p>

      <motion.img
        src="/assets/Articles/feeling3.jpg"
        alt="Ways to overcome imposter syndrome"
        className="w-full my-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.p
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        To combat this feeling of phoniness, speak your heart out to people, make room for your thoughts, and reflect upon them. Achievements are relative,
        so try broadening your boundaries between winning and losing. Focus solely on accomplishments you’ve made and own your success!
      </motion.p>

      <motion.p
        className="mb-4 font-semibold text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        “Everyone asks who is the imposter, never how’s the imposter.”
      </motion.p>

      <motion.p
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        Imposters aren’t meant to be voted off. They’re real, and the possibility of one being near you is high. A little pat on their back or genuine validation would do wonders.
      </motion.p>

      <motion.div className="text-center mt-6" whileHover={{ scale: 1.1 }}>
        <Link to="/" className="text-red-500 hover:underline">← Back to Gallery</Link>
      </motion.div>
    </motion.div>
  </div>
  );
};

export default ImposterSyndromeArticle;
