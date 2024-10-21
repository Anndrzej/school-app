"use client";
import Pagination from "@/app/components/pagination/Pagination";
import Table from "@/app/components/table/Table";
import TableControls from "@/app/components/table/TableControls";
import TableSearch from "@/app/components/table/TableSearch";
import { announcementsData, eventsData, resultsData } from "@/lib/data";
import React from "react";

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },

  {
    header: "Actions",
    accessor: "action",
  },
];

const AnnouncementListPage = () => {
  return (
    <div className="m-4 mt-0 flex-1 rounded-md bg-white p-4">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden text-lg font-semibold md:block">
          All Announcements
        </h1>
        <div className="flex w-full flex-col items-center gap-4 md:w-auto md:flex-row">
          <TableSearch />
          <TableControls />
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} data={announcementsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default AnnouncementListPage;
