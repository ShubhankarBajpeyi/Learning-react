import React from 'react';

class UsingApp extends React.Component {
   render() {
      return (
          
         <div>
             <h1>Component2</h1>
            <h1>{this.props.headerProp}</h1>
            <h2>{this.props.contentProp}</h2>
            <ul>
               {
                  this.props.propArray.map(function (item) {
                     return <li>{ item }</li>
               })}
            </ul>
            <h2>{this.props.propBool ? 'you have entered true':'You have entered false'}</h2>
         </div>
      );
   }
}

UsingApp.propTypes = {
   propArray: React.PropTypes.array.isRequired,
   propBool: React.PropTypes.bool.isRequired,
}
UsingApp.defaultProps = {
   headerProp: "Header from props...",
   contentProp:"Content from props...",
   propArray: ['s','h','u'],
   propBool: true 
}


export default UsingApp;
