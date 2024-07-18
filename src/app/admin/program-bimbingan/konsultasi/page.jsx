'use client';

// Import Modules
import { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';

// Import Global State
import { useStore } from '@/stores/store';

// Import Lib
import formatToIDR from '@/lib/formatToIDR';

// Import Components
import PenToSquare from '@/components/icons/PenToSquare';
import TrashCan from '@/components/icons/TrashCan';
import Plus from '@/components/icons/Plus';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import DataTable from '@/components/DataTable';
import AddProgram from '@/components/modals/AddProgramKonsultasi';
import EditProgram from '@/components/modals/EditProgramKonsultasi';
import DeleteProgram from '@/components/modals/DeleteProgramKonsultasi';

export default function Konsultasi() {
  const { programKonsultasi } = useStore();
  const [addProgramDialog, setAddProgramDialog] = useState(false);
  const [editProgramDialog, setEditProgramDialog] = useState(false);
  const [deleteProgramDialog, setDeleteProgramDialog] = useState(false);
  const [currentProgram, setCurrentProgram] = useState(null);

  const Columns = [
    {
      id: 'id',
      header: 'No',
      cell: ({ row, table }) =>
        (table.getSortedRowModel()?.flatRows?.findIndex(flatRow => flatRow.id === row.id) || 0) + 1,
    },
    {
      accessorKey: 'jenjang',
      header: 'Jenjang',
    },
    {
      accessorKey: 'harga',
      header: 'Harga',
      cell: ({ cell }) => formatToIDR(cell.getValue()),
    },
    {
      accessorKey: 'lokasi',
      header: 'Lokasi',
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

  const handleAddProgramSubmit = formData => {
    console.log(formData);
  };

  const handleEditProgramSubmit = formData => {
    console.log(formData);
  };

  const handleEdit = program => {
    setCurrentProgram(program);
    setEditProgramDialog(true);
  };

  const handleDelete = program => {
    setCurrentProgram(program);
    setDeleteProgramDialog(true);
  };

  const handleDeleteProgramSubmit = () => {
    console.log(currentProgram);
    setDeleteProgramDialog(false);
  };

  return (
    <>
      <section>
        <h1 className="text-3xl font-bold text-thirdary">Program Bimbingan</h1>
        <div className="mt-8 rounded-md border-2 border-dashed border-thirdary p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-thirdary">Program Konsultasi Tugas</h2>
            <Button className="flex items-center gap-2 px-6" onClick={() => setAddProgramDialog(!addProgramDialog)}>
              <Plus />
              <span className="font-semibold">Tambah</span>
            </Button>
          </div>
          <DataTable columns={Columns} data={programKonsultasi} className="mt-7" />
        </div>
      </section>
      <AddProgram isOpen={addProgramDialog} setIsOpen={setAddProgramDialog} onSubmit={handleAddProgramSubmit} />
      <EditProgram
        isOpen={editProgramDialog}
        setIsOpen={setEditProgramDialog}
        onSubmit={handleEditProgramSubmit}
        initialData={currentProgram}
      />
      <DeleteProgram
        isOpen={deleteProgramDialog}
        setIsOpen={setDeleteProgramDialog}
        onDelete={handleDeleteProgramSubmit}
      />
    </>
  );
}
