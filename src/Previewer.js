import React, { Component } from 'react';
import marked from 'marked';

import './App.css';

const createMarkUp = (str) => {
 return {
   __html: str,
 }
} 
const Previewer = ({preview}) => {
  marked.setOptions({
    sanitize: true,
  });

  return (
    <div className="preview-container"
      dangerouslySetInnerHTML={createMarkUp(marked(preview))}
    />
  )
}

export default Previewer;