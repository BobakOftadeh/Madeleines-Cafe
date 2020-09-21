import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  color: white;
  position: relative;
  background-image: linear-gradient(
    rgba(34, 40, 49, 0.7),
    rgba(34, 40, 49, 0.7)
  );

  .container {
    display: flex;
    flex-direction: column;
    margin-left: 15%;
    height: 100%;
    justify-content: center;

    @media only screen and (max-width: 1000px) {
      align-items: center;
      margin-left: 2rem;
    }

    @media only screen and (max-width: 420px) {
      margin-left: 0;
    }
  }

  .bg-video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    overflow: hidden;

    &__content {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  h2 {
    font-size: 5rem;
    font-weight: 300;
    width: 50rem;
    line-height: 6rem;
    margin-bottom: 2rem;

    @media only screen and (max-width: 1000px) {
      width: auto;
    }
    @media only screen and (max-width: 650px) {
      text-align: center;
    }
  }

  p {
    display: inline-block;
    font-size: 1.8rem;
    width: 40rem;
    margin-bottom: 3rem;

    @media only screen and (max-width: 1000px) {
      text-align: center;
    }
  }

  .logo-wrapper {
    margin-bottom: 8rem;

    @media only screen and (max-width: 1000px) {
      margin-bottom: 0;
    }
  }
`;
