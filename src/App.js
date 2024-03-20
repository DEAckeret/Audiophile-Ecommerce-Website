import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Headphones from './pages/Headphones';
import Speakers from './pages/Speakers';
import Earphones from './pages/Earphones';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';

import MarkOne from './pages/sub-pages/MarkOne';
import MarkTwo from './pages/sub-pages/MarkTwo';
import Xx59 from './pages/sub-pages/XX59';
import './App.css';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/headphones/mark-one" element={<MarkOne />} />
        <Route path="/headphones/mark-two" element={<MarkTwo />} />
        <Route path="/headphones/xx59" element={<Xx59 />} />
        {/* Fallback route for unmatched paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
