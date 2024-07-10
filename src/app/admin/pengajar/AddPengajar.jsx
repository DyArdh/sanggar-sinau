import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import DialogWrapper from '@/components/DialogWrapper';
import { DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function AddPengajar({ isOpen, setIsOpen, onSubmit }) {
  const [formData, setFormData] = useState({
    nama: '',
    pendidikan: '',
    pengajar_jenjang: '',
    telp: '',
    lokasi_mengajar: '',
    image: '',
  });

  const { toast } = useToast();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    toast({
      description: 'Data pengajar telah ditambahkan',
      className: 'bg-green-500 text-white font-medium',
    });
    setIsOpen(false);
  };

  return (
    <DialogWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
      <DialogTitle className="mt-5 text-xl">Tambah Data Pengajar</DialogTitle>
      <DialogDescription>Silahkan isi data dibawah ini</DialogDescription>
      <div className="flex flex-col space-y-5 pt-3">
        <div className="flex flex-col gap-3">
          <Label htmlFor="nama" className="font-semibold">
            Nama
          </Label>
          <Input
            type="text"
            id="nama"
            name="nama"
            placeholder="Rina Putri"
            value={formData.nama}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="pendidikan" className="font-semibold">
            Pendidikan
          </Label>
          <Input
            type="text"
            id="pendidikan"
            name="pendidikan"
            placeholder="Mahasiswa FKIP UNEJ"
            value={formData.pendidikan}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="pengajar_jenjang" className="font-semibold">
            Pengajar Jenjang
          </Label>
          <Input
            type="text"
            id="pengajar_jenjang"
            name="pengajar_jenjang"
            placeholder="SD/MI"
            value={formData.pengajar_jenjang}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="telp" className="font-semibold">
            No. HP
          </Label>
          <Input
            type="text"
            id="telp"
            name="telp"
            placeholder="085123456789"
            value={formData.telp}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="lokasi_mengajar" className="font-semibold">
            Lokasi Mengajar
          </Label>
          <Input
            type="text"
            id="lokasi_mengajar"
            name="lokasi_mengajar"
            placeholder="Jl. Tempurejo Wonojati"
            value={formData.lokasi_mengajar}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="image" className="font-semibold">
            Image
          </Label>
          <Input type="file" id="image" name="image" value={formData.image} onChange={handleChange} />
        </div>
      </div>
      <DialogFooter className="pt-10">
        <Button variant="outline" onClick={() => setIsOpen(false)}>
          Batal
        </Button>
        <Button onClick={handleSubmit}>Simpan</Button>
      </DialogFooter>
    </DialogWrapper>
  );
}
