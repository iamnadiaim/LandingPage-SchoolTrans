import React from "react";
import Harga from "../../components/harga";
import Hero from "../../components/hero";
import TentangKami from "../../components/tentangkami";
import Keunggulan from "../../components/keunggulan";
import CuplikanHarga from "../../components/cuplikanHarga";
import Sekolah from "../../components/sekolah";
import Testimonials from "../../components/testimoni";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <Keunggulan />
      <CuplikanHarga />
      <Testimonials /> 
      <Sekolah />

      {/* Tombol WhatsApp */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300"
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.78 11.78 0 0012 0a11.75 11.75 0 00-10 18l-2 6 6-2a11.75 11.75 0 0014.52-18.52zM12 21.1a9.1 9.1 0 01-4.55-1.2l-.33-.2-3.6 1.2 1.2-3.5-.2-.34a9.1 9.1 0 1113.38 4.04A9.07 9.07 0 0112 21.1zm4.93-6.58c-.27-.14-1.6-.8-1.85-.9s-.43-.14-.6.14-.7.9-.85 1.1-.3.2-.57.07a7.47 7.47 0 01-2.23-1.37 8.16 8.16 0 01-1.5-1.87c-.14-.24 0-.37.1-.5s.2-.24.3-.37a1.69 1.69 0 00.24-.4.44.44 0 000-.43c-.08-.14-.6-1.47-.83-2s-.44-.47-.6-.47h-.5a1 1 0 00-.7.33 2.95 2.95 0 00-.9 2.2 5.15 5.15 0 001.1 2.6 11.9 11.9 0 004.7 4.4 13.73 13.73 0 002.4 1 3.87 3.87 0 002.4.15 2.93 2.93 0 001.8-1.3 2.34 2.34 0 00.17-1.3c-.07-.12-.23-.2-.5-.33z" />
        </svg>
        Chat Kami
      </a>
    </main>
  );
}
