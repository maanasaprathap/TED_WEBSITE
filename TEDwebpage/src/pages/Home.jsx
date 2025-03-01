import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import EventCard from "../components/EventCard";
import { Link } from "react-router-dom";
import About from "./About";

const Home = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("March 8, 2025 13:00:00").getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-8 pt-4 bg-black dark:bg-black w-full max-w-full overflow-x-hidden  flex flex-col justify-center items-center">
      {/* Hero Section */}
      <div className="text-center p-8 sm:p-16 md:p-32 lg:p-64 pb-8 min-h-screen flex flex-col justify-center items-center bg-black"
        style={{ backgroundImage: "url('/src/TedcMit/assets/home_page/background.jpg')",
          backgroundSize: "cover",
        backgroundPosition: "center",
         }}>
        {/* <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="font-bold text-white text-3xl sm:text-4xl md:text-6xl drop-shadow-lg text-center mt-[-20px]"
          style={{
            fontFamily: "'Cutive Mono', monospace",
            textShadow:
              "4px 4px 12px rgba(255, 0, 0, 0.9), 2px 2px 8px rgba(0, 0, 0, 1)",
          }}
        >
         
        </motion.h1> */}

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="font-bold text-white text-2xl sm:text-4xl md:text-6xl drop-shadow-lg text-center mt-4"
          style={{
            fontFamily: "'Cutive Mono', monospace",
            textShadow:
              "4px 4px 12px rgba(255, 0, 0, 0.9), 2px 2px 8px rgba(0, 0, 0, 1)",
          }}
        > 
         INSPIRE. INNOVATE. INVENT.<br></br>
          Welcome to TEDcMIT
        </motion.h1>

        <br />
        <br />
        <br />

        {/* Upcoming Events, Countdown, and QR Code Section */}
        <div className="w-full max-w-7xl px-2 md:px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8 mt-6">
          {/* Upcoming Event - Left */}
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
              UPCOMING EVENT!
            </motion.h2>
            <br />
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

          {/* Countdown Timer - Center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center p-6 rounded-lg shadow-lg text-white"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-2xl md:text-3xl text-red-600 font-semibold"
            >
              COUNTDOWN TO EVENT
            </motion.h2>
            <div className="text-2xl md:text-3xl font-bold mt-4">
              {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
              {timeLeft.seconds}s
            </div>
          </motion.div>

          {/* QR Code - Right */}
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
            <div
    className="w-64 h-64 border border-white p-2 rounded-lg shadow-lg transition-all duration-300 ease-in-out 
              hover:shadow-red-500 hover:scale-105 hover:bg-opacity-80 
              hover:border-red-400 hover:shadow-2xl overflow-hidden" // Added overflow-hidden
  >
    <img
      src="/src/TedcMit/assets/home_page/qr-code.jpg"
      alt="Scan QR Code"
      className="w-full h-full object-cover" // Ensures the image fits perfectly
    />
  </div>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-full max-w-full overflow-x-hidden min-h-screen flex flex-col justify-center items-center"
        id="about"
      >
        <About />
      </motion.div>
    </div>
  );
};

export default Home;