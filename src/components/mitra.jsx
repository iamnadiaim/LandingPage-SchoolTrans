import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import tk1 from "../assets/tk1.jpg";
import tk2 from "../assets/tk2.jpg";
import tk3 from "../assets/tk3.jpg";
import tk4 from "../assets/tk4.jpg";
import tk5 from "../assets/tk5.jpg";
import sd1 from "../assets/sd1.jpg";
import sd2 from "../assets/sd2.jpg";
import sd3 from "../assets/sd3.jpg";
import sd4 from "../assets/sd4.jpg";
import sd5 from "../assets/sd5.jpg";
import sd6 from "../assets/sd6.jpg";
import smp1 from "../assets/smp1.jpg";
import smp2 from "../assets/smp2.jpg";
import smp3 from "../assets/smp3.jpg";
import smp4 from "../assets/smp4.jpg";

const sekolahData = [
  { logo: tk1, nama: "TK Ceria Harapan", unit: 50 },
  { logo: sd1, nama: "SD Tunas Bangsa", unit: 180 },
  { logo: smp1, nama: "SMP Harapan Mulia", unit: 170 },
  { logo: sd2, nama: "SD Cahaya Ilmu", unit: 150 },
  { logo: tk2, nama: "TK Pelita Nusantara", unit: 100 },
  { logo: smp2, nama: "SMP Bakti Anak Negeri", unit: 110 },
  { logo: sd3, nama: "SD Unggulan Mandiri", unit: 130 },
  { logo: tk3, nama: "TK Kasih Ibu", unit: 75 },
  { logo: smp3, nama: "SMP Ceria Sejahtera", unit: 95 },
  { logo: sd4, nama: "SD Alam Nusantara", unit: 145 },
  { logo: tk4, nama: "TK Pintar Cendekia", unit: 60 },
  { logo: sd5, nama: "SD Pelita Hati", unit: 125 },
  { logo: smp4, nama: "SMP Maju Jaya", unit: 98 },
  { logo: tk5, nama: "TK Bunga Bangsa", unit: 80 },
  { logo: sd6, nama: "SD Bina Anak Sholeh", unit: 140 },
];

export default function SemuaMitra() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-white text-gray-800 pt-32 pb-10 px-4 md:px-20 lg:px-32 font-poppins">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl md:text-3xl font-bold text-center text-blue-700 mb-10"
          data-aos="fade-up"
        >
          Sekolah Mitra SchoolTrans
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {sekolahData.map((item, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className="bg-white border border-gray-200 p-4 rounded-xl text-center shadow hover:shadow-md transition duration-300"
            >
              <div className="w-24 h-16 mx-auto mb-3">
                <img
                  src={item.logo}
                  alt={item.nama}
                  className="object-contain h-full w-full"
                />
              </div>
              <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                {item.nama}
              </h3>
              <p className="text-gray-500 text-sm">{item.unit} Siswa</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
