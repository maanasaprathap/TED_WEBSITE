import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Innovate_22 = () =>{
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
          Truth and Dare
        </motion.h1>
        <p className="text-sm text-gray-500 text-center">TEDcMIT - Innovate 22, March 19, 2022</p>
        <motion.img
          src="/assets/Events/2022/INNOVATE'22_Poster.jpg"
          alt="Innovate 22"
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
          With the pandemic putting our lives on pause for the past two years, The Ted Club of MIT came back with the most awaited, Innovate 2022, which was held in both Offline and Online mode on March 19, 2022. The event took place at The Conference Hall, RLHC. The theme for 2022 is “Truth and Dare,” with a total of 7 speakers from various domains sharing their experiences on how truth and dare played a main role in their life-changing decisions.
        </motion.p>
        <motion.div className="space-y-4">
          {[{
            name: "Mr. Suresh Kumar",
            image: "/assets/Events/2022/guest-1.jpg",
            description: "Founder of Pepul, shared the story of how he and his friend started Pepul and emphasized how honesty and daring nature can lead to success."
          }, {
            name: "Ms. Padmini Janaki",
            image: "/assets/Events/2022/guest-2.jpg",
            description: "CEO of Mind and Mom, spoke about the importance of women’s health and their role in society."
          }, {
            name: "Mr. Sivaraman",
            image: "/assets/Events/2022/guest-3.jpg",
            description: "Founder of deHub for Architects, SpaceMush, FinteriorZ, explained how creative industries work and what students should expect when entering these fields."
          }, {
            name: "Mr. Senthil Raj",
            image: "/assets/Events/2022/guest-4.jpg",
            description: "Founder of On the Streets Musical Community, discussed spreading positivity through music and building a community of passionate musicians."
          }, {
            name: "Mr. Mathur Sathya",
            image: "/assets/Events/2022/guest-5.jpg",
            description: "A public policy expert, highlighted issues regarding reservations and the struggles of marginalized communities."
          }, {
            name: "Mr. Jayakumar Kanagarajan",
            image: "/assets/Events/2022/guest-6.jpg",
            description: "Industry leader at Caterpillar, provided insights into placement opportunities and how students can approach core companies."
          }, {
            name: "Ms. Kanishsri",
            image: "/assets/Events/2022/guest-7.jpeg",
            description: "Para Asian Games 2018 champion, shared her journey of overcoming challenges and meeting chess grandmaster Viswanathan Anand."
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
        <motion.div className="text-center mt-6" whileHover={{ scale: 1.1 }}>
          <Link to="/" className="text-red-500 hover:underline">← Back to Gallery</Link>
        </motion.div>
      </motion.div>
    </div>
  );
}