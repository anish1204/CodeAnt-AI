import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App from './App';
import DashBoard from './components/DashBoard/DashBoard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Router>
<Routes>
  <Route path='/dashboard' element={<DashBoard/>} />
  
  <Route path='/' element={<App/>} />
  {/* <App /> */}
</Routes>
  </Router>  
  
);
