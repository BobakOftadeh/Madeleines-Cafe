import React from 'react';
import { HighlightsWrapper } from './style';

const Highlights: React.FC = () => {
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
