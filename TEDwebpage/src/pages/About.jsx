import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import {FaArrowLeft, FaArrowRight, FaBook } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { useState } from "react";

import { FaBullseye } from "react-icons/fa";

const teamImages = [
   "/src/TedcMit/assets/group_images/team 2024.jpeg",
  "/src/TedcMit/assets/group_images/team _2024.jpeg",
   "/src/TedcMit/assets/group_images/innovate 23.JPG",
    "/src/TedcMit/assets/group_images/innovate 22.JPG",
  "/src/TedcMit/assets/group_images/team 2019.jpg",

];

// Flip card component for a team member
const getObjectPosition = (name) => {
  switch (name) {
    case "Selvalingam B":
      return "center 55%"; // Bring it down
    case "Shanthosh S":
      return "center 15%";
    case "Shalini M":
      return "center 30%";
      case "Thennarasu V":
        return "center 30%";
        case "Anish H":
          return "center 40%";
          case "Thulasidharan C A":
            return "center 65%";
            case "Dhinesh K":
              return "center 25%";
              case "Dinesh P":
                return "center 40%";
                case "Sriram K":
                  return "center 45%";
                  case "Dhanush M":
                    return "center 20%";
                    case "Sripushkalai S":
                      return "center 40%";
                      case "Aishwarya I":
                        return "center 130%";
                        case "Manivasagam G":
                          return "center 35%";
                          case "Mukesh L":
                          return "center 40%";
                         
                                              
    default:
      return "center 60%";
  }
};

const Group_Images = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + teamImages.length) % teamImages.length);
  };

  return (
    <div className="relative flex justify-center items-center w-full min-w-[300px] min-h-[300px] overflow-hidden">
  {/* Left Arrow */}
  <FaArrowLeft
    className="absolute left-2 sm:left-4 cursor-pointer text-white hover:text-red-500 transition-colors duration-300 z-10"
    size={30}
    onClick={prevSlide}
  />

  {/* Image */}
  <img
    src={teamImages[currentIndex]}
    alt={`Team ${currentIndex + 1}`}
    className="w-full h-auto max-h-[400px] sm:max-h-[500px] object-contain rounded-lg shadow-lg transition-all duration-300"
  />

  {/* Right Arrow */}
  <FaArrowRight
    className="absolute right-2 sm:right-4 cursor-pointer text-white hover:text-red-500 transition-colors duration-300 z-10"
    size={30}
    onClick={nextSlide}
  />
</div>

  );
};




const TeamCard = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-full h-full"
      style={{ perspective: "1000px" }}
      onClick={() => setIsFlipped(!isFlipped)} // Toggle flip on click (for mobile)
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }} // Flip on click
        whileHover={{ rotateY: 180, scale: 1.05, boxShadow: "0 0 15px rgba(239,68,68,0.8)" }} // Desktop hover effect
        transition={{ duration: 0.5 }}
        style={{ transformStyle: "preserve-3d", boxShadow: "0 0 8px rgba(239,68,68,0.4)" }}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full bg-white rounded-xl shadow-lg flex flex-col items-center justify-center overflow-hidden">
  {member.img && (
    <img
      src={member.img}
      alt={member.name}
      className="w-full h-full object-cover object-center"
      style={{ objectPosition: getObjectPosition(member.name) }}
    />
  )}

</div>


        {/* Back Side */}
     <div
  className="absolute inset-0 flex flex-col items-center justify-center bg-red-200 rounded-xl shadow-md p-4 overflow-auto"
  style={{
    backfaceVisibility: "hidden",
    transform: "rotateY(180deg)",
  }}
>

  {/* Name */}
  <p
    className="text-gray-800 text-base text-xs sm:text-sm md:text-base font-bold text-center break-words"
    style={{ fontFamily: "'Caviar Dreams', sans-serif" }}
  >
    {member.name}
  </p>

  {/* Position */}
  <p
    className="text-gray-800 text-xs sm:text-sm md:text-base mt-0 text-center break-words"
    style={{ fontFamily: "'Cutive Mono', monospace" }}
  >
    {member.position}
  </p>

  {/* Social Links */}
  <div className="flex space-x-3 mt-2">
    {/* <a href={member.git} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
      <FaGithub size={20} className="sm:size-16" />
    </a> */}
    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
      <FaLinkedin size={16} className="sm:size-6"  />
    </a>
    <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
      <FaInstagram size={16} className="sm:size-6"  />
    </a>
  </div>
