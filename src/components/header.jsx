import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isTentangKamiOpen, setTentangKamiOpen] = useState(false);
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
    `mr-5 font-medium leading-6 ${
      currentPath === path
        ? "text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1"
        : "text-gray-600 hover:text-indigo-600"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm px-8 text-gray-700">
      <div className="container mx-auto flex flex-col flex-wrap items-center justify-between py-1 md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row">
          <Link
            to="/"
            className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
          >
            <img src={logo} alt="SchoolTrans Logo" className="h-[100px] w-auto" />
          </Link>

          <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
            <Link to="/home" className={navLinkClass("/home")}>
              Home
            </Link>

            {/* Dropdown Profil */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setTentangKamiOpen(!isTentangKamiOpen)}
                className={`mr-5 font-medium leading-6 flex items-center gap-1 ${
                  ["/tentangkami", "/mitra"].includes(currentPath)
                    ? "text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1"
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
                <div className="absolute top-10 left-0 z-50 w-48 bg-white rounded-md shadow-lg py-2 border border-gray-100">
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
          </nav>
        </div>

        {/* Login & Daftar */}
        <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
          <Link
            to="/login"
            className={`text-base font-medium leading-6 ${
              currentPath === "/login"
                ? "text-indigo-600 font-semibold"
                : "text-gray-600 hover:text-indigo-600"
            }`}
          >
            Login
          </Link>
          <Link
            to="/daftar"
            className={`inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white ${
              currentPath === "/daftar"
                ? "bg-indigo-700"
                : "bg-indigo-600 hover:bg-indigo-500"
            } border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600`}
          >
            Daftar
          </Link>
        </div>
      </div>
    </header>
  );
}
