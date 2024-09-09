import React, { useState } from 'react';
import vol1 from '../vol1.png';
import vol2 from '../vol2.png';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';


const Volunteer = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [availabilityDate, setAvailabilityDate] = useState('');
  const [experience, setExperience] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !availabilityDate || !role) {
      setError('Please fill in all required fields.');
      return;
    }

    // Prepare the data to be sent
    const volunteerData = {
      user: {
        firstName,
        lastName,
        email
      },
      availabilityDate: new Date(availabilityDate).toISOString(),
      role
    };

    try {
      // Send a POST request to the backend
    
      toast.success('Volunteer information submitted successfully!');
      // Clear form inputs
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setAvailabilityDate('');
      setExperience('');
      setRole('');
      
    } catch (error) {
      console.error('Error submitting volunteer information:', error);
      setError('There was an error submitting your information. Please try again.');
    }
  };

  return (
    <div className="volunteer">
      <div className="volunteer-header">
        <div className="volunteer-text">
          <h1>Volunteer to Protect Older Adults from Fraud and Scams</h1>
          <h2>What Do Volunteers Do to Help Prevent Fraud?</h2>
          <p>Our dedicated volunteer speakers play a crucial role in this mission. By engaging with community groups, clubs, and professional organizations, they help to:</p>
          <ul>
            <li>Educate the Public: Volunteers deliver informative presentations that identify common scams and fraudulent tactics.</li>
            <li>Raise Awareness: They teach people what to watch out for to avoid falling victim to fraud or identity theft.</li>
            <li>Provide Resources: Volunteers distribute valuable resources and materials that offer tips and strategies for fraud prevention.</li>
            <li>Offer Support: They provide guidance and support to individuals who have been affected by scams, helping them navigate the recovery process.</li>
          </ul>
          <p>Join us in this important work and make a meaningful impact in your community. Together, we can fight back against fraud and support those who need it most.</p>
        </div>
        <div className="volunteer-image">
          <img src={vol1} alt="Volunteers educating the public" />
        </div>
      </div>

      <div className="volunteer-roles">
        <div>
          <h3>Volunteer Roles:</h3>
          <p>
            As a volunteer focused on protecting older adults from fraud and scams, your primary responsibility is to educate and empower older adults and their communities. Your efforts will help them recognize, avoid, and respond to fraudulent activities, thereby safeguarding their financial and personal well-being.
          </p>
        </div>
        <div>
          <h3>Requirements:</h3>
          <ul>
            <li>Possess strong online and social media skills</li>
            <li>Be comfortable with technology</li>
            <li>Good communicator, both orally and in writing</li>
            <li>Must attend about 1 hour of on-demand training</li>
            <li>Approximately 2 - 4 hours a week</li>
            <li>Varies according to activities and availability</li>
          </ul>
        </div>
        <div className="volunteer-image-bottom">
        <img src={vol2} alt="Volunteer workshop" />
        </div>
      </div>

      <div className="volunteer-form">
        <h2>I WANT TO VOLUNTEER</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Volunteer Name:</label>
            <input type="text" placeholder="First" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            <input type="text" placeholder="Last" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Email Address:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Contact Phone:</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Availability:</label>
            <input type="date" value={availabilityDate} onChange={(e) => setAvailabilityDate(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Volunteer Experience:</label>
            <textarea value={experience} onChange={(e) => setExperience(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Role Preferences:</label>
            <div>
              <input type="radio" name="role" value="USHER" onChange={(e) => setRole(e.target.value)} required /> Usher
              <input type="radio" name="role" value="EVENT_SETUP" onChange={(e) => setRole(e.target.value)} required /> Event Set-up
              <input type="radio" name="role" value="TECH_SUPPORT" onChange={(e) => setRole(e.target.value)} required /> Tech Support
            </div>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Submit</button>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Volunteer;
