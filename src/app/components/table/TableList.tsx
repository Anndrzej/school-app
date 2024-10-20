import React, { FC } from "react";
import { TableTypes } from "./types";

interface TableListProps {
  column: TableTypes;
}

const TableList: FC<TableListProps> = ({ column }) => {
  return <th>{column.header}</th>;
};

export default TableList;
