'use client';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

export default function DaftarKelas() {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('beres');
  };

  return (
    <main className="flex w-full bg-white md:h-screen md:max-h-[850px]">
      <div className="container mx-auto flex items-center justify-center pb-10 pt-20 md:pt-0">
        <div className="rounded-20 border border-opacity-50 px-8 py-6">
          <h1 className="text-center text-2xl font-bold text-[#0A4584] md:text-3xl">Daftar Kelas Bimbingan</h1>
          <form className="mt-8 grid grid-cols-1 gap-5 md:mt-10 md:grid-cols-2" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 md:w-72">
              <Label htmlFor="parent_name" className="text-sm font-semibold md:text-base">
                Nama Orangtua
              </Label>
              <Input id="parent_name" name="parent_name" type="text" placeholder="Masukkan nama lengkap" />
            </div>
            <div className="flex flex-col gap-2 md:w-72">
              <Label htmlFor="parent_name" className="text-sm font-semibold md:text-base">
                Nama Anak
              </Label>
              <Input id="child_name" name="child_name" type="text" placeholder="Masukkan nama lengkap anak" />
            </div>
            <div className="flex flex-col gap-2 md:w-72">
              <Label htmlFor="email" className="text-sm font-semibold md:text-base">
                Email
              </Label>
              <Input id="email" name="email" type="text" placeholder="Masukkan email" />
            </div>
            <div className="flex flex-col gap-2 md:w-72">
              <Label htmlFor="email" className="text-sm font-semibold md:text-base">
                Kategori Kelas
              </Label>
              <Select name="class" id="class">
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Kategori Kelas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PAUD">PAUD</SelectItem>
                  <SelectItem value="TK">TK</SelectItem>
                  <SelectItem value="SD/MI">SD/MI</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2 md:w-72">
              <Label htmlFor="phone" className="text-sm font-semibold md:text-base">
                No. Telp/HP
              </Label>
              <Input id="phone" name="phone" type="text" placeholder="Masukkan no. telp/hp" />
            </div>
            <div className="flex flex-col gap-2 md:w-72">
              <Label htmlFor="email" className="text-sm font-semibold md:text-base">
                Program Bimbingan
              </Label>
              <Select name="mentoring_program" id="mentoring_program">
                <SelectTrigger>
                  <SelectValue placeholder="Pilihan Tipe Program" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Tatap Muka Rutin">Tatap Muka Rutin</SelectItem>
                  <SelectItem value="Konsultasi Tugas">Konsultasi Tugas</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mt-3 text-center md:col-span-2 md:mt-5">
              <Button className="bg-primary px-10 py-3 font-medium text-white">Daftar</Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
