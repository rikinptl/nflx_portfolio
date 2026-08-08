import React, { useEffect, useState } from 'react';
import './Projects.css';
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDatabase,
  FaDocker,
  FaAngular,
  FaGithub,
  FaGitlab,
  FaGoogle,
  FaJava,
  FaJenkins,
  FaPython,
  FaVuejs,
  FaPlay,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import {
  SiRubyonrails,
  SiPostgresql,
  SiMongodb,
  SiMaterialdesign,
  SiHtml5,
  SiCss3,
  SiJquery,
  SiAwsamplify,
  SiFirebase,
  SiTerraform,
  SiArgo,
  SiApacheairflow,
  SiIeee,
} from 'react-icons/si';
import { GrDeploy, GrKubernetes } from 'react-icons/gr';
import { Project } from '../types';
import { getProjects } from '../queries/getProjects';

const techIcons: { [key: string]: JSX.Element } = {
  ReactJS: <FaReact />,
  NodeJS: <FaNodeJs />,
  AWS: <FaAws />,
  PostgreSQL: <SiPostgresql />,
  MongoDB: <SiMongodb />,
  'Ruby On Rails': <SiRubyonrails />,
  'Material UI': <SiMaterialdesign />,
  HTML5: <SiHtml5 />,
  CSS3: <SiCss3 />,
  jQuery: <SiJquery />,
  'AWS-ECS': <SiAwsamplify />,
  Cognito: <FaAws />,
  Lambda: <FaAws />,
  ECS: <FaAws />,
  Jenkins: <FaJenkins />,
  Docker: <FaDocker />,
  GraphQL: <FaDatabase />,
  'CI/CD': <FaGitlab />,
  GitLab: <FaGitlab />,
  GitHub: <FaGithub />,
  Heroku: <GrDeploy />,
  Netlify: <GrDeploy />,
  Firebase: <SiFirebase />,
  GCP: <FaGoogle />,
  Kubernetes: <GrKubernetes />,
  Terraform: <SiTerraform />,
  ArgoCD: <SiArgo />,
  Java: <FaJava />,
  'Spring Boot': <FaJava />,
  Python: <FaPython />,
  'Node.js': <FaNodeJs />,
  'Express.js': <FaNodeJs />,
  Hibernate: <FaJava />,
  Maven: <FaJava />,
  Gradle: <FaJava />,
  JUnit: <FaJava />,
  Mockito: <FaJava />,
  Jest: <FaReact />,
  React: <FaReact />,
  Angular: <FaAngular />,
  'Vue.js': <FaVuejs />,
  'Next.js': <FaReact />,
  Gatsby: <FaReact />,
  'Nuxt.js': <FaVuejs />,
  Redux: <FaReact />,
  Vuex: <FaVuejs />,
  'Tailwind CSS': <SiCss3 />,
  Bootstrap: <SiCss3 />,
  JQuery: <SiJquery />,
  SQL: <FaDatabase />,
  'Apache Airflow': <SiApacheairflow />,
  'Machine Learning': <FaPython />,
  'Computer Vision': <FaPython />,
  'Deep Learning': <FaPython />,
  'Cloud Services': <FaAws />,
  'Automation Tools': <FaPython />,
  'Research Methodologies': <FaDatabase />,
  IEEE: <SiIeee />,
  HCI: <FaDatabase />,
};

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const data = await getProjects();
      setProjects(data);
    }
    fetchProjects();
  }, []);

  if (projects.length === 0) return <div className="nx-loading">Loading...</div>;

  const publications = projects.filter((p) => p.category === 'publication' || p.link?.includes('ieee'));
  const builds = projects.filter((p) => p.category !== 'publication' && !p.link?.includes('ieee'));
  const featured = publications[0] || builds[0] || projects[0];
  const featuredTech = featured.techUsed.split(',').map((t) => t.trim()).filter(Boolean);
  const moreLikeThis = builds.filter((p) => p.title !== featured.title);

  return (
    <div className="nx-page projects-page">
      <section
        className="nx-billboard"
        style={{ backgroundImage: `url(${featured.image.url})` }}
      >
        <div className="nx-billboard-shade" />
        <div className="nx-billboard-content">
          <p className="nx-original">
            {featured.category === 'publication' ? 'IEEE PUBLICATION' : 'FEATURED TITLE'}
          </p>
          <h1 className="nx-billboard-title">{featured.title}</h1>
          <div className="nx-meta">
            <span className="nx-match">
              {featured.category === 'publication' ? 'Peer Reviewed' : '97% Match'}
            </span>
            <span className="nx-chip">HD</span>
            {featuredTech.slice(0, 3).map((tech) => (
              <span key={tech} className="nx-muted">
                {tech}
              </span>
            ))}
          </div>
          <p className="nx-billboard-synopsis">{featured.description}</p>
          <div className="nx-actions">
            {featured.link ? (
              <>
                <a
                  className="nx-btn nx-btn-play"
                  href={featured.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPlay /> Open Paper
                </a>
                <a
                  className="nx-btn nx-btn-secondary"
                  href={featured.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt /> IEEE Xplore
                </a>
              </>
            ) : (
              <>
                <span className="nx-btn nx-btn-play">
                  <FaPlay /> Play
                </span>
                <span className="nx-btn nx-btn-secondary">More Info</span>
              </>
            )}
          </div>
          <div className="project-featured-tech">
            {featuredTech.map((tech) => (
              <span key={tech}>
                {techIcons[tech] || null} {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {publications.length > 0 && (
        <section className="nx-rail">
          <h2 className="nx-rail-title">IEEE Publications</h2>
          <div className="nx-shelf">
            {publications.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="nx-poster project-poster"
              >
                <div
                  className="nx-poster-art project-poster-art"
                  style={{ backgroundImage: `url(${project.image.url})` }}
                >
                  <div className="nx-poster-overlay">
                    <span className="nx-play-circle">
                      <FaPlay />
                    </span>
                  </div>
                  <span className="pub-badge">IEEE</span>
                </div>
                <div className="nx-poster-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="pub-link">
                    View on IEEE Xplore <FaExternalLinkAlt />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      {moreLikeThis.length > 0 && (
        <section className="nx-rail">
          <h2 className="nx-rail-title">More Like This</h2>
          <div className="nx-shelf">
            {moreLikeThis.map((project) => (
              <article key={project.title} className="nx-poster project-poster">
                <div
                  className="nx-poster-art project-poster-art"
                  style={{ backgroundImage: `url(${project.image.url})` }}
                >
                  <div className="nx-poster-overlay">
                    <span className="nx-play-circle">
                      <FaPlay />
                    </span>
                  </div>
                </div>
                <div className="nx-poster-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-poster-tech">
                    {project.techUsed
                      .split(',')
                      .map((tech) => tech.trim())
                      .filter(Boolean)
                      .slice(0, 4)
                      .map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Projects;
