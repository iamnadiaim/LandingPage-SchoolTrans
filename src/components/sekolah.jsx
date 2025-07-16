import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import tk1 from "../assets/tk1.jpg";
import sd1 from "../assets/sd1.jpg";
import smp1 from "../assets/smp1.jpg";
import sd2 from "../assets/sd2.jpg";

const sekolahPreview = [
  { logo: tk1, nama: "TK Ceria Harapan", unit: 50 },
  { logo: sd1, nama: "SD Tunas Bangsa", unit: 180 },
  { logo: smp1, nama: "SMP Harapan Mulia", unit: 170 },
  { logo: sd2, nama: "SD Cahaya Ilmu", unit: 150 },
];

export default function Sekolah() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 px-4 md:px-12 bg-white font-poppins">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-2xl md:text-3xl font-bold text-center text-blue-700 mb-10"
          data-aos="fade-up"
        >
          Dipercaya oleh Sekolah Mitra di Indonesia
        </h2>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {sekolahPreview.map((item, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 150}
              className="bg-white shadow-sm border border-gray-200 p-4 rounded-lg text-center"
            >
              <div className="w-28 h-16 mx-auto mb-3">
                <img
                  src={item.logo}
                  alt={item.nama}
                  className="object-contain h-full w-full"
                />
              </div>
              <h3 className="font-semibold text-sm md:text-base text-gray-900">
                {item.nama}
              </h3>
              <p className="text-sm text-gray-600">{item.unit} Siswa</p>
            </div>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up" data-aos-delay="400">
          <button
            onClick={() => navigate("/mitra")}
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-all duration-300"
          >
            Lihat Semua Sekolah Mitra
          </button>
        </div>
      </div>
    </section>
  );
}
