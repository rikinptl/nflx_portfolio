import React from 'react';
import './Recommendations.css';

type Review = {
  initials: string;
  name: string;
  role: string;
  date: string;
  relationship: string;
  quotes: string[];
  match: string;
};

const reviews: Review[] = [
  {
    initials: 'CS',
    name: 'Chintan Shah',
    role: 'AI Solutions Engineer',
    date: 'November 13, 2024',
    relationship: 'Was Rikin’s teacher',
    match: 'Top Review',
    quotes: [
      'I had the pleasure of teaching Rikin in my Big Data course, and I was consistently impressed by their dedication, curiosity, and technical prowess. Throughout the course, they demonstrated an impressive grasp of complex topics, from data warehousing and distributed computing to real-time data processing with tools like Hadoop and Spark.',
      'Rikin stood out not only for their analytical skills but also for their collaborative spirit. They were proactive in helping peers understand challenging concepts and contributed valuable insights during discussions.',
      'I highly recommend Rikin to any organization looking for a driven and knowledgeable professional in the field of Big Data.',
    ],
  },
  {
    initials: 'JT',
    name: 'Jignesh Thaker',
    role: 'Dean (I/c) Student Affairs | PhD | Author | Reviewer',
    date: 'September 2, 2023',
    relationship: 'Was Rikin’s mentor',
    match: 'Mentor Pick',
    quotes: [
      'I have known Mr. Rikin Patel since the first semester of his undergraduate studies. He has been one of the brightest students in my class. Rikin is incredibly self-sufficient and he always gives his best in whatever task he undertakes.',
      'He is quite generous in his efforts to acquaint himself with the new technologies and also has an indefatigable attitude towards the application of theories during the practical sessions.',
      'I recommend him and affirm that he has the required potential to perform exceptionally well in an intensive academic environment.',
    ],
  },
];

const Recommendations: React.FC = () => {
  return (
    <div className="recommendations-page">
      <header className="nx-page-header">
        <p className="nx-kicker">AUDIENCE REVIEWS</p>
        <h1 className="nx-title">Members Say</h1>
        <p className="nx-synopsis">
          Testimonials from mentors and teachers — the people who watched the early seasons.
        </p>
      </header>

      <div className="reviews-rail">
        {reviews.map((review) => (
          <article key={review.name} className="review-card">
            <div className="review-header">
              <div className="review-avatar" aria-hidden="true">
                {review.initials}
              </div>
              <div>
                <div className="review-badges">
                  <span className="match">{review.match}</span>
                  <span className="badge">5★</span>
                </div>
                <h3>{review.name}</h3>
                <p className="review-role">{review.role}</p>
                <p className="review-date">
                  {review.date} · {review.relationship}
                </p>
              </div>
            </div>
            <div className="review-body">
              {review.quotes.map((quote) => (
                <p key={quote.slice(0, 24)}>“{quote}”</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
