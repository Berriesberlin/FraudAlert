import React from 'react';
import community from '../community.png';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>Who Are We</h2>
      <p>
        Welcome to FraudAlert.sg, Singapore's platform dedicated to raising fraud awareness and providing a 
        community-driven forum for discussing and combating fraudulent activities.
      </p>

      <h2>Our Mission</h2>
      <p>
        At FraudAlert.sg, our mission is to educate, empower, and protect the citizens of Singapore from the 
        growing threats of fraud. We strive to provide up-to-date information, valuable resources, and a 
        supportive community to help you stay informed and vigilant against fraud.
      </p>

      <h2>What We Do</h2>
      <ul>
        <li>
          <strong>Share Your Stories:</strong> We provide a platform for users to share their personal experiences 
          with scams and fraud. By sharing your story, you can help others recognize and avoid similar threats.
        </li>
        <li>
          <strong>Fraud Prevention Workshops:</strong> We organize workshops focused on fraud prevention, where 
          users can learn about the latest fraud tactics and effective countermeasures. Join our workshops to 
          stay one step ahead of fraudsters.
        </li>
        <li>
          <strong>Volunteer Program:</strong> We offer a volunteer program dedicated to educating the elderly on 
          fraud awareness. Join our efforts to protect the most vulnerable members of our community by teaching 
          them how to identify and prevent fraud.
        </li>
      </ul>

      <h2>Join Our Community</h2>
      <p>
        We invite you to become a part of the FraudAlert.sg community. Whether you're here to learn more about 
        fraud prevention, share your experiences, or seek advice, our platform is designed to support you in 
        every step of your journey to safeguard against fraud.
      </p>

      <p>
        Together, we can create a safer, more informed, and vigilant community in Singapore.
      </p>
      <img src={community} alt="community-img"  className="community-image"/>
    </div>
  );
};

export default AboutUs;
