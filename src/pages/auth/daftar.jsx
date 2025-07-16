import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import registerImg from "../../assets/login.png";
export default function RegisterSekolah() {
  const [form, setForm] = useState({
    nama: "",
    npsn: "",
    jenjang: "",
    status: "",
    email: "",
    telepon: "",
    website: "",
    alamat: "",
    provinsi: "",
    kota: "",
    kecamatan: "",
    password: "",
    konfirmasiPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.konfirmasiPassword) {
      alert("Password dan konfirmasi tidak sama!");
      return;
    }

    alert(`Pendaftaran Sekolah Berhasil!\n${JSON.stringify(form, null, 2)}`);
  };

  return (
    <div className="min-h-screen flex font-sans overflow-hidden">
      {/* KIRI */}
      <div className="w-1/2 relative h-screen overflow-hidden">
        <div className="fixed top-0 left-0 w-1/2 h-screen z-0">
          <img
            src={registerImg}
            alt="Background"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>

        <div className="relative z-10 h-full overflow-y-auto px-10 py-8">
          <div className="mb-8">
            <img src={logo} alt="SchoolTrans Logo" className="h-28 drop-shadow-xl" />
          </div>
          <div className="flex items-center justify-center min-h-[400px]">
            <p className="text-2xl font-semibold text-center text-white drop-shadow-lg italic leading-relaxed">
              “Gabung Bersama Kami<br />Untuk Transportasi Sekolah yang Lebih Aman”
            </p>
          </div>
        </div>
      </div>

      {/* KANAN TANPA KOTAK PUTIH */}
      <div className="w-1/2 bg-gray-50 flex items-center justify-center px-12 h-screen">
        <div className="w-full max-w-xl py-6 overflow-y-auto no-scrollbar h-full">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Form Pendaftaran Sekolah
          </h2>
          <p className="text-md text-center text-gray-600 mb-6">
            Sudah punya akun?{" "}
            <Link to="/login" className="text-blue-600 hover:underline font-semibold">
              Masuk di sini
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <Input label="Nama Sekolah" name="nama" value={form.nama} onChange={handleChange} required />
            <Input label="NPSN" name="npsn" value={form.npsn} onChange={handleChange} required />
            <Select label="Jenjang Pendidikan" name="jenjang" value={form.jenjang} onChange={handleChange}
              options={["TK", "SD", "SMP", "SMA", "SMK"]} required />
            <Select label="Status Sekolah" name="status" value={form.status} onChange={handleChange}
              options={["Negeri", "Swasta"]} required />
            <Input label="Email Sekolah" name="email" type="email" value={form.email} onChange={handleChange} required />
            <Input label="No. Telepon / WA" name="telepon" type="tel" pattern="[0-9]{10,13}" value={form.telepon} onChange={handleChange} required />
            <Textarea label="Alamat Sekolah" name="alamat" value={form.alamat} onChange={handleChange} required />
            <Input label="Provinsi" name="provinsi" value={form.provinsi} onChange={handleChange} required />
            <Input label="Kabupaten/Kota" name="kota" value={form.kota} onChange={handleChange} required />
            <Input label="Kecamatan" name="kecamatan" value={form.kecamatan} onChange={handleChange} required />
            <Input label="Password" name="password" type="password" value={form.password} onChange={handleChange} required minLength="6" />
            <Input label="Konfirmasi Password" name="konfirmasiPassword" type="password" value={form.konfirmasiPassword} onChange={handleChange} required />
            <button
              type="submit"
              className="w-full py-2 bg-[#332FD0] text-white hover:bg-[#2c28b8] font-semibold rounded-md transition duration-300"
            >
              Daftar Sekarang
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Komponen Input
function Input({ label, name, type = "text", ...props }) {
  return (
    <div>
      <label className="block text-base font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        {...props}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 bg-white"
      />
    </div>
  );
}

// Komponen Textarea
function Textarea({ label, name, ...props }) {
  return (
    <div>
      <label className="block text-base font-medium text-gray-700 mb-1">{label}</label>
      <textarea
        name={name}
        {...props}
        rows={3}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 bg-white"
      />
    </div>
  );
}

// Komponen Select
function Select({ label, name, value, onChange, options, required = false }) {
  return (
    <div>
      <label className="block text-base font-medium text-gray-700 mb-1">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 bg-white"
      >
        <option value="">-- Pilih {label} --</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}