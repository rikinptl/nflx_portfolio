import React from 'react';
import './Music.css';
import albumCover1 from '../images/Hotelcalifornia.jpg';
import albumCover2 from '../images/ac-dc.jpg';
import albumCover3 from '../images/guns-n-roses.webp';

const favoriteGenres = ['Rock', 'Classic Rock', 'Hard Rock', 'Blues', 'Alternative'];
const favoriteAlbums = [
  { title: 'Hotel California', artist: 'The Eagles', imgSrc: albumCover1, progress: 72 },
  { title: 'Back in Black', artist: 'AC/DC', imgSrc: albumCover2, progress: 54 },
  { title: 'Appetite for Destruction', artist: "Guns N' Roses", imgSrc: albumCover3, progress: 88 },
];

const Music: React.FC = () => {
  return (
    <div className="music-page">
      <header className="nx-page-header">
        <p className="nx-kicker">MY LIST</p>
        <h1 className="nx-title">Soundtrack</h1>
        <p className="nx-synopsis">
          Rock isn’t just a genre — it’s the score behind late-night builds and long drives.
        </p>
      </header>

      <section className="music-rail">
        <h2 className="rail-title">Browse by Genre</h2>
        <div className="genre-shelf">
          {favoriteGenres.map((genre, index) => (
            <div
              key={genre}
              className={`genre-tile tint-${index % 5}`}
            >
              <span>{genre}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="music-rail">
        <h2 className="rail-title">Continue Listening</h2>
        <div className="album-shelf">
          {favoriteAlbums.map((album) => (
            <article key={album.title} className="album-poster">
              <div className="album-art-wrap">
                <img src={album.imgSrc} alt={album.title} className="album-art" />
                <div className="album-progress" aria-hidden="true">
                  <div style={{ width: `${album.progress}%` }} />
                </div>
              </div>
              <h3>{album.title}</h3>
              <p>{album.artist}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Music;
