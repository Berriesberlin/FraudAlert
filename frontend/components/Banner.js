
import React from 'react';
import homeImage from '../home.png'; // Adjusted path to reflect the image in src directory

const Banner = () => {


  return (
    <div className="banner">
      {/* https://images.app.goo.gl/7FhwM32ieHNMCxbR7 */}
      <img src={homeImage} alt="Home Banner"  className="home-image"/>
      <h1>Welcome to FraudAlert.sg</h1>
      <h2>Your platform for raising fraud awareness.</h2>
      
      <p>
        At FraudAlert.sg, our mission is to empower individuals with the knowledge and tools they need to protect themselves from scams and fraudulent activities. In today’s digital age, fraud has become increasingly sophisticated, making it more important than ever to stay informed and vigilant.
      </p>

      <p>
        Whether you’re a concerned individual, a business owner, or simply someone who wants to learn more about staying safe online, our platform offers a wealth of resources to help you:
      </p>

      <ul>
        <li>Understand the latest types of fraud and scams.</li>
        <li>Learn how to identify red flags and warning signs.</li>
        <li>Access expert tips on how to protect your personal information.</li>
        <li>Get updates on recent fraud cases and how to avoid them.</li>
      </ul>

      <p>
        Join our community today and take the first step towards safeguarding your digital life. Together, we can make the online world a safer place for everyone.
      </p>
      
      <a href="/post">
        <button>Get Started</button>
      </a>
    </div>
  );
};

export default Banner;
