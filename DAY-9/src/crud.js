import React from 'react';
import logo from './logo.svg';
import './crud.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ListEmployeeComponent from './componentscurd/ListEmployeeComponent';
import HeaderComponent from './componentscurd/HeaderComponent';
import FooterComponent from './componentscurd/FooterComponent';


function App() {
  return (
    <div className='bodycurd'>
    <div>
              <HeaderComponent />
              <ListEmployeeComponent/>
                <div className="container">
                    <Routes> 

                        
                    </Routes>
                </div>
              <FooterComponent />
    </div>
    </div>
  );
}

export default App;
