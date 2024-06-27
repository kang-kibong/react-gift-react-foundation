import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import StyledButton from './Button.styled';
import { ButtonTheme, ButtonSize } from './Button.types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
  size?: ButtonSize;
  children: ReactNode;
}

export default function Button({ theme = 'primary', size = 'medium', children, ...props }: ButtonProps) {
  return (
    <StyledButton theme={theme} size={size} {...props}>
      {children}
    </StyledButton>
  );
}
