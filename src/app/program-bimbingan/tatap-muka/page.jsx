'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Image1 from '@/../public/tatap_muka1.png';
import Image2 from '@/../public/tatap_muka2.png';

export default function FaceToFace() {
  const [category, setCategory] = useState('PAUD');

  return (
    <>
      <section className="flex w-full bg-white">
        <div className="container mx-auto flex flex-col pt-12 md:gap-8 md:pb-10 md:pt-16 lg:px-16">
          <div className="flex items-center justify-between rounded-30 border border-opacity-50 px-4 py-8 md:gap-64 md:px-16 md:py-8">
            <div>
              <h1 className="text-2xl font-bold text-[#0A4584] md:text-3xl">Tatap Muka Rutin</h1>
              <p className="mt-2 text-base text-opacity-80 md:mt-4 md:text-lg">
                Dapatkan proses belajar bersama mentor profesional dilokasi terdekat dari rumah. Belajar menjadi lebih
                mudah dengan pembelajaran menarik.
              </p>
              <Link href="/daftar-kelas">
                <Button className="mt-5 rounded-full font-semibold md:mt-8">Daftar Sekarang!</Button>
              </Link>
            </div>
            <Image src={Image1} className="hidden md:block md:max-w-sm" alt="Tatap Muka" />
          </div>
          <div className="mt-5 flex flex-col gap-5 md:mt-0 md:flex-row md:gap-10">
            <div className="rounded-30 border border-opacity-50 px-4 py-6 md:w-1/2 md:px-12 md:py-8">
              <h1 className="text-xl font-bold text-[#0A4584] md:text-2xl">
                Keunggulan Belajar di <span className="text-secondary">Sanggar Sinau</span>
              </h1>
              <ol className="mt-3 list-decimal pl-5 text-base md:mt-5 md:text-lg">
                <li>Kapasitas tiap ruangan bisa mencapai 10 anak per kelas</li>
                <li>Metode belajar interaktif</li>
                <li>Pertemuan Offline 60 - 120 menit tiap sesi</li>
                <li>Guru pengajar profesional</li>
              </ol>
            </div>
            <div className="rounded-30 border border-opacity-50 px-4 py-6 md:w-1/2 md:px-12 md:py-8">
              <h1 className="text-xl font-bold text-[#0A4584] md:text-2xl">Fasilitas Tatap Muka Rutin</h1>
              <ol className="mt-3 list-decimal pl-5 text-base md:mt-5 md:text-lg">
                <li>Pertemuan Offline 3x atau 5x perminggu</li>
                <li>Area kelas anak yang nyaman</li>
                <li>Fitur konsultasi secara langsung dengan guru setiap bulan</li>
              </ol>
            </div>
          </div>
          <div>
            <h1 className="mt-4 text-center text-xl font-bold md:mt-5 md:text-2xl">Detail Pembelajaran</h1>
            <div className="my-5 flex justify-center gap-x-3 md:gap-x-5">
              <span
                onClick={() => setCategory('PAUD')}
                className={`${category === 'PAUD' ? 'bg-primary/80 text-white' : 'bg-white text-black'} cursor-pointer rounded-full border-[3px] border-primary px-5 py-1 font-semibold hover:bg-primary/75 hover:text-white`}
              >
                PAUD
              </span>
              <span
                onClick={() => setCategory('TK')}
                className={`${category === 'TK' ? 'bg-primary/80 text-white' : 'bg-white text-black'} cursor-pointer rounded-full border-[3px] border-primary px-5 py-1 font-semibold hover:bg-primary/75 hover:text-white`}
              >
                TK
              </span>
              <span
                onClick={() => setCategory('SD/MI')}
                className={`${category === 'SD/MI' ? 'bg-primary/80 text-white' : 'bg-white text-black'} cursor-pointer rounded-full border-[3px] border-primary px-5 py-1 font-semibold hover:bg-primary/75 hover:text-white`}
              >
                SD/MI
              </span>
            </div>
            <div className="flex flex-col items-center gap-5 bg-none drop-shadow-none md:gap-0 md:bg-[#F9F9F9] md:drop-shadow-[0_0_4px_rgba(0,0,0,0.25)]">
              {category === 'PAUD' ? (
                <div>
                  <p className="text-center text-base font-semibold text-opacity-80 md:py-5 md:text-lg">
                    Rp 150.000 / Bulan
                  </p>
                  <div className="flex flex-col justify-center gap-5 md:flex-row">
                    <div className="rounded-[15px] bg-white p-6 drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] md:max-w-sm">
                      <div className="flex justify-center">
                        <Image src={Image2} className="md:w-72" alt="Program Tatap Muka" />
                      </div>
                      <h1 className="my-4 text-center text-base font-semibold text-[#0A4584] md:my-5 md:text-lg">
                        Pembelajaran Dasar
                      </h1>
                      <ol className="list-decimal pl-5">
                        <li>Membaca huruf dan kata sederhana</li>
                        <li>Menulis angka dan huruf</li>
                        <li>Mengenal bentuk dan warna</li>
                      </ol>
                    </div>
                    <div className="rounded-[15px] bg-white p-6 drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] md:max-w-sm">
                      <div className="flex justify-center">
                        <Image src={Image2} className="md:w-72" alt="Program Tatap Muka" />
                      </div>
                      <h1 className="my-4 text-center text-base font-semibold text-[#0A4584] md:my-5 md:text-lg">
                        Keterampilan Sosial
                      </h1>
                      <ol className="list-decimal pl-5">
                        <li>Bermain peran dan kegiatan kelompok</li>
                        <li>Belajar berbagi dan bergantian</li>
                        <li>Mengembangkan keterampilan komunikasi</li>
                      </ol>
                    </div>
                  </div>
                </div>
              ) : category === 'TK' ? (
                <div>
                  <p className="text-center text-base font-semibold text-opacity-80 md:py-5 md:text-lg">
                    Rp 150.000 / Bulan
                  </p>
                  <div className="flex flex-col justify-center gap-5 md:flex-row">
                    <div className="rounded-[15px] bg-white p-6 drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] md:max-w-sm">
                      <div className="flex justify-center">
                        <Image src={Image2} className="md:w-72" alt="Program Tatap Muka" />
                      </div>
                      <h1 className="my-4 text-center text-base font-semibold text-[#0A4584] md:my-5 md:text-lg">
                        Pengembangan Kognitif
                      </h1>
                      <ol className="list-decimal pl-5">
                        <li>Mengenal huruf dan angka</li>
                        <li>Pemahaman dasar matematika (berhitung sederhana)</li>
                        <li>Pengenalan lingkungan sekitar</li>
                      </ol>
                    </div>
                    <div className="rounded-[15px] bg-white p-6 drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] md:max-w-sm">
                      <div className="flex justify-center">
                        <Image src={Image2} className="md:w-72" alt="Program Tatap Muka" />
                      </div>
                      <h1 className="my-4 text-center text-base font-semibold text-[#0A4584] md:my-5 md:text-lg">
                        Keterampilan Motorik
                      </h1>
                      <ol className="list-decimal pl-5">
                        <li>Kegiatan fisik dan permainan</li>
                        <li>Melatih koordinasi tangan dan mata</li>
                        <li>Kegiatan seni untuk motorik halus</li>
                      </ol>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-center text-base font-semibold text-opacity-80 md:py-5 md:text-lg">
                    Rp 150.000 / Bulan
                  </p>
                  <div className="flex flex-col justify-center gap-5 md:flex-row">
                    <div className="rounded-[15px] bg-white p-6 drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] md:max-w-sm">
                      <div className="flex justify-center">
                        <Image src={Image2} className="md:w-72" alt="Program Tatap Muka" />
                      </div>
                      <h1 className="my-4 text-center text-base font-semibold text-[#0A4584] md:my-5 md:text-lg">
                        Pembelajaran Dasar
                      </h1>
                      <ol className="list-decimal pl-5">
                        <li>Membaca huruf dan kata sederhana</li>
                        <li>Menulis angka dan huruf</li>
                        <li>Mengenal bentuk dan warna</li>
                      </ol>
                    </div>
                    <div className="rounded-[15px] bg-white p-6 drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] md:max-w-sm">
                      <div className="flex justify-center">
                        <Image src={Image2} className="md:w-72" alt="Program Tatap Muka" />
                      </div>
                      <h1 className="my-4 text-center text-base font-semibold text-[#0A4584] md:my-5 md:text-lg">
                        Keterampilan Sosial
                      </h1>
                      <ol className="list-decimal pl-5">
                        <li>Bermain peran dan kegiatan kelompok</li>
                        <li>Belajar berbagi dan bergantian</li>
                        <li>Mengembangkan keterampilan komunikasi</li>
                      </ol>
                    </div>
                  </div>
                </div>
              )}
              <Link
                href={'https://maps.app.goo.gl/eYrizKAA9gqPVhnd7'}
                className="my-3 w-full text-center"
                target="_blank"
              >
                <Button className="rounded-full font-semibold md:my-5 md:w-2/3 md:text-lg">Lihat Lokasi</Button>
              </Link>
            </div>
          </div>
          <div className="mt-4 flex flex-col items-center rounded-sm bg-[#FF9270] px-6 py-3 md:mt-0 md:py-5">
            <h1 className="text-center text-lg font-bold text-white md:text-xl">Jadwal Kelas Tatap Muka</h1>
            <div className="mt-3 w-full rounded-sm border border-dashed border-primary p-4 md:w-3/4">
              <Table className="bg-white text-center font-semibold">
                <TableHeader className="border-b-[3px] border-[#FF9270]">
                  <TableRow>
                    <TableHead className="border-r-[3px] border-[#FF9270]"></TableHead>
                    <TableHead className="border-r-[3px] border-[#FF9270] text-center font-semibold text-black">
                      Senin
                    </TableHead>
                    <TableHead className="border-r-[3px] border-[#FF9270] text-center font-semibold text-black">
                      Selasa
                    </TableHead>
                    <TableHead className="border-r-[3px] border-[#FF9270] text-center font-semibold text-black">
                      Rabu
                    </TableHead>
                    <TableHead className="border-r-[3px] border-[#FF9270] text-center font-semibold text-black">
                      Kamis
                    </TableHead>
                    <TableHead className="text-center font-semibold text-black">Jum&#39;at</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-0">
                    <TableCell className="border-r-[3px] border-[#FF9270]">Sesi Siang</TableCell>
                    <TableCell className="border-r-[3px] border-[#FF9270]">11.00 - 12.00</TableCell>
                    <TableCell className="border-r-[3px] border-[#FF9270]">11.00 - 12.00</TableCell>
                    <TableCell className="border-r-[3px] border-[#FF9270]"></TableCell>
                    <TableCell className="border-r-[3px] border-[#FF9270]">11.00 - 12.00</TableCell>
                    <TableCell>11.00 - 12.00</TableCell>
                  </TableRow>
                  <TableRow className="border-0">
                    <TableCell className="border-r-[3px] border-[#FF9270]">Sesi Sore</TableCell>
                    <TableCell className="border-r-[3px] border-[#FF9270]">15.15 - 16.10</TableCell>
                    <TableCell className="border-r-[3px] border-[#FF9270]">15.15 - 16.10</TableCell>
                    <TableCell className="border-r-[3px] border-[#FF9270]"></TableCell>
                    <TableCell className="border-r-[3px] border-[#FF9270]">15.15 - 16.10</TableCell>
                    <TableCell>15.15 - 16.10</TableCell>
                  </TableRow>
                  <TableRow className="border-0">
                    <TableCell className="border-r-[3px] border-[#FF9270]">Sesi Malam</TableCell>
                    <TableCell className="border-r-[3px] border-[#FF9270]"></TableCell>
                    <TableCell className="border-r-[3px] border-[#FF9270]">18.15 - 19.10</TableCell>
                    <TableCell className="border-r-[3px] border-[#FF9270]">18.15 - 19.10</TableCell>
                    <TableCell className="border-r-[3px] border-[#FF9270]">18.15 - 19.10</TableCell>
                    <TableCell>18.15 - 19.10</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
          <div className="mt-8 flex w-full flex-col items-center gap-6 rounded-30 bg-[#5EB3B8] px-7 py-8 text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:mt-5 md:gap-12 md:px-40 md:py-12">
            <h1 className="text-xl font-semibold text-white md:text-2xl">
              Daftar Sekarang dan Dapatkan Potongan Harga
            </h1>
            <Link href="/daftar-kelas" className="w-full">
              <Button className="w-full rounded-full bg-white font-semibold text-[#028A92] hover:text-white">
                Daftar Sekarang
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
