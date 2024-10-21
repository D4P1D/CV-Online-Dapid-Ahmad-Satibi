import RowRiwayat from "./rowRiwayat";

export default function RiwayatPendidikan(){
    return(
        <div className="container mx-auto p-2 text-center">
        <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text -2x1">Riwayat Pendidikan</h2>
      </div>
      <RowRiwayat jenjang="SD" sekolah="SDN Srirahayu" tahun="2010"/>
      <RowRiwayat jenjang="SMP" sekolah="MTS N 3 Bandung" tahun="2017"/>
      <RowRiwayat jenjang="SMK" sekolah="SMAN 1 Cikancung" tahun="2020"/>
      <RowRiwayat jenjang="Sarjana" sekolah="Ma'soem University" tahun="Sekarang"/>
      </div>
    );
}