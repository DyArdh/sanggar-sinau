// Import Modules
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

// Import Components
import { useToast } from '@/components/ui/use-toast';
import DialogWrapper from '@/components/DialogWrapper';
import { DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function EditPengajar({ isOpen, setIsOpen, onSubmit, initialData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      nama: initialData?.nama,
      pendidikan: initialData?.pendidikan,
      pengajar_jenjang: initialData?.pengajar_jenjang,
      telp: initialData?.telp,
      lokasi_mengajar: initialData?.lokasi_mengajar,
      image: initialData?.image,
    },
  });

  const { toast } = useToast();

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  const onSubmitForm = data => {
    onSubmit(data);
    console.log(data);
    toast({
      description: 'Data pengajar telah diperbarui',
      className: 'bg-green-500 text-white font-medium',
    });
    setIsOpen(false);
  };

  return (
    <DialogWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="max-h-[80vh] overflow-y-auto p-5">
        <DialogTitle className="mt-5 text-xl">Tambah Data Pengajar</DialogTitle>
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
                {...register('nama_lengkap', { required: 'Nama Lengkap wajib diisi' })}
                placeholder="Rina Putri"
              />
              {errors.nama_lengkap && <span className="text-sm text-red-500">{errors.nama_lengkap.message}</span>}
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="ttl" className="font-semibold">
                TTL
              </Label>
              <Input
                type="text"
                id="ttl"
                {...register('ttl', { required: 'TTL wajib diisi' })}
                placeholder="Jember, 1 Januari 2000"
              />
              {errors.ttl && <span className="text-sm text-red-500">{errors.ttl.message}</span>}
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="pendidikan" className="font-semibold">
                Pendidikan
              </Label>
              <Input
                type="text"
                id="pendidikan"
                {...register('pendidikan', { required: 'Pendidikan wajib diisi' })}
                placeholder="Mahasiswa FKIP UNEJ"
              />
              {errors.pendidikan && <span className="text-sm text-red-500">{errors.pendidikan.message}</span>}
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="pengajar_jenjang" className="font-semibold">
                Pengajar Jenjang
              </Label>
              <Input
                type="text"
                id="pengajar_jenjang"
                {...register('pengajar_jenjang', { required: 'Pengajar Jenjang wajib diisi' })}
                placeholder="SD/MI"
              />
              {errors.pengajar_jenjang && (
                <span className="text-sm text-red-500">{errors.pengajar_jenjang.message}</span>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="telp" className="font-semibold">
                No. Telp/HP
              </Label>
              <Input
                type="text"
                id="telp"
                {...register('telp', { required: 'No. HP wajib diisi' })}
                placeholder="085123456789"
              />
              {errors.telp && <span className="text-sm text-red-500">{errors.telp.message}</span>}
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="lokasi_mengajar" className="font-semibold">
                Lokasi Mengajar
              </Label>
              <Input
                type="text"
                id="lokasi_mengajar"
                {...register('lokasi_mengajar', { required: 'Lokasi Mengajar wajib diisi' })}
                placeholder="Jl. Tempurejo Wonojati"
              />
              {errors.lokasi_mengajar && <span className="text-sm text-red-500">{errors.lokasi_mengajar.message}</span>}
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="image" className="font-semibold">
                Image
              </Label>
              <Input type="file" id="image" {...register('image')} />
            </div>
          </div>
          <DialogFooter className="pt-10">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Batal
            </Button>
            <Button type="submit">Simpan</Button>
          </DialogFooter>
        </form>
      </div>
    </DialogWrapper>
  );
}
