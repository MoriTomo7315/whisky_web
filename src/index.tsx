import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './tailwind.css';
import TopPage from './pages/TopPage';
import DetailPage from './pages/DetailPage';
import reportWebVitals from './reportWebVitals';
import Header from './organisms/Header';
import WhatIsAmericanWiskey from './pages/WhatIsAmericanWiskey';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/detail/:wiskeyId" element={<DetailPage />} />
        <Route path="/whatisamericanwiskey" element={<WhatIsAmericanWiskey />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
