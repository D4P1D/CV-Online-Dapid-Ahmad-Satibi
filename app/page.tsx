import "./Dapid_style.css";
import RowRiwayat from "./components/rowRiwayat";
import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import "./components/riwayatPekerjaan";
import RowRiwayatPekerjaan from "./components/riwayatPekerjaan";
import FavColor from "./components/favColor";
import Kontak from "./components/kontak";
export default function Gallery() {
  return (
    <section>
      <Hero />
      <RiwayatPendidikan/>
      <RowRiwayatPekerjaan/>
      <FavColor/>
      <Kontak />
    </section>
  );
} 
