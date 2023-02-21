import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";

import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import CustomerCard from "./CustomerCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CustomerCard />} />
      </Routes>
    </div>
  );
}

export default App;
