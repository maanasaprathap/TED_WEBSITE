import { motion } from "framer-motion";
import ContactSection from "../components/ContactForm";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Starts faded out and slightly below
      animate={{ opacity: 1, y: 0 }} // Moves to normal position
      exit={{ opacity: 0, y: -20 }} // Fades out and moves up on exit
      transition={{ duration: 0.5 }} // Smooth transition
      className="p-16 bg-black dark:bg-black"
    >
      <h1 className="text-4xl font-bold text-red-600 text-center mb-8">CONTACT US</h1>
      <ContactSection />
    </motion.div>
  );
};

export default Contact;
