// import React from 'react'
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import { Provider } from "react-redux";
// import Store from "./store/Store.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   // <React.StrictMode>
//   // <App />,
//   // </React.StrictMode>,
//   <Provider store={Store}>
//     <App />
//   </Provider>,
// );

import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Store, persistor } from './store/Store.jsx'; // Adjust the path as necessary
import App from './App'; // Your main application component

// Create a root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app
root.render(
  <Provider store={Store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
);
