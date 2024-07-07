import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';

export default function DialogWrapper({ children, isOpen, setIsOpen }) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>{children}</DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
