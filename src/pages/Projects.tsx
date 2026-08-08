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

  const [featured, ...rest] = projects;
  const featuredTech = featured.techUsed.split(',').map((t) => t.trim()).filter(Boolean);

  return (
    <div className="projects-page">
      <section
        className="project-featured"
        style={{ backgroundImage: `url(${featured.image.url})` }}
      >
        <div className="project-featured-shade" />
        <div className="project-featured-content">
          <p className="nx-kicker">FEATURED TITLE</p>
          <h1 className="project-featured-title">{featured.title}</h1>
          <div className="project-featured-meta">
            <span className="match">97% Match</span>
            <span className="badge">HD</span>
            {featuredTech.slice(0, 3).map((tech) => (
              <span key={tech} className="genre">
                {tech}
              </span>
            ))}
          </div>
          <p className="project-featured-synopsis">{featured.description}</p>
          <div className="project-featured-tech">
            {featuredTech.map((tech) => (
              <span key={tech}>
                {techIcons[tech] || null} {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {rest.length > 0 && (
        <section className="projects-rail">
          <h2 className="rail-title">More Like This</h2>
          <div className="projects-shelf">
            {rest.map((project) => (
              <article key={project.title} className="project-poster">
                <div
                  className="project-poster-art"
                  style={{ backgroundImage: `url(${project.image.url})` }}
                />
                <div className="project-poster-info">
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
