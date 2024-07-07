'use client';

import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function DataTable({ columns, data, className }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={`${className} rounded-md border`}>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => {
                // Adjust the width of the first and last columns
                const columnClass = index === 0 ? 'w-10' : index === headerGroup.headers.length - 1 ? 'w-10' : '';
                return (
                  <TableHead key={header.id} className={`border border-gray-300 text-black ${columnClass}`}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map(row => (
              <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                {row.getVisibleCells().map((cell, index) => {
                  // Adjust the width of the first and last columns
                  const columnClass = index === 0 ? 'w-10' : index === row.getVisibleCells().length - 1 ? 'w-10' : '';
                  return (
                    <TableCell key={cell.id} className={`border border-gray-300 font-medium text-black ${columnClass}`}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 border border-gray-300 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
