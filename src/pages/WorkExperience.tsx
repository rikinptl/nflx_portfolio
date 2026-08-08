import React, { useEffect, useState } from 'react';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import './WorkExperience.css';
import { TimelineItem } from '../types';
import { getTimeline } from '../queries/getTimeline';

const WorkExperience: React.FC = () => {
  const [timeLineData, setTimeLineData] = useState<TimelineItem[] | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    async function fetchTimelineItem() {
      const data = await getTimeline();
      setTimeLineData(data);
    }
    fetchTimelineItem();
  }, []);

  if (!timeLineData) return <div className="nx-loading">Loading...</div>;

  const work = timeLineData.filter((item) => item.timelineType === 'work');
  const education = timeLineData.filter((item) => item.timelineType === 'education');

  const renderEpisode = (item: TimelineItem, index: number, seasonLabel: string) => {
    const isOpen = openIndex === index;
    const points = Array.isArray(item.summaryPoints)
      ? item.summaryPoints
      : [String(item.summaryPoints)];
    const tags = item.techStack
      ? item.techStack.split(',').map((t) => t.trim()).filter(Boolean)
      : [];

    return (
      <button
        type="button"
        key={`${item.name}-${index}`}
        className={`episode-row ${isOpen ? 'is-open' : ''} ${index === 0 && item.timelineType === 'work' ? 'is-current' : ''}`}
        onClick={() => setOpenIndex(isOpen ? null : index)}
      >
        <div className="episode-index">{String(index + 1).padStart(2, '0')}</div>
        <div className="episode-body">
          <div className="episode-top">
            <div className="episode-heading">
              <span className="episode-season">{seasonLabel}</span>
              <h3 className="episode-title">
                {item.timelineType === 'work' ? item.title : item.name}
              </h3>
              <p className="episode-subtitle">
                {item.timelineType === 'work' ? item.name : item.title}
              </p>
            </div>
            <div className="episode-meta">
              <span className="episode-runtime">{item.dateRange}</span>
              <span className="episode-icon" aria-hidden="true">
                {item.timelineType === 'work' ? <WorkIcon /> : <SchoolIcon />}
              </span>
            </div>
          </div>

          {index === 0 && item.timelineType === 'work' && (
            <div className="episode-progress" aria-hidden="true">
              <div className="episode-progress-bar" />
            </div>
          )}

          {tags.length > 0 && (
            <div className="episode-tags">
              {tags.slice(0, 6).map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          )}

          {isOpen && (
            <ul className="episode-synopsis">
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </button>
    );
  };

  return (
    <div className="work-experience-page">
      <header className="nx-page-header">
        <p className="nx-kicker">RIKIN ORIGINALS</p>
        <h1 className="nx-title">Career Episodes</h1>
        <p className="nx-synopsis">
          Work seasons and education specials — tap an episode for the full synopsis.
        </p>
      </header>

      <section className="episode-section">
        <h2 className="rail-title">Season 1 · Professional</h2>
        <div className="episode-list">
          {work.map((item, i) => renderEpisode(item, i, `S1 E${i + 1}`))}
        </div>
      </section>

      <section className="episode-section">
        <h2 className="rail-title">Specials · Education</h2>
        <div className="episode-list">
          {education.map((item, i) =>
            renderEpisode(item, work.length + i, `SP ${i + 1}`)
          )}
        </div>
      </section>
    </div>
  );
};

export default WorkExperience;
