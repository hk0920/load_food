import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Header } from './components/Header';
import { Detail } from './pages/Detail';
import { Home } from './pages/Home';
import { Map } from './pages/Map';

function App() {
  return (
    <BrowserRouter>
      <div className="wrap">
        <Header/>
        <div id="cBody">
          <Routes>
            <Route path="/" element={<Home/>}>1</Route>
            <Route path="/detail" element={<Detail/>}>2</Route>
            <Route path="/map" element={<Map/>}>3</Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
