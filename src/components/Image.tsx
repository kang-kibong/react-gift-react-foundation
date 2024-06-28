import React, { ImgHTMLAttributes } from 'react';
import styled from '@emotion/styled';

type Ratio = number | 'square';
type Radius = number | 'circle';

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  ratio?: Ratio;
  radius?: Radius;
}

export default function Image({ ratio, radius, ...props }: ImageProps) {
  return <StyledImage ratio={ratio} radius={radius} {...props} />;
}

const ratioStyles = (ratio?: Ratio) => {
  if (typeof ratio === 'number') {
    return `aspect-ratio: ${ratio};`;
  }

  if (ratio === 'square') {
    return 'aspect-ratio: 1 / 1;';
  }

  return ``;
};

const radiusStyles = (radius?: Radius) => {
  if (typeof radius === 'number') {
    return `border-radius: ${radius}px;`;
  }

  if (radius === 'circle') {
    return 'border-radius: 50%;';
  }

  return '';
};

const StyledImage = styled.img<ImageProps>`
  display: block;
  width: 100%;
  height: auto;

  ${({ ratio }) => ratioStyles(ratio)}
  ${({ radius }) => radiusStyles(radius)}
`;
