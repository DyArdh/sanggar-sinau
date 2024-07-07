'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import Logo from '@/../public/logo.png';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';

export default function Verify() {
  const [code, setCode] = useState();
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get('email');

  if (!email) {
    router.push('/registrasi');
  }

  if (code !== undefined && code.length === 5) {
    router.push('/login');
  }

  return (
    <section className="flex w-full bg-white">
      <div className="container mx-auto flex flex-col pb-12 pt-12 md:gap-8 md:pb-[65px] md:pt-16 lg:px-16">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-x-3">
            <Image src={Logo} className="w-10 md:w-14" alt="Logo Sanggar Sinau" />
            <h1 className="font-comfortaa text-2xl font-bold text-primary md:text-3xl">Sanggar Sinau</h1>
          </div>
          <p className="mt-2 font-medium md:text-lg">Silahkan cek notifikasi kode OTP di emailmu!</p>
          <div className="mt-8 flex flex-col items-center rounded-20 border px-12 pb-16 pt-7 md:px-20 md:pb-20">
            <h1 className="text-xl font-bold text-thirdary md:text-2xl">Verifikasi Email</h1>
            <p className="mb-10 font-medium md:text-lg">Masukkan Kode OTP</p>
            <InputOTP maxLength={5} onChange={value => setCode(value)}>
              <InputOTPGroup className="gap-5">
                <InputOTPSlot className="border first:rounded-none md:h-10 md:w-10" index={0} />
                <InputOTPSlot className="border md:h-10 md:w-10" index={1} />
                <InputOTPSlot className="border md:h-10 md:w-10" index={2} />
                <InputOTPSlot className="border md:h-10 md:w-10" index={3} />
                <InputOTPSlot className="border last:rounded-none md:h-10 md:w-10" index={4} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        </div>
      </div>
    </section>
  );
}
