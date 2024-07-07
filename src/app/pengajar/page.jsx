import Image from 'next/image';

import Instructor1 from '@/../public/section5-1.png';

const dataPengajar = [
  {
    namaLengkap: 'Rina Putri',
    ttl: 'Jember, 4 Desember 2002',
    usia: '22 Tahun',
    pendidikan: 'Mahasiswa FKIP UNEJ',
    pengalaman: '2 tahun sebagai guru pengajar Sanggar Sinau',
    lokasiMengajar: 'Jl Tempurejo Wonojati',
    foto: Instructor1,
    jenjang: 'PAUD',
  },
  {
    namaLengkap: 'Rina Putri',
    ttl: 'Jember, 4 Desember 2002',
    usia: '22 Tahun',
    pendidikan: 'Mahasiswa FKIP UNEJ',
    pengalaman: '2 tahun sebagai guru pengajar Sanggar Sinau',
    lokasiMengajar: 'Jl Tempurejo Wonojati',
    foto: Instructor1,
    jenjang: 'PAUD',
  },
  {
    namaLengkap: 'Rina Putri',
    ttl: 'Jember, 4 Desember 2002',
    usia: '22 Tahun',
    pendidikan: 'Mahasiswa FKIP UNEJ',
    pengalaman: '2 tahun sebagai guru pengajar Sanggar Sinau',
    lokasiMengajar: 'Jl Tempurejo Wonojati',
    foto: Instructor1,
    jenjang: 'PAUD',
  },
];

export default function Instructor() {
  return (
    <>
      <section className="flex w-full bg-white">
        <div className="container mx-auto flex flex-col items-center justify-center pb-12 pt-14 md:gap-8 md:pb-12 md:pt-10 lg:px-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#0A4584] md:text-3xl">
              Pengajar <span className="text-secondary">Sanggar Sinau</span>
            </h1>
            <p className="mt-2 text-sm opacity-80 md:mt-3 md:text-[20px] md:text-base">
              Terdapat 9 guru pengajar di Sanggar Sinau, dimana masing-masing jenjang memiliki 3 guru pengajar
            </p>
          </div>
          {dataPengajar.map((data, index) => (
            <div
              key={index}
              className="mt-4 flex flex-col gap-5 rounded-20 border border-opacity-50 p-4 md:mt-0 md:flex-row md:p-8"
            >
              <Image src={data.foto} className="md:w-60" alt="Pengajar Sanggar Sinau" />
              <div className="w-full">
                <span className="rounded-30 bg-[#68AED9] px-5 py-2 text-sm font-semibold text-white">
                  {data.jenjang}
                </span>
                <table className="mt-5 md:mt-8">
                  <tbody className="text-base font-medium text-opacity-80 md:text-lg md:font-medium">
                    <tr>
                      <td>Nama Lengkap</td>
                      <td className="w-4 text-center md:w-8">:</td>
                      <td>{data.namaLengkap}</td>
                    </tr>
                    <tr>
                      <td>TTL</td>
                      <td className="w-4 text-center md:w-8">:</td>
                      <td>{data.ttl}</td>
                    </tr>
                    <tr>
                      <td>Usia</td>
                      <td className="w-4 text-center md:w-8">:</td>
                      <td>{data.usia}</td>
                    </tr>
                    <tr>
                      <td>Pendidikan</td>
                      <td className="w-4 text-center md:w-8">:</td>
                      <td>{data.pendidikan}</td>
                    </tr>
                    <tr>
                      <td>Pengalaman</td>
                      <td className="w-4 text-center md:w-8">:</td>
                      <td>{data.pengalaman}</td>
                    </tr>
                    <tr>
                      <td>Lokasi Mengajar</td>
                      <td className="w-4 text-center md:w-8">:</td>
                      <td>{data.lokasiMengajar}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
