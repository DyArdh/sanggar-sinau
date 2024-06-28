'use client';

import Image from 'next/image';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Image1 from '@/../public/konsultasi_tugas1.png';
import Image2 from '@/../public/tatap_muka2.png';

export default function TaskConsultation() {
  const [category, setCategory] = useState('SD/MI');

  return (
    <section className="flex w-full bg-white">
      <div className="container mx-auto flex flex-col pt-12 md:gap-8 md:pb-10 md:pt-16 lg:px-16">
        <div className="flex items-center justify-between rounded-30 border border-opacity-50 px-4 py-8 md:gap-64 md:px-16 md:py-8">
          <div>
            <h1 className="text-2xl font-bold text-[#0A4584] md:text-3xl">Konsultasi Tugas</h1>
            <p className="mt-2 text-base text-opacity-80 md:mt-4 md:text-lg">
              Konsultasikan tugas sekolahmu bersama mentor profesional dilokasi terdekat dari rumah. Membahas dan
              berlatih soal-soal Ujian.
            </p>
            <Button className="mt-5 rounded-full font-semibold md:mt-8">Daftar Sekarang!</Button>
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
            <h1 className="text-xl font-bold text-[#0A4584] md:text-2xl">Fasilitas Konsultasi Tugas</h1>
            <ol className="mt-3 list-decimal pl-5 text-base md:mt-5 md:text-lg">
              <li>Pertemuan Offline 2x perminggu</li>
              <li>Area kelas anak yang nyaman</li>
              <li>Fitur konsultasi secara langsung dengan guru setiap bulan</li>
            </ol>
          </div>
        </div>
        <div>
          <h1 className="mt-4 text-center text-xl font-bold md:mt-5 md:text-2xl">Detail Pembelajaran</h1>
          <div className="my-5 flex justify-center gap-x-3 md:gap-x-5">
            <span
              onClick={() => setCategory('SD/MI')}
              className={`${category === 'SD/MI' ? 'bg-primary/80 text-white' : 'bg-white text-black'} cursor-pointer rounded-full border-[3px] border-primary px-5 py-1 font-semibold hover:bg-primary/75 hover:text-white`}
            >
              SD/MI
            </span>
          </div>
          <div className="flex flex-col items-center gap-5 bg-none drop-shadow-none md:gap-0 md:bg-[#F9F9F9] md:drop-shadow-[0_0_4px_rgba(0,0,0,0.25)]">
            <p className="text-center text-base font-semibold text-opacity-80 md:py-5 md:text-lg">Rp 100.000 / Bulan</p>
            <div className="flex flex-col justify-center gap-5 md:flex-row">
              <div className="rounded-[15px] bg-white p-6 drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] md:max-w-sm">
                <div className="flex justify-center">
                  <Image src={Image2} className="md:w-72" alt="Program Tatap Muka" />
                </div>
                <h1 className="my-4 text-center text-base font-semibold text-[#0A4584] md:my-5 md:text-lg">
                  Konsultasi Tugas Mata Pelajaran
                </h1>
                <ol className="list-decimal pl-5">
                  <li>Matematika</li>
                  <li>Ilmu Pengetahuan Alam</li>
                  <li>Bahasa Indonesia</li>
                  <li>Bahasa Inggris</li>
                </ol>
              </div>
            </div>
            <Button className="my-3 w-full rounded-full font-semibold md:my-5 md:w-2/3 md:text-lg">Lihat Lokasi</Button>
          </div>
        </div>
        <div className="mt-4 flex flex-col items-center rounded-sm bg-[#FF9270] px-6 py-3 md:mt-0 md:py-5">
          <h1 className="text-center text-lg font-bold text-white md:text-xl">Jadwal Kelas Konsultasi Tugas</h1>
          <div className="mt-3 w-full rounded-sm border border-dashed border-primary p-4 md:w-3/4">
            <Table className="bg-white text-center font-semibold">
              <TableHeader className="border-b-[3px] border-[#FF9270]">
                <TableRow>
                  <TableHead className="border-r-[3px] border-[#FF9270]"></TableHead>
                  <TableHead className="border-r-[3px] border-[#FF9270] text-center font-semibold text-black">
                    Selasa & Jum&#39;at
                  </TableHead>
                  <TableHead className="text-center font-semibold text-black">Selasa & Jum&#39;at</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-0">
                  <TableCell className="border-r-[3px] border-[#FF9270]">Sesi Sore</TableCell>
                  <TableCell className="border-r-[3px] border-[#FF9270]">15.15 - 16.10</TableCell>
                  <TableCell>15.15 - 16.10</TableCell>
                </TableRow>
                <TableRow className="border-0">
                  <TableCell className="border-r-[3px] border-[#FF9270]">Sesi Malam</TableCell>
                  <TableCell className="border-r-[3px] border-[#FF9270]">18.15 - 19.10</TableCell>
                  <TableCell>18.15 - 19.10</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="mt-8 flex w-full flex-col items-center gap-6 rounded-30 bg-[#5EB3B8] px-7 py-8 text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:mt-5 md:gap-12 md:px-40 md:py-12">
          <h1 className="text-xl font-semibold text-white md:text-2xl">Daftar Sekarang dan Dapatkan Potongan Harga</h1>
          <Button className="w-full rounded-full bg-white font-semibold text-[#028A92] hover:text-white">
            Daftar Sekarang
          </Button>
        </div>
      </div>
    </section>
  );
}