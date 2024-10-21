export default function RiwayatPd() {
    interface RowRiwayatProps {
        jenjang: string;
        sekolah: string;
        tahun: string;
      }
    function RowRiwayat(props: RowRiwayatProps) {
        return (
          <div className="border-2 border-indigo-500/75 rounded-lg bg-indigo-400 text-black p-2 my-5">
            <div className="container mx-auto ">
              <div className="grid grid-cols-12 gap-1">
                <div className="col-span-12 md:col-span-4 ">{props.jenjang}</div>
                <div className="col-span-12 md:col-span-4">{props.sekolah}</div>
                <div className="col-span-12 md:col-span-4">{props.tahun}</div>
                
              </div>
            </div>
          </div>
        )
      }
    return (
        <div className="pt-20">
          <h2 className="text-2xl">Riwayat Pendidikan</h2>
         <RowRiwayat jenjang="SD" sekolah="SDN CIPAKU 2" tahun="2010" />
         <RowRiwayat jenjang="SMP" sekolah="SMPN 1 PASEH" tahun="2016" />
         <RowRiwayat jenjang="SMK" sekolah="SMK MUHAMMADIYAH" tahun="2019" />
         <RowRiwayat jenjang="KULIAH" sekolah="MA'SOEM UNIVERSITY" tahun="2022" />
        </div>
    )
}