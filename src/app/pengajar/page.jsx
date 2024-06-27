import Image from 'next/image';

import Instructor1 from '@/../public/section5-1.png';

export default function Instructor() {
  return (
    <main className="flex w-full bg-white md:h-screen md:max-h-[850px]">
      <div className="container mx-auto flex flex-col items-center justify-center pb-12 pt-14 md:gap-8 md:pb-0 md:pt-0 lg:px-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#0A4584] md:text-3xl">
            Pengajar <span className="text-secondary">Sanggar Sinau</span>
          </h1>
          <p className="mt-2 text-sm opacity-80 md:mt-3 md:text-[20px] md:text-base">
            Terdapat 9 guru pengajar di Sanggar Sinau, dimana masing-masing jenjang memiliki 3 guru pengajar
          </p>
        </div>
        <div className="rounded-20 mt-4 flex flex-col gap-5 border border-opacity-50 p-4 md:mt-0 md:flex-row md:p-8">
          <Image src={Instructor1} className="md:w-60" alt="Pengajar Sanggar Sinau" />
          <div className="w-full">
            <span className="rounded-30 bg-[#68AED9] px-5 py-2 text-sm font-semibold text-white">PAUD</span>
            <table className="mt-5 md:mt-8">
              <tbody className="text-base font-medium text-opacity-80 md:text-lg md:font-semibold">
                <tr>
                  <td>Nama Lengkap</td>
                  <td className="w-4 text-center md:w-8">:</td>
                  <td>Rina Putri</td>
                </tr>
                <tr>
                  <td>TTL</td>
                  <td className="w-4 text-center md:w-8">:</td>
                  <td>Jember, 4 Desember 2002</td>
                </tr>
                <tr>
                  <td>Usia</td>
                  <td className="w-4 text-center md:w-8">:</td>
                  <td>22 Tahun</td>
                </tr>
                <tr>
                  <td>Pendidikan</td>
                  <td className="w-4 text-center md:w-8">:</td>
                  <td>Mahasiswa FKIP UNEJ</td>
                </tr>
                <tr>
                  <td>Pengalaman</td>
                  <td className="w-4 text-center md:w-8">:</td>
                  <td>2 tahun sebagai guru pengajar Sanggar Sinau</td>
                </tr>
                <tr>
                  <td>Lokasi Mengajar</td>
                  <td className="w-4 text-center md:w-8">:</td>
                  <td>Jl Tempurejo Wonojati</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
