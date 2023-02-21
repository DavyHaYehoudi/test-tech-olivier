import React from "react";
import ButtonTableLine from "./ButtonTableLine";

const TableLine = () => {
  return (
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td className="w-25" ><ButtonTableLine /> </td>
    </tr>
  );
};

export default TableLine;
