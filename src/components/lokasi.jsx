import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import lokasi1 from "../assets/lokasi1.png";
import lokasi2 from "../assets/lokasi2.png";
import lokasi3 from "../assets/lokasi3.png";

export default function Lokasi() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const lokasi = [
    {
      nama: "Pusat SchoolTrans - Banyuwangi",
      alamat: "Jl. Raya Banyuwangi No.123, Jawa Timur",
      deskripsi:
        "Pusat operasional utama SchoolTrans yang melayani seluruh wilayah Banyuwangi dengan armada terbaik.",
      gambar: lokasi1,
      posisiKiri: true,
    },
    {
      nama: "Cabang Genteng",
      alamat: "Jl. Raya Genteng No.45, Banyuwangi",
      deskripsi:
        "Cabang Genteng hadir untuk melayani kebutuhan transportasi siswa di wilayah selatan Banyuwangi.",
      gambar: lokasi2,
      posisiKiri: false,
    },
    {
      nama: "Cabang Jember",
      alamat: "Jl. Gajah Mada No.10, Jember",
      deskripsi:
        "Cabang Jember fokus melayani area kota dan kabupaten Jember dengan layanan antar jemput anak sekolah.",
      gambar: lokasi3,
      posisiKiri: true,
    },
  ];

  return (
    <section className="bg-white text-gray-800 pt-32 pb-10 px-4 md:px-20 lg:px-32 font-poppins">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl font-extrabold text-blue-600 text-center mb-4"
          data-aos="fade-up"
        >
          Lokasi Kami
        </h2>
        <p
          className="text-lg text-gray-600 mb-14 text-center max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Temukan pusat dan cabang SchoolTrans yang tersebar di berbagai kota strategis di Indonesia. Kami hadir lebih dekat dengan Anda untuk memastikan layanan antar-jemput sekolah yang aman, nyaman, dan tepat waktu di setiap wilayah operasional kami.
        </p>

        {lokasi.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              !item.posisiKiri ? "md:flex-row-reverse" : ""
            } items-center gap-10 mb-16`}
            data-aos={item.posisiKiri ? "fade-right" : "fade-left"}
            data-aos-delay="300"
          >
            <div className="md:w-1/2">
              <img
                src={item.gambar}
                alt={item.nama}
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-3">
                {item.nama}
              </h3>
              <p className="text-gray-700 mb-1">{item.alamat}</p>
              <p className="text-gray-600">{item.deskripsi}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
