import React, { useEffect, useState } from 'react';
import './ContactMe.css';
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';
import { ContactMe as IContactMe } from '../types';
import { getContactMe } from '../queries/getContactMe';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';

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

  return (
    <div className="contact-page">
      <div className="contact-cast">
        <div
          className="contact-portrait"
          style={portrait ? { backgroundImage: `url(${portrait})` } : undefined}
        />
        <div className="contact-cast-info">
          <p className="nx-kicker">CAST & CREW</p>
          <h1 className="contact-name">{userData.name}</h1>
          <div className="contact-meta">
            <span className="match">Available</span>
            <span className="badge">OPEN</span>
            <span>{userData.title}</span>
          </div>
          <p className="contact-synopsis">{userData.summary}</p>
          <p className="contact-credit">{userData.companyUniversity}</p>

          <div className="contact-actions">
            <PlayButton
              label="Email"
              onClick={() => {
                window.location.href = `mailto:${userData.email}`;
              }}
            />
            <MoreInfoButton
              label="LinkedIn"
              onClick={() => window.open(userData.linkedinLink, '_blank')}
            />
          </div>
        </div>
      </div>

      <section className="contact-rail">
        <h2 className="rail-title">Ways to Connect</h2>
        <div className="contact-tiles">
          <a href={`mailto:${userData.email}`} className="contact-tile">
            <FaEnvelope />
            <div>
              <p className="contact-tile-label">Email</p>
              <p className="contact-tile-value">{userData.email}</p>
            </div>
          </a>
          <a href={`tel:${userData.phoneNumber}`} className="contact-tile">
            <FaPhoneAlt />
            <div>
              <p className="contact-tile-label">Phone</p>
              <p className="contact-tile-value">{userData.phoneNumber}</p>
            </div>
          </a>
          <a
            href={userData.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-tile"
          >
            <FaLinkedin />
            <div>
              <p className="contact-tile-label">LinkedIn</p>
              <p className="contact-tile-value">View profile</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;
