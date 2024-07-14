'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Register() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    router.push(`/verify?email=${data.email}`);
  };

  return (
    <section className="flex w-full bg-white">
      <div className="container mx-auto flex items-center justify-center pb-12 pt-5 md:gap-8 md:pb-0 md:pt-14 lg:px-16">
        <div className="rounded-[20px] border-black border-opacity-50 py-10 md:border">
          <h1 className="text-center text-2xl font-bold text-[#0A4584] md:text-3xl">Registrasi Akun</h1>
          <form className="mt-7 flex flex-col gap-5 md:mx-32 md:mt-10" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex w-[390px] max-w-md flex-col gap-3">
              <Label htmlFor="nama_orangtua" className="font-bold opacity-80">
                Nama Orangtua
              </Label>
              <Input
                type="text"
                id="nama_orangtua"
                name="nama_orangtua"
                className="border-black border-opacity-50"
                placeholder="Masukkan nama lengkap orangtua"
                {...register('nama_orangtua', { required: 'Nama Orangtua wajib diisi' })}
              />
              {errors.nama_orangtua && <p className="text-sm text-red-500">{errors.nama_orangtua.message}</p>}
            </div>
            <div className="flex w-[390px] max-w-md flex-col gap-2">
              <Label htmlFor="email" className="font-bold opacity-80">
                Email
              </Label>
              <Input
                type="text"
                id="email"
                name="email"
                className="border-black border-opacity-50"
                placeholder="Masukkan email"
                {...register('email', { required: 'Email wajib diisi' })}
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>
            <div className="flex w-[390px] max-w-md flex-col gap-2">
              <Label htmlFor="password" className="font-bold opacity-80">
                Password
              </Label>
              <Input
                type="password"
                id="password"
                name="password"
                className="border-black border-opacity-50"
                placeholder="Masukkan password"
                {...register('password', { required: 'Password wajib diisi' })}
              />
              {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
            </div>
            <div className="flex w-[390px] max-w-md flex-col gap-2">
              <Label htmlFor="telp" className="font-bold opacity-80">
                No. Telp/HP
              </Label>
              <Input
                type="text"
                id="telp"
                name="telp"
                className="border-black border-opacity-50"
                placeholder="Masukkan no. telp/hp"
                {...register('telp', { required: 'No.Telp/HP wajib diisi' })}
              />
              {errors.telp && <p className="text-sm text-red-500">{errors.telp.message}</p>}
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
