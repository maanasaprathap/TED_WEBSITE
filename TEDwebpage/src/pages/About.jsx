import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

import { FaBullseye } from "react-icons/fa";

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
const TeamCard = ({ member }) => {
  return (
    <div className="w-full h-full" style={{ perspective: "1000px" }}>
      <motion.div
        className="relative w-full h-full"
        whileHover={{
          rotateY: 180,
          scale: 1.05,
          boxShadow: "0 0 15px rgba(239,68,68,0.8)"
        }}
        transition={{ duration: 0.5 }}
        style={{
          transformStyle: "preserve-3d",
          boxShadow: "0 0 8px rgba(239,68,68,0.4)"
        }}
      >
        {/* Front Side */}
        

          <div className="h-4/4">
            {member.img ? (
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: getObjectPosition(member.name) }}
              />
            ) : null}
          </div>
          
        
        {/* Back Side */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center bg-red-200 rounded-xl shadow-md p-4"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <p
            className="text-gray-800 text-3xl font-bold"
            style={{ fontFamily: "'Caviar Dreams', sans-serif" }}
          >
            {member.name}
          </p>
          <p
            className="text-gray-800 text-2xl mt-2"
            style={{ fontFamily: "'Cutive Mono', monospace" }}
          >
            {member.position}
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href={member.git}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500"
            >
              <FaGithub size={24} />
            </a>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href={member.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500"
            >
              <FaInstagram size={24} />
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
      name: "Selvalingam B",
      position: "Chairperson",
       img: "public/assets/Team_Images/selvalingam B.jpg",
      git: "../alice",
      linkedin: "..alice",
      instagram: "..alice",
    },
    {
      name: "Shanthosh S",
      position: "Vice-Chairperson",
      img: "public/assets/Team_Images/Shanthosh S.jpg",
      git: "../bob",
      linkedin: "..bob",
      instagram: "..bob",
    },
    {
      name: "Shalini M",
      position: "Vice-Chairperson",
      img: "public/assets/Team_Images/Shalini M.jpg",
      git: "../charlie",
      linkedin: "..charlie",
      instagram: "..charlie",
    },
    {
      name: "Thennarasu V",
      position: "General Secratory",
      img: "public/assets/Team_Images/Thennarasu V.jpg",
      git: "../david",
      linkedin: "..david",
      instagram: "..david",
    },
    {
      name: "Anish H",
      position: "Treasurer",
      img: "public/assets/Team_Images/Anish H.jpg",
      git: "../eve",
      linkedin: "..eve",
      instagram: "..eve",
    },
    {
      name: "Thulasidharan C A",
      position: "Head of Public Relations",
      img: "public/assets/Team_Images/Thulasidharan C A.jpg",
      git: "../frank",
      linkedin: "..frank",
      instagram: "..frank",
    },
    {
      name: "Dhinesh K",
      position: "Head of Public Relations",
      img: "public/assets/Team_Images/Dhinesh K.jpg",
      git: "../grace",
      linkedin: "..grace",
      instagram: "..grace",
    },
    {
      name: "Dinesh P",
      position: "Head of Event Management",
      img: "public/assets/Team_Images/Dinesh P.jpg",
      git: "../heidi",
      linkedin: "..heidi",
      instagram: "..heidi",
    },
    {
      name: "Sriram K",
      position: "Head of Event Management",
      img: "public/assets/Team_Images/Sriram K.jpg",
      git: "../ivan",
      linkedin: "..ivan",
      instagram: "..ivan",
    },
    {
      name: "Dhanush M",
      position: "Head of Design",
      img: "public/assets/Team_Images/Dhanush M.jpg",
      git: "../judy",
      linkedin: "..judy",
      instagram: "..judy",
    },
    {
      name: "Sripushkalai S",
      position: "Head of Design",
      img: "public/assets/Team_Images/Sripushkalai S.jpg",
      git: "../kevin",
      linkedin: "..kevin",
      instagram: "..kevin",
    },
    {
      name: "Aishwarya I",
      position: "Head of Content Curation",
      img: "public/assets/Team_Images/Aishwarya I.jpg",
      git: "../laura",
      linkedin: "..laura",
      instagram: "../laura",
    },
    {
      name: "Manivasagam G",
      position: "Head of Content Curation",
      img: "public/assets/Team_Images/Manivasagam G.jpg",
      git: "../mallory",
      linkedin: "..mallory",
      instagram: "..mallory",
    },
    {
      name: "Mukesh L",
      position: "Head of Website Development",
      img: "public/assets/Team_Images/Mukesh L.jpg",
      git: "../niaj",
      linkedin: "..niaj",
      instagram: "..niaj",
    },
   
    
  ];

  return (
    <motion.div
      style={{
        backgroundImage: "url('/assets/Team_Images/background_image.avif')",
        fontFamily: "'Playfair Display', serif",
      }}
      className="p-8 min-h-screen bg-cover bg-center text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* About Header */}
      <motion.h1
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7 }}
  className="text-4xl font-extrabold text-red-500 drop-shadow-lg text-center"
  style={{ fontFamily: "'Cutive Mono', monospace" }}
