import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  displayForm(){
    document.getElementById("displayedForm").style.display="block"
  }
  render(){
    return (
      <div className="Container">
        <header className="App-header">
  
          <nav className="nav-bar">
            <p>prueba1</p>
            <p>prueba2</p>
            <p>prueba3</p>
            {/*Home, landing, etc*/}
          </nav>
  
          <div className="log-in" onClick={this.displayForm.bind(this)}>            
            <p>Log in</p>
            <form id="displayedForm">
              a
            </form>
          </div>

        </header>
      </div>
    );
  }
}

export default App;
