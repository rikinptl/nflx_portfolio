import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WorkPermit.css';
import { getWorkPermit } from '../queries/getWorkPermit';
import { WorkPermit as IWorkPermit } from '../types';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';

const HERO_BG =
  'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1920&q=80';

const WorkPermit: React.FC = () => {
  const navigate = useNavigate();
  const [workPermitData, setWorkPermitData] = useState<IWorkPermit | null>(null);

  useEffect(() => {
    async function fetchWorkPermitData() {
      const data = await getWorkPermit();
      setWorkPermitData(data);
    }
    fetchWorkPermitData();
  }, []);

  if (!workPermitData) {
    return <div className="work-permit-loading">Loading...</div>;
  }

  const expiry = new Date(workPermitData.expiryDate);
  const expiryLabel = expiry.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const openResume = () => {
    window.open('/Profile.pdf', '_blank');
  };

  return (
    <div className="work-permit-page">
      <section
        className="work-permit-hero"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      >
        <div className="work-permit-hero-shade" />
        <div className="work-permit-hero-vignette" />

        <div className="work-permit-hero-content">
          <div className="work-permit-kicker">
            <span className="work-permit-original">RIKIN ORIGINALS</span>
          </div>

          <h1 className="work-permit-title">
            Work
            <span>Authorization</span>
          </h1>

          <div className="work-permit-stats">
            <span className="work-permit-match">98% Match</span>
            <span className="work-permit-year">Permanent</span>
            <span className="work-permit-maturity">OPEN</span>
            <span className="work-permit-hd">US</span>
            <span className="work-permit-season">No sponsorship needed</span>
          </div>

          <p className="work-permit-synopsis">
            Permanent resident of the United States — authorized to work for any
            employer with no visa restrictions. Plenty of runway to ship work,
            grow, and keep the plot moving
            {workPermitData.expiryDate ? (
              <>
                {' '}
                (records reference <strong>{expiryLabel}</strong>)
              </>
            ) : null}
            .
          </p>

          <div className="work-permit-actions">
            <PlayButton onClick={openResume} label="Resume" />
            <MoreInfoButton onClick={() => navigate('/contact-me')} label="Contact" />
          </div>
        </div>
      </section>

      <section className="work-permit-rail">
        <h2 className="work-permit-rail-title">More Details</h2>
        <div className="work-permit-cards">
          <article className="work-permit-card work-permit-card--status">
            <p className="work-permit-card-label">Status</p>
            <h3 className="work-permit-card-title">{workPermitData.visaStatus}</h3>
            <p className="work-permit-card-copy">
              Full work authorization — no sponsorship required for roles that
              accept open status.
            </p>
            <div className="work-permit-progress">
              <div className="work-permit-progress-bar" />
            </div>
            <span className="work-permit-card-foot">No visa restrictions</span>
          </article>

          <article className="work-permit-card work-permit-card--location">
            <p className="work-permit-card-label">Based In</p>
            <h3 className="work-permit-card-title">Dallas, Texas</h3>
            <p className="work-permit-card-copy">
              United States — open to remote, hybrid, or on-site opportunities.
            </p>
            <span className="work-permit-card-foot">Central Time (CT)</span>
          </article>

          <article className="work-permit-card work-permit-card--langs">
            <p className="work-permit-card-label">Languages</p>
            <ul className="work-permit-langs">
              <li>
                <span>English</span>
                <em>Full Professional</em>
              </li>
              <li>
                <span>Hindi</span>
                <em>Full Professional</em>
              </li>
              <li>
                <span>Gujarati</span>
                <em>Native</em>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
};

export default WorkPermit;
