import React from 'react';
import { Global } from '@emotion/react';
import resetStyles from '@styles/resetStyles';
import GoodsItem from '@/components/common/GoodsItem/GoodItem';
import Container from './components/common/Layout/Container';

function App() {
  return (
    <>
      <Global styles={resetStyles} />
      <Container>
        <GoodsItem
          imageSrc="https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png"
          subtitle="카카오 프렌즈 특별 한정판"
          title="[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션"
          amount={100000000000}
          rankingIndex={3}
        />
      </Container>
    </>
  );
}

export default App;
