import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  useEffect(() => {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Testimoni berhasil dikirim!");
  };

  return (
    <footer className="relative text-white font-poppins overflow-hidden">
      <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm z-0" />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/2 w-48 h-48 bg-cyan-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 sm:py-14 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Logo & deskripsi */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold">ST</span>
              </div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                SchoolTrans
              </h2>
            </Link>
            <p className="text-gray-300 mb-4 text-sm">
              SchoolTrans adalah solusi transportasi digital yang aman dan
              nyaman untuk antar jemput siswa TK hingga SMA, dilengkapi fitur
              pelacakan real-time dan notifikasi ke orang tua.
            </p>
            <div className="flex gap-3">
              {[
                { icon: "fab fa-github", link: "https://github.com" },
                { icon: "fab fa-youtube", link: "https://youtube.com" },
                { icon: "fab fa-facebook", link: "https://facebook.com" },
              ].map((sosial, idx) => (
                <a
                  key={idx}
                  href={sosial.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-500 transition-colors duration-200"
                >
                  <i className={`${sosial.icon} text-white text-[15px]`} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="pl-12">
            {" "}
            {/* Tambahkan padding kiri */}
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", to: "/" },
                { label: "Tentang Kami", to: "/tentangkami" },
                { label: "Fitur", to: "/fitur" },
                { label: "Harga", to: "/harga" },
                { label: "Lokasi", to: "/lokasi" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-white flex items-center gap-2 transition-all"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex gap-3">
                <div className="w-7 h-7 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-envelope text-blue-400 text-xs" />
                </div>
                <div>
                  <p>Email</p>
                  <a
                    href="mailto:info@schooltrans.id"
                    className="text-white hover:text-blue-400"
                  >
                    info@schooltrans.id
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-7 h-7 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-phone text-blue-400 text-xs" />
                </div>
                <div>
                  <p>Telepon</p>
                  <a
                    href="tel:+62000000000"
                    className="text-white hover:text-blue-400"
                  >
                    +62 000 0000 0000
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Kritik & Testimoni */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Testimoni</h3>
            <p className="text-gray-300 text-sm mb-3">
              Tinggalkan kesan atau saran Anda sebagai pengguna.
            </p>
            <form className="space-y-3 text-sm" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nama Anda"
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Pesan atau testimoni Anda"
                rows="2"
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>

        {/* Footer bawah */}
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; <span id="year" className="text-blue-400" /> SchoolTrans. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
