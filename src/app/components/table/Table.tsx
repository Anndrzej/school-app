import React, { FC } from "react";
import TableList from "./TableList";
import { TableTypes } from "./types";

interface TableTypesProps {
  columns: TableTypes[];
}

const Table: FC<TableTypesProps> = ({ columns }) => {
  return (
    <table className="mt-4 w-full">
      <thead>
        <tr className="text-grey-500 text-left text-sm">
          {columns.map((column) => (
            <TableList key={column.accessor} column={column} />
          ))}
        </tr>
      </thead>
    </table>
  );
};

export default Table;
