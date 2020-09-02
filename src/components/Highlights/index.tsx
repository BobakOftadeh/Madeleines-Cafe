import React from 'react';
import styled from 'styled-components';

const HighlightsWrapper = styled.section`
  background-color: var(--color-primary-dark);
  color: white;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(43rem, 55rem));
  place-content: center;

  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(900px, minmax(43rem, 55rem));
    place-items: center;
  }

  .photo {
    width: 100%;
    height: 10rem;
    max-width: 15rem;
    margin-right: 3rem;
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
    font-size: 2rem;
  }

  p {
    width: 30rem;
    font-size: 1.4rem;
  }

  .Highlight-title-container-p {
    font-size: 1.8rem;
    width: 40rem;
  }

  .Highlight-Food-contianer {
    display: flex;

    &:not(:last-child) {
      padding-bottom: 2rem;
      margin-bottom: 2rem;
      border-bottom: 1px solid var(--color-primary-pale);
    }
  }

  .Highlight-contianer {
    display: inline-block;
  }

  .Highlight-title-container {
    margin-bottom: 14rem;

    @media only screen and (max-width: 900px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 5rem;
      text-align: center;
    }
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
            alt="Coffee"
            className="photo"
          />
          <span>
            <h4>Coffee</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
              incidunt.
            </p>
          </span>
        </div>
        <div className="Highlight-Food-contianer">
          <img
            src={require('../../images/food1.jpg')}
            alt="Egg Sandwich"
            className="photo"
          />
          <span>
            <h4>Egg Sandwich</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
              incidunt.
            </p>
          </span>
        </div>
        <div className="Highlight-Food-contianer">
          <img
            src={require('../../images/food2.jpg')}
            alt="Pancakes with nuts"
            className="photo"
          />
          <span>
            <h4>French Pancakes</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
              incidunt.
            </p>
          </span>
        </div>
      </div>
    </HighlightsWrapper>
  );
};

export default Highlights;
