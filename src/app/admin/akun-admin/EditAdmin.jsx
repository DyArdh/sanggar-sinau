import { useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import DialogWrapper from '@/components/DialogWrapper';
import { DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function EditAdmin({ isOpen, setIsOpen, onSubmit, initialData }) {
  const [formData, setFormData] = useState({
    nama: '',
    nama: '',
    password: '',
    telp: '',
    role: 'admin',
  });

  const { toast } = useToast();

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

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
      description: 'Akun admin telah diperbarui',
      className: 'bg-green-500 text-white font-medium',
    });
    setIsOpen(false);
  };

  return (
    <DialogWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
      <DialogTitle className="mt-5 text-xl">Edit Akun admin</DialogTitle>
      <DialogDescription>Silahkan perbarui data dibawah ini</DialogDescription>
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
          <Label htmlFor="email" className="font-semibold">
            Email
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="H8Dp4@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="password" className="font-semibold">
            Password
          </Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={formData.password}
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
