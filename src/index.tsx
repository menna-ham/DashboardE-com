import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals.ts';
import { BrowserRouter as Router } from 'react-router-dom';
import { Store } from './Redux/Store.tsx';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);
root.render(
  <Provider store={Store}>
    {/* <Router> */}
      <App />
    {/* </Router> */}
  </Provider>
);

// Performance logging function
const logPerformanceMetrics = (metric: any) => {
  // console.log(metric); // You can replace this with a custom logging service
};

// Call reportWebVitals with the logging function
reportWebVitals(logPerformanceMetrics);
