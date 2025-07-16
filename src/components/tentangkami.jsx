import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import kantor from "../assets/kantor.png";
export default function TentangKami() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="font-poppins bg-white pt-28 pb-24">
      {/* Blok Utama: Gambar dan Deskripsi */}
      <div className="max-w-7xl mx-auto px-4 md:px-2 mt-10 flex flex-col lg:flex-row items-center gap-20">
        {/* Gambar Gedung */}
        <div className="w-full lg:w-1/2" data-aos="fade-right">
          <img
            src={kantor}
            alt="Gedung SchoolTrans"
            className="rounded-xl w-[500px] h-auto shadow-md mx-auto"
          />
        </div>

        {/* Teks Tentang Kami */}
        <div className="w-full lg:w-1/2" data-aos="fade-left">
          <h3 className="text-sm text-blue-600 font-semibold mb-2 uppercase tracking-wider">
            Tentang Kami
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-snug">
            Permudah Transportasi Anak Anda <br /> Bersama SchoolTrans
          </h2>
          <p className="text-gray-600 text-lg mb-4 leading-relaxed">
            <strong className="text-blue-700">SchoolTrans</strong> adalah
            penyedia layanan transportasi yang aman, nyaman, dan tepat waktu
            untuk anak sekolah dari jenjang TK hingga SMA. Kami berkomitmen
            untuk menghadirkan layanan antar-jemput terbaik dengan armada
            terawat dan pengemudi profesional.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Saat ini, SchoolTrans telah melayani ratusan keluarga dan sekolah
            dengan sistem pemantauan real-time serta notifikasi yang
            terintegrasi untuk memastikan ketenangan orang tua selama perjalanan
            anak mereka. Solusi kami adalah yang paling aman dan andal untuk
            kebutuhan transportasi harian anak Anda.
          </p>
        </div>
      </div>

      {/* Blok Visi Misi Nilai */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 mt-20" data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* VISI */}
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-blue-800 mb-2">Visi</h4>
            <p className="text-gray-700 leading-relaxed">
              Menjadi solusi transportasi anak sekolah yang paling aman,
              terpercaya, dan profesional di Indonesia.
            </p>
          </div>

          {/* MISI */}
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-blue-800 mb-2">Misi</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Menyediakan layanan antar-jemput yang aman dan nyaman.</li>
              <li>Menghadirkan pengemudi terlatih dan ramah anak.</li>
              <li>
                Mengintegrasikan teknologi untuk pemantauan real-time dan
                notifikasi.
              </li>
              <li>
                Meningkatkan kepuasan dan kepercayaan orang tua serta sekolah.
              </li>
            </ul>
          </div>

          {/* NILAI KAMI */}
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-blue-800 mb-2">
              Nilai Kami
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Kami menjunjung tinggi integritas, keselamatan, kepercayaan, serta
              pelayanan terbaik sebagai landasan layanan SchoolTrans.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