>
  About TED Club of MIT
</motion.h1>



      {/* Preamble Section */}
      <motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.7 }}
  className="bg-transparent p-6 rounded-lg shadow-2xl transition-transform duration-300 hover:shadow-red-500 mt-6"
>
<motion.h2
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{
    scale: 0.99,
    textShadow: "0px 0px 8px rgba(239, 68, 68, 0.8)",
    transition: { duration: 0.3 }
  }}
  transition={{ duration: 0.1 }}
  className="text-4xl font-semibold text-red-400 transition-all hover:text-red-300 inline-flex items-center"
>
  <FaBook size={32} className="mr-2" />
  PREAMBLE
</motion.h2>


        <motion.p
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.5 }}
  className="mt-3 text-lg leading-relaxed text-gray-200"
  style={{ fontFamily: "'Cutive Mono', monospace" }}
>
          TED Club of MIT creates a <strong>potential forum for sharing innovative ideas</strong>.
          It serves as a platform to <strong>awaken and inspire students</strong> to think independently.
          With the ultimate goal of <strong>organizing a large-scale TEDx event</strong>, the team works to
          identify student talents, design themes for interactive talks, and invite potential
          speakers from <strong>various research fields and professions</strong>.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-3 text-gray-400"
          style={{ fontFamily: "'Cutive Mono', monospace" }}
        >
          TED Club of MIT was founded by a group of final-year students, with guidance from
          one of the most instrumental teaching staff members of MIT, <strong>Dr. P. Prakash</strong>.
        </motion.p>
      </motion.div>

      {/* Goal Section */}
      <motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.7 }}
  className="bg-transparent p-6 rounded-lg shadow-2xl transition-transform duration-300 hover:shadow-red-500 mt-6"
>
  <motion.h2
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{
      scale: 0.99,
      textShadow: "0px 0px 8px rgba(239, 68, 68, 0.8)",
      transition: { duration: 0.3 }
    }}
    transition={{ duration: 0.1 }}
    className="text-4xl font-semibold text-red-400 transition-all hover:text-red-300 inline-flex items-center"
  >
    <FaBullseye size={32} className="mr-2" />
    GOAL
  </motion.h2>
        <motion.p
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.5 }}
  className="mt-3 text-lg leading-relaxed text-gray-200"
  style={{ fontFamily: "'Cutive Mono', monospace" }}
>
          The ultimate goal of TED Club of MIT is to <strong>organize an annual TEDx event</strong>,
          making it the flagship event of the organization. Alongside the flagship event,
          <strong> local events</strong> will be held to create forums for discussion, <strong>sharing ideas</strong>,
          and <strong>inspiring students</strong> to become idea-makers.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-3 text-gray-400"
          style={{ fontFamily: "'Cutive Mono', monospace" }}
        >
          This club also aims to <strong>broaden students' perspectives</strong> and introduce them
          to the <strong>latest developments in various research fields</strong>.
        </motion.p>
      </motion.div>
<br></br>
<br></br>
      {/* Our Team Section */}
      <motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.7 }}
  className=" transition-transform duration-300 hover:shadow-red-500 mt-6"
>
<motion.h2
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{
    scale: 0.99,
    textShadow: "0px 0px 8px rgba(239, 68, 68, 0.8)",
    transition: { duration: 0.3 }
  }}
  transition={{ duration: 0.1 }}
  className="text-4xl font-semibold text-red-400 transition-all hover:text-red-300 inline-flex items-center"
>
<FaUsers size={32} className="mr-2" />
  OUR TEAM
</motion.h2>

</motion.div>


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"
      >
        {teamMembers.map((member, index) => (
  <div key={index} className="h-70">
    <TeamCard member={member} />
  </div>
))}

      </motion.div>
    </motion.div>
  );
};

export default About;
