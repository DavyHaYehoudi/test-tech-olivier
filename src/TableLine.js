import React from "react";
import ButtonTableLine from "./ButtonTableLine";

const TableLine = ({ users,listCustomerRefresh }) => {
  return (
    users &&
    users.map((user,i) => (
      <tr key={i} >
        <td>{user._id}</td>
        <td>{user.name}</td>
        <td>{user.role}</td>
        <td>{user.managerName}</td>
        <td className="w-25">
          <ButtonTableLine customerId={user._id} listCustomerRefresh={listCustomerRefresh} />{" "}
        </td>
      </tr>
    ))
  );
};

export default TableLine;
