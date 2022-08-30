import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Error404 from '../../pages/Error404';
import Login from '../../pages/Login';
import Trending from '../../pages/Trending';
import LogOut from '../../pages/Logout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/logout" element={<LogOut />} />
        {/* path="*" fonctionne si jamais l'URL ne correspond à rien de déclarer */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;