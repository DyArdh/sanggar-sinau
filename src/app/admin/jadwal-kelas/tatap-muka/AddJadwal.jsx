import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import DialogWrapper from '@/components/DialogWrapper';
import { DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { TimePickerInput } from '@/components/TimePicker';

export default function AddJadwal({ isOpen, setIsOpen, onSubmit }) {
  const [formData, setFormData] = useState({
    sesi: '',
    hari: {
      mulai: '',
      selesai: '',
    },
    jam: {
      mulai: '',
      selesai: '',
    },
  });

  const listSesi = ['Sesi Siang', 'Sesi Sore', 'Sesi Malam'];
  const listHari = ['Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu', 'Minggu'];

  const { toast } = useToast();

  const handleChange = (name, value) => {
    if (name.includes('hari') || name.includes('jam')) {
      const [parent, child] = name.split('.');
      setFormData(prevState => ({
        ...prevState,
        [parent]: {
          ...prevState[parent],
          [child]: typeof value === 'object' ? value.target.value : value,
        },
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: typeof value === 'object' ? value.target.value : value,
      }));
    }
  };

  const handleSubmit = () => {
    onSubmit(formData);
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
      <div className="flex flex-col space-y-5 pt-3">
        <div className="flex flex-col gap-3">
          <Label htmlFor="sesi" className="font-semibold">
            Sesi
          </Label>
          <Select id="sesi" name="sesi" onValueChange={value => handleChange('sesi', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Pilih sesi" />
            </SelectTrigger>
            <SelectContent>
              {listSesi.map((sesi, index) => (
                <SelectItem key={index} value={sesi}>
                  {sesi}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="hari" className="font-semibold">
            Hari
          </Label>
          <div className="flex items-center justify-between gap-3">
            <Select id="hari.mulai" name="hari.mulai" onValueChange={value => handleChange('hari.mulai', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Pilih hari" />
              </SelectTrigger>
              <SelectContent>
                {listHari.map((hari, index) => (
                  <SelectItem key={index} value={hari}>
                    {hari}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <span className="font-semibold">-</span>
            <Select id="hari.selesai" name="hari.selesai" onValueChange={value => handleChange('hari.selesai', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Pilih hari" />
              </SelectTrigger>
              <SelectContent>
                {listHari.map((hari, index) => (
                  <SelectItem key={index} value={hari}>
                    {hari}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Label className="font-semibold" htmlFor="jam">
            Jam
          </Label>
          <div className="flex items-center justify-between gap-3" id="jam">
            <TimePickerInput id="jam.mulai" name="jam.mulai" onChange={value => handleChange('jam.mulai', value)} />
            <span className="font-semibold">-</span>
            <TimePickerInput
              id="jam.selesai"
              name="jam.selesai"
              onChange={value => handleChange('jam.selesai', value)}
            />
          </div>
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
