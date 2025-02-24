import { motion } from "framer-motion";
import EventCard from "../components/EventCard";
import { Link } from "react-router-dom";
import About from "./About";

const Home = () => {
  return (
    <div
      className="text-center p-8 min-h-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('assets/home_page/back_ted.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-6xl font-extrabold text-red-500 drop-shadow-lg text-center mt-[-120px]"
        style={{
          fontFamily: "'Cutive Mono', monospace",
          textShadow:
            "4px 4px 12px rgba(255, 0, 0, 0.9), 2px 2px 8px rgba(0, 0, 0, 1)",
        }}
      >
        Welcome to TEDcMIT
      </motion.h1>

      {/* About Header */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-extrabold text-center mt-4"
        style={{
          fontFamily: "'Cutive Mono', monospace",
          background: "linear-gradient(to right, red, black)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow:
            "4px 4px 12px rgba(255, 0, 0, 0.9), 2px 2px 10px rgba(0, 0, 0, 1)",
        }}
      >
        Inspiring ideas, spreading knowledge.
      </motion.h1>
<br></br>
<br></br>
      {/* Upcoming Events Section */}
      <div className="flex flex-col md:flex-row justify-between w-full px-4 md:px-16 mt-[-20px] items-center">
        {/* Event Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full md:w-1/2 flex flex-col items-center md:items-start mt-[-20px]"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-2xl md:text-3xl text-red-600 font-semibold mt-6 md:mt-10"
          >
            UPCOMING EVENT !
          </motion.h2>
        <br></br>
          <EventCard
            title="Innovate'25"
            date="March 8, 2025"
            description="An event showcasing groundbreaking innovations and ideas."
            className="w-64 h-64 bg-black text-white p-6 rounded-lg shadow-lg border border-white transition-all duration-300 ease-in-out 
                      hover:shadow-red-500 hover:scale-105 hover:bg-opacity-80 
                      hover:border-red-400 hover:-rotate-1 hover:skew-x-2 hover:shadow-2xl"
            style={{
              fontFamily: "'Poppins', sans-serif",
              textShadow: "1px 1px 5px rgba(255, 0, 0, 0.5)",
            }}
          />
        </motion.div>

        {/* QR Code */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full md:w-1/2 flex flex-col items-center md:items-end mt-[-20px]"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-2xl md:text-3xl text-red-600 font-semibold mt-6 md:mt-10"
          >
            SCAN TO JOIN !
          </motion.h2>
          <br />
          <img
            src="assets/home_page/qr-code.jpg"
            alt="Scan QR Code"
            className="w-70 h-70 border border-white p-2 rounded-lg shadow-lg transition-all duration-300 ease-in-out 
                      hover:shadow-red-500 hover:scale-105 hover:bg-opacity-80 
                      hover:border-red-400 hover:-rotate-1 hover:skew-x-2 hover:shadow-2xl"
          />
        </motion.div>
      </div>
    
    </div>
  );
};

export default Home;
