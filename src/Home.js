import React from 'react';
import AddCustomerModal from './AddCustomerModal';
import Footer from './Footer';
import DarkTable from './Table';

const Home = () => {
    return (
        <div className="m-5">
        <h1>Employee Management System</h1>
        <h2 className="my-5">Employee list</h2>
        <DarkTable />
        <AddCustomerModal />
        <Footer />
      </div>
    );
};

export default Home;