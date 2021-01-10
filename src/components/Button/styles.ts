import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #db345f;
  height: 56px;
  border-radius: 10px;
  border: 0;
  margin-top: 16px;
  padding: 0 16px;
  font-weight: 500;
  color: #fff;
  width: 100%;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#DB345F')};
  }
  @media screen and (max-width: 375px) {
    /* height: 56px;
    margin-top: 16px;
    padding: 0 16px; */
    width: 85%;
  }
`;
