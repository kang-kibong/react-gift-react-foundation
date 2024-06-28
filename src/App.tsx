import React from 'react';
import { Global } from '@emotion/react';
import resetStyles from '@styles/resetStyles';

function App() {
  return (
    <main>
      <Global styles={resetStyles} />
    </main>
  );
}

export default App;
