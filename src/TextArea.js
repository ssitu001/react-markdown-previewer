import React, { Component } from 'react';

import Previewer from './Previewer';
import {markdown} from './markdownSheet';

import './App.css';

class TextArea extends Component {
  constructor() {
    super();

    this.state = {
      default: markdown,
    }
  }

  handleChange = (evt) => {
    this.setState({
      default: evt.target.value,
    })
  }

  render() {
    return (
      <div className="container main-container">
        <div className="row">
          <div className="col-sm-6">
          <h4>Enter Your Markdown Here:</h4>
            <textarea defaultValue={this.state.default} rows="50" cols="60" onChange={this.handleChange}>
            </textarea>
          </div>
          <div className="col-sm-6">
            <Previewer preview={this.state.default}/>
          </div>
        </div>
      </div>
    )
  }
}

export default TextArea;