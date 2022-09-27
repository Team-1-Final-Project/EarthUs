<<<<<<< HEAD
import Navbar from 'components/Navbar/Navbar';
=======
import Navbar from 'components/navbar/Navbar';
>>>>>>> develop_0.1
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
