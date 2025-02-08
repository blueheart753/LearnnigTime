import './assets/main.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter, Route, Routes } from 'react-router-dom';
import DashBoard from './pages/DashBoard';
import StudyRoom from './pages/StudyRoom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/StudyRoom" element={<StudyRoom />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
