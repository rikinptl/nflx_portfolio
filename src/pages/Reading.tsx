import React from 'react';
import './Reading.css';
import { FaPlay } from 'react-icons/fa';

const books = [
  {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    imgSrc: 'https://covers.openlibrary.org/b/isbn/9780140449136-L.jpg',
    description: 'A psychological masterpiece about guilt, morality, and redemption in St. Petersburg.',
    row: 'Dostoevsky & Tolstoy',
  },
  {
    title: 'The Brothers Karamazov',
    author: 'Fyodor Dostoevsky',
    imgSrc: 'https://covers.openlibrary.org/b/isbn/9780374528379-L.jpg',
    description: 'A profound novel of faith, doubt, and family conflict — often called Dostoevsky’s greatest work.',
    row: 'Dostoevsky & Tolstoy',
  },
  {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    imgSrc: 'https://covers.openlibrary.org/b/isbn/9780199232765-L.jpg',
    description: 'An epic of love, war, and destiny set against Napoleon’s invasion of Russia.',
    row: 'Dostoevsky & Tolstoy',
  },
  {
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    imgSrc: 'https://covers.openlibrary.org/b/isbn/9780143035008-L.jpg',
    description: 'A tragic portrait of passion, society, and the search for meaning in 19th-century Russia.',
    row: 'Dostoevsky & Tolstoy',
  },
  {
    title: 'The Master and Margarita',
    author: 'Mikhail Bulgakov',
    imgSrc: 'https://covers.openlibrary.org/b/isbn/9780141180144-L.jpg',
    description: 'The Devil visits Soviet Moscow in this surreal satire of art, love, and power.',
    row: 'Russian Masters',
  },
  {
    title: 'Dead Souls',
    author: 'Nikolai Gogol',
    imgSrc: 'https://covers.openlibrary.org/b/isbn/9780140448078-L.jpg',
    description: 'A darkly comic journey through provincial Russia and the absurdities of human greed.',
    row: 'Russian Masters',
  },
  {
    title: 'Fathers and Sons',
    author: 'Ivan Turgenev',
    imgSrc: 'https://covers.openlibrary.org/b/isbn/9780140441475-L.jpg',
    description: 'A landmark novel of generational conflict and the rise of nihilism in Russia.',
    row: 'Russian Masters',
  },
  {
    title: 'Eugene Onegin',
    author: 'Alexander Pushkin',
    imgSrc: 'https://covers.openlibrary.org/b/isbn/9780140448108-L.jpg',
    description: 'Pushkin’s verse novel of love, regret, and the Russian soul — the foundation of modern Russian literature.',
    row: 'Russian Masters',
  },
];

const Reading: React.FC = () => {
  const rows = Array.from(new Set(books.map((book) => book.row)));
  const featured = books[0];

  return (
    <div className="nx-page reading-page">
      <section
        className="nx-billboard"
        style={{ backgroundImage: `url(${featured.imgSrc})` }}
      >
        <div className="nx-billboard-shade" />
        <div className="nx-billboard-content">
          <p className="nx-original">BECAUSE YOU READ</p>
          <h1 className="nx-billboard-title">{featured.title}</h1>
          <div className="nx-meta">
            <span className="nx-match">99% Match</span>
            <span className="nx-chip">Classic</span>
            <span className="nx-chip">HD</span>
            <span className="nx-muted">{featured.author}</span>
          </div>
          <p className="nx-billboard-synopsis">{featured.description}</p>
          <div className="nx-actions">
            <span className="nx-btn nx-btn-play">
              <FaPlay /> Featured Title
            </span>
            <span className="nx-btn nx-btn-secondary">Russian Literature</span>
          </div>
        </div>
      </section>

      <section className="nx-rail">
        <h2 className="nx-rail-title">Top {Math.min(5, books.length)} · Today</h2>
        <div className="nx-shelf">
          {books.slice(0, 5).map((book, index) => (
            <div key={`top-${book.title}`} className="nx-top10">
              <span className="nx-top10-rank" aria-hidden="true">
                {index + 1}
              </span>
              <div className="nx-top10-card reading-top-card">
                <img src={book.imgSrc} alt="" />
                <div>
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {rows.map((row) => (
        <section key={row} className="nx-rail">
          <h2 className="nx-rail-title">{row}</h2>
          <div className="nx-shelf">
            {books
              .filter((book) => book.row === row)
              .map((book) => (
                <article key={book.title} className="book-poster">
                  <div className="book-cover-wrap">
                    <img src={book.imgSrc} alt={book.title} className="book-cover" />
                    <div className="book-overlay">
                      <span className="nx-play-circle">
                        <FaPlay />
                      </span>
                      <p>{book.description}</p>
                    </div>
                  </div>
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                </article>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Reading;
