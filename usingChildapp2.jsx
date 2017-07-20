import React from 'react';

class MyApp extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
         "header": "Header from state...",
         "content": "Content from state...",
         "contentArray": "Content, from, state, array"
      }
   }
	
   render() {
      return (
          
         <div>
             <h1>Component3</h1>
            <h1>{this.state.header}</h1>
            <h2>{this.state.content}</h2>
            <Content myData={this.state.header + 'from child'} myContent={this.state.contentArray}></Content>
         </div>
      );
   }
}
class Content extends React.Component {
render() {
      return (
         <div>
             <h3>{this.props.myData}</h3>
             {this.props.myContent.split(',').map(function (item){
                 return <span>{ item }</span>
                 })
                 
                 }
         </div>
      );
   }
}

export default MyApp;