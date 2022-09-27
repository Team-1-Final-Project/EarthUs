import Navbar from 'components/Navbar/Navbar';
import ShopList from 'components/shop/ShopList';
import React, { useState, useEffect } from 'react';
import { apis } from 'api/api';

function ZeroShop() {
  const [shop, setShop] = useState();
  useEffect(() => {
    apis.getShopList().then((res) => setShop(res));
  }, []);

  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <ShopList shop={shop} />
    </div>
  );
}

export default ZeroShop;
