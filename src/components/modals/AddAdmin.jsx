// Import Modules
import { useForm } from 'react-hook-form';

// Import Components
import { useToast } from '@/components/ui/use-toast';
import { DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

import DialogWrapper from '@/components/DialogWrapper';

export default function AddPengajar({ isOpen, setIsOpen, onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nama_lengkap: '',
      email: '',
      password: '',
      telp: '',
      role: 'admin',
    },
  });
  const { toast } = useToast();

  const onSubmitForm = () => {
    onSubmit(formData);
    toast({
      description: 'Akun admin telah ditambahkan',
      className: 'bg-green-500 text-white font-medium',
    });
    setIsOpen(false);
  };

  return (
    <DialogWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
      <DialogTitle className="mt-5 text-xl">Tambah Akun Admin</DialogTitle>
      <DialogDescription>Silahkan isi data dibawah ini</DialogDescription>
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
            {errors.nama_lengkap && <p className="text-sm text-red-500">{errors.nama_lengkap.message}</p>}
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
      </form>
      <DialogFooter className="pt-10">
        <Button variant="outline" onClick={() => setIsOpen(false)}>
          Batal
        </Button>
        <Button onClick={handleSubmit}>Simpan</Button>
      </DialogFooter>
    </DialogWrapper>
  );
}
