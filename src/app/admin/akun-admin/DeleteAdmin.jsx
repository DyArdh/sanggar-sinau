import { useToast } from '@/components/ui/use-toast';
import DialogWrapper from '@/components/DialogWrapper';
import { DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export default function DeleteAdmin({ isOpen, setIsOpen, onDelete }) {
  const { toast } = useToast();

  const handleDelete = () => {
    onDelete();
    toast({
      description: 'Akun admin telah dihapus',
      className: 'bg-green-500 text-white font-medium',
    });
    setIsOpen(false);
  };

  return (
    <DialogWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
      <DialogTitle className="mt-5 text-xl text-red-500">Hapus Akun Admin</DialogTitle>
      <DialogDescription className="pt-3 text-base">
        Yakin ingin menghapus akun admin ini? <br />
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
