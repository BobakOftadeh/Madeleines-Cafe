import React from 'react';
import styled from 'styled-components';

const HighlightsWrapper = styled.section`
  background-color: var(--color-primary-dark);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  > * {
    margin: 0 8rem;
  }

  .photo {
    width: 100%;
    max-width: 12rem;
    margin-right: 3rem;
    height: auto;
  }

  h2 {
    font-size: 4rem;
    font-weight: 700;
    line-height: 4.6rem;
    width: 30rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.8rem;
    width: 40rem;
    width: 32rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  p {
    width: 30rem;
    font-size: 1.2rem;
  }

  .Highlight-title-container-p {
    font-size: 1.8rem;
    width: 40rem;
  }

  .Highlight-Food-contianer {
    display: flex;

    &:not(:last-child) {
      padding-bottom: 1rem;
      margin-bottom: 2rem;
      border-bottom: 1px solid var(--color-primary-pale);
    }
  }

  .Highlight-contianer {
    display: inline-block;
  }

  .Highlight-title-container {
    margin-bottom: 14rem;
  }
`;

const Highlights = () => {
  return (
    <HighlightsWrapper>
      <div className="Highlight-title-container">
        <h2>A few highlights from our menu</h2>
        <p className="Highlight-title-container-p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
          repellat praesentium optio incidunt sed molestiae dolore sint maiores
        </p>
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
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
              incidunt, assumenda impedit.
            </p>
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
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
              incidunt, assumenda impedit.
            </p>
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
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
              incidunt, assumenda impedit.
            </p>
          </span>
        </div>
      </div>
    </HighlightsWrapper>
  );
};

export default Highlights;
