import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Speakers from "./pages/Speakers";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Feminism from "./components/Article_Pages/Feminism";
import ComfortZoneArticle from "./components/Article_Pages/Comfort_zone";
import DNA_Article from "./components/Article_Pages/DNA";
import ImposterSyndromeArticle from "./components/Article_Pages/Imposter_syndrome";
import { Innovate_18 } from "./components/Events_Articles/innovate_18";
import { Innovate_19 } from "./components/Events_Articles/innovate_19";
import { Innovate_19_2 } from "./components/Events_Articles/innovate_19_2";
import { Innovate_21 } from "./components/Events_Articles/innovate_21";
import { Innovate_22 } from "./components/Events_Articles/innovate_22";
import { Innovate_23 } from "./components/Events_Articles/innovate_23";
import { Innovate_24 } from "./components/Events_Articles/innovate_24";
import { Originate_24 } from "./components/Events_Articles/originate_24";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main content inside Navbar */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/events" element={<Events />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />

        {/* Articles */}
        <Route path="/feminism" element={<Feminism />} />
        <Route path="/comfort-zone" element={<ComfortZoneArticle />} />
        <Route path="/dna-storage" element={<DNA_Article />} />
        <Route path="/imposter-syndrome" element={<ImposterSyndromeArticle />} />

        {/* Event Articles */}
        <Route path="/innovate-18" element={<Innovate_18 />} />
        <Route path="/innovate-19" element={<Innovate_19 />} />
        <Route path="/innovate-19-2" element={<Innovate_19_2 />} />
        <Route path="/innovate-21" element={<Innovate_21 />} />
        <Route path="/innovate-22" element={<Innovate_22 />} />
        <Route path="/innovate-23" element={<Innovate_23 />} />
        <Route path="/innovate-24" element={<Innovate_24 />} />
        <Route path="/originate-24" element={<Originate_24 />} />
      </Routes>
      <About />

      <Footer />
    </Router>
  );
}

export default App;
