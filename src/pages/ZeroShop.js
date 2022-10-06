import Navbar from 'components/navbar/Navbar';
import ShopList from 'components/shop/ShopList';
import React, { useState, useEffect } from 'react';
import { apis } from 'api/api';
import KakaoMap from 'components/map/Map';
import { Container, Layout } from 'utils/styles/GlobalStyles';

function ZeroShop() {
  const [shop, setShop] = useState();
  useEffect(() => {
    apis.getShopList().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <Layout>
      <Container>
        <Navbar />
        <ShopList shop={shop} />
        <div className="flex justify-center mt-20">
          <KakaoMap />
        </div>
      </Container>
    </Layout>
  );
}

export default ZeroShop;
