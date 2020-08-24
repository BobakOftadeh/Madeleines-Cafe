import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.section`
  background-color: var(--color-primary-pale);
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .photo {
    display: block;
    height: 100%;
    box-shadow: 0 1.5rem 4rem rgba(var(--color-black), 0.4);
    width: 20%;
  }

  .about-food {
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
      margin-right: 45rem;
    }
  }

  .about-resturant {
    display: flex;
    align-items: center;
    justify-content: center;
    & img {
      margin-left: 45rem;
    }
  }

  h2 {
    font-size: 3.5rem;
    line-height: 5rem;
    width: 30rem;
  }

  h3 {
    display: inline-block;
    font-size: 1.5rem;
    width: 25rem;
  }
`;

const About = () => {
  return (
    <AboutWrapper>
      <div className="about-food">
        <img
          src={require('../../images/cafe1.jpg')}
          alt="food plate"
          className="photo"
        />
        <div>
          <h2>Enjoyable place for all the family</h2>
          <h3>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
            repellat praesentium optio incidunt sed molestiae dolore sint
            maiores
          </h3>
        </div>
      </div>
      <div className="about-resturant">
        <div>
          <h2>The most locally sourced food</h2>
          <h3>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
            repellat praesentium optio incidunt sed molestiae dolore sint
            maiores
          </h3>
        </div>
        <img
          src={require('../../images/cafe3.jpg')}
          alt="food plate"
          className="photo"
        />
      </div>
    </AboutWrapper>
  );
};

export default About;
