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

  return (
    <div className="skills-page">
      <header className="nx-page-header">
        <p className="nx-kicker">BROWSE BY GENRE</p>
        <h1 className="nx-title">Skills</h1>
        <p className="nx-synopsis">
          A shelf of tools, stacks, and strengths — hover a title for the synopsis.
        </p>
      </header>

      <section className="skills-rail">
        <h2 className="rail-title">Top 5 · Today</h2>
        <div className="top10-row">
          {topSkills.map((skill, index) => {
            const Icon = iconMap[skill.icon] || FaLightbulb;
            return (
              <div key={skill.name} className="top10-card">
                <span className="top10-rank">{index + 1}</span>
                <div className="top10-body">
                  <Icon className="top10-icon" />
                  <p>{skill.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {Object.keys(skillsByCategory).map((category) => (
        <section key={category} className="skills-rail">
          <h2 className="rail-title">{category}</h2>
          <div className="skills-shelf">
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
                  <Icon className="skill-tile-icon" />
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
