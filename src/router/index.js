import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '@/pages/Home.jsx';
import About from '@/pages/About';
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;