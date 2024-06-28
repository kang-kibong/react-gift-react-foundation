import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

type ButtonTheme = 'primary' | 'kakao';
type ButtonSize = 'small' | 'medium' | 'large' | 'responsive';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
  size?: ButtonSize;
  children: ReactNode;
}

interface StyledButtonProps {
  theme: ButtonTheme;
  size: ButtonSize;
}

export default function Button({ theme = 'primary', size = 'medium', children, ...props }: ButtonProps) {
  return (
    <StyledButton theme={theme} size={size} {...props}>
      {children}
    </StyledButton>
  );
}

const getSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case 'small':
      return css`
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
      `;
    case 'medium':
      return css`
        padding: 0.5rem 1rem;
        font-size: 1rem;
      `;
    case 'large':
      return css`
        padding: 0.75rem 1.5rem;
        font-size: 1.25rem;
      `;
    case 'responsive':
      return css`
        padding: 0.5rem 1rem;
        font-size: 1rem;

        @media (min-width: 768px) {
          padding: 0.75rem 1.5rem;
          font-size: 1.25rem;
        }
      `;
    default:
      return css``;
  }
};

const getThemeStyles = (theme: ButtonTheme) => {
  switch (theme) {
    case 'primary':
      return css`
        background-color: #007aff;
        color: #fff;
      `;
    case 'kakao':
      return css`
        background-color: #fee500;
        color: #000;
      `;
    default:
      return css``;
  }
};

const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  ${({ size }) => getSizeStyles(size)}
  ${({ theme }) => getThemeStyles(theme)}
`;