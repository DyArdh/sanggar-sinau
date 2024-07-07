import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Success({ params }) {
  return (
    <>
      <section className="flex w-full bg-white">
        <div className="container mx-auto flex flex-col items-center py-12 md:gap-8 md:py-20 lg:px-16">
          <div className="w-full max-w-[800px] rounded-20 border px-5 py-20 text-center shadow-sm">
            <h1 className="text-2xl font-bold text-green-500 md:text-3xl">Pendaftaran Berhasil</h1>
            <p className="mt-3 text-base md:text-lg">
              Silahkan cek riwayat pendaftaran untuk melihat detail pembayaran
            </p>
            <div className="mt-10 flex w-full flex-col-reverse justify-center gap-3 md:mt-20 md:flex-row md:gap-3">
              <Link href="/">
                <Button variant="outline" className="w-full md:w-44">
                  Kembali ke Beranda
                </Button>
              </Link>
              <Link href="/riwayat-pendaftaran">
                <Button className="w-full md:w-44">Cek Riwayat</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
