import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isTentangKamiOpen, setTentangKamiOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setTentangKamiOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinkClass = (path) =>
    `block font-medium py-2 md:py-0 ${
      currentPath === path
        ? "text-indigo-600 font-semibold border-b-2 md:border-none md:pb-0 border-indigo-600"
        : "text-gray-600 hover:text-indigo-600"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm px-4 md:px-8">
  <div className="max-w-7xl mx-auto flex items-center justify-between py-0 md:py-1 max-h-[80px]">
    {/* Logo & Hamburger */}
    <div className="flex items-center justify-between w-full md:w-auto gap-x-4">
      <Link to="/" className="flex items-center">
        <img
          src={logo}
          alt="SchoolTrans Logo"
          className="h-[100px] w-auto object-contain"
        />
      </Link>
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden text-2xl text-gray-700 focus:outline-none"
      >
        {isMobileMenuOpen ? <FiX /> : <FiMenu />}
      </button>
    </div>
        {/* Navigation */}
        <nav
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:space-x-8 md:w-auto mt-4 md:mt-0`}
        >
          <Link to="/home" className={navLinkClass("/home")}>
            Home
          </Link>

          {/* Dropdown Profil */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setTentangKamiOpen(!isTentangKamiOpen)}
              className={`flex items-center gap-1 font-medium py-2 md:py-0 ${
                ["/tentangkami", "/mitra"].includes(currentPath)
                  ? "text-indigo-600 font-semibold"
                  : "text-gray-600 hover:text-indigo-600"
              }`}
            >
              Profil
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isTentangKamiOpen && (
              <div className="absolute top-10 left-0 w-48 bg-white rounded-md shadow-lg py-2 border z-50">
                <Link
                  to="/tentangkami"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setTentangKamiOpen(false)}
                >
                  Tentang Kami
                </Link>
                <Link
                  to="/mitra"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setTentangKamiOpen(false)}
                >
                  Mitra
                </Link>
              </div>
            )}
          </div>

          <Link to="/fitur" className={navLinkClass("/fitur")}>
            Fitur
          </Link>
          <Link to="/harga" className={navLinkClass("/harga")}>
            Harga
          </Link>
          <Link to="/lokasi" className={navLinkClass("/lokasi")}>
            Lokasi
          </Link>

          {/* Login & Daftar (on mobile) */}
          <div className="mt-4 flex flex-col space-y-2 md:hidden">
            <Link
              to="/login"
              className={`text-base font-medium ${
                currentPath === "/login"
                  ? "text-indigo-600 font-semibold"
                  : "text-gray-600 hover:text-indigo-600"
              }`}
            >
              Login
            </Link>
            <Link
              to="/daftar"
              className={`inline-block text-center px-4 py-2 rounded-md text-white text-base font-medium ${
                currentPath === "/daftar"
                  ? "bg-indigo-700"
                  : "bg-indigo-600 hover:bg-indigo-500"
              }`}
            >
              Daftar
            </Link>
          </div>
        </nav>

        {/* Login & Daftar (on desktop) */}
        <div className="hidden md:flex md:items-center space-x-6">
          <Link
            to="/login"
            className={`text-base font-medium ${
              currentPath === "/login"
                ? "text-indigo-600 font-semibold"
                : "text-gray-600 hover:text-indigo-600"
            }`}
          >
            Login
          </Link>
          <Link
            to="/daftar"
            className={`inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white ${
              currentPath === "/daftar"
                ? "bg-indigo-700"
                : "bg-indigo-600 hover:bg-indigo-500"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600`}
          >
            Daftar
          </Link>
        </div>
      </div>
    </header>
  );
}
