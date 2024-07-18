// Import Modules
import { useState, useEffect } from 'react';

// Import Components
import { useToast } from '@/components/ui/use-toast';
import { DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import DialogWrapper from '@/components/DialogWrapper';

export default function EditVerifikasiPendaftaran({ isOpen, setIsOpen, onSubmit, initialData }) {
  const [formData, setFormData] = useState({
    status: '',
  });

  const { toast } = useToast();

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = data => {
    setFormData(prevState => ({
      ...prevState,
      status: data,
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    toast({
      description: 'Status telah diperbarui',
      className: 'bg-green-500 text-white font-medium',
    });
    setIsOpen(false);
  };

  return (
    <DialogWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
      <DialogTitle className="mt-5 text-xl">Edit Status</DialogTitle>
      <DialogDescription>Silahkan perbarui data dibawah ini</DialogDescription>
      <div className="flex flex-col space-y-5 pt-3">
        <div className="flex flex-col gap-3">
          <Label htmlFor="status" className="font-semibold">
            Status
          </Label>
          <Select defaultValue={formData.status} name="status" onValueChange={handleChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Terverifikasi">Terverifikasi</SelectItem>
              <SelectItem value="Verifikasi">Verifikasi</SelectItem>
            </SelectContent>
          </Select>
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
