import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

function Post() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [requireContact, setRequireContact] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [error, setError] = useState('');

  const user = JSON.parse(localStorage.getItem('user'));

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    // Validate file type: Check if the file type starts with 'image/'
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      setFile(selectedFile);
      setError(''); // Clear any previous errors
    } else {
      setFile(null); // Reset file input
      setError('Please upload a valid image file (e.g., .jpg, .png, .gif).'); // Set error message
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert('You must be logged in to share a story.');
      return;
    }

    if (!requireContact) {
      setError("Please give consent to National Crime Prevention Council to contact you.");
      return
    }

    if (!isAnonymous) {
      setError("Please post this anonymously.");
      return
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('file', file);
    formData.append('userId', user.id); 

    formData.append('requireContact', requireContact);
    formData.append('isAnonymous', isAnonymous);

    try {
      console.log(formData)
      // Send the form data to the backend
      const response = await axios.post('http://localhost:8082/api/posts', formData, {
        //to allow sending the file over the api
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        toast('Your story has been shared successfully!');
        setTitle('');
        setDescription('');
        setFile(null);
        setRequireContact(false);
        setIsAnonymous(false);
      }
    } catch (error) {
      console.error('Error sharing your story:', error);
      alert('There was an error sharing your story. Please try again.');
    }
  };

  return (
    <div className="post">
      <h2>Share Your Stories</h2>
      <p>If you are interested to share, please fill in the form below...</p>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
        
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        
        <input type="file" onChange={handleFileChange} required />
        
        <div className="checkboxes">
          <label>
            <input 
              type="checkbox" 
              name="contact" 
              checked={requireContact}
              onChange={() => setRequireContact(!requireContact)}
            />
            Yes, I’m willing to share my story to raise awareness of scams. I am happy for the National Crime Prevention Council to contact me to discuss it further.
          </label>
          <label>
            <input 
              type="checkbox" 
              name="anonymous" 
              checked={isAnonymous}
              onChange={() => setIsAnonymous(!isAnonymous)} 
            />
            I am happy for the National Crime Prevention Council to use my story anonymously and do not wish to be contacted.
          </label>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Share</button>
      </form>

      <div className="involvement">
        <h3>How to Get Involved</h3>
        <p>Join now to protect our community...</p>
        <a href="/volunteer">
        <button className="join-button">Join</button>
        </a>
     </div>

      <div className="training-support">
        <h3>Training and Support</h3>
        <p>Your participation in this workshop not only helps protect you...</p>
        <a href="/workshop">
        <button className="join-button2">Join</button>
        </a>

      </div>
    <ToastContainer/>
    </div>
  );
}

export default Post;
