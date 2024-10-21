"use client";
import Image from "next/image";
import React, { FC } from "react";
import { Parent, Student, Teacher } from "./types";
import Link from "next/link";
import { role } from "@/lib/data";

interface TablerRowProps {
  item: Teacher | Student | Parent;
}

const TableRow: FC<TablerRowProps> = ({ item }) => {
  return (
    <tr className="border-b border-gray-200 text-sm even:bg-slate-50 hover:bg-purpleLight">
      <td className="flex items-center gap-4 p-4">
        {item.photo && (
          <Image
            className="h-10 w-10 rounded-full object-cover md:hidden xl:block"
            src={item.photo}
            alt={item.name}
            width={40}
            height={40}
          />
        )}
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          {"teacherId" in item ? (
            <p className="text-xs text-gray-500">{item.email}</p>
          ) : "studentId" in item ? (
            <p className="text-xs text-gray-500">{item.class}</p>
          ) : (
            <p className="text-xs text-gray-500">{item.email}</p>
          )}
        </div>
      </td>
      {"teacherId" in item ? (
        <>
          <td className="hidden md:table-cell">{item.teacherId}</td>
          <td className="hidden md:table-cell">{item.subjects.join(",")}</td>
          <td className="hidden md:table-cell">{item.classes.join(",")}</td>
        </>
      ) : "studentId" in item ? (
        <>
          <td className="hidden md:table-cell">{item.studentId}</td>
          <td className="hidden md:table-cell">{item.grade}</td>
        </>
      ) : (
        <>
          <td className="hidden md:table-cell">{item.students.join(",")}</td>
        </>
      )}

      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link
            className="flex size-7 items-center justify-center rounded-full bg-sky"
            href={`/list/teachers/${item.id}`}
          >
            <Image src="/view.png" alt="View" width={16} height={16} />
          </Link>
          {role === "admin" && (
            <button className="flex size-7 items-center justify-center rounded-full bg-purple">
              <Image src="/delete.png" alt="View" width={16} height={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
