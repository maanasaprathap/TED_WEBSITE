import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Innovate_19 = () =>{
    return(
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
          Breaking Barriers
        </motion.h1>
        <p className="text-sm text-gray-500 text-center">TEDcMIT - Innovate 19, February 6, 2019</p>
        <motion.img
          src="/assets/Events/2019/innovate-19-1.0.jpg"
          alt="Innovate 19 1.0"
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
          <strong>Verbalized spotlights of the event</strong><br></br>

Lighting of the Kuthu Vilaku by the dignitaries
Welcome address from Dr.P.Prakash, President, TEDc MIT
Presidential address from Prof. Dr.T.Thyagarajan, The Dean, MIT<br></br>
<br />

<strong>Rhetoricians of INNOVATE'19</strong><br />

Ms. Vanathi Balasubramaniyam | Founder of Non Governmental Organisation - 'ThatsMyChild'

Soundarya Lakshmi Narayanan | Student - Entrepreneur and CEO of 'NxtStep Robotics'

Mr.Jagan | stand-up comedian

Ms.Malini Jeevarathnam | Film maker and Social activist


Online games were conducted by the club through social media for motivating the enthusiastic audience.

TEDc MIT takes privilege in thanking all the club members, dignitaries, speakers of the show and our exuberant audience for making the event a memorable one.We are eager to present you more of such interesting events very soon!


        </motion.p>
        
      </motion.div>
    </div>
    );
}