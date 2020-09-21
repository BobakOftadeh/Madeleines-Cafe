import styled from 'styled-components';

export const AboutWrapper = styled.section`
  background-color: var(--color-primary-pale);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5rem;
  color: var(--color-primary-dark);

  .photo {
    display: block;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 100%;
    z-index: 998;
  }
  h2 {
    font-size: 4rem;
    font-weight: 700;
    line-height: 4.6rem;
    width: 30rem;
    margin-bottom: 1rem;

    @media only screen and (max-width: 1200px) {
      width: 43rem;
    }
  }

  p {
    display: inline-block;
    font-size: 1.8rem;
    width: 40rem;
  }
`;

export const PhotoContainer = styled.div`
  width: 50rem;

  @media only screen and (max-width: 1200px) {
    max-width: 40rem;
    order: -1;
    margin-bottom: 5rem !important;
    margin-top: 5rem !important;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  > * {
    margin: 0 9rem;
  }

  @media only screen and (max-width: 1200px) {
    text-align: center;
    flex-direction: column;
    > * {
      margin: 0;
    }
  }
`;
