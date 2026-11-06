import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Home/App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from "react-router-dom";
import Projects from './Projects/Projects';
import ReactModal from 'react-modal';


ReactModal.setAppElement('#root');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="Home" element={<App />} />
      <Route path="Projects" element={<Projects />} />
      <Route path="*" element={<App />} />
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
