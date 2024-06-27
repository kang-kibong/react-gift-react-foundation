import React from 'react';
import Layout from './Button.styled';

interface ButtonProps {
  type: 'button' | 'submit';
  text: string;
  onClick?: () => void;
}

export default function Button({ type, text, onClick }: ButtonProps) {
  return (
    <Layout type={type === 'button' ? 'button' : 'submit'} onClick={onClick}>
      {text}
    </Layout>
  );
}

Button.defaultProps = {
  onClick: undefined,
};
