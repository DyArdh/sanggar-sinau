// Import Modules
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useToast } from '@/components/ui/use-toast';
import { DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

import DialogWrapper from '@/components/DialogWrapper';

export default function EditAdmin({ isOpen, setIsOpen, onSubmit, initialData }) {
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
      description: 'Akun admin telah diperbarui',
      className: 'bg-green-500 text-white font-medium',
    });
    setIsOpen(false);
  };

  return (
    <DialogWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
      <DialogTitle className="mt-5 text-xl">Edit Akun admin</DialogTitle>
      <DialogDescription>Silahkan perbarui data dibawah ini</DialogDescription>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="flex flex-col space-y-5 pt-3">
          <div className="flex flex-col gap-3">
            <Label htmlFor="nama_lengkap" className="font-semibold">
              Nama Lengkap
            </Label>
            <Input
              type="text"
              id="nama_lengkap"
              name="nama_lengkap"
              placeholder="Rina Putri"
              {...register('nama_lengkap', { required: 'Nama Lengkap wajib diisi' })}
            />
            {errors.nama && <p className="text-sm text-red-500">{errors.nama.message}</p>}
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
              {...register('email', { required: 'Email wajib diisi', pattern: /^\S+@\S+$/i })}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
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
              {...register('password', { required: 'Password wajib diisi' })}
            />
            {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="telp" className="font-semibold">
              No. Telp/HP
            </Label>
            <Input
              type="text"
              id="telp"
              name="telp"
              placeholder="085123456789"
              {...register('telp', { required: 'No. Telp/HP wajib diisi' })}
            />
            {errors.telp && <p className="text-sm text-red-500">{errors.telp.message}</p>}
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
