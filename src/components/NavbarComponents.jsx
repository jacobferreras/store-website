import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollY(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`sticky top-0 z-50`}>
      <section
        className={`flex justify-between items-center navbar ${
          scrollY > screen.height
            ? "bg-slate-200 opacity-80 font-semibold"
            : "bg-white"
        }`}
      >
        {/* Mobile hamburger - left side */}
        <div className="lg:hidden">
          <button className="btn btn-ghost btn-circle" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Logo - center on mobile, left on desktop */}
        <div className="flex-1 lg:pl-20 flex justify-center lg:justify-start">
          <a href="index.html">
            <img
              src="./src/assets/Tindahan Ni Paul.png"
              alt=""
              className="h-12"
            />
          </a>
        </div>

        {/* Desktop navigation menu */}
        <div className="hidden lg:flex flex-none">
          <ul className="menu menu-horizontal px-1 text-black text-lg font-mono">
            <li className="hover:text-red-600">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-red-600">
              <Link to="/Shop">Shop</Link>
            </li>
            <li className="hover:text-red-600">
              <Link to="/About">About</Link>
            </li>
            <li className="hover:text-red-600">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Search and Cart - right side */}
        <div className="flex-none pr-4 md:pr-20 lg:flex items-center">
          <button className="btn btn-ghost btn-circle hover:bg-transparent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          <div className="dropdown dropdown-end">
            <div
              tabIndex="0"
              role="button"
              className="btn btn-ghost btn-circle hover:bg-transparent text-black"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex="0"
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="menu menu-vertical px-4 py-2 text-black text-lg font-mono">
            <li className="hover:text-red-600">
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="hover:text-red-600">
              <Link to="/Shop" onClick={toggleMenu}>
                Shop
              </Link>
            </li>
            <li className="hover:text-red-600">
              <Link to="/About" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li className="hover:text-red-600">
              <Link to="/Contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
