import React from 'react';
import NavBar from './NavBar';
import KegControl from './KegControl'

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <KegControl />
      </div>
    </>
  );
}

export default App;
