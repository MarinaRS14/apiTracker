import React from 'react';
import styled from 'styled-components';
import * as palette from '../../styles';

const ButtonContainer = styled.button`
  border: none;
  padding: 8px 16px;
  text-transform: uppercase;
  font-size: 16px;
  color: ${palette.COLOR_MAIN};
  background-color: ${palette.COLOR_LIGHT};
  font-weight: 500;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background-color: ${palette.COLOR_SHADOW};
  }
`;

const Outlined = styled(ButtonContainer)`
  border: 2px solid green;
  background-color: transparent;
  color: ${palette.COLOR_LIGHT};

  &:hover {
    background-color: transparent;
    color: ${palette.COLOR_SHADOW};
  }
`;

export const Button = (props) => {
  const { outlined, text } = props;

  if (outlined) {
    return <Outlined>{text}</Outlined>;
  }

  return <ButtonContainer>{text}</ButtonContainer>;
};
