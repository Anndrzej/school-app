import React, { FC } from "react";
import TableList from "./TableList";
import TableRow from "./TableRow";
import {
  Assignment,
  Class,
  Exam,
  Lesson,
  Parent,
  Student,
  Subject,
  TableTypes,
  Teacher,
  Result,
  Event,
  Announcement,
} from "./types";

interface TableTypesProps {
  columns: TableTypes[];
  data:
    | Teacher[]
    | Student[]
    | Parent[]
    | Subject[]
    | Class[]
    | Lesson[]
    | Exam[]
    | Assignment[]
    | Result[]
    | Event[]
    | Announcement[];
}

const Table: FC<TableTypesProps> = ({ columns, data }) => {
  return (
    <table className="mt-4 w-full">
      <thead>
        <tr className="text-grey-500 text-left text-sm">
          {columns.map((column) => (
            <TableList key={column.accessor} column={column} />
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <TableRow key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
