'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import LoginImg from '@/../public/login.png';

export default function Login() {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('berhasil');
  };

  return (
    <main className="flex w-full bg-white md:h-screen md:max-h-[850px]">
      <div className="container mx-auto flex items-center justify-center pt-20 md:pt-0">
        <div className="flex items-center rounded-[20px] border border-black border-opacity-50 px-8 py-6 md:px-0 md:py-0">
          <div className="md:w-1/2 md:px-24">
            <h1 className="text-center text-2xl font-bold text-[#0A4584] md:text-3xl">Login</h1>
            <form className="mt-7 flex flex-col gap-5 md:mt-10" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="font-bold opacity-80">
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
              <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="font-bold opacity-80">
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
              <div className="mt-5">
                <Button className="w-full font-semibold md:max-w-36">Login</Button>
                <p className="mt-3 text-sm font-medium md:text-base">
                  Belum memiliki akun?{' '}
                  <Link href="/registrasi" className="font-semibold text-[#0A4584] hover:underline">
                    Registrasi
                  </Link>{' '}
                  disini
                </p>
              </div>
            </form>
          </div>
          <div className="hidden md:block md:w-1/2">
            <Image src={LoginImg} alt="Login" />
          </div>
        </div>
      </div>
    </main>
  );
}
