import { useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import DialogWrapper from '@/components/DialogWrapper';
import { DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function EditProgram({ isOpen, setIsOpen, onSubmit, initialData }) {
  const [formData, setFormData] = useState({
    jenjang: '',
    harga: '',
    lokasi: '',
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
      description: 'Program bimbingan telah diperbarui',
      className: 'bg-green-500 text-white font-medium',
    });
    setIsOpen(false);
  };

  return (
    <DialogWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
      <DialogTitle className="mt-5 text-xl">Edit Program Bimbingan</DialogTitle>
      <DialogDescription>Silahkan perbarui data dibawah ini</DialogDescription>
      <div className="flex flex-col space-y-5 pt-3">
        <div className="flex flex-col gap-3">
          <Label htmlFor="jenjang" className="font-semibold">
            Jenjang
          </Label>
          <Input
            type="text"
            id="jenjang"
            name="jenjang"
            placeholder="PAUD"
            value={formData.jenjang}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="harga" className="font-semibold">
            Harga
          </Label>
          <Input
            type="text"
            id="harga"
            name="harga"
            placeholder="Rp. 100.000"
            value={formData.harga}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="lokasi" className="font-semibold">
            Lokasi
          </Label>
          <Input
            type="text"
            id="lokasi"
            name="lokasi"
            placeholder="Jl. Tempurejo Wonojati"
            value={formData.lokasi}
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
