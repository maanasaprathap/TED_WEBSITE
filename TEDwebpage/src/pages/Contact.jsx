import { motion } from "framer-motion";
import ContactSection from "../components/ContactForm";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Starts faded out and slightly below
      animate={{ opacity: 1, y: 0 }} // Moves to normal position
      exit={{ opacity: 0, y: -20 }} // Fades out and moves up on exit
      transition={{ duration: 0.5 }} // Smooth transition
      className="p-8 bg-black dark:bg-black"
    >
      <h1 className="text-3xl font-bold text-red-600">Contact Us</h1>
      <ContactSection />
    </motion.div>
  );
};

export default Contact;
