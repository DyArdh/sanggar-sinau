import { useForm, Controller } from 'react-hook-form';
import { useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import DialogWrapper from '@/components/DialogWrapper';
import { DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { TimePickerInput } from '@/components/TimePicker';
import CustomSelect from './CustomSelect';

export default function AddJadwalKonsultasi({ isOpen, setIsOpen, onSubmit }) {
  const {
    control,
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm();
  const { toast } = useToast();

  const listSesi = ['Sesi Siang', 'Sesi Sore', 'Sesi Malam'];
  const listHari = ['Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu', 'Minggu'];

  const combinedHariError = [errors.hari?.mulai?.message, errors.hari?.selesai?.message].filter(Boolean).join(' dan ');
  const combinedJamError = [errors.jam?.mulai?.message, errors.jam?.selesai?.message].filter(Boolean).join(' dan ');

  useEffect(() => {
    reset();
    clearErrors();
  }, [isOpen, reset, clearErrors]);

  const onSubmitForm = data => {
    onSubmit(data);
    toast({
      description: 'Jadwal kelas telah ditambahkan',
      className: 'bg-green-500 text-white font-medium',
    });
    setIsOpen(false);
  };

  return (
    <DialogWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
      <DialogTitle className="mt-5 text-xl">Tambah Jadwal Kelas</DialogTitle>
      <DialogDescription>Silahkan isi data dibawah ini</DialogDescription>
      <form onSubmit={handleSubmit(onSubmitForm)} className="flex flex-col space-y-5 pt-3">
        <div className="flex flex-col gap-3">
          <Label htmlFor="sesi" className="font-semibold">
            Sesi
          </Label>
          <Controller
            id="sesi"
            name="sesi"
            control={control}
            rules={{ required: 'Sesi wajib diisi' }}
            render={({ field }) => <CustomSelect {...field} options={listSesi} placeholder="Pilih sesi" />}
          />
          {errors.sesi && <span className="text-sm text-red-500">{errors.sesi.message}</span>}
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="hari" className="font-semibold">
            Hari
          </Label>
          <div className="flex items-center justify-between gap-3">
            <Controller
              id="hari.mulai"
              name="hari.mulai"
              control={control}
              rules={{ required: 'Hari Mulai wajib diisi' }}
              render={({ field }) => <CustomSelect {...field} options={listHari} placeholder="Pilih hari mulai" />}
            />
            <span className="font-semibold">-</span>
            <Controller
              id="hari.selesai"
              name="hari.selesai"
              control={control}
              rules={{ required: 'Hari Selesai wajib diisi' }}
              render={({ field }) => <CustomSelect {...field} options={listHari} placeholder="Pilih hari selesai" />}
            />
          </div>
          {combinedHariError && <span className="text-sm text-red-500">{`${combinedHariError} wajib diisi`}</span>}
        </div>
        <div className="flex flex-col gap-3">
          <Label className="font-semibold" htmlFor="jam">
            Jam
          </Label>
          <div className="flex items-center justify-between gap-3" id="jam">
            <TimePickerInput
              id="jam.mulai"
              name="jam.mulai"
              {...register('jam.mulai', { required: 'Jam Mulai wajib diisi' })}
            />
            <span className="font-semibold">-</span>
            <TimePickerInput
              id="jam.selesai"
              name="jam.selesai"
              {...register('jam.selesai', { required: 'Jam Selesai wajib diisi' })}
            />
          </div>
          {combinedJamError && <span className="text-sm text-red-500">{`${combinedJamError} wajib diisi`}</span>}
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
