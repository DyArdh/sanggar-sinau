import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import { Toaster } from '@/components/ui/toaster';

export default function AdminLayout({ children }) {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-hidden px-8 pt-20">{children}</main>
        <Toaster />
      </div>
    </>
  );
}
