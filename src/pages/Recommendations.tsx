import React, { useState } from 'react';
import './Recommendations.css';
import { FaPlay } from 'react-icons/fa';

type Review = {
  initials: string;
  name: string;
  role: string;
  date: string;
  relationship: string;
  quotes: string[];
  match: string;
  score: string;
};

const reviews: Review[] = [
  {
    initials: 'CS',
    name: 'Chintan Shah',
    role: 'AI Solutions Engineer',
    date: 'November 13, 2024',
    relationship: 'Was Rikin’s teacher',
    match: '98% Match',
    score: '5.0',
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
    match: '96% Match',
    score: '5.0',
    quotes: [
      'I have known Mr. Rikin Patel since the first semester of his undergraduate studies. He has been one of the brightest students in my class. Rikin is incredibly self-sufficient and he always gives his best in whatever task he undertakes.',
      'He is quite generous in his efforts to acquaint himself with the new technologies and also has an indefatigable attitude towards the application of theories during the practical sessions.',
      'I recommend him and affirm that he has the required potential to perform exceptionally well in an intensive academic environment.',
    ],
  },
];

const HERO_BG =
  'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&q=80';

const Recommendations: React.FC = () => {
  const [active, setActive] = useState(0);
  const featured = reviews[active];

  return (
    <div className="nx-page recommendations-page">
      <section className="nx-billboard" style={{ backgroundImage: `url(${HERO_BG})` }}>
        <div className="nx-billboard-shade" />
        <div className="nx-billboard-content">
          <p className="nx-original">CRITICS’ CHOICE</p>
          <h1 className="nx-billboard-title">Members Say</h1>
          <div className="nx-meta">
            <span className="nx-match">{featured.match}</span>
            <span className="nx-chip">{featured.score}★</span>
            <span className="nx-chip">TV-MA</span>
            <span className="nx-muted">{featured.name}</span>
          </div>
          <p className="nx-billboard-synopsis">“{featured.quotes[0]}”</p>
          <div className="nx-actions">
            <button
              type="button"
              className="nx-btn nx-btn-play"
              onClick={() => {
                const el = document.getElementById(`review-${active}`);
                el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
            >
              <FaPlay /> Play Review
            </button>
            <span className="nx-btn nx-btn-secondary">
              {featured.relationship}
            </span>
          </div>
        </div>
      </section>

      <section className="nx-rail">
        <h2 className="nx-rail-title">Top Reviews</h2>
        <div className="nx-shelf">
          {reviews.map((review, index) => (
            <button
              type="button"
              key={review.name}
              className={`review-poster ${active === index ? 'is-active' : ''}`}
              onClick={() => setActive(index)}
            >
              <div className="review-poster-art" aria-hidden="true">
                {review.initials}
                <div className="nx-poster-overlay">
                  <span className="nx-play-circle">
                    <FaPlay />
                  </span>
                </div>
              </div>
              <div className="nx-poster-body">
                <div className="review-poster-meta">
                  <span className="nx-match">{review.match}</span>
                  <span className="nx-chip">{review.score}★</span>
                </div>
                <h3>{review.name}</h3>
                <p>{review.role}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="nx-rail review-episodes">
        <h2 className="nx-rail-title">Full Episodes</h2>
        <div className="review-episode-list">
          {reviews.map((review, index) => (
            <article
              id={`review-${index}`}
              key={`full-${review.name}`}
              className={`review-episode ${active === index ? 'is-active' : ''}`}
            >
              <div className="review-episode-index">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="review-episode-avatar" aria-hidden="true">
                {review.initials}
              </div>
              <div className="review-episode-body">
                <div className="review-episode-top">
                  <h3>{review.name}</h3>
                  <span>{review.date}</span>
                </div>
                <p className="review-episode-role">
                  {review.role} · {review.relationship}
                </p>
                {review.quotes.map((quote) => (
                  <p key={quote.slice(0, 28)} className="review-quote">
                    “{quote}”
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Recommendations;
