/* eslint-disable prettier/prettier */
/* eslint-disable arrow-parens */
import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip/index';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #232129;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props => props.isErrored && css`
    border-color: #D41414;
  `}

  ${props => props.isFocused && css`
      color: #db345f;
      border-color: #db345f;
  `}

  ${props => props.isFilled && css`
      color: #db345f;
  `}


  input {
    flex: 1;
    background: transparent;
    border: 0px;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin-right: 0px;
  }

  span {
    background: #db345f;
    color: #FFF;

    &::before {
      border-color: #db345f transparent;
    }
  }
`;
