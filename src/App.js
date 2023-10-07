import React, {useState} from 'react';
import './index.css';
import EmployeePage from './component/Administrator/EmployeePage';
import Header from './component/Header/Header';
//import Personal from './component/Employee/Personal';
import EmployeeEdit from './component/Administrator/EmployeeEdit';
import EmployeeLogin from './component/Employee/EmployeeLogin';
import TimeTracker from './component/Employee/TimeTracker';
import TimeList from './component/Employee/TimeList';
import AdminLogin from './component/Administrator/AdminLogin';
import NavBar from './component/Header/NavBar';
import { Route, Switch, Redirect} from "react-router-dom";

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div>
    <NavBar />
      <Switch>
      <Route exact path="/EmployeeLogin">
          <EmployeeLogin />
        </Route>
        <Route exact path="/TimeTracker">
          <TimeTracker />
        </Route>
        <Route exact path="/TimeList">
          <TimeList />
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


