import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

// import './styles.css';

// class App extends Component {
//   state = {
//     center: [51.505, -0.091],
//     zoom: 13,
//   };

//   render() {
//     return (
//       <div className="App">
//         <MyMap />
//         <TabBar />
//         <h1>Hello CodeSandbox</h1>
//         <h2>Start editing to see some magic happen!</h2>
//       </div>
//     );
//   }
// }

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);
