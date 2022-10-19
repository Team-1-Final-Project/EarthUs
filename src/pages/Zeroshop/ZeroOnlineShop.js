import Navbar from 'components/navbar/Navbar';
import ShopList from 'components/shop/ShopList';
import React, { useState, useEffect } from 'react';
import { apis } from 'api/api';
import KakaoMap from 'components/map/Map';
import { Container, Layout } from 'utils/styles/GlobalStyles';
import { useNavigate } from 'react-router-dom';
import Footer from 'components/footer/Footer';

function ZeroOnlineShop() {
  const navigate = useNavigate();
  const [shop, setShop] = useState();
  useEffect(() => {
    apis.getShopList().then((res) => {
      setShop(res.data);
    });
  }, []);

  return (
    <Layout>
      <Container>
        <Navbar />
        <div className="flex justify-center w-full">
          <button className="m-3 hover:cursor-pointer text-defaultColor">Online</button>
          <button
            className="m-3 hover:cursor-pointer"
            onClick={() => navigate('/zeroshop/offline/1')}
          >
            Offline
          </button>
        </div>
        <ShopList shop={shop} />
        <Footer />
      </Container>
    </Layout>
  );
}

export default ZeroOnlineShop;
