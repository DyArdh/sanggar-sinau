import { useForm, Controller } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import DialogWrapper from '@/components/DialogWrapper';
import { DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { TimePickerInput } from '@/components/TimePicker';
import CustomSelect from '@/components/CustomSelect';
import { useEffect } from 'react';

export default function EditJadwalKonsultasi({ isOpen, setIsOpen, onSubmit, initialData }) {
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm({ defaultValues: initialData });

  const { toast } = useToast();

  useEffect(() => {
    if (isOpen && initialData) {
      Object.keys(initialData).forEach(key => {
        setValue(key, initialData[key]);
      });
    }
  }, [isOpen, initialData, setValue]);

  useEffect(() => {
    reset(initialData);
    clearErrors();
  }, [isOpen, reset, clearErrors, initialData]);

  const listSesi = ['Sesi Siang', 'Sesi Sore', 'Sesi Malam'];
  const listHari = ['Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu', 'Minggu'];

  const combinedHariError = [errors.hari?.mulai?.message, errors.hari?.selesai?.message].filter(Boolean).join(' dan ');
  const combinedJamError = [errors.jam?.mulai?.message, errors.jam?.selesai?.message].filter(Boolean).join(' dan ');

  const onSubmitForm = data => {
    onSubmit(data);
    toast({
      description: 'Jadwal kelas telah diubah',
      className: 'bg-green-500 text-white font-medium',
    });
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <DialogWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
      <DialogTitle className="mt-5 text-xl">Edit Jadwal Kelas</DialogTitle>
      <DialogDescription>Silahkan ubah data dibawah ini</DialogDescription>
      <form onSubmit={handleSubmit(onSubmitForm)} className="flex flex-col space-y-5 pt-3">
        <div className="flex flex-col gap-3">
          <Label htmlFor="sesi" className="font-semibold">
            Sesi
          </Label>
          <Controller
            name="sesi"
            control={control}
            rules={{ required: 'Sesi wajib diisi' }}
            render={({ field }) => (
              <CustomSelect {...field} options={listSesi} initialData={initialData?.sesi} placeholder="Pilih sesi" />
            )}
          />
          {errors.sesi && <span className="text-sm text-red-500">{errors.sesi.message}</span>}
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="hari" className="font-semibold">
            Hari
          </Label>
          <div className="flex items-center justify-between gap-3">
            <Controller
              name="hari.mulai"
              control={control}
              rules={{ required: 'Hari Mulai wajib diisi' }}
              render={({ field }) => <CustomSelect {...field} options={listHari} initialData={initialData?.hari?.mulai} placeholder="Pilih hari mulai" />}
            />
            <span className="font-semibold">-</span>
            <Controller
              name="hari.selesai"
              control={control}
              rules={{ required: 'Hari Selesai wajib diisi' }}
              render={({ field }) => <CustomSelect {...field} options={listHari} initialData={initialData?.hari?.selesai} placeholder="Pilih hari selesai" />}
            />
          </div>
          {combinedHariError && <span className="text-sm text-red-500">{`${combinedHariError} wajib diisi`}</span>}
        </div>
        <div className="flex flex-col gap-3">
          <Label className="font-semibold" htmlFor="jam">
            Jam
          </Label>
          <div className="flex items-center justify-between gap-3" id="jam">
            <Controller
              name="jam.mulai"
              control={control}
              rules={{ required: 'Jam Mulai wajib diisi' }}
              render={({ field }) => (
                <TimePickerInput {...field} value={field.value || ''} onChange={e => field.onChange(e.target.value)} />
              )}
            />
            <span className="font-semibold">-</span>
            <Controller
              name="jam.selesai"
              control={control}
              rules={{ required: 'Jam Selesai wajib diisi' }}
              render={({ field }) => (
                <TimePickerInput {...field} value={field.value || ''} onChange={e => field.onChange(e.target.value)} />
              )}
            />
          </div>
          {combinedJamError && <span className="text-sm text-red-500">{`${combinedJamError} wajib diisi`}</span>}
        </div>
        <DialogFooter className="pt-10">
          <Button type="button" variant="outline" onClick={handleCancel}>
            Batal
          </Button>
          <Button type="submit">Simpan Perubahan</Button>
        </DialogFooter>
      </form>
    </DialogWrapper>
  );
}
