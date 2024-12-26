/* eslint-disable react/prop-types */
import React from "react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Table({ data, columns }) {
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });
  const { t } = useTranslation();

  return (
    <div className="p-4  max-h-96 overflow-auto ">
      <table className="table-auto w-full border-collapse border border-primary rounded-md">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  className="cursor-pointer text-left bg-primary p-1.5 border-secondary text-white font-medium "
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(
                    t(header.column.columnDef.header),
                    header.getContext()
                  )}
                  {header.column.getIsSorted() ? (
                    header.column.getIsSorted() === "asc" ? (
                      <FaCaretUp />
                    ) : (
                      <FaCaretDown />
                    )
                  ) : null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white">
          {table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="border border-gray-300 p-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={table.getAllColumns().length}
                className="border border-gray-300 p-2 text-center text-gray-500"
              >
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex items-center gap-4 mt-4 justify-end">
        <button
          className="border rounded px-2 py-1 cursor-pointer"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <FaAngleLeft className="text-white" />
        </button>
        <span>
          Page{" "}
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <button
          className="border rounded px-2 py-1 cursor-pointer"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <FaAngleRight className="text-white" />
        </button>
        <select
          className="border rounded p-1"
          value={table.getState().pagination.pageSize}
          onChange={(e) => table.setPageSize(Number(e.target.value))}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default function CustomTable({ data, columns }) {
  const tableData = React.useMemo(() => data, []);
  const tableColumns = React.useMemo(() => columns, []);

  return <Table columns={tableColumns} data={tableData} />;
}
