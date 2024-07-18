'use client';

import { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';

import { useStore } from '@/stores/store';

import PenToSquare from '@/components/icons/PenToSquare';
import TrashCan from '@/components/icons/TrashCan';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import DataTable from '@/components/DataTable';
import Plus from '@/components/icons/Plus';

import AddPengajar from '@/components/modals/AddPengajar';
import EditPengajar from '@/components/modals/EditPengajar';
import DeletePengajar from '@/components/modals/DeletePengajar';

export default function TatapMuka() {
  const { pengajar } = useStore();
  const [addPengajar, setAddPengajar] = useState(false);
  const [editPengajarDialog, setEditPengajarDialog] = useState(false);
  const [deletePengajarDialog, setDeletePengajarDialog] = useState(false);
  const [currentProgram, setCurrentProgram] = useState(null);

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
      accessorKey: 'pengajar_jenjang',
      header: 'Pengajar Jenjang',
    },
    {
      accessorKey: 'telp',
      header: 'No. Telp/HP',
    },
    {
      accessorKey: 'lokasi_mengajar',
      header: 'Lokasi Mengajar',
    },
    {
      id: 'actions',
      cell: ({ row }) => {
        const program = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="flex items-center gap-3" onClick={() => handleEdit(program)}>
                <PenToSquare />
                <span className="font-medium">Edit</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center gap-3" onClick={() => handleDelete(program)}>
                <TrashCan />
                <span className="font-medium">Hapus</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const handleAddPengajarSubmit = formData => {
    console.log(formData);
  };

  const handleEditPengajarSubmit = formData => {
    console.log(formData);
  };

  const handleEdit = program => {
    setCurrentProgram(program);
    setEditPengajarDialog(true);
  };

  const handleDelete = program => {
    setCurrentProgram(program);
    setDeletePengajarDialog(true);
  };

  const handleDeletePengajarSubmit = () => {
    console.log(currentProgram);
    setDeletePengajarDialog(false);
  };

  return (
    <>
      <section>
        <h1 className="text-3xl font-bold text-thirdary">Guru Pengajar</h1>
        <div className="mt-5 rounded-md border-2 border-dashed border-thirdary p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-thirdary">Daftar Guru Pengajar</h2>
            <Button className="flex items-center gap-2 px-6" onClick={() => setAddPengajar(!addPengajar)}>
              <Plus />
              <span className="font-semibold">Tambah</span>
            </Button>
          </div>
          <DataTable columns={Columns} data={pengajar} className="mt-7" />
        </div>
      </section>
      <AddPengajar isOpen={addPengajar} setIsOpen={setAddPengajar} onSubmit={handleAddPengajarSubmit} />
      <EditPengajar
        isOpen={editPengajarDialog}
        setIsOpen={setEditPengajarDialog}
        onSubmit={handleEditPengajarSubmit}
        initialData={currentProgram}
      />
      <DeletePengajar
        isOpen={deletePengajarDialog}
        setIsOpen={setDeletePengajarDialog}
        onDelete={handleDeletePengajarSubmit}
      />
    </>
  );
}
