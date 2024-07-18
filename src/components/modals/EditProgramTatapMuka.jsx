// Import Modules
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

// Import Components
import { useToast } from '@/components/ui/use-toast';
import { DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

import DialogWrapper from '@/components/DialogWrapper';

export default function EditProgram({ isOpen, setIsOpen, onSubmit, initialData }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const { toast } = useToast();

  useEffect(() => {
    if (initialData) {
      Object.keys(initialData).forEach(key => {
        setValue(key, initialData[key]);
      });
    }
  }, [initialData, setValue]);

  const onSubmitForm = data => {
    onSubmit(data);
    toast({
      description: 'Program bimbingan telah diperbarui',
      className: 'bg-green-500 text-white font-medium',
    });
    setIsOpen(false);
  };

  return (
    <DialogWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
      <DialogTitle className="mt-5 text-xl">Edit Program Bimbingan Tatap Muka</DialogTitle>
      <DialogDescription>Silahkan perbarui data dibawah ini</DialogDescription>
      <form onSubmit={handleSubmit(onSubmitForm)}>
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
              {...register('jenjang', { required: 'Jenjang wajib diisi' })}
            />
            {errors.jenjang && <p className="text-sm text-red-500">{errors.jenjang.message}</p>}
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="harga" className="font-semibold">
              Harga
            </Label>
            <Input
              type="text"
              id="harga"
              name="harga"
              placeholder="100000"
              {...register('harga', { required: 'Harga wajib diisi' })}
            />
            {errors.harga && <p className="text-sm text-red-500">{errors.harga.message}</p>}
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
              {...register('lokasi', { required: 'Lokasi wajib diisi' })}
            />
            {errors.lokasi && <p className="text-sm text-red-500">{errors.lokasi.message}</p>}
          </div>
        </div>
        <DialogFooter className="pt-10">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Batal
          </Button>
          <Button type="submit">Simpan</Button>
        </DialogFooter>
      </form>
    </DialogWrapper>
  );
}
