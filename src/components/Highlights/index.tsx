import React from 'react';
import styled from 'styled-components';

const HighlightsWrapper = styled.section`
  background-color: var(--color-primary-dark);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  .photo {
    width: 20rem;
    margin-right: 5rem;
  }

  h2 {
    font-size: 3.5rem;
    line-height: 3.6rem;
    width: 30rem;
    margin-bottom: 1rem;
  }

  h3 {
    display: inline-block;
    font-size: 1.5rem;
    width: 25rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  h6 {
    width: 30rem;
    font-size: 1.2rem;
    font-weight: 400;
  }

  .Highlight-Food-contianer {
    display: inline-flex;
  }

  .Highlight-contianer {
    width: 20%;
  }
`;

const Highlights = () => {
  return (
    <HighlightsWrapper>
      <div>
        <h2>A few highlights from our menu</h2>
        <h3>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
          repellat praesentium optio incidunt sed molestiae dolore sint maiores
        </h3>
      </div>
      <div className="Highlight-contianer">
        <div className="Highlight-Food-contianer">
          <img
            src={require('../../images/coffee.jpg')}
            alt="food plate"
            className="photo"
          />
          <span>
            <h4>Coffee</h4>
            <h6>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
              incidunt, assumenda impedit.
            </h6>
          </span>
        </div>
        <div className="Highlight-Food-contianer">
          <img
            src={require('../../images/coffee.jpg')}
            alt="food plate"
            className="photo"
          />
          <span>
            <h4>Coffee</h4>
            <h6>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
              incidunt, assumenda impedit.
            </h6>
          </span>
        </div>
        <div className="Highlight-Food-contianer">
          <img
            src={require('../../images/coffee.jpg')}
            alt="food plate"
            className="photo"
          />
          <span>
            <h4>Coffee</h4>
            <h6>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
              incidunt, assumenda impedit.
            </h6>
          </span>
        </div>
      </div>
    </HighlightsWrapper>
  );
};

export default Highlights;
