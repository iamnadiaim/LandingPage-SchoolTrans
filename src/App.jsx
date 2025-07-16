import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/public";
import Login from "./pages/auth/login";
import PublicLayout from "./layouts/public";
import TentangKami from "./components/tentangkami";
import Fitur from "./components/fitur";
import Harga from "./components/harga";
import Lokasi from "./components/lokasi";
import SemuaMitra from "./components/mitra";
import ScrollToTop from "./ScrollToTop";
import Register from "./pages/auth/daftar";

function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tentangkami" element={<TentangKami />} />
          <Route path="/fitur" element={<Fitur />} />
          <Route path="/harga" element={<Harga />} />
          <Route path="/lokasi" element={<Lokasi />} />
          <Route path="/mitra" element={<SemuaMitra />} />
        </Route>

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/daftar" element={<Register />} />
        {/* Tambahkan rute lain sesuai kebutuhan */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
