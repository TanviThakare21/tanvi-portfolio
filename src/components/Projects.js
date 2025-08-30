import React from 'react';
import './Project.css';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">

        {/* CureConnect */}
        <div className="project-card">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png" 
            alt="Doctor logo" 
            className="project-logo" 
          />
          <h3>CureConnect</h3>
          <p>
            A healthcare platform with different interfaces for doctors and patients. 
            I developed the frontend and built the database structure.
          </p>
          <div className="tech-box">
            <h4>Technologies Used:</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>

        {/* Uplift India */}
        <div className="project-card">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/854/854878.png" 
            alt="Government logo" 
            className="project-logo" 
          />
          <h3>Uplift India</h3>
          <p>
            A platform that displays categorized government websites to help users directly access official schemes.
            I built both the frontend and backend.
          </p>
          <div className="tech-box">
            <h4>Technologies Used:</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>ThunderClient</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>

        {/* Portfolio Website */}
        <div className="project-card">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/281/281769.png" 
            alt="Portfolio logo" 
            className="project-logo" 
          />
          <h3>Portfolio Website</h3>
          <p>
            My personal website built to showcase skills and projects. Fully responsive and built with React.
          </p>
          <div className="tech-box">
            <h4>Technologies Used:</h4>
            <ul>
              <li>React</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
