import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import Image from '@components/Image';

export interface GoodsItemProps {
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: number;
  children: ReactNode;
}

export default function GoodsItem({ imageSrc, subtitle, title, amount, children, ...props }: GoodsItemProps) {
  return (
    <StyledGoodsItem {...props}>
      {children}
      <Image src={imageSrc} width={120} height={120} radius={4} />
      <Content>
        <SubTitle>{subtitle}</SubTitle>
        <Title>{title}</Title>
        <Amount>
          {amount}
          <span>원</span>
        </Amount>
      </Content>
    </StyledGoodsItem>
  );
}

const StyledGoodsItem = styled.div`
  width: 120px;
`;

const Content = styled.div`
  padding-top: 12px;
`;

const SubTitle = styled.p`
  color: #999999;
  font-size: 14px;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Amount = styled.p`
  font-size: 20px;
  font-weight: 700;
  padding-top: 8px;
  word-break: break-word;

  & > span {
    font-weight: 400;
  }
`;
