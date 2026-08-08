import React, { useEffect, useState } from 'react';
import './Skills.css';
import { getSkills } from '../queries/getSkills';
import {
  FaAws,
  FaPython,
  FaDatabase,
  FaRobot,
  FaLightbulb,
  FaSearch,
  FaCloud,
  FaPlay,
} from 'react-icons/fa';
import { SiMicrosoftazure, SiGooglecloud } from 'react-icons/si';
import { Skill } from '../types';
import { IconType } from 'react-icons';

const iconMap: { [key: string]: IconType } = {
  research: FaSearch,
  entrepreneurship: FaLightbulb,
  robotics: FaRobot,
  'data-engineering': FaDatabase,
  python: FaPython,
  sql: FaDatabase,
  aws: FaAws,
  azure: SiMicrosoftazure,
  gcp: SiGooglecloud,
  SiGooglecloud: SiGooglecloud,
  cloud: FaCloud,
};

const SKILLS_HERO =
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80';

const Skills: React.FC = () => {
  const [skillsData, setSkillsData] = useState<Skill[]>([]);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSkills() {
      const data = await getSkills();
      setSkillsData(data);
    }
    fetchSkills();
  }, []);

  if (skillsData.length === 0) return <div className="nx-loading">Loading...</div>;

  const skillsByCategory = skillsData.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const topSkills = skillsData.slice(0, 5);
  const featured = topSkills[0];
  const FeaturedIcon = iconMap[featured.icon] || FaLightbulb;

  return (
    <div className="nx-page skills-page">
      <section className="nx-billboard" style={{ backgroundImage: `url(${SKILLS_HERO})` }}>
        <div className="nx-billboard-shade" />
        <div className="nx-billboard-content">
          <p className="nx-original">BROWSE BY GENRE</p>
          <h1 className="nx-billboard-title">{featured.name}</h1>
          <div className="nx-meta">
            <span className="nx-match">Top Skill</span>
            <span className="nx-chip">HD</span>
            <span className="nx-muted">{featured.category}</span>
          </div>
          <p className="nx-billboard-synopsis">{featured.description}</p>
          <div className="nx-actions">
            <span className="nx-btn nx-btn-play">
              <FaPlay /> Featured
            </span>
            <span className="nx-btn nx-btn-secondary">
              <FeaturedIcon /> {featured.category}
            </span>
          </div>
        </div>
      </section>

      <section className="nx-rail">
        <h2 className="nx-rail-title">Top 5 · Today</h2>
        <div className="nx-shelf">
          {topSkills.map((skill, index) => {
            const Icon = iconMap[skill.icon] || FaLightbulb;
            return (
              <div key={skill.name} className="nx-top10">
                <span className="nx-top10-rank" aria-hidden="true">
                  {index + 1}
                </span>
                <div className="nx-top10-card">
                  <Icon />
                  <h3>{skill.name}</h3>
                  <p>{skill.category}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {Object.keys(skillsByCategory).map((category) => (
        <section key={category} className="nx-rail">
          <h2 className="nx-rail-title">{category}</h2>
          <div className="nx-shelf">
            {skillsByCategory[category].map((skill) => {
              const Icon = iconMap[skill.icon] || FaLightbulb;
              const isActive = active === skill.name;
              return (
                <button
                  type="button"
                  key={skill.name}
                  className={`skill-tile ${isActive ? 'is-active' : ''}`}
                  onMouseEnter={() => setActive(skill.name)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(skill.name)}
                  onBlur={() => setActive(null)}
                >
                  <div className="skill-tile-art">
                    <Icon />
                    <span className="nx-play-circle skill-play">
                      <FaPlay />
                    </span>
                  </div>
                  <h3>{skill.name}</h3>
                  <p className={`skill-tile-desc ${isActive ? 'show' : ''}`}>
                    {skill.description}
                  </p>
                </button>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Skills;