</div>

      </motion.div>
    </div>
  );
};



const About = () => {
  // An array of 14 team members with dummy details.
  const teamMembers = [
    { 
      name: "Dr P Prakash",
      position: "President",
      img: "/src/TedcMit/assets/Team_Images/Prakash_sir.jpeg",
      git: "../alice",
      linkedin: "https://www.linkedin.com/in/prakash-p-0a2ba2302/",
      instagram: "https://www.instagram.com/prakz_79",
    },
    {
      name: "Selvalingam B",
      position: "Chairperson",
       img: "/src/TedcMit/assets/Team_Images/Selvalingam B.jpg",
      git: "../alice",
      linkedin: "",
      instagram: "https://www.instagram.com/__selva_lingam__?utm_source=qr",
    },
    {
      name: "Shanthosh S",
      position: "Vice-Chairperson",
      img: "/src/TedcMit/assets/Team_Images/Shanthosh S.jpg",
      git: "../bob",
      linkedin: "",
      instagram: "https://www.instagram.com/shanthosh.s_322",
    },
    {
      name: "Shalini M",
      position: "Vice-Chairperson",
      img: "/src/TedcMit/assets/Team_Images/Shalini M.jpg",
      git: "../charlie",
      linkedin: "",
      instagram: "https://www.instagram.com/sha_lini5890",
    },
    {
      name: "Thennarasu V",
      position: "General Secratory",
      img: "/src/TedcMit/assets/Team_Images/Thennarasu V.jpg",
      git: "../david",
      linkedin: "",
      instagram: "https://www.instagram.com/_thenn._.arasu30_",
    },
    {
      name: "Anish H",
      position: "Treasurer",
      img: "/src/TedcMit/assets/Team_Images/Anish H.jpg",
      git: "../eve",
      linkedin: "",
      instagram: "https://www.instagram.com/__anish.__.01",
    },
    {
      name: "Thulasidharan C A",
      position: "Head of Public Relations",
      img: "/src/TedcMit/assets/Team_Images/Thulasidharan C A.jpg",
      git: "../frank",
      linkedin: "",
      instagram: "https://www.instagram.com/im_td.06",
    },
    {
      name: "Dhinesh K",
      position: "Head of Public Relations",
      img: "/src/TedcMit/assets/Team_Images/Dhinesh K.jpg",
      git: "../grace",
      linkedin: "",
      instagram: "https://www.instagram.com/dhineshkarthik30",
    },
    {
      name: "Dinesh P",
      position: "Head of Event Management",
      img: "/src/TedcMit/assets/Team_Images/Dinesh P.jpg",
      git: "../heidi",
      linkedin: "",
      instagram: "https://www.instagram.com/dinesh14_._",
    },
    {
      name: "Sriram K",
      position: "Head of Event Management",
      img: "/src/TedcMit/assets/Team_Images/Sriram K.JPG",
      git: "../ivan",
      linkedin: "",
      instagram: "https://www.instagram.com/__k_sriram__",
    },
    {
      name: "Dhanush M",
      position: "Head of Design",
      img: "/src/TedcMit/assets/Team_Images/Dhanush M.jpg",
      git: "../judy",
      linkedin: "",
      instagram: "https://www.instagram.com/____dhanu__sh/",
    },
    {
      name: "Sripushkalai S",
      position: "Head of Design",
      img: "/src/TedcMit/assets/Team_Images/Sripushkalai S.jpg",
      git: "../kevin",
      linkedin: "",
      instagram: "https://www.instagram.com/_.pushey",
    },
    {
      name: "Aishwarya I",
      position: "Head of Content Curation",
      img: "/src/TedcMit/assets/Team_Images/Aishwarya I.jpg",
      git: "../laura",
      linkedin: "",
      instagram: "https://www.instagram.com/princessfuzzie._0",
    },
    {
      name: "Manivasagam G",
      position: "Head of Content Curation",
      img: "/src/TedcMit/assets/Team_Images/Manivasagam G.jpg",
      git: "../mallory",
      linkedin: "",
      instagram: "https://www.instagram.com/manivasagan._._",
    },
    {
      name: "Mukesh L",
      position: "Head of Website Development",
      img: "/src/TedcMit/assets/Team_Images/Mukesh L.jpg",
      git: "../niaj",
      linkedin: "",
      instagram: "https://www.instagram.com/m_u_k_e_s_h_k_u_t_t_y",
    },
   
    
  ];

  return (
  <div className="p-8 bg-black dark:bg-black w-full max-w-full overflow-x-hidden">
    <motion.div
      style={{
        fontFamily: "'Playfair Display', serif",
      }}
      className="p-8 min-h-screen bg-cover bg-center text-white overflow-x-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* About Header */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-extrabold text-red-600 drop-shadow-lg text-center"
        style={{ fontFamily: "'Cutive Mono', monospace" }}
      >
        About TED Club of MIT
      </motion.h1>

      <div className="flex flex-col items-center gap-6 w-full max-w-screen">
        {/* Preamble Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="bg-transparent p-6 rounded-lg shadow-2xl transition-transform duration-300 hover:shadow-red-500 w-full md:w-2/3"
        >
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 0.99,
              textShadow: "0px 0px 8px rgba(239, 68, 68, 0.8)",
              transition: { duration: 0.3 }
            }}
            className="text-4xl font-semibold text-red-400 transition-all hover:text-red-300 inline-flex items-center"
          >
            <FaBook size={32} className="mr-2" />
            PREAMBLE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-3 text-lg leading-relaxed text-white"
            style={{ fontFamily: "'Cutive Mono', monospace" }}
          >
            To cultivate a vibrant community of innovators at MIT by fostering the exchange of ideas through
            local forums, we aim to empower students to think critically, share their unique perspectives, and
            engage with diverse voices across various fields. The TED Club of MIT ignites intellectual
            curiosity and broadens student perspectives.
          </motion.p>
        </motion.div>

        {/* Goal Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="bg-transparent p-6 rounded-lg shadow-2xl transition-transform duration-300 hover:shadow-red-500 w-full md:w-2/3"
        >
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 0.99,
              textShadow: "0px 0px 8px rgba(239, 68, 68, 0.8)",
              transition: { duration: 0.3 }
            }}
            className="text-4xl font-semibold text-red-400 transition-all hover:text-red-300 inline-flex items-center"
          >
            <FaBullseye size={32} className="mr-2" />
            GOAL
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-3 text-lg leading-relaxed text-white"
            style={{ fontFamily: "'Cutive Mono', monospace" }}
          >
            With a goal of organizing a TEDx event on a huge scale, this club would work to identify the
            inherent talent of students with direct insight and to design a theme to conduct interactive talks.
            The club would also inspire students to think from a broader perspective and introduce them to
            newer developments in all research fields of interest of students. The club would also identify and
            invite potential speakers of various research fields and professions.
          </motion.p>
        </motion.div>
      </div>

      {/* Our Team Section */}
      
        <motion.div
          className="p-8 min-h-screen bg-cover bg-center text-white overflow-x-hidden bg-black dark:bg-black w-full max-w-screen"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
         <motion.h1
  style={{ fontFamily: "'Cutive Mono', monospace" }}
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7 }}
  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 text-center mb-4 sm:mb-6"
>
  Meet Our Journey Makers
</motion.h1>
          <Group_Images />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="transition-transform duration-300 hover:shadow-red-500 mt-6 w-full"
          >
            <motion.h1
  style={{ fontFamily: "'Cutive Mono', monospace" }}
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7 }}
  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 text-center mb-4 sm:mb-6 justify-center"
>
  Meet Our Leading Crew
</motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6  w-full h-full overflow-hidden max-w-screen flex justify-center items-center"
          >
            {teamMembers.map((member, index) => (
              <div key={index} className="w-full aspect-[4/3]"> {/* Responsive aspect ratio */}
      <TeamCard member={member} />
    </div>
            ))}
          </motion.div>
        </motion.div>
    </motion.div>
  </div>
);

};

export default About;
