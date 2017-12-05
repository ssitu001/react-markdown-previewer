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

  componentDidUpdate() {
    console.log('this.state', this.state)
  }

  render() {
    return (
      <div className="container main-container">
        <div className="row">
          <div className="col-sm-6">
            <textarea defaultValue={this.state.default} rows="30" cols="60" onChange={this.handleChange}>
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