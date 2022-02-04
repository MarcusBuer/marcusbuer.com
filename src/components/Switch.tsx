import React from 'react';
import styled from 'styled-components';
import { LightMode, Nightlight } from '@styled-icons/material';

interface Props {
  onChange: () => void;
  checked: boolean;
  size: number;
  onColor: string;
  offColor: string;
}

function Switch({ onChange, checked, size, onColor, offColor }: Props) {
  return (
    <SwitchStyled
      onClick={onChange}
      title={checked ? 'Dark Mode' : 'Light mode'}
    >
      {checked ? (
        <span aria-label='Dark mode' role='img'>
          <Nightlight size={size} color={offColor} />
        </span>
      ) : (
        <span aria-label='Light mode' role='img'>
          <LightMode size={size} color={onColor} />
        </span>
      )}
    </SwitchStyled>
  );
}

const SwitchStyled = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
`;

export default Switch;
