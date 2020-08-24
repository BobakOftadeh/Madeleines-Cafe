import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.section`
  background-color: var(--color-primary-pale);
`;

const About = () => {
  return (
    <AboutWrapper>
      <div>Exquisite dinning since 1994</div>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae repellat
        praesentium optio incidunt sed molestiae dolore sint maiores deserunt
        architecto nam, sunt error quaerat omnis, numquam consectetur nostrum
        totam expedita!
      </div>
      <button></button>
    </AboutWrapper>
  );
};

export default About;
