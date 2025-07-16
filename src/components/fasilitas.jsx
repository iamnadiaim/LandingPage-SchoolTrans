import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaBus,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaBell,
  FaUserShield,
} from "react-icons/fa";

export default function FasilitasArmada() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const fasilitasList = [
    {
      icon: <FaBus className="text-blue-500 text-3xl" />,
      title: "Armada Sesuai Jenjang",
      desc: "Bus disesuaikan untuk siswa TK, SD, hingga SMP. Dilengkapi AC, sabuk pengaman, dan tempat duduk nyaman.",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: <FaShieldAlt className="text-purple-500 text-3xl" />,
      title: "Keamanan Terjamin",
      desc: "Fasilitas seperti CCTV, sabuk pengaman, dan servis rutin memastikan perjalanan tetap aman.",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: <FaUserShield className="text-pink-500 text-3xl" />,
      title: "Pengemudi Profesional",
      desc: "Didampingi oleh pengemudi yang ramah, berpengalaman, dan memahami standar keselamatan sekolah.",
      color: "from-pink-400 to-pink-600",
    },
  ];

  return (
    <section className="bg-white text-gray-800 py-20 px-6 md:px-12 font-poppins">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-4">
          Fasilitas Armada
        </h2>
        <p className="text-lg text-gray-600 mb-14 max-w-2xl mx-auto">
          Kami menghadirkan bus sekolah yang nyaman dan aman, dilengkapi dengan fasilitas terbaik untuk mendukung mobilitas siswa secara optimal.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {fasilitasList.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group hover:scale-105"
            >
              <div
                className={`w-14 h-14 mb-4 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-2xl shadow-lg`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
