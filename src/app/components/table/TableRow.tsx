"use client";
import Image from "next/image";
import React, { FC } from "react";
import {
  Announcement,
  Assignment,
  Class,
  Event,
  Exam,
  Lesson,
  Parent,
  Result,
  Student,
  Subject,
  Teacher,
} from "./types";
import Link from "next/link";
import { role } from "@/lib/data";
import FormModal from "../modal/FormModal";

interface TablerRowProps {
  item:
    | Teacher
    | Student
    | Parent
    | Subject
    | Class
    | Lesson
    | Exam
    | Assignment
    | Result
    | Event
    | Announcement;
}

const TableRow: FC<TablerRowProps> = ({ item }) => {
  return (
    <tr className="border-b border-gray-200 text-sm even:bg-slate-50 hover:bg-purpleLight">
      <td className="flex items-center gap-4 p-4">
        {item.photo && (
          <Image
            className="h-10 w-10 rounded-full object-cover md:hidden xl:block"
            src={item.photo}
            alt={item.photo}
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
          ) : "startTime" in item ? (
            <h3 className="font-semibold">{item.title}</h3>
          ) : "subject" in item ? (
            <h3 className="font-semibold">{item.subject}</h3>
          ) : (
            <></>
          )}
        </div>
      </td>
      {"teacherId" in item ? (
        <>
          <td className="hidden md:table-cell">{item.teacherId}</td>
          <td className="hidden md:table-cell">{item.subjects.join(",")}</td>
          <td className="hidden md:table-cell">{item.classes.join(",")}</td>
          <td className="hidden md:table-cell">{item.phone}</td>
          <td className="hidden md:table-cell">{item.address}</td>
        </>
      ) : "studentId" in item ? (
        <>
          <td className="hidden md:table-cell">{item.studentId}</td>
          <td className="hidden md:table-cell">{item.grade}</td>
          <td className="hidden md:table-cell">{item.phone}</td>
          <td className="hidden md:table-cell">{item.address}</td>
        </>
      ) : "score" in item ? (
        <>
          <td className="hidden md:table-cell">{item.student}</td>
          <td className="hidden md:table-cell">{item.score}</td>
          <td className="hidden md:table-cell">{item.teacher}</td>
          <td className="hidden md:table-cell">{item.class}</td>
          <td className="hidden md:table-cell">{item.date}</td>
        </>
      ) : "students" in item ? (
        <>
          <td className="hidden md:table-cell">{item.students.join(",")}</td>
          <td className="hidden md:table-cell">{item.phone}</td>
          <td className="hidden md:table-cell">{item.address}</td>
        </>
      ) : "teachers" in item ? (
        <>
          <td className="hidden md:table-cell">{item.teachers.join(",")}</td>
        </>
      ) : "capacity" in item ? (
        <>
          <td className="hidden md:table-cell">{item.capacity}</td>
          <td className="hidden md:table-cell">{item.grade}</td>
          <td className="hidden md:table-cell">{item.supervisor}</td>
        </>
      ) : "title" in item ? (
        <>
          <td className="hidden md:table-cell">{item.class}</td>
          <td className="hidden md:table-cell">{item.date}</td>
          <td className="hidden md:table-cell">{item.startTime}</td>
          <td className="hidden md:table-cell">{item.endTime}</td>
        </>
      ) : "date" in item ? (
        <>
          <td className="hidden md:table-cell">{item.class}</td>
          <td className="hidden md:table-cell">{item.teacher}</td>
          <td className="hidden md:table-cell">{item.date}</td>
        </>
      ) : "dueDate" in item ? (
        <>
          <td className="hidden md:table-cell">{item.class}</td>
          <td className="hidden md:table-cell">{item.teacher}</td>
          <td className="hidden md:table-cell">{item.dueDate}</td>
        </>
      ) : "subject" in item ? (
        <>
          <td className="hidden md:table-cell">{item.class}</td>
          <td className="hidden md:table-cell">{item.teacher}</td>
        </>
      ) : (
        <></>
      )}
      <td>
        <div className="flex items-center gap-2">
          <Link
            className="flex size-7 items-center justify-center rounded-full bg-sky"
            href={`/list/teachers/${item.id}`}
          >
            <Image src="/view.png" alt="View" width={16} height={16} />
          </Link>
          {role === "admin" && (
            <FormModal table="teacher" type="delete" id={1} />
          )}
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
