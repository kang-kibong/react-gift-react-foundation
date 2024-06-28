import React, { InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';

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

const StyledInput = styled.input<StyledInputProps>`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  width: 100%;

  &:focus {
    border-color: #007bff;
  }

  &:disabled {
    background-color: #f5f5f5;
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default function Input({ disabled, invalid = false, size = 'medium', ...props }: InputProps) {
  return <StyledInput disabled={disabled} $size={size} $invalid={invalid} {...props} />;
}
