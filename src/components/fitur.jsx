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

export default function FiturArmada() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const fiturList = [
    {
      icon: <FaBus className="text-blue-500 text-3xl" />,
      title: "Armada Sesuai Jenjang",
      desc: "Bus sekolah disesuaikan dengan kebutuhan siswa TK, SD, hingga SMA. Setiap armada dilengkapi AC, sabuk pengaman, dan tempat duduk nyaman.",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: <FaShieldAlt className="text-purple-500 text-3xl" />,
      title: "Keamanan Terjamin",
      desc: "Fasilitas lengkap seperti CCTV, sabuk pengaman, dan perawatan rutin untuk memastikan keselamatan selama perjalanan.",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: <FaMapMarkerAlt className="text-green-500 text-3xl" />,
      title: "Pelacakan Real-time",
      desc: "Orang tua dapat memantau lokasi bus secara langsung melalui sistem GPS terintegrasi di website.",
      color: "from-green-400 to-green-600",
    },
    {
      icon: <FaBell className="text-yellow-500 text-3xl" />,
      title: "Notifikasi Perjalanan",
      desc: "Dapatkan notifikasi otomatis saat anak dijemput, tiba di sekolah, dan pulang ke rumah.",
      color: "from-yellow-400 to-yellow-500",
    },
    {
      icon: <FaUserShield className="text-pink-500 text-3xl" />,
      title: "Pengemudi Terlatih",
      desc: "Didampingi pengemudi profesional dan ramah anak yang memahami standar keselamatan transportasi sekolah.",
      color: "from-pink-400 to-pink-600",
    },
  ];

  return (
    <section className="bg-white text-gray-800 pt-40 pb-10 px-4 md:px-20 lg:px-32 font-poppins">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-blue-600 mb-4">
          Fitur & Fasilitas Bus Sekolah
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          SchoolTrans menyediakan layanan bus sekolah yang nyaman dan aman,
          dirancang khusus untuk mendukung kebutuhan siswa dari TK hingga SMA.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {fiturList.map((fitur, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group hover:scale-105"
            >
              <div
                className={`w-14 h-14 mb-4 rounded-full bg-gradient-to-br ${fitur.color} flex items-center justify-center text-white text-2xl shadow-lg`}
              >
                {fitur.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition">
                {fitur.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {fitur.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
