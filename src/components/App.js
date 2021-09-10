import React from 'react';
import Header from './Header';
import KegControl from './KegControl'

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <KegControl />
      </div>
    </>
  );
}

export default App;
