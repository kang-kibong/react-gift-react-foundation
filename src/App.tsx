import React from 'react';
import Button from '@components/Button/Button';
import { Global } from '@emotion/react';
import resetStyles from '@styles/resetStyles';

function App() {
  return (
    <>
      <Global styles={resetStyles} />
      <p>Hello World!</p>
      <Button type="button" text="버튼" />
    </>
  );
}

export default App;
