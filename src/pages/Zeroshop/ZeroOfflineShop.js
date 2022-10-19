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
        setShopList(res.data.data);
      })
      .catch((err) => {
        console.log('err', err);
      });
  }, []);

  const page = [1, 2, 3, 4];
  return (
    <Layout>
      <Container>
        <Navbar />
        <div className="flex justify-center w-full">
          <button className="m-3 hover:cursor-pointer " onClick={() => navigate('/zeroshop')}>
            Online
          </button>
          <button className="m-3 hover:cursor-pointer text-defaultColor">Offline</button>
        </div>
        <div className="flex justify-center mt-5">
          <h1 className="text-xl">"제로웨이스트 상품들을 판매하는 오프라인 상점을 소개합니다."</h1>
        </div>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
          {shopList &&
            shopList.map((shop) => {
              return <OfflineShopCard shop={shop} key={shop.title} />;
            })}
        </div>
        <div className="flex justify-center w-full mt-10">
          {page.map((item) => {
            return (
              <a href={'/zeroshop/offline/' + item} key={item}>
                <span className={item == param ? 'm-3 text-cyan-400' : 'm-2'}>{item}</span>
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
