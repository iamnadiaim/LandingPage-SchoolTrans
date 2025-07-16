import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import login from "../../assets/login.png"; // Gambar untuk sisi kiri
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Login\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="min-h-screen flex">
      {/* Kiri - Background Gambar Transparan dan Gelap */}
      <div className="w-1/2 relative">
        {/* Background Gambar */}
        <img
          src={login}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        {/* Overlay Gelap */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Logo di kiri atas */}
        <div className="absolute top-6 left-10 z-20">
          <img
            src={logo}
            alt="SchoolTrans Logo"
            className="h-28 drop-shadow-xl"
          />
        </div>

        {/* Kutipan di tengah */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <p className="text-2xl font-semibold text-center text-white drop-shadow-lg italic leading-relaxed px-6">
            “Transportasi Aman,
            <br />
            Orangtua Tenang”
          </p>
        </div>
      </div>

      {/* Kanan - Form Login */}
      <div className="w-1/2 bg-gray-50 flex items-center justify-center px-10">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center">
            SIGN IN
          </h2>
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Masukkan email anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Kata sandi
              </label>
              <input
                type="password"
                placeholder="Masukkan kata sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <Link to="/forgot" className="text-indigo-600 hover:underline">
                Forgot your password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-[#332FD0] text-white hover:bg-[#2c28b8] font-semibold rounded-md transition duration-300"
            >
              Log in
            </button>

            <p className="text-sm text-center text-gray-600 mt-3">
              Belum punya akun?{" "}
              <Link to="/daftar" className="text-indigo-600 hover:underline">
                Daftar Sekarang
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
