import './style-projects.css';
import LastUpdated from '../components/LastUpdated';
import './project-modal.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { theInfo } from './projectData';
import thumbnails from './thumbnails.json';
import ReactModal from 'react-modal';

const months = ['january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december'];

function projectDate(date = '') {
  const numeric = date.match(/^(\d{1,2})\/(\d{4})$/);
  const named = date.toLowerCase().match(/^([a-z]+),?\s+(\d{4})$/);
  const month = numeric ? Number(numeric[1]) - 1 : months.indexOf(named?.[1]);
  const year = numeric?.[2] || named?.[2];
  return year && month >= 0 && month < 12 ? Number(year) * 12 + month : -Infinity;
}

const projects = Object.entries(theInfo).sort(([, a], [, b]) => {
  const first = projectDate(a.date);
  const second = projectDate(b.date);
  return first === second ? 0 : first > second ? -1 : 1;
});
const imageSource = (image) => /^(https?:)?\/\//.test(image) || image.startsWith('/') ? image : `/${image}`;

function Projects() {
  const [selectedId, setSelectedId] = useState(null);
  const project = selectedId ? theInfo[selectedId] : null;
  const closeModal = () => setSelectedId(null);

  return (
    <div className="Projects">
      <header>
        <h1>Jakob Coughlan</h1>
        <h3>Projects</h3>
        <div className="back">
          <Link to="/Home" className="mid">back =&gt;</Link>
        </div>
      </header>
      <ReactModal
        className="project-modal"
        overlayClassName="project-modal-overlay"
        bodyOpenClassName="project-modal-open"
        isOpen={Boolean(project)}
        onRequestClose={closeModal}
        aria={{ labelledby: 'project-modal-title' }}>
        {project && <>
          <button type="button" className="project-modal-close" onClick={closeModal} aria-label="close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="m6 6 12 12M6 18 18 6" />
            </svg>
          </button>
          <div className="project-modal-media">
            <img src={imageSource(project.image)} alt={project.title} />
          </div>
          <div className="project-modal-details">
            <p className="project-modal-eyebrow">THE PROJECT <span aria-hidden="true">/</span> {project.date}</p>
            <h2 id="project-modal-title">{project.title}</h2>
            {project.text && <p className="project-modal-description">{project.text}</p>}
            {project.link && <a className="project-modal-link" href={project.link} target="_blank" rel="noreferrer">
              View project
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </a>}
          </div>
        </>}
      </ReactModal>
      <main className="container" aria-label="Projects">
        {projects.map(([id, entry]) => (
          <button type="button" className="item" key={id} onClick={() => setSelectedId(id)}>
            <img
              src={thumbnails[entry.image]?.src || imageSource(entry.image)}
              width={thumbnails[entry.image]?.width}
              height={thumbnails[entry.image]?.height}
              alt={entry.title}
              loading="lazy"
              decoding="async"
            />
            <p>{entry.title}</p>
          </button>
        ))}
      </main>
      <LastUpdated />
    </div>
  );
}

export default Projects;
