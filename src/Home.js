import axios from "axios";
import React, { useEffect, useState } from "react";
import AddCustomerModal from "./AddCustomerModal";
import Footer from "./Footer";
import DarkTable from "./Table";

const Home = () => {
  const [users, setUsers] = useState();
  const [addUser, setAddUser] = useState(true);

  console.log("addUser :",addUser);

  const listCustomerRefresh = () => {
    setAddUser(true);
  };

  useEffect(() => {
    addUser &&
      axios
        .get("http://localhost:2800/users")
        .then((res) => {setUsers(res.data)
          setAddUser(false);})
        .catch((err) => console.log(err));

    
  }, [addUser]);

  return (
    <div className="m-5">
      <h1>Employee Management System</h1>
      <h2 className="my-5">Employee list</h2>
      <DarkTable users={users} listCustomerRefresh={listCustomerRefresh} />
      <AddCustomerModal listCustomerRefresh={listCustomerRefresh} />
      <Footer />
    </div>
  );
};

export default Home;
