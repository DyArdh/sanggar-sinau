import { useToast } from '@/components/ui/use-toast';
import DialogWrapper from '@/components/DialogWrapper';
import { DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export default function DeleteJadwalKonsultasi({ isOpen, setIsOpen, onSubmit }) {
  const { toast } = useToast();

  const handleDelete = () => {
    onSubmit();
    toast({
      description: 'Jadwal kelas telah dihapus',
      className: 'bg-green-500 text-white font-medium',
    });
    setIsOpen(false);
  };

  return (
    <DialogWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
      <DialogTitle className="mt-5 text-xl text-red-500">Hapus Jadwal Kelas</DialogTitle>
      <DialogDescription className="pt-3 text-base">
        Yakin ingin menghapus jadwal kelas ini? <br />
        Data yang di hapus tidak dapat dikembalikan
      </DialogDescription>
      <DialogFooter className="pt-10">
        <Button variant="outline" onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
        <Button variant="destructive" onClick={handleDelete}>
          Hapus
        </Button>
      </DialogFooter>
    </DialogWrapper>
  );
}
