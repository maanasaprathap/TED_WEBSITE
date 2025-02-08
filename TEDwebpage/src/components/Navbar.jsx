import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="bg-blue-800 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">
  <span className="text-red-600">TEDc</span>
  <span className="text-white">MIT</span>
</h1>
        <div>
          <Link className="mx-2" to="/">Home</Link>
          <Link className="mx-2" to="/about">About</Link>
          <Link className="mx-2" to="/events">Events</Link>
          <Link className="mx-2" to="/speakers">Speakers</Link>
          <Link className="mx-2" to="/join-us">Join Us</Link>
          <Link className="mx-2" to="/gallery">Gallery</Link>
          <Link className="mx-2" to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
