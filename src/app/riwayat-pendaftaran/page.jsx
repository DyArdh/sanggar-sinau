'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import formatToIDR from '@/lib/formatToIDR';
import { useStore } from '@/stores/store';

export default function History() {
  const router = useRouter();
  const { riwayatDaftar, isLogin } = useStore();

  useEffect(() => {
    if (!isLogin && typeof window !== 'undefined') {
      router.push('/login');
    }
  }, [isLogin, router]);

  return (
    <>
      <section className="flex w-full bg-white">
        <div className="container mx-auto flex flex-col items-center pb-12 pt-8 md:pb-16 md:pt-10 lg:px-16">
          <div className="w-full md:max-w-[75%]">
            <h1 className="mb-3 text-xl font-bold text-thirdary md:mb-5 md:text-2xl">Riwayat Pendaftaran</h1>
            <div className="flex flex-col gap-5">
              {riwayatDaftar.map(item => (
                <div className="rounded-20 border px-5 py-3 shadow-sm" key={item.invoice}>
                  <div className="flex space-x-2 pb-2 text-sm font-medium">
                    <p>{item.tgl}</p>
                    <span>|</span>
                    <p className="text-black/60">{item.invoice}</p>
                  </div>
                  <hr />
                  <div className="flex justify-between md:mt-3">
                    <div>
                      <h1 className="text-lg font-semibold md:text-xl">{item.namaAnak}</h1>
                      <div className="flex space-x-2 text-xs font-medium text-black/60 md:text-sm">
                        <p>{item.program}</p>
                        <span>-</span>
                        <p>{item.jenjang}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-black/80 md:text-base">Total Pembayaran</p>
                      <p className="mb-5 text-sm font-semibold md:text-base">{formatToIDR(item.total)}</p>
                      <Link
                        href={`/invoice/${item.invoice}`}
                        target="_blank"
                        className="cursor-pointer text-xs font-medium text-primary md:text-sm"
                      >
                        Download Invoice
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
