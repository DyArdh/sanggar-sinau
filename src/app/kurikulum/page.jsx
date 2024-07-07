import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import Image1 from '@/../public/kurikulum1.png';
import Image2_1 from '@/../public/kurikulum2-1.png';
import Image2_2 from '@/../public/kurikulum2-2.png';
import Image2_3 from '@/../public/kurikulum2-3.png';

export default function Curriculum() {
  return (
    <>
      <section className="flex w-full bg-white">
        <div className="container mx-auto flex flex-col pb-12 pt-12 md:gap-8 md:pb-10 md:pt-16 lg:px-16">
          <h1 className="text-2xl font-bold text-[#0A4584] md:text-3xl">
            Metode Pembelajaran di <span className="text-secondary">Sanggar Sinau</span>
          </h1>
          <div className="flex md:justify-end md:gap-x-10 md:pl-16">
            <div>
              <div>
                <h1 className="mt-8 text-xl font-bold text-[#0A4584] md:mt-0 md:text-2xl">
                  Metode Pembelajaran Tatap Muka
                </h1>
                <p className="mt-2 text-base text-opacity-80 md:mt-3 md:text-lg">
                  Sanggar Sinau menggunakan metode pembelajaran tatap muka yang memungkinkan interaksi langsung antara
                  guru dan siswa. Metode ini memberikan banyak keuntungan dalam proses belajar-mengajar.
                </p>
              </div>
              <div className="mt-6 md:mt-8">
                <h1 className="text-xl font-bold text-[#0A4584] md:text-2xl">Interaktif dan Partisipatif</h1>
                <ol className="mt-2 list-decimal ps-5 font-semibold text-secondary opacity-80 md:mt-3 lg:text-lg">
                  <li>
                    Diskusi Aktif,{' '}
                    <span className="font-normal text-black">
                      mendorong siswa untuk aktif bertanya, berdiskusi, dan berpartisipasi dalam proses belajar.
                    </span>
                  </li>
                  <li className="mt-2 md:mt-3">
                    Feedback Langsung,{' '}
                    <span className="font-normal text-black">
                      guru dapat memberikan umpan balik langsung, sehingga siswa dapat segera memperbaiki kesalahan dan
                      memahami konsep dengan lebih baik.
                    </span>
                  </li>
                </ol>
              </div>
            </div>
            <Image src={Image1} className="hidden md:block md:max-w-md" alt="Sanggar Sinau" />
          </div>
          <div>
            <h1 className="mt-6 text-2xl font-bold text-[#0A4584] md:mt-8 md:text-3xl">
              Proses Pembelajaran <span className="text-secondary">Sanggar Sinau</span>
            </h1>
            <div className="mt-5 flex flex-col justify-center gap-7 md:mt-7 md:flex-row">
              <div className="flex flex-col items-center gap-4 text-center">
                <Image src={Image2_1} className="w-full rounded-20 md:w-96" alt="Sanggar Sinau" />
                <p className="text-base font-semibold text-[#0A4584] md:text-lg">Pemaparan Materi</p>
              </div>
              <div className="flex flex-col items-center gap-4 text-center">
                <Image src={Image2_2} className="w-full rounded-20 md:w-96" alt="Sanggar Sinau" />
                <p className="text-base font-semibold text-[#0A4584] md:text-lg">Mengerjakan Latihan Soal</p>
              </div>
              <div className="flex flex-col items-center gap-4 text-center">
                <Image src={Image2_3} className="w-full rounded-20 md:w-96" alt="Sanggar Sinau" />
                <p className="text-base font-semibold text-[#0A4584] md:text-lg">Umpan Balik dan Evaluasi</p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex w-full flex-col items-center gap-6 rounded-30 bg-[#5EB3B8] px-7 py-8 text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:mt-10 md:gap-12 md:px-40 md:py-12">
            <h1 className="text-xl font-semibold text-white md:text-2xl">
              Daftar Sekarang dan Dapatkan Potongan Harga
            </h1>
            <Link href="/daftar-kelas" className="w-full">
              <Button className="w-full rounded-full bg-white font-semibold text-[#028A92] hover:text-white">
                Daftar Sekarang
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
