import React from 'react';
import './Recommendations.css';
import chrisProfilePic from '../images/chris.jpg'; // Adjust the path based on your directory structure

const Recommendations: React.FC = () => {
  return (
    <div className='timeline-container'>
      <div className="recommendation-card">
        <div className="recommendation-header">
          <img src={chrisProfilePic} alt="Chris Smith" className="profile-pic" />
          <div>
            <h3>Chris Smith</h3>
            <p>Head of Kajima Community</p>
            <p className="date">October 24, 2024</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>✨ "It is with great pleasure that I write this reference for Rikin, who worked for us as a Data Engineer. During their time with us, they demonstrated exceptional technical expertise and a passion for data-driven solutions.</p>
          <p>During their time with us, Rikin demonstrated strong technical expertise in data engineering, a passion for automation, and a collaborative spirit that greatly contributed to our team's success. They played a pivotal role in designing and implementing scalable data pipelines, consistently delivering high-quality solutions while meeting project deadlines. Their ability to quickly adapt to new technologies and their proactive approach to finding innovative solutions set them apart."</p>
          <p>💼 "Rikin also showed exceptional teamwork and communication skills, effectively collaborating with cross-functional teams, including product managers, data scientists, and business stakeholders. Their professionalism, positive attitude, and dedication to their work made them an asset to the team."</p>
          <p>🌟 "I have no doubt that Rikin will be a valuable addition to any organization, and I wholeheartedly recommend them for any future opportunities."</p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
