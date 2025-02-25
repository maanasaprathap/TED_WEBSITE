import { motion } from "framer-motion";

export const Innovate_19_2 = () => {
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
                    Art of Failing
                </motion.h1>
                <p className="text-sm text-gray-500 text-center">TEDcMIT - Innovate 19, September 28 2019</p>
                <p className="mt-4 text-gray-300">
                    “Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.”
                </p>
                <motion.img
                    src="/assets/Events/2019/innovate-name.jpg"
                    alt="Innovate 19 2.0"
                    className="w-full my-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                />
                <p className="text-gray-300">
                    INNOVATE 2019 returned with an exciting theme - Art of Failing. TEDc MIT had the pleasure of hosting an event that combined students and their ideas to pave the way for an evolutionary generation. INNOVATE'19, the intercollegiate event, glorified Rajam Hall of MIT on September 28, 2019.
                </p>
                <p className="text-lg font-semibold text-red-500 mt-6">Speakers</p>
                <motion.div className="space-y-4">
                    {[{
                        name: "Mr. Murali Vijayakumar (Biglee)",
                        image: "/assets/Events/2019/guest-2.jpg",
                        description: "Coach Murali Vijayakumar, widely known as BigLee, delivered an electrifying talk on 'The Art of Falling'. He emphasized that setbacks in life build resilience and that failure is a stepping stone to growth."
                    }, {
                        name: "Mr. Sriram | Founder and CTO - Primefort",
                        image: "/assets/Events/2019/guest-3.jpg",
                        description: "Mr. Sriram shared insights on cybersecurity and the entrepreneurial journey of Primefort, inspiring young minds to embrace failure as a learning process."
                    }, {
                        name: "Mr. Prashanth R | Tamil Cinema Reviewer",
                        image: "/assets/Events/2019/guest-5.jpg",
                        description: "Mr. Prashanth discussed the impact of constructive criticism and how learning from setbacks can shape success in the media industry."
                    }, {
                        name: "Mrs. K. Suriya Prabha | Founder and CEO - Youcode Intelligence Solutions",
                        image: "/assets/Events/2019/guest-4.jpg",
                        description: "Mrs. Suriya Prabha enlightened the audience on innovation in AI and how failures in research pave the way for groundbreaking discoveries."
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
                    Online games were conducted via social media to engage the audience. TEDc MIT extends gratitude to all club members, dignitaries, speakers, and the audience for making the event a memorable one. Stay tuned for more inspiring events!
                </p>
                <p className="text-lg font-bold text-red-500 text-center mt-6">INSPIRE. INNOVATE. INVENT.</p>
                <motion.div className="text-center mt-6" whileHover={{ scale: 1.1 }}>
          <Link to="/events" className="text-red-500 hover:underline">← Back to Gallery</Link>
        </motion.div>
            </motion.div>
        </div>
    );
};
