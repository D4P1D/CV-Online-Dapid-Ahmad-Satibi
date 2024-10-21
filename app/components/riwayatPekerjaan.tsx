import RowRiwayat from "./rowRiwayat";
export default function RowRiwayatPekerjaan() {
  return (
    <div className="container mx-auto p-2 text-center">
        <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text -2x1">Riwayat Pekerjaan</h2>
      </div>
      <RowRiwayat year="2010" perusahaan="Restoran" position="Tukang Parkir"/>
      <RowRiwayat year="2015" perusahaan="Hotel" position="Tukang cuci piring"/>
      <RowRiwayat year="2020" perusahaan="Rumah" position="dimarahin mamah"/>
      </div>
  );
}