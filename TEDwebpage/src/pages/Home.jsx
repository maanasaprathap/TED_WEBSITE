import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import EventCard from "../components/EventCard";
import { Link } from "react-router-dom";
import About from "./About";
import { div } from "framer-motion/client";

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

  const [scrollY, setScrollY] = useState(0);
  return (
    <div className="min-h-screen flex flex-col  items-center">
    <div
      className="text-center p-64 pb-8 min-h-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/src/TedcMit/assets/home_page/back_ted.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.h1
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7 }}
  className="font-bold text-white text-3xl sm:text-4xl md:text-6xl drop-shadow-lg text-center"
  style={{
    fontFamily: "'Cutive Mono', monospace",
    textShadow: "4px 4px 12px rgba(255, 0, 0, 0.9), 2px 2px 8px rgba(0, 0, 0, 1)",
  }}
>
  INSPIRE. INNOVATE. INVENT.
</motion.h1>

<motion.h1
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7 }}
  className="font-bold text-white text-3xl sm:text-4xl md:text-6xl drop-shadow-lg text-center mt-4"
  style={{
    fontFamily: "'Cutive Mono', monospace",
    textShadow: "4px 4px 12px rgba(255, 0, 0, 0.9), 2px 2px 8px rgba(0, 0, 0, 1)",
  }}
>
  Welcome to TEDcMIT
</motion.h1>


      <br />
      <br />
      <br />

      {/* Upcoming Events Section */}
      <div className="flex flex-col md:flex-row justify-between w-full px-4 md:px-16 mt-[-20px] items-center gap-y-4 md:gap-x-8"
>
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

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-center mt-8 md:mt-10  p-6 rounded-lg shadow-lg  text-white"
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
            {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
          </div>
        </motion.div>

        {/* QR Code */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full md:w-1/2 flex flex-col  md:items-end mt-[-20px] mt-8 md:mt-10 mr-[-10]" 
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
            src="/src/TedcMit/assets/home_page/qr-code.jpg"
            alt="Scan QR Code"
            className="w-70 h-70 border border-white p-2 rounded-lg shadow-lg transition-all duration-300 ease-in-out 
                      hover:shadow-red-500 hover:scale-105 hover:bg-opacity-80 
                      hover:border-red-400 hover:-rotate-1 hover:skew-x-2 hover:shadow-2xl"
          />
        </motion.div>
      </div>

      
    </div>
   <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeInOut" }}
  className="w-full max-w-full overflow-x-hidden min-h-screen flex flex-col justify-center items-center" // Ensures it fills the screen
  id="about"
>
  <About />
</motion.div>

    </div>
  );
};

export default Home; 