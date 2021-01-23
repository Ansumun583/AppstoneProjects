import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './components/class1';
import reportWebVitals from './reportWebVitals';
import Avg from './components/class3'
import Class4 from './components/class4'
import Class6 from "./components/class6"
import Todolist from "./components/todolist"

ReactDOM.render(
  <React.StrictMode>
   
    {/* <Hello/> */}
   {/* <Avg/> */}
   <Todolist/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
