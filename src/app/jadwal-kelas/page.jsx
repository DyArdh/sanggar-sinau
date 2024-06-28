'use client';

import Image from 'next/image';
import { useState } from 'react';

import Banner from '@/../public/banner_jadwal_kelas.png';
import ImageTatapMuka from '@/../public/jadwal_tatap_muka1.png';

export default function ClassSchedule() {
  const [schedule, setSchedule] = useState('Tatap Muka');

  return (
    <section className="flex w-full flex-col bg-white">
      <div className="relative w-full">
        <Image src={Banner} alt="Banner Jadwal Kelas" className="w-full bg-cover" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-5 lg:px-16">
            <h1 className="text-lg font-bold text-white md:text-2xl">Jadwal Kelas</h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col pb-12 pt-12 md:gap-8 md:pb-10 md:pt-14 lg:px-16">
        <div className="flex justify-start md:justify-end">
          <span
            onClick={() => setSchedule('Tatap Muka')}
            className={`${schedule === 'Tatap Muka' ? 'bg-primary text-white hover:bg-primary/90' : 'bg-white text-primary hover:bg-primary hover:text-white'} w-36 cursor-pointer rounded-l-sm border border-r-0 border-[#0A4584] py-2 text-center text-sm font-semibold md:w-40 md:text-base`}
          >
            Tatap Muka
          </span>
          <span
            onClick={() => setSchedule('Konsultasi Tugas')}
            className={`${schedule === 'Konsultasi Tugas' ? 'bg-primary text-white hover:bg-primary/90' : 'bg-white text-primary hover:bg-primary hover:text-white'} w-36 cursor-pointer rounded-r-sm border border-l-0 border-[#0A4584] py-2 text-center text-sm font-semibold md:w-40 md:text-base`}
          >
            Konsultasi Tugas
          </span>
        </div>
        <div>
          <h1 className="mt-8 text-base font-bold md:text-lg">Sesi Siang - 11.00 sd 12.00</h1>
          <div className="mt-2 grid grid-cols-1 gap-5 md:mt-3 md:grid-cols-3">
            <div className="flex items-center gap-x-3 rounded border-2 border-primary p-3">
              <Image src={ImageTatapMuka} className="max-w-32" alt="Jadwal Tatap Muka" />
              <div>
                <h1 className="text-sm font-bold md:text-base">
                  <span className="text-secondary">Senin</span> - Nama materi
                </h1>
                <div className="mt-3 text-sm font-medium md:text-base">
                  <p>Pertemuan Minggu 1</p>
                  <p>
                    Pengajar : <span>Rina Putri</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-3 rounded border-2 border-primary p-3">
              <Image src={ImageTatapMuka} className="max-w-32" alt="Jadwal Tatap Muka" />
              <div>
                <h1 className="text-sm font-bold md:text-base">
                  <span className="text-secondary">Senin</span> - Nama materi
                </h1>
                <div className="mt-3 text-sm font-medium md:text-base">
                  <p>Pertemuan Minggu 1</p>
                  <p>
                    Pengajar : <span>Rina Putri</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-3 rounded border-2 border-primary p-3">
              <Image src={ImageTatapMuka} className="max-w-32" alt="Jadwal Tatap Muka" />
              <div>
                <h1 className="text-sm font-bold md:text-base">
                  <span className="text-secondary">Senin</span> - Nama materi
                </h1>
                <div className="mt-3 text-sm font-medium md:text-base">
                  <p>Pertemuan Minggu 1</p>
                  <p>
                    Pengajar : <span>Rina Putri</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Konsultasi Tugas */}
            <div className="flex items-center gap-x-3 rounded border-2 border-primary p-3">
              <Image src={ImageTatapMuka} className="max-w-32" alt="Jadwal Tatap Muka" />
              <div>
                <h1 className="text-sm font-bold md:text-base">
                  <span className="text-secondary">Senin</span> - Matematika
                </h1>
                <p className="mt-3 text-sm font-medium md:text-base">
                  Pengajar : <span>Rina Putri</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
