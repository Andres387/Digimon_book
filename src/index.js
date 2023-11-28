import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css';
import App from './App';
import AppCon from './components/ConcentreceGame/ComponentesGame/IndexCon/AppCon';
import reportWebVitals from './reportWebVitals';


import {
    createBrowserRouter,
    RouterProvider,
    // Route,
    // Link,
  } from "react-router-dom";
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <App>
          {/* <Link to="concentrece-game">
            <button>Ir al juego Concentrece</button>
          </Link> */}
        </App>
      ),
    },
    {
      path: "concentrece-game",
      element: (
        <AppCon/>
      ),
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router = {router} />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
