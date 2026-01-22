import React from 'react';
import './Blogs.css';
import { FaDev } from 'react-icons/fa';

interface BlogPost {
  title: string;
  link: string;
  description: string;
}

const blogs: BlogPost[] = [
  {
    title: "Human-Aligned Decision Transformers for Satellite Anomaly Response Operations",
    link: "https://dev.to/rikinptl/human-aligned-decision-transformers-for-satellite-anomaly-response-operations-under-1l6l",
    description: "Exploring how transformer-based sequential decision-making can bridge the gap between AI optimization and human values, regulations, and oversight requirements in critical satellite operations."
  },
  {
    title: "Building Scalable ETL Pipelines: Teradata to GCP Migration",
    link: "https://dev.to/rikinptl",
    description: "A comprehensive guide on migrating multi-terabyte datasets from Teradata to Google Cloud Platform, achieving 40% latency reduction and 50% cost savings."
  },
  {
    title: "Automated Data Quality Validation with Apache Airflow",
    link: "https://dev.to/rikinptl",
    description: "Learn how to design and deploy end-to-end data quality validation pipelines that catch 95%+ of anomalies pre-production, improving overall data reliability."
  },
  {
    title: "Creating Data Lineage Frameworks for Analytics Teams",
    link: "https://dev.to/rikinptl",
    description: "Building automated metadata extraction and data lineage frameworks that enable full dependency tracking and reduce troubleshooting time by 40%."
  },
  {
    title: "Optimizing Cloud Storage Costs with Automated File Cleanup",
    link: "https://dev.to/rikinptl",
    description: "How custom Airflow DAGs can prevent stale data buildup and reduce monthly cloud storage costs by 25-35% through automated legacy file cleanup."
  },
  {
    title: "Attention Detection in Human-Computer Interactions",
    link: "https://dev.to/rikinptl",
    description: "A comprehensive study on techniques utilized for attention detection, exploring facial landmark detection and computer vision approaches for HCI applications."
  }
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">✍️ My Blog Posts</h2>
      <p className="blogs-intro">A collection of my thoughts and tutorials on data engineering, AI research, and automation.</p>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <a 
            href={blog.link} 
            key={index} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="blog-card" 
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <div className="blog-card-header">
              <div className="blog-icon animated-icon">
                <FaDev />
              </div>
              <span className="blog-platform">Dev.to</span>
            </div>
            <div className="blog-info">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
            </div>
          </a>
        ))}
      </div>
      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <a 
          href="https://dev.to/rikinptl" 
          target="_blank" 
          rel="noopener noreferrer"
          className="read-more-button"
        >
          Read More Articles on Dev.to →
        </a>
      </div>
    </div>
  );
};

export default Blogs;
