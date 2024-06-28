import React from 'react';
import { Global } from '@emotion/react';
import resetStyles from '@styles/resetStyles';
import Button from '@components/Button/Button';
import Input from '@components/Input/Input';
import Image from '@components/Image';

function App() {
  return (
    <>
      <Global styles={resetStyles} />
      <p>Hello World!</p>
      <Button theme="kakao" size="responsive">
        hello World
      </Button>
      <Input disabled invalid size="responsive" />
      <Image
        src="https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png"
        ratio={16 / 9}
        width={300}
        height={300}
      />
    </>
  );
}

export default App;
