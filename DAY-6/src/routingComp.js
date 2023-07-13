import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import StudentLogin from "./studentLogin";
import AdminLogin from "./adminLogin";
import Dashboard from "./dashboard";
import StudentComponent from "./StudentComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact';
import Profile from './profile';
import Fees from './Fees/Fees';
import View from './view';
const RouteComponent = ()=>{
    return(
        <Router>
            <Routes>
            <Route path="/" element={<StudentLogin/>}></Route>
            <Route path="/admin" element={<AdminLogin/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/registration" element={<StudentComponent/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/fees" element={<Fees/>}></Route>
            <Route path="/view" element={<View/>}></Route>
           
            </Routes>
        </Router>
    )
}
export default RouteComponent