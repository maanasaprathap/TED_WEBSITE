import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Innovate_23 = () =>{
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
        >
          One World One Voice
        </motion.h1>
        <p className="text-sm text-gray-500 text-center">TEDcMIT - Innovate 23, April 28, 2023</p>
        <motion.img
          src="/assets/Events/2023/innovate-23.jpg"
          alt="Innovate 23"
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
          The most eagerly awaited flagship event of TEDcMIT - Innovate 23 happened on April 2023 at the Rajam Hall in MIT Campus. As the name suggests, this year's Innovate had an innovative, yet socially benefitting theme, which was "One world, one voice", where 6 orators spread the word on equality and global acceptance. The event was presided by Dr. P. Prakash, the President of TEDcMIT. The event commenced with the telecast of a survey video directed and shot by the TEDcMIT and edited by the PSMIT, portraying the views of students, teachers, and employees on a unified humanitarian world. Then, the audience witnessed the thought-provoking speeches of our guest speakers.
        </motion.p>
        <motion.div className="space-y-4">
          {[{
            name: "Mr. A. Gokulnath",
            image: "/assets/Events/2023/guest-1.jpeg",
            description: "Mr. A. Gokulnath ICLS, the Registrar of Companies, Puducherry, shared his insights about civil services in India and his journey in tackling the UPSC exam."
          }, {
            name: "Mr. Milton Samsundar",
            image: "/assets/Events/2023/guest-2.jpeg",
            description: "Milton Samsundar, artist and educator, spoke about transforming personal devastation into strength, starting with an engaging Parai performance."
          }, {
            name: "Mr. Vignesh Vellappan",
            image: "/assets/Events/2023/guest-3.jpeg",
            description: "Founder of Seyal Foundation, emphasized social responsibility and sustainable development goals."
          }, {
            name: "Dr. Prahallathan K. K",
            image: "/assets/Events/2023/guest-4.jpeg",
            description: "Co-founder of Bhumi NGO, highlighted the importance of leadership among volunteers and perseverance."
          }, {
            name: "Mr. Thozhamaiyan",
            image: "/assets/Events/2023/guest-5.jpg",
            description: "Founder of Deleted Drafts, discussed indirect oppression of women in entertainment, citing biased cinema lyrics."
          }, {
            name: "Mr. Arivarasu Kalainesan",
            image: "/assets/Events/2023/guest-6.jpg",
            description: "Rapper and lyricist known for 'Enjoy Enjaami', spoke on societal discrimination and the importance of education."
          }].map((speaker, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.7 }}
            >
              <motion.img
                src={speaker.image}
                alt={speaker.name}
                className="w-60 h-60 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              />
              <div>
                <h3 className="text-lg font-semibold">{index + 1}. {speaker.name}</h3>
                <p>{speaker.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}