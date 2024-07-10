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

import AddJadwal from './AddJadwal';
import EditJadwal from './EditJadwal';
import DeleteJadwal from './DeleteJadwal';

export default function JadwalTatapMuka() {
  const { jadwalKelas } = useStore();
  const [addJadwal, setAddJadwal] = useState(false);
  const [editJadwalDialog, setEditJadwalDialog] = useState(false);
  const [deleteJadwalDialog, setDeleteJadwalDialog] = useState(false);
  const [currentJadwal, setCurrentJadwal] = useState(null);

  const Columns = [
    {
      accessorKey: 'id',
      header: 'No',
    },
    {
      accessorKey: 'sesi',
      header: 'Sesi',
    },
    {
      accessorKey: 'hari',
      header: 'Hari',
      cell: ({ row }) => {
        const hari = row.original.hari;
        return (
          <span>
            {hari.mulai} - {hari.selesai}
          </span>
        );
      },
    },
    {
      accessorKey: 'jam',
      header: 'Jam',
      cell: ({ row }) => {
        const jam = row.original.jam;
        return (
          <span>
            {jam.mulai} - {jam.selesai}
          </span>
        );
      },
    },
    {
      id: 'actions',
      cell: ({ row }) => {
        const jadwal = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="flex items-center gap-3" onClick={() => handleEdit(jadwal)}>
                <PenToSquare />
                <span className="font-medium">Edit</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center gap-3" onClick={() => handleDelete(jadwal)}>
                <TrashCan />
                <span className="font-medium">Hapus</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const handleAddJadwalSubmit = formData => {
    console.log(formData);
  };

  const handleEditJadwalSubmit = formData => {
    console.log(formData);
  };

  const handleEdit = jadwal => {
    setCurrentJadwal(jadwal);
    setEditJadwalDialog(true);
  };

  const handleDelete = jadwal => {
    setCurrentJadwal(jadwal);
    setDeleteJadwalDialog(true);
  };

  const handleDeleteJadwalSubmit = () => {
    console.log(currentJadwal);
    setDeleteJadwalDialog(false);
  };

  return (
    <>
      <div className="mt-10 rounded-md border-2 border-dashed border-thirdary p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-thirdary">Daftar Jadwal Kelas</h2>
          <Button className="flex items-center gap-2 px-6" onClick={() => setAddJadwal(!addJadwal)}>
            <Plus />
            <span className="font-semibold">Tambah</span>
          </Button>
        </div>
        <DataTable columns={Columns} data={jadwalKelas} className="mt-7" />
      </div>
      <AddJadwal isOpen={addJadwal} setIsOpen={setAddJadwal} onSubmit={handleAddJadwalSubmit} />
      <EditJadwal
        isOpen={editJadwalDialog}
        setIsOpen={setEditJadwalDialog}
        onSubmit={handleEditJadwalSubmit}
        initialData={currentJadwal}
      />
      <DeleteJadwal isOpen={deleteJadwalDialog} setIsOpen={setDeleteJadwalDialog} onSubmit={handleDeleteJadwalSubmit} />
    </>
  );
}
