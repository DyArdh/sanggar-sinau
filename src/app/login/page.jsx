'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { useStore } from '@/stores/store';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import LoginImg from '@/../public/login.png';

export default function Login() {
  const { account, setLogin } = useStore();
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = data => {
    const findAccount = account.find(item => item.email === data.email);
    if (!findAccount) {
      setError('Akun tidak ditemukan');
    } else if (findAccount.password !== data.password) {
      setError('Password salah');
    } else {
      setLogin(true);
      if (findAccount.role === 'pemilik' || findAccount.role === 'admin') {
        router.push('/admin/dashboard');
      } else {
        router.push('/');
      }
    }
  };

  return (
    <main className="flex w-full bg-white">
      <div className="container mx-auto flex items-center justify-center pt-20 md:pt-14">
        <div className="flex items-center rounded-[20px] border border-black border-opacity-50 px-8 py-6 md:px-0 md:py-0">
          <div className="md:w-1/2 md:px-24">
            <h1 className="mb-6 text-center text-2xl font-bold text-[#0A4584] md:mb-7 md:text-3xl">Login</h1>
            <div
              className={`${error ? 'block' : 'hidden'} rounded-lg bg-red-500 px-4 py-3 text-center font-medium text-white md:text-base`}
            >
              {error}
            </div>
            <form className="mt-6 flex flex-col gap-5 md:mt-7" onSubmit={handleSubmit(onSubmit)}>
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
                  {...register('email', { required: 'Email wajib diisi' })}
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="password" className="font-bold opacity-80">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    className="w-full border-black border-opacity-50"
                    placeholder="Masukkan password"
                    {...register('password', { required: 'Password wajib diisi' })}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5"
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.25em"
                        height="1em"
                        viewBox="0 0 640 512"
                        className="h-5 w-5 text-gray-500"
                      >
                        <path
                          fill="currentColor"
                          d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-105.2-82.4c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8zm184.3 144.4c25.5-23.3 59.6-37.5 96.9-37.5c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9.5-13.6 1.4-20.2l-94.3-74.3c-22.8 29.7-39.1 59.3-48.6 82.2c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1c47 43.8 111.7 80.6 192.5 80.6c47.8 0 89.9-12.9 126.2-32.5z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.13em"
                        height="1em"
                        viewBox="0 0 576 512"
                        className="h-5 w-5 text-gray-500"
                      >
                        <path
                          fill="currentColor"
                          d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32M144 256a144 144 0 1 1 288 0a144 144 0 1 1-288 0m144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
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
