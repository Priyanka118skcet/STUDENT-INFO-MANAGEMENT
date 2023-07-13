import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import StudentLogin from "./studentLogin";
import AdminLogin from "./adminLogin";
import Dashboard from "./dashboard";
import StudentComponent from "./StudentComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact';

const RouteComponent = ()=>{
    return(
        <Router>
            <Routes>
            <Route path="/" element={<StudentLogin/>}></Route>
            <Route path="/admin" element={<AdminLogin/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/registration" element={<StudentComponent/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
        </Router>
    )
}
export default RouteComponent