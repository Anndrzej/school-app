import Pagination from "@/app/components/pagination/Pagination";
import Table from "@/app/components/table/Table";
import TableControls from "@/app/components/table/TableControls";
import TableSearch from "@/app/components/table/TableSearch";
import { TableTypes } from "@/app/components/table/types";
import { studentsData, teachersData } from "@/lib/data";
import React from "react";

const columns: TableTypes[] = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student ID",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },

  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const StudentsListPage = () => {
  return (
    <div className="m-4 mt-0 flex-1 rounded-md bg-white p-4">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden text-lg font-semibold md:block">All Students</h1>
        <div className="flex w-full flex-col items-center gap-4 md:w-auto md:flex-row">
          <TableSearch />
          <TableControls />
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} data={studentsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default StudentsListPage;
