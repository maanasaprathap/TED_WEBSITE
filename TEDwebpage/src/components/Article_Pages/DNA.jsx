import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ImposterSyndromeArticle = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="p-8 bg-white text-gray-900 max-w-3xl mx-auto shadow-xl rounded-lg"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-3xl font-extrabold text-red-500 text-center mb-4"
        style={{ fontFamily: "'Cutive Mono', monospace" }}
      >
        DIGITAL DNA STORAGE IS CLOSER THAN YOU THINK !
      </motion.h1>
      <p className="text-sm text-gray-500 text-center">By SABHARNA SHANJITHA M - September 18, 2021</p>

      <motion.img
        src="/assets/Articles/dna1.jpg"
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
        Still caught up deciding between a 32gb or a 64 gb pendrive ?? Annoyed by the frequent " running out of storage " notifications?? Not anymore!!! Netflix has used human DNA to store the first episode of a series called “ Biohackers”, yes it’s the same spiral coily thing you vaguely remember from your science class.
      </motion.p>

      <motion.p
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
      This is possible by encoding the video file into synthetic DNA sequence of four nucleic bases namely adenine, guanine, cytosine and thymine along with error-correction codes. To play the episode, the DNA segments are sequenced to reveal A,T,G,C segments which are then reconstituted into a digital file . The entire process takes about 24 hours. If this has blown your mind, gear up as there’s more. All the 144 sonnets of Shakespeare ,Martin Luther King's speech, Universal Declaration of Human Rights in more than 100 languages, music from Super Mario— all etched on strands of DNA for the posterity.Wondering why bother doing this when the SSD's work just fine…Every MINUTE in 2020, Google handled 3.88 million searches,5 million YouTube videos were played , 500 million tweets and 60,000 posts on Instagram. If this trend continues , by 2025, 160 zettabytes of data will be generated each day per person.This is so enormous that our existing data-storage systems will fail in a decade.
      </motion.p>

      <motion.img
        src="/assets/Articles/dna2.jpg"
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
        
The answer to this 21st-century problem of information overload lies in the oldest coding system known to science , Catchily referred to as “DNA-of-Things” (DOT)It proves to be a stable storage medium that would last for thousands of years. "A single gram of DNA can pack 200 exabytes of data which means you can store ALL of the world’s digital data in just a coffee mug" says ETH Zurich Professor Dr Robert Grass ,from Twist BioScience who partnered with Netflix to make this a success.

      </motion.p>

      <motion.img
        src="/assets/Articles/dna3.jpg"
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
       The cloud is someone else's computer that takes up acres of land , city's worth of power and billions of dollars leaving the fate of our data in the hands of economic situation and privacy policies of the provider. Not to mention the generation of carbon emissions on par with the airline industry. So the urge to find alternatives are getting stronger.DOT still has a long way to go in making a mark in reality. The time when storage mediums have infinite capacity yet remain hidden to the human eyes isn’t too far. Preserving data in DNA seems futuristic, but the future is now.
      </motion.p>

      

      

      <motion.div className="text-center mt-6" whileHover={{ scale: 1.1 }}>
        <Link to="/" className="text-red-500 hover:underline">← Back to Gallery</Link>
      </motion.div>
    </motion.div>
  );
};

export default ImposterSyndromeArticle;
