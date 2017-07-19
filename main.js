import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from './app.jsx';
import MyApp1 from './app1.jsx';
import UsingChild from './usingChildapp2.jsx';

ReactDOM.render(<MyApp />, document.getElementById('myapp'));
ReactDOM.render(<MyApp1 />, document.getElementById('myapp1'));
ReactDOM.render(<UsingChild />, document.getElementById('usingchild'));