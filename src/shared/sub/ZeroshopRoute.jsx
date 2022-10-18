import ZeroOfflineShop from 'pages/zeroShop/ZeroOfflineShop';
import ZeroOnlineShop from 'pages/zeroShop/ZeroOnlineShop';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

const ZeroshopRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ZeroOnlineShop />} />
      <Route path="/offline/:id" element={<ZeroOfflineShop />} />
    </Routes>
  );
};

export default ZeroshopRoute;
