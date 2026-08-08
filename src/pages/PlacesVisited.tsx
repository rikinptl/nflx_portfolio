import React from 'react';
import './PlacesVisited.css';
import { FaPlay } from 'react-icons/fa';

const places = [
  {
    name: 'San Francisco',
    note: 'Bay Area chapter',
    img: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80',
  },
  {
    name: 'New York',
    note: 'East Coast special',
    img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
  },
  {
    name: 'Ahmedabad',
    note: 'Origin story',
    img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80',
  },
  {
    name: 'London',
    note: 'International arc',
    img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
  },
];

const PlacesVisited: React.FC = () => {
  const featured = places[0];

  return (
    <div className="nx-page places-page">
      <section
        className="nx-billboard"
        style={{ backgroundImage: `url(${featured.img})` }}
      >
        <div className="nx-billboard-shade" />
        <div className="nx-billboard-content">
          <p className="nx-original">ON LOCATION</p>
          <h1 className="nx-billboard-title">Places Visited</h1>
          <div className="nx-meta">
            <span className="nx-match">Travel Reel</span>
            <span className="nx-chip">4K</span>
            <span className="nx-muted">{featured.name}</span>
          </div>
          <p className="nx-billboard-synopsis">
            Cities that shaped the journey — scroll the location shelf.
          </p>
          <div className="nx-actions">
            <span className="nx-btn nx-btn-play">
              <FaPlay /> Featured Location
            </span>
          </div>
        </div>
      </section>

      <section className="nx-rail">
        <h2 className="nx-rail-title">Filming Locations</h2>
        <div className="nx-shelf">
          {places.map((place, index) => (
            <article key={place.name} className="nx-poster">
              <div
                className="nx-poster-art"
                style={{ backgroundImage: `url(${place.img})` }}
              >
                <span className="place-rank">{String(index + 1).padStart(2, '0')}</span>
                <div className="nx-poster-overlay">
                  <span className="nx-play-circle">
                    <FaPlay />
                  </span>
                </div>
              </div>
              <div className="nx-poster-body">
                <h3>{place.name}</h3>
                <p>{place.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PlacesVisited;
