import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import Createstaff from './components/Createstaff';
import Editstaff from './components/Editstaff';
import staffHome from './components/staffHome';
import NavBarstaff from './components/NavBarstaff';
import staffDetails from './components/staffDetails';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>

       <div className="container">
         <NavBarstaff/>
         <Route path="/" exact component={staffHome}></Route>
         <Route path="/add"component={Createstaff}></Route>
         <Route path="/edit/:id"component={Editstaff}></Route>
         <Route path="/staff/:id"component={staffDetails}></Route> 


       </div>
           
      </BrowserRouter>
  
    )
  }
}