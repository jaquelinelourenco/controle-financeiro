import React from "react";
import TableItem from "../TableItem";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Table = ({ income, expense, total }) => {
  return (
    <C.Container>
      <TableItem
        title="Entradas"
        Icon={FaRegArrowAltCircleUp}
        value={income}
      />
      <TableItem
        title="Saídas"
        Icon={FaRegArrowAltCircleDown}
        value={expense}
      />
      <TableItem title="Total" Icon={FaDollarSign} value={total} />
    </C.Container>
  );
};

export default Table;
