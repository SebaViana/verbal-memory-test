import './App.css';
import React, { useState } from 'react';

const displayedForm = function(){
  return(
    <form id="displayedForm">
      a
    </form>
  )
}

function App() {
  const [click, setClick] = useState(false); //states
  const handleClick = () => setClick(!click);

  return (
    <div className="Container">
      <header className="App-header">

        <nav className="nav-bar">
          <p>prueba1</p>
          <p>prueba2</p>
          <p>prueba3</p>
          {/*Home, landing, etc*/}
        </nav>

        <div className="log-in" onClick={handleClick}>     
          <p>Log in</p>
          {click && displayedForm()}
        </div>

      </header>
    </div>
  );
}

export default App;