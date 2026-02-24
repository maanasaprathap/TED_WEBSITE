import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// CSS styles (you can add this to a separate CSS file or use a CSS-in-JS solution)


const Feminism = () => {
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
        Are Feminist movements going too far?

      </motion.h1>
      <p className="text-sm text-gray-500 text-center">-By SABHARNA SHANJITHA M</p>

      <motion.img
        src="/src/TedcMit/assets/Articles/Feminism/Feminism_1.png"
        alt="Feninism"
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
       To all the young girls out there ( sorry boys)Looking for ways to empower yourself ?? Has all the feminist talks left you with goosebumps and the urge to do something about it.
      </motion.p>

      <motion.p
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Here are a few misconceptions about Feminist activities that you might (not) want to follow ..
<li>1.Indulge in discussions proving men to be wrong</li>
<li>2.Indulge in discussions proving women to be wrong</li>
<li>3.Throw in words that sound powerful even if it's out of context</li>
      </motion.p>

      <motion.img
        src="/src/TedcMit/assets/Articles/Feminism/Feminism_2.png"
        alt="feminist"
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
       Though this might be a bit exaggerated , this is how modern feminists of today are liberating themselves through active feminist movement. YES, this is the same protest that years ago had earned the basic " I'm a human too" status to women.But did this lose its momentum and became ANTI-MEN ??? This tarnished reputation is partially due to people who aren’t well-versed on the topic but have a lot of premeditated misperceptions on the characterization of feminists. With celebrities who get their hair chopped down and call it a " liberating and empowering move " to sharing plagiared quotes on feminism, the plight of today's feminism is indeed saddening.
      </motion.ul>

      <motion.p
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
       As these women fight for their right to dress freely, their freedom to casually abuse men who don't believe in their dominance , there's still a girl out there who could use all this to get that paycheck equal to her male co worker.
      </motion.p>

      <motion.img
        src="/src/TedcMit/assets/Articles/Feminism/Feminism_3.png"
        alt="equality and freedom"
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
        When the picture's too bold, there's a section blaming for being too outgoing and forward. If it's about embracing their own traditional choices , they get called out for being submissive and "wanting to be dominated". It outraged people when feminism looked down upon and demeaned housewives.
      </motion.p>

      <motion.p
        className="mb-4 font-semibold text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
       The internet was nothing short of chaos with too much unnecessary opinions. Among this , the only takeaway the common people had was that feminists are pushy and argumentative — causing others to get apprehensive about labeling themselves as “feminist," as it often carries a negative connotation
      </motion.p>

      <motion.p
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
       As all this steals the spotlight , there's still men of position who childishly heckled the honourable minister of women and child development of india. Does feminism cover this too or is it just another personal issue????
      </motion.p>

      <motion.img
        src="/src/TedcMit/assets/Articles/Feminism/Feminism_4.png"
        alt="equality and freedom"
        className="w-full my-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.p
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        Feminism, distilled down to its absolute core, is about gender equity. The goal of feminism is to create a society in which individuals' genders don't restrict them from an equitable shot at success and happiness .
      </motion.p>

      <motion.p
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
       The fate of feminism is tied to the balance we strike with prioritising issues. Belittling feminism by calling it as a fad wouldn't help nor will blowing up tiny issues The fact that behind each one of this ,lies a tightly woven yet invisible thread of religion to it ,makes the knot even more difficult to unwind.At the end of the day, these issues remain extremely important, and although some in our cultural stratosphere may not yet grasp how to responsibly address them, there will always be strong and intelligent people to look towards help us all to put things in perspective.
      </motion.p>

     



      <motion.div className="text-center mt-6" whileHover={{ scale: 1.1 }}>
        <Link to="/src/TedcMit/gallery" className="text-red-500 hover:underline">← Back to Gallery</Link>
      </motion.div>
    </motion.div>
  </div>
  );
};

export default Feminism;