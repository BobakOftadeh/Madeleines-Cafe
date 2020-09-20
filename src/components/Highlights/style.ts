import styled from 'styled-components';

export const HighlightsWrapper = styled.section`
  background-color: var(--color-primary-dark);
  color: white;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(43rem, 55rem));
  place-content: center;
  padding: 7rem;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(900px, minmax(150rem, max-content));
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
