import React from 'react';
import './Blogs.css';
import { FaDev } from 'react-icons/fa';

interface BlogPost {
  title: string;
  link: string;
  description: string;
  runtime: string;
}

const blogs: BlogPost[] = [
  {
    title: 'Human-Aligned Decision Transformers for Satellite Anomaly Response Operations',
    link: 'https://dev.to/rikinptl/human-aligned-decision-transformers-for-satellite-anomaly-response-operations-under-1l6l',
    description:
      'Exploring how transformer-based sequential decision-making can bridge the gap between AI optimization and human values in critical satellite operations.',
    runtime: '12 min',
  },
  {
    title: 'Building Scalable ETL Pipelines: Teradata to GCP Migration',
    link: 'https://dev.to/rikinptl',
    description:
      'Migrating multi-terabyte datasets from Teradata to GCP with latency cuts and cloud cost savings.',
    runtime: '10 min',
  },
  {
    title: 'Automated Data Quality Validation with Apache Airflow',
    link: 'https://dev.to/rikinptl',
    description:
      'Designing end-to-end validation pipelines that catch anomalies before they hit production.',
    runtime: '8 min',
  },
  {
    title: 'Creating Data Lineage Frameworks for Analytics Teams',
    link: 'https://dev.to/rikinptl',
    description:
      'Automated metadata extraction and lineage that cuts troubleshooting time for analytics teams.',
    runtime: '9 min',
  },
  {
    title: 'Optimizing Cloud Storage Costs with Automated File Cleanup',
    link: 'https://dev.to/rikinptl',
    description:
      'Custom Airflow DAGs that clear stale data and trim monthly storage spend.',
    runtime: '7 min',
  },
  {
    title: 'Attention Detection in Human-Computer Interactions',
    link: 'https://dev.to/rikinptl',
    description:
      'A study of facial landmark and computer-vision techniques for attention detection in HCI.',
    runtime: '11 min',
  },
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-page">
      <header className="nx-page-header">
        <p className="nx-kicker">NEW RELEASES</p>
        <h1 className="nx-title">Articles</h1>
        <p className="nx-synopsis">
          Essays and tutorials on data engineering, AI research, and automation.
        </p>
      </header>

      <div className="blog-episode-list">
        {blogs.map((blog, index) => (
          <a
            key={blog.title}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-episode"
            style={{ animationDelay: `${index * 0.06}s` }}
          >
            <div className="blog-episode-index">{String(index + 1).padStart(2, '0')}</div>
            <div className="blog-episode-thumb" aria-hidden="true">
              <FaDev />
            </div>
            <div className="blog-episode-body">
              <div className="blog-episode-top">
                <h3>{blog.title}</h3>
                <span className="blog-runtime">{blog.runtime}</span>
              </div>
              <p>{blog.description}</p>
              <span className="blog-platform">Dev.to · Play episode</span>
            </div>
          </a>
        ))}
      </div>

      <div className="blogs-footer">
        <a
          href="https://dev.to/rikinptl"
          target="_blank"
          rel="noopener noreferrer"
          className="blogs-more"
        >
          See all on Dev.to
        </a>
      </div>
    </div>
  );
};

export default Blogs;
