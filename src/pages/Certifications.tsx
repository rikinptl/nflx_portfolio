import React, { useEffect, useState } from 'react';
import './Certifications.css';
import {
  FaAws,
  FaCertificate,
  FaExternalLinkAlt,
  FaMicrosoft,
  FaPlay,
  FaUniversity,
} from 'react-icons/fa';
import { SiCoursera, SiGooglecloud, SiIeee, SiUdemy } from 'react-icons/si';
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

const CERT_HERO =
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80';

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

  const [featured, ...rest] = certifications;
  const FeaturedIcon = iconData[featured.iconName] || FaCertificate;

  return (
    <div className="nx-page certifications-page">
      <section className="nx-billboard" style={{ backgroundImage: `url(${CERT_HERO})` }}>
        <div className="nx-billboard-shade" />
        <div className="nx-billboard-content">
          <p className="nx-original">RIKIN ORIGINALS</p>
          <h1 className="nx-billboard-title">{featured.title}</h1>
          <div className="nx-meta">
            <span className="nx-match">98% Match</span>
            <span className="nx-chip">{featured.issuedDate || 'NEW'}</span>
            <span className="nx-chip">HD</span>
            <span className="nx-muted">{featured.issuer}</span>
          </div>
          <p className="nx-billboard-synopsis">
            Featured credential from the awards shelf — verified proof of cloud,
            analytics, and AI craft. Tap play to open the badge.
          </p>
          <div className="nx-actions">
            <a
              className="nx-btn nx-btn-play"
              href={featured.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPlay /> Play
            </a>
            <a
              className="nx-btn nx-btn-secondary"
              href={featured.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FeaturedIcon /> More Info
            </a>
          </div>
        </div>
      </section>

      <section className="nx-rail">
        <h2 className="nx-rail-title">Top {Math.min(5, certifications.length)} · Today</h2>
        <div className="nx-shelf">
          {certifications.slice(0, 5).map((cert, index) => {
            const Icon = iconData[cert.iconName] || FaCertificate;
            return (
              <a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="nx-top10"
              >
                <span className="nx-top10-rank" aria-hidden="true">
                  {index + 1}
                </span>
                <div className="nx-top10-card">
                  <Icon />
                  <h3>{cert.title}</h3>
                  <p>
                    {cert.issuer} · {cert.issuedDate || '—'}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section className="nx-rail">
        <h2 className="nx-rail-title">Because You Earn Badges</h2>
        <div className="nx-shelf">
          {(rest.length ? rest : certifications).map((cert) => {
            const Icon = iconData[cert.iconName] || FaCertificate;
            return (
              <a
                key={`shelf-${cert.title}`}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="nx-poster"
              >
                <div className="nx-poster-art">
                  <Icon />
                  <div className="nx-poster-overlay">
                    <span className="nx-play-circle">
                      <FaPlay />
                    </span>
                  </div>
                  <span className="cert-year-tag">{cert.issuedDate || 'NEW'}</span>
                </div>
                <div className="nx-poster-body">
                  <h3>{cert.title}</h3>
                  <p>{cert.issuer}</p>
                  <span className="cert-view">
                    View credential <FaExternalLinkAlt />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Certifications;
