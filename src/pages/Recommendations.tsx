import React from 'react';
import './Recommendations.css';

const Recommendations: React.FC = () => {
  return (
    <div className='recommendations-container'>
      <div className="recommendation-card">
        <div className="recommendation-header">
          <div className="profile-pic-placeholder">
            <span>CS</span>
          </div>
          <div>
            <h3>Chintan Shah</h3>
            <p>AI Solutions Engineer</p>
            <p className="date">November 13, 2024 · Was Rikin's teacher</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>✨ "I had the pleasure of teaching Rikin in my Big Data course, and I was consistently impressed by their dedication, curiosity, and technical prowess. Throughout the course, they demonstrated an impressive grasp of complex topics, from data warehousing and distributed computing to real-time data processing with tools like Hadoop and Spark.</p>
          <p>💼 "Rikin stood out not only for their analytical skills but also for their collaborative spirit. They were proactive in helping peers understand challenging concepts and contributed valuable insights during discussions. I'm confident that they will continue to excel in their career, bringing a blend of technical skill and teamwork to any project."</p>
          <p>🌟 "I highly recommend Rikin to any organization looking for a driven and knowledgeable professional in the field of Big Data."</p>
        </div>
      </div>

      <div className="recommendation-card">
        <div className="recommendation-header">
          <div className="profile-pic-placeholder">
            <span>JT</span>
          </div>
          <div>
            <h3>Jignesh Thaker</h3>
            <p>Dean (I/c) Student Affairs | PhD | MTech-Gold Medalist | MBA | Lifelong Learner | Author | Reviewer</p>
            <p className="date">September 2, 2023 · Was Rikin's mentor</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>✨ "I have known Mr. Rikin Patel since the first semester of his undergraduate studies. He has been one of the brightest students in my class. Rikin is incredibly self-sufficient and he always gives his best in whatever task he undertakes. I have often seen him work after college hours to meet deadlines."</p>
          <p>💼 "He is quite generous in his efforts to acquaint himself with the new technologies and also has an indefatigable attitude towards the application of theories during the practical sessions. His strength is his commitment and dedication to his work."</p>
          <p>🌟 "I believe that his endurance and analytical skills will contribute significantly to any assignment/role assigned to him. I recommend him and affirm that he has the required potential to perform exceptionally well in an intensive academic environment."</p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
