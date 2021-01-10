import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 6.25rem;
  align-items: center;
  justify-content: space-between;
  background: #312e38;
  color: #db345f;
  padding: 0 1.25rem;

  img {
    width: 5rem;
  }

  h1 {
    margin: 0;
  }

  @media screen and (max-width: 675px) {
    h1 {
      display: none;
    }
  }

  @media screen and (max-width: 480px) {
    button {
      font-size: 0.625rem;
      svg {
        width: 1.25rem;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background: #fff;

  div {
    display: flex;
    align-items: baseline;
    color: #db345f;
    margin-top: 6.25rem;

    h2 {
      font-size: 1.5rem;
      margin-right: 0.625rem;
    }

    span {
      font-size: 3rem;
    }
  }

  img {
    width: 31.25rem;
  }

  @media screen and (max-width: 675px) {
    img {
      width: 21.875rem;
    }
  }

  @media screen and (max-width: 480px) {
    div {
      flex-direction: column;
      align-items: center;
      margin-top: 6.25rem;

      h2 {
        margin-right: 0rem;
        margin-bottom: 0.625rem;
      }
    }

    img {
      width: 15.625rem;
    }
  }

  @media screen and (max-width: 375px) {
    img {
      width: 15.625rem;
    }
  }
`;
