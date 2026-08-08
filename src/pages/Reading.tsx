import React from 'react';
import './Reading.css';
import atomicHabits from '../images/atomic_habits.jpg';
import richDadPoorDad from '../images/rich_dad_poor_dad.jpg';
import alchemist from '../images/alchemist.jpg';
import eatThatFrog from '../images/eat_that_frog.jpg';
import vijayanikiAidhuMetlu from '../images/vijayaniki_aidu_metlu.jpg';
import venneloAdapilla from '../images/vennelo_adapilla.jpeg';

const books = [
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    imgSrc: atomicHabits,
    description: 'A practical guide to building good habits and breaking bad ones.',
    row: 'Career & Habits',
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    imgSrc: richDadPoorDad,
    description: 'An eye-opener on wealth, assets, and financial literacy.',
    row: 'Career & Habits',
  },
  {
    title: 'Eat That Frog',
    author: 'Brian Tracy',
    imgSrc: eatThatFrog,
    description: 'A motivational book on overcoming procrastination.',
    row: 'Career & Habits',
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    imgSrc: alchemist,
    description: 'A magical journey of following one’s dreams.',
    row: 'Fiction & Telugu',
  },
  {
    title: 'Vijayaniki Aidhu Metlu',
    author: 'Yandamoori Veerendranath',
    imgSrc: vijayanikiAidhuMetlu,
    description: 'An inspirational Telugu book for personal growth.',
    row: 'Fiction & Telugu',
  },
  {
    title: 'Vennelo Adapilla',
    author: 'Yandamoori Veerendranath',
    imgSrc: venneloAdapilla,
    description: 'A classic Telugu romantic novel that touches the heart.',
    row: 'Fiction & Telugu',
  },
];

const Reading: React.FC = () => {
  const rows = Array.from(new Set(books.map((book) => book.row)));

  return (
    <div className="reading-page">
      <header className="nx-page-header">
        <p className="nx-kicker">BECAUSE YOU READ</p>
        <h1 className="nx-title">Reading List</h1>
        <p className="nx-synopsis">
          Covers that shaped perspective, motivation, and late-night thinking.
        </p>
      </header>

      {rows.map((row) => (
        <section key={row} className="reading-rail">
          <h2 className="rail-title">{row}</h2>
          <div className="book-shelf">
            {books
              .filter((book) => book.row === row)
              .map((book) => (
                <article key={book.title} className="book-poster">
                  <div className="book-cover-wrap">
                    <img src={book.imgSrc} alt={book.title} className="book-cover" />
                    <div className="book-overlay">
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
