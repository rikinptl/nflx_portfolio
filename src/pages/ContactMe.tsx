import React, { useEffect, useState } from 'react';
import './ContactMe.css';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaPlay } from 'react-icons/fa';
import { ContactMe as IContactMe } from '../types';
import { getContactMe } from '../queries/getContactMe';

const ContactMe: React.FC = () => {
  const [userData, setUserData] = useState<IContactMe>();

  useEffect(() => {
    async function fetchUserData() {
      const data = await getContactMe();
      setUserData(data);
    }
    fetchUserData();
  }, []);

  if (!userData) return <div className="nx-loading">Loading...</div>;

  const portrait = userData.profilePicture?.url;
  const heroBg =
    portrait ||
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80';

  return (
    <div className="nx-page contact-page">
      <section className="nx-billboard" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="nx-billboard-shade" />
        <div className="nx-billboard-content contact-hero-grid">
          {portrait ? (
            <div
              className="contact-portrait"
              style={{ backgroundImage: `url(${portrait})` }}
            />
          ) : null}
          <div>
            <p className="nx-original">CAST & CREW</p>
            <h1 className="nx-billboard-title">{userData.name}</h1>
            <div className="nx-meta">
              <span className="nx-match">Available Now</span>
              <span className="nx-chip">OPEN</span>
              <span className="nx-chip">HD</span>
              <span className="nx-muted">{userData.title}</span>
            </div>
            <p className="nx-billboard-synopsis">{userData.summary}</p>
            <p className="contact-credit">{userData.companyUniversity}</p>
            <div className="nx-actions">
              <a className="nx-btn nx-btn-play" href={`mailto:${userData.email}`}>
                <FaPlay /> Email
              </a>
              <a
                className="nx-btn nx-btn-secondary"
                href={userData.linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="nx-rail">
        <h2 className="nx-rail-title">Ways to Connect</h2>
        <div className="nx-shelf">
          <a href={`mailto:${userData.email}`} className="nx-poster contact-poster">
            <div className="nx-poster-art">
              <FaEnvelope />
              <div className="nx-poster-overlay">
                <span className="nx-play-circle">
                  <FaPlay />
                </span>
              </div>
            </div>
            <div className="nx-poster-body">
              <h3>Email</h3>
              <p>{userData.email}</p>
            </div>
          </a>
          <a href={`tel:${userData.phoneNumber}`} className="nx-poster contact-poster">
            <div className="nx-poster-art">
              <FaPhoneAlt />
              <div className="nx-poster-overlay">
                <span className="nx-play-circle">
                  <FaPlay />
                </span>
              </div>
            </div>
            <div className="nx-poster-body">
              <h3>Phone</h3>
              <p>{userData.phoneNumber}</p>
            </div>
          </a>
          <a
            href={userData.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="nx-poster contact-poster"
          >
            <div className="nx-poster-art">
              <FaLinkedin />
              <div className="nx-poster-overlay">
                <span className="nx-play-circle">
                  <FaPlay />
                </span>
              </div>
            </div>
            <div className="nx-poster-body">
              <h3>LinkedIn</h3>
              <p>View profile</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;
