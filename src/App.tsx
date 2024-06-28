import React from 'react';
import { Global } from '@emotion/react';
import resetStyles from '@styles/resetStyles';
import Button from '@components/Button/Button';
import Input from '@components/Input/Input';
// import Image from '@components/Image';
import GoodsItem from '@components/GoodsItem/GoodsItem';

function App() {
  return (
    <>
      <Global styles={resetStyles} />
      <p>Hello World!</p>
      <Button theme="kakao" size="responsive">
        hello World
      </Button>
      <Input disabled invalid size="responsive" />
      {/* <Image
        src="https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png"
        ratio={16 / 9}
        width={300}
        height={300}
      /> */}
      <GoodsItem
        imageSrc="https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png"
        subtitle="카카오 프렌즈 특별 한정판"
        title="[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션"
        amount={100000000000}
      />
    </>
  );
}

export default App;
