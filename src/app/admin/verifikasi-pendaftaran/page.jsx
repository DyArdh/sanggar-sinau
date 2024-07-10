'use client';

import { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';

import { useStore } from '@/stores/store';

import PenToSquare from '@/components/icons/PenToSquare';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import DataTable from '@/components/DataTable';

import EditStatus from './EditStatus';

export default function VerifikasiPendaftaran() {
  const { pendaftaran } = useStore();
  const [editProgramDialog, setEditProgramDialog] = useState(false);
  const [currentProgram, setCurrentProgram] = useState(null);

  const Columns = [
    {
      accessorKey: 'id',
      header: 'No',
    },
    {
      accessorKey: 'nama_orangtua',
      header: 'Nama Orangtua',
    },
    {
      accessorKey: 'nama_anak',
      header: 'Nama Anak',
    },
    {
      accessorKey: 'jenjang',
      header: 'jenjang',
    },
    {
      accessorKey: 'program',
      header: 'program',
    },
    {
      accessorKey: 'status',
      header: 'Verifikasi',
      cell: ({ row }) => {
        const status = row.original.status;
        return (
          <span
            className={`${status === 'Terverifikasi' ? 'bg-green-500' : 'bg-red-500'} rounded px-3 py-1 text-white`}
          >
            {status}
          </span>
        );
      },
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
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const handleEditProgramSubmit = formData => {
    console.log(formData);
  };

  const handleEdit = program => {
    setCurrentProgram(program);
    setEditProgramDialog(true);
  };

  return (
    <>
      <section>
        <h1 className="text-3xl font-bold text-thirdary">Verifikasi Pendaftaran</h1>
        <div className="mt-5 rounded-md border-2 border-dashed border-thirdary p-5">
          <DataTable columns={Columns} data={pendaftaran} />
        </div>
      </section>
      <EditStatus
        isOpen={editProgramDialog}
        setIsOpen={setEditProgramDialog}
        onSubmit={handleEditProgramSubmit}
        initialData={currentProgram}
      />
    </>
  );
}
