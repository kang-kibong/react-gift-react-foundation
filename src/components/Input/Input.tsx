import React, { InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

type InputSize = 'small' | 'medium' | 'large' | 'responsive';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  disabled?: boolean;
  invalid?: boolean;
  size?: InputSize;
}

interface StyledInputProps {
  $invalid: boolean;
  $size: InputSize;
}

export default function Input({ disabled, invalid = false, size = 'medium', ...props }: InputProps) {
  return <StyledInput disabled={disabled} $size={size} $invalid={invalid} {...props} />;
}

const invalidStyle = css`
  border-color: #e74c3c;
  background-color: #fce4e4;
`;

const StyledInput = styled.input<StyledInputProps>`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  width: 100%;

  ${({ $invalid }) => $invalid && invalidStyle}

  &:focus {
    border-color: #007bff;
  }

  &:disabled {
    background-color: #f5f5f5;
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
