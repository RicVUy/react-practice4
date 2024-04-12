import React, { useState } from 'react';
import { employees1 } from '../../data';
import TimeTracker from './TimeTracker';
import TimeList from './TimeList';
import '../login.css'
function EmployeeLogin({  setLoggedIn1 }) {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  const [employeeData, setEmployeeData] = useState(null);
  const [loginError, setLoginError] = useState('');
  const [logIn, setLogIn] = useState(false)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();



    //  employee authentication 
    const { name, password } = formData;
    
    for (let i=0; i<employees1.length; i++){
    if (name === employees1[i].name1 && password === employees1[i].password1) {
      // If authentication is successful, fetch employee data
      setLoggedIn1(true)
      fetchEmployeeData(name);
      setLogIn(!logIn)
      setLoginError('');
    } else {
      setEmployeeData(null);
      setLoginError('Invalid name or password');
    }
   
  }};
  
  
  const fetchEmployeeData = (name) => {
    // Fetch employee data based on the provided name
    
    fetch(`/employees?name=${name}`)
      .then((resp) => resp.json())
      .then((data) => {
        // Assuming data is an array with one employee object
        console.log(data)
        if (data.length === 1) {
          setEmployeeData(data[0]);
        } else {
          setEmployeeData(null);
          setLoginError('Employee not found');
        }
      })
      .catch((error) => {
        console.error('Error fetching employee data:', error);
      });
  };

  return (
    <div>
      <div className='login'>
        <div className='login-container'>
      <h2>Employee Login</h2>
      <div className='login-fields'>
      <form onSubmit={handleFormSubmit}>
        <div>
         
          <input
            type="text"
            placeholder='Your name'
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
         
          <input
            type="password"
            placeholder='password'
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        
       {/* <button type="submit">Login</button>*/}
        <button type="submit">{logIn ? "Log out" : "Log in"}</button>
      </form>
      </div>
      {loginError && <p>{loginError}</p>}
      </div>
      </div>
      {employeeData && (
        <div className='card'>
          <h2>Employee Data</h2>
          <p>Name: {employeeData.name}</p>
          <img src={employeeData.image} alt={employeeData.name}/>
          <p>Password:{employeeData.password}</p>
          <p>Position: {employeeData.position}</p>
          <p>schedule:{employeeData.schedule}</p>
          <p>WorkTime:{employeeData.workTime}</p>
          <p>Pay per hour:${employeeData.payPerHour}</p>
          <p>Time In:{employeeData.timeInEvents}</p>
          <p>Time Out:{employeeData.timeOutEvents}</p>
          <p>Pay for this week: ${employeeData.payForThisWeek}</p>
           
         
        <div id="time-in-out">
      <TimeTracker />
      </div>
      <div id="time-in-out"> 
      <TimeList />
    </div>
           </div>
           )}
        
    </div>
  );
}

export default EmployeeLogin;

