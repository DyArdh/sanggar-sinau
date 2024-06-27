'use client';

import Link from 'next/link';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Register() {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('berhasil');
  };

  return (
    <section className="flex w-full bg-white md:h-screen md:max-h-[850px]">
      <div className="container mx-auto flex items-center justify-center pb-12 pt-14 md:gap-8 md:pb-0 md:pt-0 lg:px-16">
        <div className="rounded-[20px] border-black border-opacity-50 py-10 md:border">
          <h1 className="text-center text-2xl font-bold text-[#0A4584] md:text-3xl">Registrasi Akun</h1>
          <form className="mt-7 flex flex-col gap-5 md:mx-32 md:mt-10" onSubmit={handleSubmit}>
            <div className="flex w-[390px] max-w-md flex-col gap-2">
              <Label htmlFor="name" className="font-bold opacity-80">
                Nama
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                className="border-black border-opacity-50"
                placeholder="Masukkan nama lengkap orang tua"
              />
            </div>
            <div className="flex w-[390px] max-w-md flex-col gap-2">
              <Label htmlFor="name" className="font-bold opacity-80">
                Email
              </Label>
              <Input
                type="text"
                id="email"
                name="email"
                className="border-black border-opacity-50"
                placeholder="Masukkan email"
              />
            </div>
            <div className="flex w-[390px] max-w-md flex-col gap-2">
              <Label htmlFor="name" className="font-bold opacity-80">
                Password
              </Label>
              <Input
                type="text"
                id="password"
                name="password"
                className="border-black border-opacity-50"
                placeholder="Masukkan password"
              />
            </div>
            <div className="flex w-[390px] max-w-md flex-col gap-2">
              <Label htmlFor="name" className="font-bold opacity-80">
                No. Telp/hp
              </Label>
              <Input
                type="text"
                id="phone"
                name="phone"
                className="border-black border-opacity-50"
                placeholder="Masukkan no. telp/hp"
              />
            </div>
            <div>
              <Button className="w-full rounded-[15px] font-semibold md:max-w-40">Registrasi</Button>
              <p className="mt-3 text-sm font-medium md:text-base">
                Sudah memiliki akun?{' '}
                <Link href="/login" className="font-semibold text-[#0A4584] hover:underline">
                  Login
                </Link>{' '}
                disini
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
