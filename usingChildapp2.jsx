import React from 'react';

class MyApp extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
         "header": "Header from state...",
         "content": "Content from state..."
      }
   }
	
   render() {
      return (
          
         <div>
             <h1>Component3</h1>
            <h1>{this.state.header}</h1>
            <h2>{this.state.content}</h2>
            <Content myData={this.state.header + 'from child'}></Content>
         </div>
      );
   }
}
class Content extends React.Component {
render() {
      return (
         <div>
             <h3>{this.props.myData}</h3>
         </div>
      );
   }
}

export default MyApp;