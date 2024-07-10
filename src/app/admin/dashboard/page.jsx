'use client';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { useStore } from '@/stores/store';

export default function Dashboard() {
  const { jadwalKelas, jadwalKonsultasi, pendaftaran, pengajar } = useStore();

  const pesertaAktif = pendaftaran.filter(item => item.status === 'Terverifikasi').length;
  const pesertaPending = pendaftaran.filter(item => item.status === 'Verifikasi').length;
  const jumlahPengajar = pengajar.length;

  return (
    <>
      <section className="mt-1 px-16">
        <div>
          <h1 className="text-3xl font-bold text-thirdary">Ringkasan Statistik</h1>
          <div className="mt-5 flex space-x-10">
            <div className="flex w-[315px] flex-col items-center gap-3 rounded-20 border border-primary p-5 shadow">
              <span className="text-6xl font-bold text-secondary">{pesertaAktif}</span>
              <p className="font-medium text-thirdary">Jumlah Peserta Aktif</p>
            </div>
            <div className="flex w-[315px] flex-col items-center gap-3 rounded-20 border border-primary p-5 shadow">
              <span className="text-6xl font-bold text-secondary">{jumlahPengajar}</span>
              <p className="font-medium text-thirdary">Jumlah Guru Pengajar</p>
            </div>
            <div className="flex w-[315px] flex-col items-center gap-3 rounded-20 border border-primary p-5 shadow">
              <span className="text-6xl font-bold text-secondary">{pesertaPending}</span>
              <p className="font-medium text-thirdary">Pendaftaran Menunggu Verifikasi</p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-3xl font-bold text-thirdary">Jadwal Kelas</h1>
          <div className="mt-5 flex space-x-12">
            <div className="rounded border-2 border-dashed border-thirdary p-5">
              <h2 className="text-2xl font-bold text-thirdary">Jadwal Kelas Tatap Muka</h2>
              <Table className="mt-3 rounded">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[220px] border border-gray-300 text-black">Sesi</TableHead>
                    <TableHead className="w-[220px] border border-gray-300 text-black">Jam</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {jadwalKelas.map(item => (
                    <TableRow key={item.id}>
                      <TableCell className="border border-gray-300 font-medium text-black">{item.sesi}</TableCell>
                      <TableCell className="border border-gray-300 font-medium text-black">
                        {item.jam.mulai} - {item.jam.selesai}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="rounded border-2 border-dashed border-thirdary p-5">
              <h2 className="text-2xl font-bold text-thirdary">Jadwal Kelas Konsultasi Tugas</h2>
              <Table className="mt-3 rounded">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[220px] border border-gray-300 font-medium text-black">Sesi</TableHead>
                    <TableHead className="w-[220px] border border-gray-300 font-medium text-black">Jam</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {jadwalKonsultasi.map(item => (
                    <TableRow key={item.id}>
                      <TableCell className="border border-gray-300 font-medium text-black">{item.sesi}</TableCell>
                      <TableCell className="border border-gray-300 font-medium text-black">
                        {item.jam.mulai} - {item.jam.selesai}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
