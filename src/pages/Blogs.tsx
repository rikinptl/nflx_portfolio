import React, { useEffect, useState } from 'react';
import './Blogs.css';
import { FaDev, FaPlay } from 'react-icons/fa';
import { DevToArticle, getDevToArticles } from '../queries/getDevToArticles';

const FALLBACK_HERO =
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80';

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<DevToArticle[]>([]);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    let cancelled = false;

    async function loadArticles() {
      try {
        const articles = await getDevToArticles(5);
        if (cancelled) return;
        setBlogs(articles);
        setStatus('ready');
      } catch (error) {
        if (cancelled) return;
        setStatus('error');
        setErrorMessage(error instanceof Error ? error.message : 'Unable to load articles');
      }
    }

    loadArticles();
    return () => {
      cancelled = true;
    };
  }, []);

  if (status === 'loading') {
    return <div className="nx-loading">Loading latest episodes...</div>;
  }

  const featured = blogs[0];

  return (
    <div className="nx-page blogs-page">
      {status === 'ready' && featured ? (
        <section
          className="nx-billboard"
          style={{
            backgroundImage: `url(${featured.image || FALLBACK_HERO})`,
          }}
        >
          <div className="nx-billboard-shade" />
          <div className="nx-billboard-content">
            <p className="nx-original">NEW RELEASES</p>
            <h1 className="nx-billboard-title">{featured.title}</h1>
            <div className="nx-meta">
              <span className="nx-match">New Episode</span>
              <span className="nx-chip">{featured.runtime}</span>
              <span className="nx-chip">HD</span>
              <span className="nx-muted">Dev.to</span>
            </div>
            <p className="nx-billboard-synopsis">{featured.description}</p>
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
                href="https://dev.to/rikinptl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDev /> More Info
              </a>
            </div>
          </div>
        </section>
      ) : (
        <header className="nx-section-pad">
          <p className="nx-original">NEW RELEASES</p>
          <h1 className="nx-billboard-title">Articles</h1>
        </header>
      )}

      {status === 'error' ? (
        <div className="blogs-error">
          <p>{errorMessage}</p>
          <a
            href="https://dev.to/rikinptl"
            target="_blank"
            rel="noopener noreferrer"
            className="nx-btn nx-btn-secondary"
          >
            Open Dev.to
          </a>
        </div>
      ) : (
        <section className="nx-rail">
          <h2 className="nx-rail-title">Episodes · Latest 5</h2>
          <div className="blog-episode-list">
            {blogs.map((blog, index) => (
              <a
                key={blog.link || blog.title}
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-episode"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                <div className="blog-episode-index">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div
                  className="blog-episode-thumb"
                  aria-hidden="true"
                  style={
                    blog.image
                      ? { backgroundImage: `url(${blog.image})` }
                      : undefined
                  }
                >
                  {!blog.image && <FaDev />}
                  <span className="blog-play-hint">
                    <FaPlay />
                  </span>
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
        </section>
      )}

      <div className="blogs-footer">
        <a
          href="https://dev.to/rikinptl"
          target="_blank"
          rel="noopener noreferrer"
          className="nx-btn nx-btn-secondary"
        >
          See all on Dev.to
        </a>
      </div>
    </div>
  );
};

export default Blogs;
