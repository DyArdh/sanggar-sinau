import { create } from 'zustand';

import PengajarIMG from '@/../public/section5-1.png';

export const useStore = create((set) => ({
  isLogin: false,
  account: [
    {
      id: 1,
      nama: 'Pemilik',
      email: 'pemilik@sanngarsinau.com',
      password: 'pemilik123',
      telp: '081234567890',
      role: 'pemilik',
    },
    {
      id: 2,
      nama: 'Admin1',
      email: 'admin1@sanngarsinau.com',
      password: 'admin123',
      telp: '081234567890',
      role: 'admin',
    },
    {
      id: 3,
      nama: 'Admin2',
      email: 'admin2@sanngarsinau.com',
      password: 'admin123',
      telp: '081234567890',
      role: 'admin',
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
  programKonsultasi: [
    {
      id: 1,
      jenjang: 'SD/MI',
      harga: '100000',
      lokasi: 'Jl. Tempurejo Wonojati',
    },
  ],
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
  pendaftaran: [
    {
      id: 1,
      nama_orangtua: 'Budi',
      nama_anak: 'Ardi',
      jenjang: 'SD/MI',
      program: 'Tatap Muka',
      status: 'Terverifikasi',
    },
    {
      id: 2,
      nama_orangtua: 'Budi',
      nama_anak: 'Ardi',
      jenjang: 'SD/MI',
      program: 'Tatap Muka',
      status: 'Terverifikasi',
    },
    {
      id: 3,
      nama_orangtua: 'Budi',
      nama_anak: 'Ardi',
      jenjang: 'SD/MI',
      program: 'Tatap Muka',
      status: 'Verifikasi',
    },
  ],
  pengajar: [
    {
      id: 1,
      nama_lengkap: 'Rina Putri',
      ttl: 'Jember, 4 Desember 2002',
      pendidikan: 'Mahasiswa FKIP UNEJ',
      pengajar_jenjang: 'PAUD',
      telp: '081234567890',
      lokasi_mengajar: 'Jl. Tempurejo Wonojati',
      image: PengajarIMG,
    },
    {
      id: 2,
      nama_lengkap: 'Rina Putri',
      ttl: 'Jember, 4 Desember 2002',
      pendidikan: 'Mahasiswa FKIP UNEJ',
      pengajar_jenjang: 'TK',
      telp: '081234567890',
      lokasi_mengajar: 'Jl. Tempurejo Wonojati',
      image: PengajarIMG,
    },
    {
      id: 3,
      nama_lengkap: 'Rina Putri',
      ttl: 'Jember, 4 Desember 2002',
      pendidikan: 'Mahasiswa FKIP UNEJ',
      pengajar_jenjang: 'SD/MI',
      telp: '081234567890',
      lokasi_mengajar: 'Jl. Tempurejo Wonojati',
      image: PengajarIMG,
    },
  ],
  jadwalKelas: [{
    id: 1,
    sesi: 'Sesi Siang',
    hari: {
      mulai: 'Senin',
      selesai: 'Jum\'at',
    },
    jam: {
      mulai: '11:00',
      selesai: '12:00',
    },
  },{
    id: 2,
    sesi: 'Sesi Sore',
    hari: {
      mulai: 'Senin',
      selesai: 'Jum\'at',
    },
    jam: {
      mulai: '15:15',
      selesai: '16:10',
    },
  },
  {
    id: 3,
    sesi: 'Sesi Malam',
    hari: {
      mulai: 'Senin',
      selesai: 'Jum\'at',
    },
    jam: {
      mulai: '18:15',
      selesai: '19:10',
    },
  }
],
  jadwalKonsultasi: [
    {
      id: 1,
      sesi: 'Sesi Sore',
      hari: {
        mulai: 'Senin',
        selesai: 'Jum\'at',
      },
      jam: {
        mulai: '15:15',
        selesai: '16:10',
      },
    },
    {
      id: 2,
      sesi: 'Sesi Malam',
      hari: {
        mulai: 'Senin',
        selesai: 'Jum\'at',
      },
      jam: {
        mulai: '18:15',
        selesai: '19:10',
      },
    }
  ],
  setLogin: () => set((state) => ({ isLogin: !state.isLogin })),
  setProgramTatapMuka: (newData) => set((state) => ({
    programTatapMuka: [...state.programTatapMuka, ...newData],
  })),
}));
