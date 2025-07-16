import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import bis from "../assets/bis2.jpg";
import hubungikami from "../assets/hubungikami.png";

export default function CuplikanHarga() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const paketPopuler = {
    title: "Paket Premium",
    harga: "Rp 450.000 / bulan",
    fitur: [
      "Semua fitur Reguler",
      "Lacak lokasi real-time",
      "Notifikasi otomatis ke orang tua",
      "Prioritas penjemputan",
    ],
  };

  return (
    <section className="w-full px-4 md:px-12 font-poppins mt-24 mb-24 space-y-14">
      {/* Blok Harga */}
      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300 bg-white"
        data-aos="fade-up"
      >
        <div className="w-full md:w-1/2" data-aos="fade-right">
          <img
            src={bis}
            alt="Latar Harga"
            className="w-full h-[250px] md:h-full object-cover"
          />
        </div>

        <div
          className="w-full md:w-1/2 p-6 md:p-10 bg-white"
          data-aos="fade-left"
        >
          <span className="inline-block mb-3 px-4 py-1 text-sm bg-blue-600 text-white rounded-full font-medium shadow-lg">
            Paling Populer
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2">
            {paketPopuler.title}
          </h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">
            {paketPopuler.harga}
          </p>
          <ul className="text-gray-700 text-left space-y-2 mb-6">
            {paketPopuler.fitur.map((fitur, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 mt-2 rounded-full bg-blue-500 mr-3" />
                {fitur}
              </li>
            ))}
          </ul>
          <button
            onClick={() => navigate("/harga")}
            className="mt-2 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Lihat Semua Paket
          </button>
        </div>
      </div>

      {/* Blok Hubungi Kami */}
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center bg-blue-50 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
        data-aos="fade-up"
      >
        <div className="w-full h-full">
          <img
            src={hubungikami}
            alt="Hubungi Kami"
            className="w-full h-[250px] md:h-full object-cover"
          />
        </div>

        <div className="p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
            Masih Bingung? Hubungi Kami Sekarang
          </h2>
          <p className="text-gray-700 mb-6">
            Tim kami siap membantu menjawab pertanyaan Anda seputar layanan
            SchoolTrans. Dapatkan konsultasi gratis dan informasi penawaran
            terbaik.
          </p>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
}
