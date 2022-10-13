import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ZeroOfflineShop from 'pages/Zeroshop/ZeroOfflineShop';
import ZeroOnlineShop from 'pages/Zeroshop/ZeroOnlineShop';
const ZeroshopRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ZeroOnlineShop />} />
      <Route path="/offline/:id" element={<ZeroOfflineShop />} />
    </Routes>
  );
};

export default ZeroshopRoute;
