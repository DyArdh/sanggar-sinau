'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import Banner from '@/../public/banner_jadwal_kelas.png';

export default function DaftarKelas() {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('beres');
  };

  return (
    <main className="flex w-full flex-col bg-white">
      <div className="relative w-full">
        <Image src={Banner} alt="Banner Jadwal Kelas" className="w-full bg-cover" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-5 lg:px-16">
            <h1 className="text-lg font-bold text-white md:text-2xl">Pendaftaran Bimbingan Belajar Sanggar Sinau</h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-10 flex items-center justify-center pb-10">
        <div className="flex flex-col items-center rounded-20 border border-opacity-50 px-8 py-6 md:max-w-[800px]">
          <h1 className="text-center text-2xl font-bold text-[#0A4584] md:text-3xl">Daftar Kelas Bimbingan</h1>
          <div className="mt-3 rounded-md border-2 border-[#5E65FF] bg-[#5E65FF]/10 md:px-8 md:py-6">
            <h1 className="text-lg font-bold md:text-xl">
              Bagaimana Melakukan Pendaftaran di <span className="text-secondary">Sanggar Sinau?</span>
            </h1>
            <div>
              <p className="mt-4 text-base md:text-lg">Tahapan pendaftaran di Sanggar Sinau adalah sebagai berikut:</p>
              <ol className="mt-1 list-decimal pl-5 md:pl-10">
                <li>Lakukan pendaftaran akun melalui sanggarsinau.id</li>
                <li>Setelah itu Login menggunakan akun dan email yang sudah dibuat</li>
                <li>Isi formulir pendaftaran di sanggarsinau.id dengan lengkap</li>
                <li>
                  Orangtua dapat memilih program bimbingan sesuai jenjang pendidikan anak dan dapat melihat informasi
                  jadwal yang telah disediakan
                </li>
                <li>Setelah itu klik setuju dan cetak kartu tanda pendaftaran sebagai bukti pembayaran</li>
              </ol>
              <p className="text-sm font-semibold text-secondary md:mt-3 md:text-base">
                Cek Video Tutorial :{' '}
                <Link href="https://bit.ly/TutorialPendaftaranSanggarSinau" target="_blank" className="underline">
                  https://bit.ly/TutorialPendaftaranSanggarSinau
                </Link>
              </p>
              <div className="md:mt-5">
                <h1 className="text-sm font-bold text-[#0A4584] md:text-base">Informasi Layanan</h1>
                <table className="md:mt-1">
                  <tbody className="text-left text-sm md:text-base">
                    <tr>
                      <th className="font-normal">Hari</th>
                      <th className="w-5 text-center font-normal">:</th>
                      <th className="font-normal">Senin - Jum&#39;at</th>
                    </tr>
                    <tr>
                      <th className="font-normal">Waktu</th>
                      <th className="w-5 text-center font-normal">:</th>
                      <th className="font-normal">09.00 - 21.00</th>
                    </tr>
                  </tbody>
                </table>
                <Button className="mt-3 bg-[#5EB3B8] text-sm font-medium text-white hover:bg-[#5EB3B8]/90 md:text-base">
                  Konsultasi Melalui Whatsapp
                </Button>
              </div>
            </div>
          </div>
          <div className="w-10/12">
            <form className="mt-8 grid grid-cols-1 gap-5 md:mt-10 md:grid-cols-2" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2 md:w-72">
                <Label htmlFor="parent_name" className="text-sm font-semibold md:text-base">
                  Nama Orangtua
                </Label>
                <Input id="parent_name" name="parent_name" type="text" placeholder="Masukkan nama lengkap" />
              </div>
              <div className="flex flex-col gap-2 md:w-72">
                <Label htmlFor="parent_name" className="text-sm font-semibold md:text-base">
                  Nama Anak
                </Label>
                <Input id="child_name" name="child_name" type="text" placeholder="Masukkan nama lengkap anak" />
              </div>
              <div className="flex flex-col gap-2 md:w-72">
                <Label htmlFor="email" className="text-sm font-semibold md:text-base">
                  Email
                </Label>
                <Input id="email" name="email" type="text" placeholder="Masukkan email" />
              </div>
              <div className="flex flex-col gap-2 md:w-72">
                <Label htmlFor="email" className="text-sm font-semibold md:text-base">
                  Kategori Kelas
                </Label>
                <Select name="class" id="class">
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih Kategori Kelas" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PAUD">PAUD</SelectItem>
                    <SelectItem value="TK">TK</SelectItem>
                    <SelectItem value="SD/MI">SD/MI</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2 md:w-72">
                <Label htmlFor="phone" className="text-sm font-semibold md:text-base">
                  No. Telp/HP
                </Label>
                <Input id="phone" name="phone" type="text" placeholder="Masukkan no. telp/hp" />
              </div>
              <div className="flex flex-col gap-2 md:w-72">
                <Label htmlFor="email" className="text-sm font-semibold md:text-base">
                  Program Bimbingan
                </Label>
                <Select name="mentoring_program" id="mentoring_program">
                  <SelectTrigger>
                    <SelectValue placeholder="Pilihan Tipe Program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Tatap Muka Rutin">Tatap Muka Rutin</SelectItem>
                    <SelectItem value="Konsultasi Tugas">Konsultasi Tugas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="mt-3 text-center md:col-span-2 md:mt-5">
                <Button className="rounded-full bg-primary px-10 py-3 font-medium text-white">Daftar</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
