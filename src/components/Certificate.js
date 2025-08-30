import React from 'react';
import { FaUserTie, FaAws, FaComments, FaCode } from 'react-icons/fa';

const certificates = [
  {
    name: 'Soft Skills and Personality Development',
    issuer: 'NPTEL',
    icon: <FaUserTie size={48} color="#2c3e50" />,
    document: '/certificates/image1.png', // changed to image file
  },
  {
    name: 'AWS Cloud Foundations',
    issuer: 'AWS Academy',
    icon: <FaAws size={48} color="#ff9900" />,
    document: '/certificates/image3.png', // assuming image version exists
  },
  {
    name: 'Effective Communication',
    issuer: 'Ankur Warikoo',
    icon: <FaComments size={48} color="#2980b9" />,
    document: '/certificates/image2.png',
  },
  {
    name: 'Python',
    issuer: 'HackerRank',
    icon: <FaCode size={48} color="#27ae60" />,
    document: '/certificates/image.png', // assuming image version exists
  },
];

function Certificate() {
  return (
    <section
      id="certificate"
      style={{ padding: '40px 20px', maxWidth: '800px', margin: 'auto' }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Certificate</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {certificates.map((cert, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '30px',
              border: '1px solid #ddd',
              borderRadius: '10px',
              padding: '15px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
            }}
          >
            <div>{cert.icon}</div>
            <div style={{ flex: 1 }}>
              <strong style={{ fontSize: '1.1rem' }}>{cert.name}</strong>
              <br />
              <em>Issued by :</em> {cert.issuer}
              <br />
              <br />
              {cert.document && (
                <img
                  src={cert.document}
                  alt={cert.name}
                  style={{
                    width: '120px',
                    height: 'auto',
                    borderRadius: '6px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  }}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Certificate;
