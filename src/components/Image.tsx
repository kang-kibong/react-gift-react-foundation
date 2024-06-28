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

const StyledImage = styled.img<ImageProps>`
  display: block;
  width: 100%;
  height: auto;
`;
