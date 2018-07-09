import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Locomotive from './locomotive';
import Carriage from './carriage.js';
import DragArea from './DragArea.js';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Container from './container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <MuiThemeProvider>
      <div className="mui-container-fluid">
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <span style={{fontWeight:'200',fontSize:'20px'}}>Build Trains Here </span>
        </div>
        <div >
        <Container/> 
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}
App = DragDropContext(HTML5Backend)(App)
render(<App />, document.getElementById('root'));
