import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ButtonSize, StyledButtonProps } from './Button.types';

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

const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 700;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  ${({ size }) => getSizeStyles(size)}
`;

export default StyledButton;
