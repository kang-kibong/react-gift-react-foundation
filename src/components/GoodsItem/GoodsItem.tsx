// import styled from '@emotion/styled';
import React from 'react';

export interface GoodsItemProps {
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: number;
}

export default function GoodsItem({ imageSrc, subtitle, title, amount }: GoodsItemProps) {
  return (
    <div>
      <img src={imageSrc} alt={title} />
      <div>
        <p>{subtitle}</p>
        <h3>{title}</h3>
        <p>
          {amount}
          <span>원</span>
        </p>
      </div>
    </div>
  );
}
