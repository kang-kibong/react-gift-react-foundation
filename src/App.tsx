import React from 'react';
import { Global } from '@emotion/react';
import resetStyles from '@styles/resetStyles';
import Button from '@components/Button/Button';
import Input from '@components/Input/Input';

function App() {
  return (
    <>
      <Global styles={resetStyles} />
      <p>Hello World!</p>
      <Button theme="kakao" size="responsive">
        hello World
      </Button>
      <Input disabled invalid size="responsive" />
    </>
  );
}

export default App;
