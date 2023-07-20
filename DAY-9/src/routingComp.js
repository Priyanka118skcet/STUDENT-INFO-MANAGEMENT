import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentLogin from "./studentLogin";
import AdminLogin from "./adminLogin";
import Dashboard from "./dashboard";
import StudentComponent from "./StudentComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact';
import Profile from './profile';
import Fees from './Fees/Fees';
import View from './view';
import Crud from './crud';
import CreateEmployeeComponent from './componentscurd/CreateEmployeeComponent';
import UpdateEmployeeComponent from './componentscurd/UpdateEmployeeComponent';
import ViewEmployeeComponent from './componentscurd/ViewEmployeeComponent';
import ListEmployeeComponent from "./componentscurd/ListEmployeeComponent";

const RouteComponent = () => {
  return (
      <Routes>
    
        <Route path="/" element={<StudentLogin />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registration" element={<StudentComponent />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/view" element={<View />} />
        <Route path="/crud" element={<Crud />} />
        <Route path="/employees" element={<ListEmployeeComponent />} />
        <Route path="/add-employee/_add" element={<CreateEmployeeComponent />} />
        <Route path="/view-employee/:id" element={<ViewEmployeeComponent />} />
        <Route path="/update-employee/:id" element={<UpdateEmployeeComponent />} />
      </Routes>
 
  );
};

export default RouteComponent;