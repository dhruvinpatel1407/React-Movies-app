import React,{useState} from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between bg-black px-4 py-5 z-50">
        <Link to="#" className="flex items-center">
          <div className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-box2-heart-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4zM8.5 4h6l.5.667V5H1v-.333L1.5 4h6V1h1zM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
            </svg>
          </div>
        </Link>

        {/* Hamburger Button */}
        <button
          className="text-white block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
                class="w-10 h-8 flex flex-col justify-between cursor-pointer"
              >
                <span class="block w-full h-1 bg-white"></span>
                <span class="block w-full h-1 bg-white"></span>
                <span class="block w-full h-1 bg-white"></span>
                <span class="block w-3/5 h-1 bg-white"></span>
              </div>
        </button>

        {/* Menu Items */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-x-6 text-white absolute md:static top-16 left-0 w-full bg-black md:bg-transparent md:w-auto px-4 md:px-0`}
        >
          <li onClick={closeMenu}>
            <Link
              to="/home"
              className="flex items-center justify-center text-xl hover:text-gray-300"
            >
              <h6>Home</h6>
            </Link >
          </li>
          
          <li onClick={closeMenu}>
            <Link
              to="/movies"
              className="flex items-center justify-center text-xl hover:text-gray-300"
            >
              <h6>Movies</h6>
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link
              to="/about"
              className="flex items-center justify-center text-xl hover:text-gray-300"
            >
              <h6>About</h6>
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link
              to="/contact"
              className="flex items-center justify-center text-xl hover:text-gray-300"
            >
              <h6>Contact</h6>
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link  
              to="/movie-world/:formType"
              className="flex items-center justify-center text-xl hover:text-gray-300"
            >
              <h6 className="bg-red-900 border border-2 border-white text-white roundrd px-2 py-1">Login</h6>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
