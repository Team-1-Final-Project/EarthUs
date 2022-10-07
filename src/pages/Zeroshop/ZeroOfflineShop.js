import Navbar from 'components/navbar/Navbar';
import ShopList from 'components/shop/ShopList';
import React, { useState, useEffect } from 'react';
import { apis } from 'api/api';
import KakaoMap from 'components/map/Map';
import { Container, Layout } from 'utils/styles/GlobalStyles';
import { useNavigate } from 'react-router-dom';
import Footer from 'components/footer/Footer';
import OfflineShopCard from 'components/shop/OfflineShopCard';

function ZeroOfflineShop() {
  const navigate = useNavigate();
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
        <div className="w-full flex justify-center">
          <button className="m-3 hover:cursor-pointer " onClick={() => navigate('/zeroshop')}>
            Online
          </button>
          <button className="m-3 hover:cursor-pointer text-defaultColor">Offline</button>
        </div>
        <div className="flex flex-col items-center">
          <OfflineShopCard />
          <OfflineShopCard />
          <OfflineShopCard />
        </div>
        <Footer />
      </Container>
    </Layout>
  );
}

export default ZeroOfflineShop;
