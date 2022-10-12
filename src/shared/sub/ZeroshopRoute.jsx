import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ZeroOfflineShop from 'pages/zeroshop/ZeroOfflineShop';
import ZeroOnlineShop from 'pages/zeroshop/ZeroOnlineShop';

const ZeroshopRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ZeroOnlineShop />} />
      <Route path="/offline/:id" element={<ZeroOfflineShop />} />
    </Routes>
  );
};

export default ZeroshopRoute;
