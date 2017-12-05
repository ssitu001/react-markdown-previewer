import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import TextArea from './TextArea';

class App extends Component {
  render() {    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Markdown Previewer</h1>
        </header>
        <TextArea />
      </div>
    );
  }
}

export default App;
