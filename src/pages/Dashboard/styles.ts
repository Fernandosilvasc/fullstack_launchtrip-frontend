import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  background: #312e38;
  color: #db345f;
  padding: 0 20px;

  img {
    width: 80px;
  }

  h1 {
    margin: 0;
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
    /* justify-content: center; */
    color: #db345f;
    margin-top: 100px;

    h2 {
      font-size: 24px;
      margin-right: 10px;
    }

    span {
      font-size: 48px;
    }
  }

  img {
    width: 500px;
  }
`;
