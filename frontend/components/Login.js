import axios from 'axios';
import React, { useContext, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../App';

const Login = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const {handleLogin} = useContext(AuthContext);

  // Handle input changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8082/api/users/login', formData); // Adjust endpoint as needed
      // Handle successful login
      if (response.status === 200) {
        toast.success('Login successful!');
        handleLogin(response.data)
        window.location.href = '/'; // return to the homepage
      }
    } catch (error) {
      // Handle errors
      const errorMessage = error.response?.data?.message || error.message || 'Error logging in. Please try again.';
      toast.error(`Error logging in: ${errorMessage}`);
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email Address:</label>
        <input type="email"  name="email" value={formData.email} onChange={handleChange} required/>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required/>
        <button type="submit">LOGIN</button>
      </form>
      <span>No account? <a href='/signup'>Sign up</a> here</span>
      <ToastContainer/>
    </div>
  );
};

export default Login;

