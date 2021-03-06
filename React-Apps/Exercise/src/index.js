import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// const element = React.createElement(
//   'h1',
//   {className: 'hello'},
//   'Hello World'
// )

// console.log(element);

//HTML element creation
// const para = document.createElement("p");
// para.innerText = "This is a paragraph";
// document.body.appendChild(para);

// console.dir(para)