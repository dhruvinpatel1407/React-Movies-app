import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50">
  <div className="flex items-center justify-between bg-black px-4 py-5">
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
    <ul className="flex space-x-6 text-white">
      <li>
        <Link to="/home" className="flex items-center text-xl hover:text-gray-300">
          <h6>Home</h6>
        </Link>
      </li>
      <li>
        <Link to="/login" className="flex items-center text-xl hover:text-gray-300">
          <h6>Login</h6>
        </Link>
      </li>
      <li>
        <Link to="/movies" className="flex items-center text-xl hover:text-gray-300">
          <h6>Movies</h6>
        </Link>
      </li>
      <li>
        <Link to="/about" className="flex items-center text-xl hover:text-gray-300">
          <h6>About</h6>
        </Link>
      </li>
      <li>
        <Link to="/contact" className="flex items-center text-xl hover:text-gray-300">
          <h6>Contact</h6>
        </Link>
      </li>
      
    </ul>
  </div>
</nav>
</>
  );
}

export default Navbar;
