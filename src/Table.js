import Table from "react-bootstrap/Table";
import TableLine from "./TableLine";

function DarkTable() {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID Number</th>
          <th>Name</th>
          <th>Role</th>
          <th>Manager Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <TableLine />
      </tbody>
    </Table>
  );
}

export default DarkTable;
