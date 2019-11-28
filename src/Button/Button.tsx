import React, { ReactNode, MouseEvent } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

interface Props {
  children: ReactNode;

  /**
   * Disables the button, changing the visual style and make it unable to be pressed
   * @default false
   */
  disabled?: boolean;

  /**
   * Loading state when waiting for an action to complete
   * @default false
   */
  loading?: boolean;

  /**
   * The type of the button
   * @default button
   */
  type?: 'submit' | 'button';

  /** Function to handle button click */
  onClick?(e: MouseEvent<HTMLElement>): void;
}

interface StyledProps {
  disabled: boolean;
  loading?: boolean;
}

export const Button = ({
  children,
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
}: Props) => (
  <ButtonStyled
    data-testid="button"
    disabled={disabled}
    loading={loading}
    onClick={onClick}
    type={type}
  >
    {children}
  </ButtonStyled>
);

const ButtonStyled = styled.button<StyledProps>`
  align-items: center;
  background-color: #9575cd;
  border-radius: 4px;
  border: 1px solid #9575cd;
  color: #fff;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  font-size: 16px;
  font-weight: bold;
  height: 40px;
  justify-content: center;
  margin: 0;
  min-width: 140px;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  overflow: hidden;
  padding: 0 16px;
  transition: border-color 300ms ease, background-color 300ms ease,
    color 300ms ease;

  &:hover {
    background-color: ${darken(0.1, '#9575cd')};
    border-color: ${darken(0.1, '#9575cd')};
  }

  &:focus,
  &:active {
    background-color: ${darken(0.2, '#9575cd')};
    border-color: ${darken(0.2, '#9575cd')};
  }
`;
