import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export const Innovate_18 = () => {
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
                    OUT OF THE BOX
                </motion.h1>
                <p className="text-sm text-gray-500 text-center">TEDcMIT - Innovate 18, September 15 2018</p>
                <p className="mt-4 text-gray-300">
                    Ever wanna time travel? Designed your own world you dreamt of one day? Wondered about the problems arising every day in spite of growth economically and socially? Had a debate on Marvel or DC? All that present today were only imaginations and ideas of people like you and me. Be it a black hole theory or a black coffee recipe, it's all about ideas and those who dared to give them life.
                </p>
                <motion.img
                    src="/src/TedcMit/assets/Events/2018/innovate-2k18.png"
                    alt="Innovate 18"
                    className="w-full my-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                />
                <p className="text-gray-300">
                    INNOVATE 18 version 2.0 is a TED-inspired event organized by the TED Club of MIT under the theme "Out Of The Box." Unlike a regular talk show, Innovate is a full-day extravaganza of ideas with talks by eminent speakers of various disciplines and cultural events.
                </p>
                <p className="text-lg font-semibold text-red-500 mt-6">THEME</p>
                <p className="text-gray-300">
                    It isn't about thinking outside the box anymore. It's about erasing that very box and venturing out to explore new thoughts—an excursion for the mind. No box should limit your ideas. Let your imagination take flight. Erase the box. Embrace the possibilities.
                </p>
                <p className="text-lg font-semibold text-red-500 mt-6">After Events</p>
                <p className="text-gray-300">
                    Innovate 18 v2.0, a TED-inspired event held on 29 September 2018, was organized by the TED Club of MIT at Madras Institute of Technology. The event included an inaugural ceremony presided over by Dean MIT, Dr. A. Rajadurai, followed by a welcome address by Dr. P. Prakash, President of TEDcMIT. Talks were delivered by eminent speakers such as:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-300">
                    <li><strong className="text-red-400">Raj Mohan:</strong> YouTuber | Put Chutney</li>
                    <li><strong className="text-red-400">Yuvaprakash:</strong> Indian Fitness Model/Athlete</li>
                    <li><strong className="text-red-400">Dr. A. Rajadurai:</strong> Dean MIT</li>
                    <li><strong className="text-red-400">Aarthi:</strong> Community Developer | SP Robotic Works</li>
                    <li><strong className="text-red-400">Hemalatha:</strong> Senior Associate Engineer | Caterpillar</li>
                    <li><strong className="text-red-400">Dinesh:</strong> Third-year Computer Technology | MIT</li>
                </ul>
                <p className="mt-2 text-gray-300">
                    The event also included classical dance performances, a music show by Vibes (MIT’s official music band), an interactive quiz session by the Quiz Club of MIT, and fun events like Connexions, along with prize distributions for pre-events and on-day events.
                </p>
                <p className="text-lg font-bold text-red-500 text-center mt-6">INSPIRE. INNOVATE. INVENT.</p>
            </motion.div>
            <motion.div className="text-center mt-6" whileHover={{ scale: 1.1 }}>
          <Link to="/events" className="text-red-500 hover:underline">← Back to Gallery</Link>
        </motion.div>
        </div>
    );
};
