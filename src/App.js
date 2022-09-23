import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Mail from './components/Mail';
import Emaillist from './components/Emaillist';
import Sendmail from './components/Sendmail';

function App() {
  return (
  <Router>
    <div className="app">
      <Header />
      <div className="app__body">
      <Sidebar />
      <Routes>
      <Route path='/' exact element={<Emaillist />}/>
      <Route path='/mail' element={<Mail />}/>
      </Routes>
      <Sendmail />
      </div>
    </div>
    </Router>
  );
}

export default App;
