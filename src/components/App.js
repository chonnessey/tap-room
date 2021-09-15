import React from 'react';
import Header from './Header';
import KegControl from './KegControl'

function App() {
  return (
    <>
      <Header />
      <div className="container content">
        <h1 className="header">PDX Tap Room</h1>
        <KegControl />
      </div>
    </>
  );
}

export default App;
