import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    nama: "Ibu Ratna",
    sekolah: "SD Tunas Bangsa",
    foto: "https://randomuser.me/api/portraits/women/45.jpg",
    pesan:
      "SchoolTrans membantu kami mengelola rute dan jadwal antar-jemput siswa lebih efisien. Sistem pelaporan juga sangat mendukung kegiatan administrasi sekolah.",
  },
  {
    nama: "Bapak Hendra",
    sekolah: "SMP Harapan Mulia",
    foto: "https://randomuser.me/api/portraits/men/33.jpg",
    pesan:
      "Dengan fitur pelacakan real-time, kami dapat memastikan keamanan siswa selama perjalanan. Orang tua juga merasa lebih tenang.",
  },
  {
    nama: "Ibu Sulastri",
    sekolah: "TK Pelita Nusantara",
    foto: "https://randomuser.me/api/portraits/women/52.jpg",
    pesan:
      "Platform ini sangat membantu staf TU untuk memantau kehadiran dan pergerakan armada. Semua jadi lebih rapi dan mudah.",
  },
];

export default function Testimonials() {
  const [likes, setLikes] = useState(Array(testimonials.length).fill(0));

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleLike = (index) => {
    const updatedLikes = [...likes];
    updatedLikes[index]++;
    setLikes(updatedLikes);
  };

  return (
    <section
      id="testimonials"
      aria-label="Testimoni sekolah mitra"
      className="bg-white py-5 px-4 md:px-10 font-poppins mt-2 mb-8"
    >
      <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8">
        <div
          className="max-w-2xl mx-auto text-center"
          data-aos="fade-up"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-blue-700">
            Testimoni dari Sekolah Mitra
          </h2>
        </div>

        <ul className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <li
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                {/* Kutipan Icon */}
                <svg
                  aria-hidden="true"
                  width="105"
                  height="78"
                  className="absolute left-6 top-6 fill-slate-100"
                >
                  <path d="M25.086 77.292c...Z" />
                </svg>

                {/* Isi Testimoni */}
                <blockquote className="relative">
                  <p className="text-lg tracking-tight text-slate-900">{item.pesan}</p>
                </blockquote>

                {/* Identitas + Like */}
                <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div>
                    <div className="font-medium text-slate-900">{item.nama}</div>
                    <div className="text-sm text-slate-600">{item.sekolah}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      src={item.foto}
                      alt={item.nama}
                      className="h-14 w-14 rounded-full object-cover"
                    />
                    <button
                      onClick={() => handleLike(index)}
                      className="text-red-500 hover:scale-110 transition transform"
                      title="Apresiasi"
                    >
                      ❤️ <span className="ml-1 text-slate-700">{likes[index]}</span>
                    </button>
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
