import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const eventsData = [
  {
    id: 8,
    title: "Blueprints of success",
    description: "Success is like a vibrant. blank canvas just waiting for you to bring it to life. Your passions, talents, and wildes dreams are the bold colors that will transform it into something extraordinary.",
    image: "/src/TedcMit/assets/Events/2024/orginate-24.jpg",
    link: "/src/TedcMit/originate'24",
    date: "November 15 2024",
  },
  {
    id: 7,
    title: "Navigating your 20s",
    description: "Navigating your 20s with the most awaited event of TEDcMIT - Innovate 24 happened on February 29 2023 at the Rajam Hall in MIT Campus. As the name suggests, this year's Innovate had an innovative theme",
    image: "/src/TedcMit/assets/Events/2024/Innovate-24.jpeg",
    link: "/src/TedcMit/innovate'24",
    date: "February 29 2023",
  },
  {
    id: 6,
    title: "One World One Voice",
    description: "The most eagerly awaited flagship event of TEDcMIT - Innovate 23 happened on April 2023 at the Rajam Hall in MIT Campus. As the name suggests, this year's Innovate had an innovative",
    image: "/src/TedcMit/assets/Events/2023/innovate-23.jpg",
    link: "/src/TedcMit/innovate'23",
    date: "April 28 2023",
  },
  {
    id: 5,
    title: "Truth and Dare",
    description: "With pandemic putting our lives to a pause for the past two years, The Ted Club of MIT came back with the most awaited, Innovate 2022 which was held in both Offline and Online mode",
    image: "/src/TedcMit/assets/Events/2022/INNOVATE'22_Poster.jpg",
    link: "/src/TedcMit/innovate'22",
    date: "March 19 2022",
  },
   {
    id: 4,
    title: "Past the Impasse",
    description: "Innovate was a unique and successfully conducted event amidst a pandemic making it one of its kind. The event was conducted under the theme Past the Impasse.",
    image: "/src/TedcMit/assets/Events/2021/innovate2k21_poster.png",
    link: "/src/TedcMit/innovate_21",
    date: "February 12 2021",
  },
  {
    id: 3,
    title: "Art of Failing",
    description: "Ever tried. Ever failed. No matter.Try again. Fail again. Fail better.INNOVATE 2019 returned back with an exciting theme - Art of Failing surrounded by suspense",
    image: "/src/TedcMit/assets/Events/2019/innovate-name.jpg",
    link: "/src/TedcMit/innovate'19.2.0",
    date: "September 15, 2019",
  },
  {
    id: 2,
    title: "Breaking Barriers",
    description: "Professionals are no emergents, they are evolved students; so are the designs - the evolved ideas.... the intercollegiate event - INNOVATE 2019 that glorified the Rajam Hall",
    image: "/src/TedcMit/assets/Events/2019/innovate-19-1.0.jpg",
    link: "/src/TedcMit/innovate'19",
    date: "February 6 2019",
  },
  {
    id: 1,
    title: "Out of the Box",
    description: "Ever wanna time travel? Designed your own world you dreamt of one day? Had a debate on Marvel or DC?INNOVATE 2018 version 2.0 is a TED inspired event",
    image: "/src/TedcMit/assets/Events/2018/innovate-2k18.png",
    link: "/src/TedcMit/innovate'18",
    date: "September 15, 2018",
  },

];

const Events = ({ events = eventsData }) => {
  const [scrollX, setScrollX] = useState(0);
  const containerRef = useRef(null);
  const cardWidth = 320;
  const cardSpacing = 24;
  const maxScroll = (events.length - 1) * (cardWidth + cardSpacing);

  const handleScroll = (direction) => {
    setScrollX((prev) => {
      if (direction === "left") {
        return Math.min(prev + (cardWidth + cardSpacing), 0);
      } else {
        return Math.max(prev - (cardWidth + cardSpacing), -maxScroll);
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollX((prev) => {
        const nextScroll = prev - 1;
        return nextScroll <= -maxScroll ? 0 : nextScroll;
      });
    }, 50); // Slow automatic scroll
    return () => clearInterval(interval);
  }, [maxScroll]);

  return (
    <div className="p-16 bg-black min-h-screen flex flex-col overflow-hidden relative">
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-red-600 text-center mb-8"
        style={{ fontFamily: "'Cutive Mono', monospace" }}
      >
        PAST EVENTS
      </motion.h1>  <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-2xl font-bold text-red-600 text-center mb-8"
        style={{ fontFamily: "'Cutive Mono', monospace" }}
      >
        DISCOVER WHAT WE ARE UP TO !
      </motion.h1>

      <div className="relative w-full flex items-center">
        <button
          className="absolute left-0 z-10 bg-white p-2 rounded-full shadow-md"
          onClick={() => handleScroll("left")}
        >
          <ChevronLeft size={24} />
        </button>

        <motion.div
          ref={containerRef}
          className="flex space-x-6 w-max items-center"
          animate={{ x: scrollX }}
          transition={{ ease: "linear", duration: 0.3 }}
        >
          {events.map((event) => (
            <Link key={event.id} to={event.link} className="no-underline">
              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden w-80 mx-2 transform transition duration-300 cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(239, 45, 42, 0.8)" }}
              >
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                <div className="p-6 text-center">
                  <h2 className="text-xl font-semibold mb-2 text-gray-900">{event.title}</h2>
                  <p className="text-gray-700 text-sm mb-4">{event.description}</p>
                  <p className="text-gray-500 text-xs mb-2">{event.date}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        <button
          className="absolute right-0 z-10 bg-white p-2 rounded-full shadow-md"
          onClick={() => handleScroll("right")}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Events;
