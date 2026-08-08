import React, { useEffect, useState } from 'react';
import './Certifications.css';
import { FaAws, FaExternalLinkAlt, FaMicrosoft, FaCertificate, FaUniversity } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiIeee, SiGooglecloud } from 'react-icons/si';
import { Certification } from '../types';
import { getCertifications } from '../queries/getCertifications';
import { IconType } from 'react-icons';

const iconData: { [key: string]: IconType } = {
  aws: FaAws,
  azure: FaMicrosoft,
  gcp: SiGooglecloud,
  'ai-coding': FaCertificate,
  'data-analytics': FaCertificate,
  udemy: SiUdemy,
  coursera: SiCoursera,
  ieee: SiIeee,
  university: FaUniversity,
};

const Certifications: React.FC = () => {
  const [certifications, setCertifications] = useState<Certification[]>([]);

  useEffect(() => {
    async function fetchCertifications() {
      const data = await getCertifications();
      setCertifications(data);
    }
    fetchCertifications();
  }, []);

  if (certifications.length === 0) return <div className="nx-loading">Loading...</div>;

  return (
    <div className="certifications-page">
      <header className="nx-page-header">
        <p className="nx-kicker">ACHIEVEMENTS</p>
        <h1 className="nx-title">Credentials</h1>
        <p className="nx-synopsis">
          Verified badges and certificates — tap any card to open the credential.
        </p>
      </header>

      <div className="cert-shelf">
        {certifications.map((cert, index) => {
          const Icon = iconData[cert.iconName] || FaCertificate;
          return (
            <a
              href={cert.link}
              key={cert.title}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="cert-card-top">
                <Icon className="cert-icon" />
                <span className="cert-year">{cert.issuedDate || '—'}</span>
              </div>
              <h3>{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <span className="cert-cta">
                View credential <FaExternalLinkAlt />
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;
