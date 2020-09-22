import React from 'react';
import { AboutWrapper, AboutContainer, PhotoContainer } from './style';

const About: React.FC = () => {
  return (
    <AboutWrapper>
      <AboutContainer>
        <PhotoContainer>
          <img
            src={require('../../images/cafe1.jpg')}
            alt="coffee blends"
            className="photo"
          />
        </PhotoContainer>
        <div>
          <h2>Enjoyable place for all the family</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
            repellat praesentium optio incidunt sed molestiae dolore sint
            maiores
          </p>
        </div>
      </AboutContainer>
      <AboutContainer>
        <div>
          <h2>The most locally sourced food</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
            repellat praesentium optio incidunt sed molestiae dolore sint
            maiores
          </p>
        </div>
        <PhotoContainer>
          <img
            src={require('../../images/cafe3.jpg')}
            alt="cafe view"
            className="photo"
          />
        </PhotoContainer>
      </AboutContainer>
    </AboutWrapper>
  );
};

export default About;
