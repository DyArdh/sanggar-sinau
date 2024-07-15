import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import DialogWrapper from '@/components/DialogWrapper';
import { DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { TimePickerInput } from '@/components/TimePicker';
import CustomSelect from './CustomSelect';

export default function AddJadwalKonsultasi({ isOpen, setIsOpen, onSubmit }) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const { toast } = useToast();

  const listSesi = ['Sesi Siang', 'Sesi Sore', 'Sesi Malam'];
  const listHari = ['Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu', 'Minggu'];

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
          <CustomSelect
            name="sesi"
            options={listSesi}
            placeholder="Pilih sesi"
            onValueChange={value => setValue('sesi', value)}
            {...register('sesi', { required: 'Sesi is required' })}
          />
          {errors.sesi && <span className="text-red-500">{errors.sesi.message}</span>}
        </div>
        {/* <div className="flex flex-col gap-3">
          <Label htmlFor="hari" className="font-semibold">
            Hari
          </Label>
          <div className="flex items-center justify-between gap-3">
            <CustomSelect
              name="hari.mulai"
              options={listHari}
              placeholder="Pilih hari"
              {...register('hari.mulai', { required: 'Hari mulai is required' })}
              onValueChange={value => setValue('hari.mulai', value)}
            />
            {errors.hari?.mulai && <span className="text-red-500">{errors.hari.mulai.message}</span>}
            <span className="font-semibold">-</span>
            <CustomSelect
              name="hari.selesai"
              options={listHari}
              placeholder="Pilih hari"
              {...register('hari.selesai', { required: 'Hari selesai is required' })}
              onValueChange={value => setValue('hari.selesai', value)}
            />
            {errors.hari?.selesai && <span className="text-red-500">{errors.hari.selesai.message}</span>}
          </div>
        </div> */}
        <div className="flex flex-col gap-3">
          <Label className="font-semibold" htmlFor="jam">
            Jam
          </Label>
          {/* <div className="flex items-center justify-between gap-3" id="jam">
            <TimePickerInput
              id="jam.mulai"
              {...register('jam.mulai', { required: 'Jam mulai is required' })}
              onChange={value => setValue('jam.mulai', value.target.value)}
            />
            {errors.jam?.mulai && <span className="text-red-500">{errors.jam.mulai.message}</span>}
            <span className="font-semibold">-</span>
            <TimePickerInput
              id="jam.selesai"
              {...register('jam.selesai', { required: 'Jam selesai is required' })}
              onChange={value => setValue('jam.selesai', value.target.value)}
            />
            {errors.jam?.selesai && <span className="text-red-500">{errors.jam.selesai.message}</span>}
          </div> */}
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
