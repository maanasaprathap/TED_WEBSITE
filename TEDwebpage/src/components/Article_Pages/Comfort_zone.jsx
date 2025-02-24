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
        Comfort Zone
      </motion.h1>
      <p className="text-sm text-gray-500 text-center">By SABHARNA SHANJITHA M - September 18, 2021</p>

      <motion.img
        src="/assets/Articles/cf1.jpg"
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
        Think back to the moment when you’ve had too many anxious thoughts about life. When was the last time you did something for the first time?Nothing strikes your mind? Unfortunately, seems like you’re stuck in the dangerously safe place called “comfort zone” and you’re not alone. It’s the entire universe conspiring against you. Look around yourself and you’ll find the world being designed to make everything effortless. Just because it’s sold doesn’t mean we need to buy as it costs your success in the end.
      </motion.p>

      <motion.p
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
       Being comfort zoned ruins the endless alternate possibilities that might have been rewarding. As one gets satisfied with their current state of living, progress gets replaced with stagnation. If “But I’m good at this” is your reason for not stepping out, heads up!!!!

As “what you’re good at” and “what you happy” are entirely different things. “the Herd takes the trodden path but the one towards the labyrinth creates history”


      </motion.p>

      <motion.img
        src="/assets/Articles/ cf2.jpg"
        alt="Feeling of inadequacy"
        className="w-full my-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

     
      <motion.p
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        As Mr.Ankur Warikoo, the entrepreneur and CEO of Groupon states there’s always two worlds out there. The one , is in which we were born without the choice of looks, family and economic status . In the other, you could be literally anything you wish to. To stay in either one is an individual’s choice but often people fail to see that they’re living a lie by being a brick in someone else’s wall.

Picture yourself being born in Iran and think how different things would’ve been Be grateful for your privileges but never let that cloud your thoughts .For majority of people, our basic needs are their impossible luxuries and yet all we strive for at the end is the “safe herd” path. To change the world around, we need to change our own ‘pre defined ‘ world.

      </motion.p>

      <motion.img
        src="/assets/Articles/cf2.jpg"
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
        What was that one thing you promised yourself to start doing in college? Are you still passionate about it or have settled for something less?Never forget that only when you depart from your ordered life, you can truly discover yourself.Here comes the important question “ How not to get comfortable”“ resist the obvious path” is how Warikoo puts it. Do that one thing you’ve always wanted to start, something which terrifies yet excites you.Just keep pushing the boundaries of your confinement until you’ve reached the edge and remembers to embrace it because thats where you truly grow.
      </motion.p>

      <motion.p
        className="mb-4 font-semibold text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
       
      </motion.p>

      <motion.p
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
       
      </motion.p>
     
      <motion.div className="text-center mt-6" whileHover={{ scale: 1.1 }}>
        <Link to="/" className="text-red-500 hover:underline">← Back to Gallery</Link>
      </motion.div>
    </motion.div>
    </div>
  );
};

export default ImposterSyndromeArticle;
