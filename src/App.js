import React, {useState} from 'react';
import './index.css';
import EmployeePage from './component/Administrator/EmployeePage';
import Header from './component/Header/Header';
import EmployeeEdit from './component/Administrator/EmployeeEdit';
import EmployeeLogin from './component/Employee/EmployeeLogin';
import TimeTracker from './component/Employee/TimeTracker';
import TimeList from './component/Employee/TimeList';
import AdminLogin from './component/Administrator/AdminLogin';
import NavBar from './component/Header/NavBar';
import { Route, Switch, Redirect} from "react-router-dom";

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoggedIn1, setLoggedIn1] = useState(false);
  return (
    <div>
    <NavBar />
      <Switch>
      <Route path="/EmployeeLogin">
          <EmployeeLogin isLoggedIn1={isLoggedIn1} setLoggedIn1={setLoggedIn1}/>
        </Route>
        <Route  path="/TimeTracker">
        {isLoggedIn1 ? <TimeTracker /> : <Redirect to="/EmployeeLogin" />}
        </Route>
        <Route  path="/TimeList"> 
         {isLoggedIn1 ? <TimeList /> : <Redirect to="/EmployeeLogin" />}
        </Route>
        <Route path="/AdminLogin">
        <AdminLogin isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
      </Route>
      <Route path="/EmployeePage">
        {isLoggedIn ? <EmployeePage /> : <Redirect to="/AdminLogin" />}
      </Route>
      
        <Route path="/EmployeeEdit">
        {isLoggedIn ? <EmployeeEdit /> : <Redirect to="/AdminLogin" />}
      </Route>
        <Route exact path="/">
          <Header />
        </Route>
      </Switch>
    </div>
  )
  
}

export default App;


