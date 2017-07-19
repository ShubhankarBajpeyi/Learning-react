import React from 'react';

class App extends React.Component {
   render() {
       var i = 1;
       var myStyle = {
           fontWeight: 'bold',
           color: '#FF0000',
           fontSize: '30'
       }
      return (
         <div>
             <h1>Component1</h1>
          <h1>Header</h1>
            <h2>Content</h2>
             <p data-myattribute = "somevalue">This is the content!!!</p>
             <h1>Shubhankar {10*2}</h1>
             <p style={myStyle}>{i == 1 ? 'Shubhankar is a good boy' : 'Shubhankar is a bad boy'}</p>
         </div>
      );
   }
}


export default App;