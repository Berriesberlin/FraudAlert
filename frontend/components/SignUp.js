import React, {useState} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

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
      const response = await axios.post('http://localhost:8082/api/users', formData); // Update the URL according to your backend endpoint
      if (response.status = 201)
      {
        toast.success('User created successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        });
      }
    } catch (error) {
      toast.error('Error creating user. Please try again. /n Error: ' + error);
    }
  };

  return (
    <div className="sign-up">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text"  name="firstName" value={formData.firstName} onChange={handleChange} required/>
        <label>Last Name:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required/>
        <button type="submit">SIGN UP</button>
      </form>
      <span>Back to <a href='/login'>Login</a> here</span>
      <ToastContainer/>
    </div>
  );
};

export default SignUp;
