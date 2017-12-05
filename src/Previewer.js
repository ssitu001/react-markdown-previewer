import React, { Component } from 'react';
import marked from 'marked';

class Previewer extends Component {
 constructor() {
   super();
 }

 createMarkUp = (str) => {
  return {
    __html: str,
  }
} 

 render() {
  marked.setOptions({
    gfm: true,
    sanitize: true,
  });
   return (
     <div
      dangerouslySetInnerHTML={this.createMarkUp(marked(this.props.preview))}
     />
   )
 }
}

export default Previewer;