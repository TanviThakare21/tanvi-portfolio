import React from 'react';
import './Skills.css';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'MongoDB',
  'MySQL', 'Express.js', 'Node.js', 'Python', 'Core Java', 'Git'
];

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map(skill => (
          <li key={skill} title={`Proficient in ${skill}`}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
