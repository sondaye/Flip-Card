import './App.css';
import Card from './Card';
/**@jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';

const BodyStyle = css`
  width: 100%;
  min-height: 100vh;
`;

function App() {
  return (
    <div className="App" css={BodyStyle}>
      <Card />
    </div>
  );
}

export default App;
