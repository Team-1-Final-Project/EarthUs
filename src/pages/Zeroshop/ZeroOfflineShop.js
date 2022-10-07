import Navbar from 'components/navbar/Navbar';
import ShopList from 'components/shop/ShopList';
import React, { useState, useEffect } from 'react';
import { apis } from 'api/api';
import KakaoMap from 'components/map/Map';
import { Container, Layout } from 'utils/styles/GlobalStyles';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from 'components/footer/Footer';
import OfflineShopCard from 'components/shop/OfflineShopCard';

function ZeroOfflineShop() {
  const navigate = useNavigate();
  const [shopList, setShopList] = useState();

  useEffect(() => {
    apis.getShopList().then((res) => {
      console.log(res);
    });
  }, []);

  //param을 따오는 부분입니다.
  const params = useParams();
  const param = params.id;

  useEffect(() => {
    apis
      .getOfflineShopList(param)
      .then((res) => {
        console.log('res', res);
        setShopList(res.data.data);
      })
      .catch((err) => {
        console.log('err', err);
      });
  }, []);
  const page = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
          {shopList &&
            shopList.map((shop) => {
              return <OfflineShopCard shop={shop} />;
            })}
        </div>
        <div className="w-full flex justify-center mt-10">
          {page.map((item) => {
            return (
              <a href={'/zeroshop/offline/' + item}>
                <span className="m-2">{item}</span>
              </a>
            );
          })}
        </div>
        <Footer />
      </Container>
    </Layout>
  );
}

export default ZeroOfflineShop;
