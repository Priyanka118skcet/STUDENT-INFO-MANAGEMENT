import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './styles/dashboard.css'

const Dashboard = ()=>{
    const navigate = useNavigate()
    const SideBar = ()=>{
        return(
            <div className="sideBar">
                <div className="sidebarInnerContainer">
              <button className="SidebarBtn">Home</button>
              &nbsp;&nbsp;
               <Link to="/registration">
               <button className="SidebarBtn">Registration</button>
                </Link>
                &nbsp;&nbsp;
                <Link to="/contact">
                <button className="SidebarBtn">Course</button>
                </Link>
                &nbsp;&nbsp;
                <Link to="/fees">
                <button className="SidebarBtn">Fees</button>
                </Link>
                &nbsp;&nbsp;
                <Link to="/contact">
                <button className="SidebarBtn">Contact</button>
                </Link>
                &nbsp;&nbsp;
                <Link to="/crud">
                <button className="SidebarBtn">Message</button>
                </Link>
                &nbsp;&nbsp;
                <Link to="/view">
                <button className="SidebarBtn">Support</button>
                </Link>
                &nbsp;&nbsp;
                <Link to="/contact">
                <button className="SidebarBtn">Records</button>
                </Link>
                &nbsp;&nbsp;
                
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