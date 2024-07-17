'use client';

// Import Modules
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { MoreHorizontal } from 'lucide-react';
import Cookies from 'js-cookie';

// Import Global State
import { useStore } from '@/stores/store';

// Import Components
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import PenToSquare from '@/components/icons/PenToSquare';
import TrashCan from '@/components/icons/TrashCan';

import DataTable from '@/components/DataTable';
import Plus from '@/components/icons/Plus';
import AddAdmin from '@/components/modals/AddAdmin';
import EditAdmin from '@/components/modals/EditAdmin';
import DeleteAdmin from '@/components/modals/DeleteAdmin';

export default function AkunAdmin() {
  const router = useRouter();
  const { account } = useStore();
  const [addAdmin, setAddAdmin] = useState(false);
  const [editAdminDialog, setEditAdminDialog] = useState(false);
  const [deleteAdminDialog, setDeleteAdminDialog] = useState(false);
  const [currentAdmin, setCurrentAdmin] = useState(null);

  useEffect(() => {
    const loggedAccount = JSON.parse(Cookies.get('loggedInAccount'));
    if (loggedAccount.role !== 'pemilik' && typeof window !== 'undefined') {
      router.push('/forbidden');
    }
  }, [router]);

  const adminAccount = account.filter(item => item.role === 'admin');

  const Columns = [
    {
      id: 'id',
      header: 'No',
      cell: ({ row, table }) =>
        (table.getSortedRowModel()?.flatRows?.findIndex(flatRow => flatRow.id === row.id) || 0) + 1,
    },
    {
      accessorKey: 'nama_lengkap',
      header: 'Nama Lengkap',
    },
    {
      accessorKey: 'email',
      header: 'Email',
    },
    {
      accessorKey: 'telp',
      header: 'No. Telp',
    },
    {
      id: 'actions',
      cell: ({ row }) => {
        const admin = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="flex items-center gap-3" onClick={() => handleEdit(admin)}>
                <PenToSquare />
                <span className="font-medium">Edit</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center gap-3" onClick={() => handleDelete(admin)}>
                <TrashCan />
                <span className="font-medium">Hapus</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const handleAddAdminSubmit = formData => {
    console.log(formData);
  };

  const handleEditAdminSubmit = formData => {
    console.log(formData);
  };

  const handleEdit = admin => {
    setCurrentAdmin(admin);
    setEditAdminDialog(true);
  };

  const handleDelete = admin => {
    setCurrentAdmin(admin);
    setDeleteAdminDialog(true);
  };

  const handleDeleteAdminSubmit = () => {
    console.log(currentAdmin);
    setDeleteAdminDialog(false);
  };

  return (
    <>
      <section>
        <h1 className="text-3xl font-bold text-thirdary">Daftar Admin</h1>
        <div className="mt-5 rounded-md border-2 border-dashed border-thirdary p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-thirdary">Daftar Akun Admin</h2>
            <Button className="flex items-center gap-2 px-6" onClick={() => setAddAdmin(!addAdmin)}>
              <Plus />
              <span className="font-semibold">Tambah</span>
            </Button>
          </div>
          <DataTable columns={Columns} data={adminAccount} className="mt-7" />
        </div>
      </section>
      <AddAdmin isOpen={addAdmin} setIsOpen={setAddAdmin} onSubmit={handleAddAdminSubmit} />
      <EditAdmin
        isOpen={editAdminDialog}
        setIsOpen={setEditAdminDialog}
        onSubmit={handleEditAdminSubmit}
        initialData={currentAdmin}
      />
      <DeleteAdmin isOpen={deleteAdminDialog} setIsOpen={setDeleteAdminDialog} onDelete={handleDeleteAdminSubmit} />
    </>
  );
}
