import React from 'react';
import Button from '@components/Button/Button';
import { Global } from '@emotion/react';
import resetStyles from '@styles/resetStyles';

function App() {
  return (
    <>
      <Global styles={resetStyles} />
      <p>Hello World!</p>
      <Button theme="kakao" size="responsive">
        hello World
      </Button>
    </>
  );
}

export default App;
