import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './styles/dashboard.css'

const Dashboard = ()=>{
    const navigate = useNavigate()
    const SideBar = ()=>{
        return(
            <div className="sideBar">
                <div className="sidebarInnerContainer">
                <button className="SidebarBtn" style={{backgroundColor:'white',color:'black'}}>Home</button>
               <Link to="/registration">
                <button className="SidebarBtn">Registration</button>
                </Link>
                <button className="SidebarBtn">Course</button>
                <button className="SidebarBtn">Reports</button>
                <Link to="/contact">
                <button className="SidebarBtn">Contact</button>
                </Link>
                <button className="SidebarBtn">Message</button>
                <button className="SidebarBtn">Support</button>
                <button className="SidebarBtn">Records</button>
                <button className="SidebarBtn">Attendencs</button>
                </div>
            </div>
        )
    }
    
    return(
        <div className="mainContainer">
            <SideBar/>
            <div className="container">
           <div className="logoutCont">
            <button className="logoutBtn"
            onClick={()=>{navigate('/')}}
            >Logout</button>
           </div>
           <div
            className="contentContainer">

           STUDENT MANAGEMENT SYSTEM
            <br></br>
            <br></br>

            Sri Krishna College of Engineering and 
            <br></br> 
            Technologyis the most sought after 
            <br></br>
            Institution among the premier
            <br></br>
            technical Institutions in South India.
            <br></br>
            It is an Autonomous Institution.
            <br></br>
             
             


           </div>
           </div>
        </div>
        
    )
}
export default Dashboard