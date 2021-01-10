import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signUpBackgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 43.75rem;
  display: flex;
  align-items: center;
  place-content: center;

  @media screen and (max-width: 1400px) {
    margin: 3.125rem 0;
    max-width: 100%;
  }
`;

const appearFromRight = keyframes`
from {
  opacity: 0;
  transform: translateX(50px);
}
to {
  opacity: 1;
  transform: translateX(0)
}
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
  }

  animation: ${appearFromRight} 1s;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5rem 0;
    width: 21.25rem;
    text-align: center;

    h1 {
      margin-bottom: 1.5rem;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 1.5rem;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
  > a {
    color: #db345f;
    margin-top: 1.5rem;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#db345f')};
    }

    svg {
      margin-right: 1rem;
    }
  }

  @media screen and (max-width: 1400px) {
    img {
      width: 90%;
    }
  }

  @media screen and (max-width: 650px) {
    img {
      width: 75%;
    }
  }
`;

export const Background = styled.div`
  width: 100%;
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;
`;
