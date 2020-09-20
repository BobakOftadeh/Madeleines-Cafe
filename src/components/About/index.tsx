import React from 'react';
import { AboutWrapper, PhotoContainer } from './style';

const About: React.FC = () => {
  return (
    <AboutWrapper>
      <div className="about-food">
        <PhotoContainer>
          <img
            src={require('../../images/cafe1.jpg')}
            alt="food plate"
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
      </div>
      <div className="about-resturant">
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
            alt="food plate"
            className="photo"
          />
        </PhotoContainer>
      </div>
    </AboutWrapper>
  );
};

export default About;
