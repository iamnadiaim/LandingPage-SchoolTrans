import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll ke atas setiap kali path berubah
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Tidak merender apa-apa
}
