import { motion } from "framer-motion";

export const Innovate_18 = () =>{
    return(
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
       OUT OF THE BOX
      </motion.h1>
      <p className="text-sm text-gray-500 text-center">TEDcMIT - Innovate 18, September 15 2018</p>
      <br />
      <br />
      <motion.p
       className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      
      >Ever wanna time travel? Designed your own world you dreamt of one day? Wondered about the problems arising every day in spite of growth economically and socially? Had a debate on Marvel or DC? All that present today were only imaginations and ideas of people like you and me. Be it a black hole theory or a black coffee recipe, it's all about ideas and those who dared to give them life. Ever wanna read those minds who dared of dreaming solutions and perceived for it? They are here to talk to you. And yea "Ideas are worth spreading".</motion.p>
      <motion.img
        src="/assets/Events/2018/innovate-2k18.png"
        alt="Innovate 18"
        className="w-full my-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.p>
        INNOVATE 18 version 2.0 is a TED inspired event organized by the TED Club Of MIT under the theme "Out Of The Box". Unlike a regular talk show Innovate is a full day extravaganza of ideas with talks by eminent speakers of various disciplines and cultural events.
      </motion.p>
     <br />
     <br />
      {/* <strong className="text-red-800">THEME</strong> */}
       <motion.p className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}>
        <strong className="text-red-800">THEME</strong><br></br>It isn't about thinking outside the box anymore. It's about erasing that very box and venturing out to explore new thoughts -an excursion for the mind of sorts. It's about shoving that box aside and starting fresh on that slate. Light travels faster than sound. Similarly, ideas travel faster when boundaries are eliminated. No box should be able to limit your ideas. Let your imagination take flight. Erase the box. Embrace the possibilities.
      </motion.p>

<motion.p className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}>
       <strong className="text-red-800">After Events: </strong><br></br>
It's about Innovate 18 v2.0,a TED inspired event held on 29 September 2018 organised by the TED Club Of MIT at Madras Institute Of Technology which included inaugural ceremony presided over by the Dean MIT,Dr.A.Rajadurai followed by Dr.P.Prakash,President TEDc MIT welcoming the gathering and then the talks by many eminent speakers from various disciplines such as

Raj Mohan, YouTuber | Putchutney

Yuvaprakash, Indian Fitness model/Athlete

Dr.A.Rajadurai, Dean MIT

Aarthi, Community developer | SP Robotic works

Hemalatha, Senior Associate Engineer | Caterpillar

Dinesh , third year- Computer Technology | MIT

The event also included classical dance by Naveena beautifully expressing the evolution of dance styles, A music show by Vibes,the official music band of MIT bringing a wave of enthusiasm into the hall and an interactive quiz session by Quiz Club Of MIT.It also included fun events such as connexions and prize distribution for the pre-events and on-day events.</motion.p>
      </motion.div>
    </div>
    );
}