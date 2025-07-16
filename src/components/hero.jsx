import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import foto1 from "../assets/foto1.jpg";
import sd3 from "../assets/sd3.jpg";
import smp2 from "../assets/smp2.jpg";
import tk3 from "../assets/tk3.jpg";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const rating = 4.8;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <section className="relative overflow-hidden font-[Poppins] bg-[#f8fafc] text-[#1e293b] mb-10">
      {/* Background Decorative Circles */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-[#f8fafc] to-secondary/5 -z-10" />
      <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-[#4f46e5]/10 animate-[float-reverse_5s_ease-in-out_infinite] -z-10"></div>
      <div className="absolute top-1/3 right-20 w-24 h-24 rounded-full bg-[#10b981]/10 animate-[float_6s_ease-in-out_infinite] -z-10"></div>
      <div className="absolute bottom-20 left-1/4 w-20 h-20 rounded-full bg-[#4f46e5]/15 animate-[float_6s_ease-in-out_infinite] -z-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-[#10b981]/15 animate-[float-reverse_5s_ease-in-out_infinite] -z-10"></div>

      <div className="max-w-7xl mx-auto pt-32 pb-16 px-4 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Right Side (Gambar) tampil di atas saat mobile */}
          <div className="order-1 md:order-2" data-aos="fade-left">
            <div className="relative w-full max-w-md mx-auto">
              {/* Floating Backgrounds */}
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-[#4f46e5]/10 rounded-2xl -z-10 animate-[float_5s_ease-in-out_infinite]" />
              <div className="absolute -bottom-10 -right-5 w-24 h-24 bg-[#10b981]/10 rounded-2xl -z-10 animate-[float-reverse_5s_ease-in-out_infinite]" />

              {/* Gambar */}
              <img
                src={foto1}
                alt="Transportasi Aman"
                loading="lazy"
                className="w-full h-auto rounded-xl shadow-2xl border-8 border-white"
              />

              {/* Badge */}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-lg shadow-md flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium">+85% Kepuasan</span>
              </div>
              <div className="absolute -top-6 right-0 bg-white px-4 py-2 rounded-lg shadow-md">
                <span className="text-sm font-medium">📈 Penggunaan Naik 3x</span>
              </div>
            </div>
          </div>

          {/* Left Side (Teks) tampil di bawah saat mobile */}
          <div className="order-2 md:order-1 text-center md:text-left" data-aos="fade-right">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-[#4f46e5] uppercase rounded-full bg-[#4f46e5]/10 mb-4">
              Transportasi Sekolah Modern
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-[#0f172a]">Transportasi Sekolah</span>{" "}
              <span className="text-[#332FD0]">Aman</span> &{" "}
              <span className="text-[#332FD0]">Cerdas</span>{" "}
              <span className="text-[#0f172a]">Untuk Anak Anda</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Pantau perjalanan anak secara real-time, dapatkan notifikasi otomatis,
              dan rasakan ketenangan setiap hari dengan solusi transportasi sekolah terbaik.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/fitur"
                className="px-8 py-3.5 rounded-lg border-2 border-[#4f46e5] text-[#4f46e5] font-semibold hover:bg-[#4f46e5]/5 transition-all duration-300"
              >
                Jelajahi Fitur
              </Link>
              <Link
                to="/harga"
                className="px-8 py-3.5 rounded-lg bg-[#4f46e5] text-white font-semibold hover:bg-[#4338ca] transition-all duration-300"
              >
                Lihat Harga
              </Link>
            </div>

            {/* Testimoni Rating */}
            <div className="mt-4 flex items-center justify-center md:justify-start gap-6">
              <div className="flex -space-x-2">
                {[tk3, sd3, smp2].map((img, i) => (
                  <img
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white"
                    src={img}
                    alt="Sekolah"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-2 py-2">
                  {[...Array(fullStars)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  {hasHalfStar && (
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15.27L16.18 18l-1.64-7.03L20 7.24l-7.19-.61L10 0v15.27z" />
                    </svg>
                  )}
                </div>
                <p className="text-sm text-gray-600">
                  Rating {rating} dari 500+ <b>sekolah</b> di seluruh Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
