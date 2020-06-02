import React from 'react';
import './App.css';
import DynamicData from './DynamicData';
import Navbar from 'react-bootstrap/Navbar'
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Solar Panel Generation data
          </Navbar.Brand>
        </Navbar>
      <DynamicData />
      </div >
    );
  }

}

export default App;
