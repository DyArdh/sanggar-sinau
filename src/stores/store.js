import { create } from 'zustand';

export const useStore = create((set) => ({
  isLogin: false,
  account: [
    {
      id: 1,
      name: 'Pemilik',
      email: 'pemilik@sanngarsinau.com',
      password: 'pemilik123',
      role: 'pemilik',
    },
    {
      id: 2,
      name: 'Admin',
      email: 'admin@sanngarsinau.com',
      password: 'admin123',
      role: 'admin',
    },
    {
      id: 3,
      name: 'Admin',
      email: 'admin@sanngarsinau.com',
      password: 'admin123',
      role: 'pelanggan',
    },
  ],
  programTatapMuka: [
    {
      id: 1,
      jenjang: 'PAUD',
      harga: '100000',
      lokasi: 'Jl. Tempurejo Wonojati',
    },
    {
      id: 2,
      jenjang: 'TK',
      harga: '100000',
      lokasi: 'Jl. Tempurejo Wonojati',
    },
    {
      id: 3,
      jenjang: 'SD/MI',
      harga: '200000',
      lokasi: 'Jl. Tempurejo Wonojati',
    },
  ],
  programKonsultasi: [],
  riwayatDaftar: [
    {
      invoice: "INV-873218-2313213",
      tgl: '2022-01-01',
      namaOrangtua: 'Budi',
      email: 'budi@gmail.com',
      telp: '081234567890',
      namaAnak: 'Ardi',
      program: 'Tatap Muka',
      jenjang: 'SD/MI',
      total: '200000'
    },
    {
      invoice: "INV-873231-241241213",
      tgl: '2022-01-01',
      namaOrangtua: 'Budi',
      email: 'budi@gmail.com',
      telp: '081234567890',
      namaAnak: 'Ardi',
      program: 'Tatap Muka',
      jenjang: 'SD/MI',
      total: '200000'
    },
    {
      invoice: "INV-874218-24124113",
      tgl: '2022-01-01',
      namaOrangtua: 'Budi',
      email: 'budi@gmail.com',
      telp: '081234567890',
      namaAnak: 'Ardi',
      program: 'Tatap Muka',
      jenjang: 'SD/MI',
      total: '200000'
    },
  ],
  jadwalTatapMuka: [
    {
      id: 1,
      hari: 'Senin',
      sesi: 'Siang',
      pertemuan: 'Pertemuan Minggu 1',
      pengajar: 'Rina Putri',
    },
    {
      id: 2,
      hari: 'Senin',
      sesi: 'Siang',
      pertemuan: 'Pertemuan Minggu 1',
      pengajar: 'Rina Putri',
    },
    {
      id: 3,
      hari: 'Senin',
      sesi: 'Siang',
      pertemuan: 'Pertemuan Minggu 1',
      pengajar: 'Rina Putri',
    },
  ],
  jadwalKonsultasi: [
    {
      id: 1,
      hari: 'Senin',
      sesi: 'Siang',
      mapel: 'Matematika',
      pengajar: 'Rina Putri',
    },
    {
      id: 2,
      hari: 'Senin',
      sesi: 'Siang',
      mapel: 'Matematika',
      pengajar: 'Rina Putri',
    },
    {
      id: 3,
      hari: 'Senin',
      sesi: 'Siang',
      mapel: 'Matematika',
      pengajar: 'Rina Putri',
    },
  ],
  sesi: [
    {
      tatapMuka: [
        {
          id: 1,
          sesi: 'Siang',
          jam: '11.00 sd 12.00',
        },
        {
          id: 2,
          sesi: 'Sore',
          jam: '15.15 sd 16.10',
        },
        {
          id: 3,
          sesi: 'Malam',
          jam: '18.15 sd 19.10',
        },
      ],
      konsultasi: [
        {
          id: 1,
          sesi: 'Sore',
          jam: '15.15 sd 16.10',
        },
        {
          id: 2,
          sesi: 'Malam',
          jam: '18.15 sd 19.10',
        },
      ]
    }
  ],
  setLogin: () => set((state) => ({ isLogin: !state.isLogin })),
  setProgramTatapMuka: (newData) => set((state) => ({
    programTatapMuka: [...state.programTatapMuka, ...newData],
  })),
}));
