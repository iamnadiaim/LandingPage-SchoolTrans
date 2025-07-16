import React, { useEffect } from "react";
import {
  FaMapMarkedAlt,
  FaUserCheck,
  FaBusAlt,
  FaBell,
  FaShieldAlt,
  FaCogs,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function KenapaPilihKami() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const keunggulanList = [
    {
      icon: <FaMapMarkedAlt className="text-blue-500 text-4xl" />,
      title: "Pelacakan Real-time",
      desc: "Pantau posisi armada secara langsung melalui dashboard sekolah untuk memastikan ketepatan rute dan waktu.",
    },
    {
      icon: <FaUserCheck className="text-green-500 text-4xl" />,
      title: "Sopir Profesional",
      desc: "Seluruh pengemudi telah melalui proses pelatihan, ramah anak, dan mengikuti standar keselamatan transportasi sekolah.",
    },
    {
      icon: <FaBusAlt className="text-indigo-500 text-4xl" />,
      title: "Armada Nyaman & Aman",
      desc: "Kendaraan dilengkapi AC, CCTV, sabuk pengaman, dan kursi anak, serta rutin melalui pengecekan berkala.",
    },
    {
      icon: <FaBell className="text-yellow-500 text-4xl" />,
      title: "Notifikasi Otomatis",
      desc: "Orang tua mendapatkan pemberitahuan otomatis via WhatsApp saat anak dijemput dan tiba di tujuan.",
    },
    {
      icon: <FaCogs className="text-purple-500 text-4xl" />,
      title: "Manajemen Terintegrasi",
      desc: "Sekolah dapat mengelola data siswa, jadwal rute, pengemudi, dan laporan harian melalui satu sistem digital.",
    },
  ];

  return (
    <section className="pt-4 px-4 md:px-6 lg:px-20 bg-white font-poppins">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2
          className="text-3xl font-extrabold text-blue-600 mb-5"
          data-aos="fade-up"
        >
          Kenapa Sekolah Memilih SchoolTrans?
        </h2>
        <p
          className="text-lg text-gray-600 max-w-md mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          SchoolTrans hadir sebagai solusi manajemen transportasi digital yang
          membantu sekolah dalam mengelola layanan antar-jemput siswa secara
          efisien, aman, dan terintegrasi.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 text-center">
        {keunggulanList.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="bg-gray-50 p-5 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 mx-auto w-full max-w-xs"
          >
            <div className="mb-3 flex justify-center">{item.icon}</div>
            <h3 className="text-base font-semibold text-gray-800 mb-1">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
