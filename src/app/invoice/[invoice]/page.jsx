'use client';

import Image from 'next/image';

import Logo from '@/../public/logo.png';
import { Button } from '@/components/ui/button';
import { useStore } from '@/stores/store';
import formatToIDR from '@/lib/formatToIDR';

const Invoice = ({ params }) => {
  const { riwayatDaftar } = useStore();
  const handlePrint = () => {
    window.print();
  };

  const item = riwayatDaftar.find(item => item.invoice === params.invoice);

  return (
    <div className="p-10">
      <div className="mx-auto max-w-xl rounded-lg bg-white p-6 shadow-md">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <Image src={Logo} alt="Sanggar Sinau" className="w-12" />
            <h1 className="font-comfortaa text-2xl font-bold text-primary">Sanggar Sinau</h1>
          </div>
          <p className="font-medium text-black/60">{item.invoice}</p>
        </div>
        <div className="mt-3">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">{item.namaOrangtua}</h2>
              <p>{item.email}</p>
              <p>{item.telp}</p>
            </div>
          </div>
        </div>
        <div className="my-3 border-t-2 border-dashed border-black"></div>
        <table>
          <tbody>
            <tr>
              <td>Nama</td>
              <td className="w-10 text-center">:</td>
              <td>{item.namaAnak}</td>
            </tr>
            <tr>
              <td>Program Kelas</td>
              <td className="w-10 text-center">:</td>
              <td>{item.program}</td>
            </tr>
            <tr>
              <td>Jenjang</td>
              <td className="w-10 text-center">:</td>
              <td>{item.jenjang}</td>
            </tr>
            <tr>
              <td>Tanggal Pendaftaran</td>
              <td className="w-10 text-center">:</td>
              <td>{item.tgl}</td>
            </tr>
            <tr>
              <td>Tempat</td>
              <td className="w-10 text-center">:</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className="my-3 border-t-2 border-dashed border-black"></div>
        <div className="flex justify-end">
          <div>
            <p className="text-right font-bold">Total Pembayaran: {formatToIDR(item.total)}</p>
          </div>
        </div>
        <div className="no-print mt-6 flex justify-end">
          <Button onClick={handlePrint}>Print Invoice</Button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
