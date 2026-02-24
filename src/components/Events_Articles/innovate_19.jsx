import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export const Innovate_19 = () => {
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
          Breaking Barriers
        </motion.h1>
        <p className="text-sm text-gray-500 text-center">TEDcMIT - Innovate 19, February 6, 2019</p>
        <motion.img
          src="/src/TedcMit/assets/Events/2019/innovate-19-1.0.jpg"
          alt="Innovate 19 1.0"
          className="w-full my-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <p className="text-gray-300">
          INNOVATE 2019 commenced with a grand opening, setting the stage for a revolutionary discourse on breaking barriers.
        </p>
        <p className="text-lg font-semibold text-red-500 mt-6">Event Highlights</p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Lighting of the Kuthu Vilaku by the dignitaries</li>
          <li>Welcome address by Dr. P. Prakash, President, TEDc MIT</li>
          <li>Presidential address by Prof. Dr. T. Thyagarajan, The Dean, MIT</li>
        </ul>
        <p className="text-lg font-semibold text-red-500 mt-6">Speakers</p>
        <motion.div className="space-y-4">
          {[{
            name: "Ms. Vanathi Balasubramaniyam | Founder, NGO - 'ThatsMyChild'",
            image: "/src/TedcMit/assets/Events/2019/guest-1.jpg",
            description: "Ms. Vanathi inspired the audience with her journey in social entrepreneurship, emphasizing the power of grassroots activism."
          }, {
            name: "Soundarya Lakshmi Narayanan | Student-Entrepreneur, CEO of 'NxtStep Robotics'",
            image: "/src/TedcMit/assets/Events/2019/guest-2.jpg",
            description: "Soundarya shared insights into the startup ecosystem and the role of innovation in shaping the future."
          }, {
            name: "Mr. Jagan | Stand-up Comedian",
            image: "/src/TedcMit/assets/Events/2019/guest-3.jpg",
            description: "Mr. Jagan brought humor and wisdom, discussing the importance of laughter in overcoming challenges."
          }, {
            name: "Ms. Malini Jeevarathnam | Filmmaker and Social Activist",
            image: "/src/TedcMit/assets/Events/2019/guest-4.jpg",
            description: "Ms. Malini delved into the role of media in driving social change and breaking stereotypes."
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
                <h3 className="text-lg font-semibold text-red-400">{index + 1}. {speaker.name}</h3>
                <p className="text-gray-300">{speaker.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <p className="text-lg font-semibold text-red-500 mt-6">After Events</p>
        <p className="text-gray-300">
          Online games and interactive sessions were held to engage the audience. TEDc MIT extends heartfelt gratitude to all speakers, dignitaries, and participants for making the event a resounding success. Stay tuned for more inspiring events!
        </p>
        <p className="text-lg font-bold text-red-500 text-center mt-6">INSPIRE. INNOVATE. INVENT.</p>
      </motion.div>
      <motion.div className="text-center mt-6" whileHover={{ scale: 1.1 }}>
          <Link to="/src/TedcMit/events" className="text-red-500 hover:underline">← Back to Gallery</Link>
        </motion.div>
    </div>
  );
};
