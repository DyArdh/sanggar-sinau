'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useStore } from '@/stores/store';
import Banner from '@/../public/banner_jadwal_kelas.png';
import Footer from '@/components/Footer';
import generateInvoiceCode from '@/lib/generateInvoiceID';

export default function DaftarKelas() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { isLogin } = useStore();

  useEffect(() => {
    if (!isLogin && typeof window !== 'undefined') {
      router.push('/login');
    }
  }, [isLogin, router]);

  const onSubmit = data => {
    console.log(data);
    const invoiceCode = generateInvoiceCode();
    router.push(`/daftar-kelas/${invoiceCode}`);
  };

  return (
    <>
      <section className="flex w-full flex-col bg-white">
        <div className="relative w-full">
          <Image src={Banner} alt="Banner Jadwal Kelas" className="w-full bg-cover" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-5 lg:px-16">
              <h1 className="text-sm font-bold text-white md:text-2xl">Pendaftaran Bimbingan Belajar Sanggar Sinau</h1>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-10 flex items-center justify-center pb-10">
          <div className="flex flex-col items-center rounded-20 border-opacity-50 md:max-w-[800px] md:border md:px-8 md:py-6">
            <div className="mt-3 rounded-md border-2 border-[#5E65FF] bg-[#5E65FF]/10 px-4 py-4 md:px-8 md:py-6">
              <h1 className="text-lg font-bold md:text-xl">
                Bagaimana Melakukan Pendaftaran di <span className="text-secondary">Sanggar Sinau?</span>
              </h1>
              <div>
                <p className="mt-4 text-base md:text-lg">
                  Tahapan pendaftaran di Sanggar Sinau adalah sebagai berikut:
                </p>
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
                <p className="mt-3 text-sm font-semibold text-secondary md:mt-5 md:text-base">Cek Video Tutorial :</p>
                <div className="flex justify-center">
                  <iframe
                    className="mt-3 w-full md:w-[560px]"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/WmijSTTxOLs?si=GI5gTBP0ckp9suuh"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>

                <div className="mt-4 md:mt-8">
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
            <h1 className="mt-8 text-center text-lg font-bold text-[#0A4584] md:mt-8 md:text-xl">
              Daftar Sekarang dan Nikmati <br />
              Pembelajaran yang Menyenangkan
            </h1>
            <div className="w-10/12">
              <form className="mt-8 grid grid-cols-1 gap-5 md:mt-10 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-2 md:w-72">
                  <Label htmlFor="nama_orangtua" className="text-sm font-semibold md:text-base">
                    Nama Orangtua
                  </Label>
                  <Input
                    id="nama_orangtua"
                    name="nama_orangtua"
                    type="text"
                    placeholder="Masukkan nama lengkap"
                    {...register('nama_orangtua', { required: 'Nama orangtua wajib diisi' })}
                  />
                  {errors.nama_orangtua && <p className="text-sm text-red-500">{errors.nama_orangtua.message}</p>}
                </div>
                <div className="flex flex-col gap-2 md:w-72">
                  <Label htmlFor="nama_anak" className="text-sm font-semibold md:text-base">
                    Nama Anak
                  </Label>
                  <Input
                    id="nama_anak"
                    name="nama_anak"
                    type="text"
                    placeholder="Masukkan nama lengkap anak"
                    {...register('nama_anak', { required: 'Nama anak wajib diisi' })}
                  />
                  {errors.nama_anak && <p className="text-sm text-red-500">{errors.nama_anak.message}</p>}
                </div>
                <div className="flex flex-col gap-2 md:w-72">
                  <Label htmlFor="email" className="text-sm font-semibold md:text-base">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Masukkan email"
                    {...register('email', { required: 'Email wajib diisi' })}
                  />
                  {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                </div>
                <div className="flex flex-col gap-2 md:w-72">
                  <Label htmlFor="kelas" className="text-sm font-semibold md:text-base">
                    Kategori Kelas
                  </Label>
                  <Select name="kelas" id="kelas" {...register('kelas', { required: 'Kategori kelas wajib diisi' })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih Kategori Kelas" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="PAUD">PAUD</SelectItem>
                      <SelectItem value="TK">TK</SelectItem>
                      <SelectItem value="SD/MI">SD/MI</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.kelas && <p className="text-sm text-red-500">{errors.kelas.message}</p>}
                </div>
                <div className="flex flex-col gap-2 md:w-72">
                  <Label htmlFor="telp" className="text-sm font-semibold md:text-base">
                    No. Telp/HP
                  </Label>
                  <Input
                    id="telp"
                    name="telp"
                    type="text"
                    placeholder="Masukkan no. telp/hp"
                    {...register('telp', { required: 'No. Telp/HP wajib diisi' })}
                  />
                  {errors.telp && <p className="text-sm text-red-500">{errors.telp.message}</p>}
                </div>
                <div className="flex flex-col gap-2 md:w-72">
                  <Label htmlFor="program_bimbingan" className="text-sm font-semibold md:text-base">
                    Program Bimbingan
                  </Label>
                  <Select
                    name="program_bimbingan"
                    id="program_bimbingan"
                    {...register('program_bimbingan', { required: 'Program bimbingan wajib diisi' })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilihan Tipe Program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Tatap Muka Rutin">Tatap Muka Rutin</SelectItem>
                      <SelectItem value="Konsultasi Tugas">Konsultasi Tugas</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.program_bimbingan && (
                    <p className="text-sm text-red-500">{errors.program_bimbingan.message}</p>
                  )}
                </div>
                <div className="mt-3 text-center md:col-span-2 md:mt-5">
                  <Button className="rounded-full bg-primary px-10 py-3 font-medium text-white">Daftar</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
