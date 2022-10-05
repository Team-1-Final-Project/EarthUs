import Navbar from 'components/navbar/Navbar';
import ShopList from 'components/shop/ShopList';
import React, { useState, useEffect } from 'react';
import { apis } from 'api/api';
import Map from 'components/shop/Map';

function ZeroShop() {
  const [shop, setShop] = useState();
  useEffect(() => {
    apis.getShopList().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <Map />
      <ShopList shop={shop} />
    </div>
  );
}

export default ZeroShop;
