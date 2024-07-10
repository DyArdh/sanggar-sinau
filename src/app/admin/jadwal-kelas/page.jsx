'use client';

import { useState } from 'react';

import JadwalTatapMuka from './tatap-muka/TatapMuka';
import JadwalKonsultasi from './konsultasi/Konsultasi';

export default function JadwalKelas() {
  const [schedule, setSchedule] = useState('Tatap Muka');

  return (
    <>
      <section>
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-thirdary">Jadwal Kelas</h1>
          <div className="flex">
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
        </div>
        {schedule === 'Tatap Muka' ? <JadwalTatapMuka /> : <JadwalKonsultasi />}
      </section>
    </>
  );
}
