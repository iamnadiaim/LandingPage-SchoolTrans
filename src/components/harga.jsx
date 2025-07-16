import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

export default function Harga() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [paketMode, setPaketMode] = useState("bulanan");
  const navigate = useNavigate();

  const paketBulanan = [
    {
      title: "Paket Reguler",
      harga: "Rp 300.000 / bulan",
      fitur: [
        "Antar jemput sekolah",
        "Sopir berpengalaman",
        "Armada ber-AC",
        "Jadwal tetap",
      ],
      highlight: false,
    },
    {
      title: "Paket Premium",
      harga: "Rp 450.000 / bulan",
      fitur: [
        "Semua fitur Reguler",
        "Lacak lokasi real-time",
        "Notifikasi otomatis ke orang tua",
        "Prioritas penjemputan",
      ],
      highlight: true,
    },
    {
      title: "Paket Khusus",
      harga: "Rp 600.000 / bulan",
      fitur: [
        "Semua fitur Premium",
        "Jadwal fleksibel",
        "Layanan darurat",
        "Asuransi dasar anak",
      ],
      highlight: false,
    },
  ];

  const paketTahunan = [
    {
      title: "Reguler Tahunan",
      harga: "Rp 3.200.000 / tahun",
      fitur: [
        "Antar jemput sekolah",
        "Sopir berpengalaman",
        "Armada ber-AC",
        "Jadwal tetap",
      ],
      highlight: false,
    },
    {
      title: "Premium Tahunan",
      harga: "Rp 4.800.000 / tahun",
      fitur: [
        "Semua fitur Reguler",
        "Lacak lokasi real-time",
        "Notifikasi otomatis ke orang tua",
        "Prioritas penjemputan",
      ],
      highlight: true,
    },
    {
      title: "Khusus Tahunan",
      harga: "Rp 5.800.000 / tahun",
      fitur: [
        "Semua fitur Premium",
        "Jadwal fleksibel",
        "Layanan darurat",
        "Asuransi dasar anak",
      ],
      highlight: false,
    },
  ];

  const paketList = paketMode === "bulanan" ? paketBulanan : paketTahunan;

  return (
    <section className="min-h-screen bg-white text-gray-800 pt-40 pb-10 px-4 md:px-20 lg:px-32 font-poppins">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-4" data-aos="fade-down">
          Paket Harga
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto" data-aos="fade-up">
          Pilih paket transportasi yang sesuai dengan kebutuhan dan kenyamanan anak Anda.
        </p>

        {/* Toggle Bulanan / Tahunan */}
        <div className="flex justify-center flex-wrap gap-4 mb-14" data-aos="fade-up">
          {["bulanan", "tahunan"].map((mode) => (
            <button
              key={mode}
              onClick={() => setPaketMode(mode)}
              className={`px-6 py-2 rounded-full font-semibold border capitalize ${
                paketMode === mode
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-blue-600 border-blue-600 hover:bg-blue-50"
              } transition`}
            >
              Paket {mode}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {paketList.map((paket, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className={`relative border rounded-2xl p-8 transition-all duration-300 shadow-md ${
                paket.highlight
                  ? "border-blue-600 bg-white scale-105"
                  : "border-gray-200 bg-gray-50"
              } hover:shadow-xl`}
            >
              {paket.highlight && (
                <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
                  Paling Populer
                </span>
              )}
              <h3 className={`text-2xl font-bold mb-4 ${paket.highlight ? "text-blue-700" : "text-gray-800"}`}>
                {paket.title}
              </h3>
              <p className="text-xl font-semibold text-gray-700 mb-6">{paket.harga}</p>
              <ul className="text-gray-600 text-left space-y-3 mb-8">
                {paket.fitur.map((fitur, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                    {fitur}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 rounded-lg font-semibold ${
                  paket.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                } transition`}
                onClick={() => navigate("/login")}
              >
                Pilih Paket
              </button>
              {paketMode === "tahunan" && (
                <p className="text-xs text-gray-500 italic mt-4">
                  *Harga lebih hemat dibanding bulanan
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
