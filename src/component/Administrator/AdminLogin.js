import React, { useState } from 'react';
import { admin } from '../../data';
import '../login.css'
function AdminLogin({ isLoggedIn, setLoggedIn })  {
 
      const [formData, setFormData] = useState({
        name: '',
        password: '',
      });
    
      //const [employeeData, setEmployeeData] = useState(null);
      const [loginError, setLoginError] = useState('');
      const [logIn, setLogIn] = useState(false)
      
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        
      };
    
      const handleFormSubmit = (e) => {
        e.preventDefault();
       
      
    
    
        //  admin authentication 
        const { name, password } = formData;
        
         for (let i=0; i<admin.length; i++){
        if (name === admin[i].name && password === admin[i].password) {
          // If authentication is successful, fetch employee data
          setLoggedIn(true);
          setLogIn(!logIn)
          setLoginError({loginError})
          } else {
           // setEmployeeData(null);
      setLoginError('Invalid name or password');
          }
    };
      }
    
    return (
      <div>
        <div className='login'>
          <div className='login-container'>
        <h3>Administrator Login</h3>
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
        {/*<button type="submit">Login</button>*/}
        <button type="submit">{logIn ? "Log out" : "Log in"}
       </button>
        

      </form>
      </div>
      </div>  
      </div>
      </div>
    );
  };
  export default AdminLogin