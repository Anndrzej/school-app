"use client";
import React, { FC } from "react";
import { TableTypes } from "./types";

interface TableListProps {
  column: TableTypes;
}

const TableList: FC<TableListProps> = ({ column }) => {
  console.log(column);
  return <th className={column.className}>{column.header}</th>;
};

export default TableList;
