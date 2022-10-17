import React from 'react';
import { MapMarker, Map } from 'react-kakao-maps-sdk';
import { useState, useEffect } from 'react';
import { Container, Layout } from 'utils/styles/GlobalStyles';

// import { useState } from 'react';

const KakaoMap = ({ address, title }) => {
  const { kakao } = window;
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();

  useEffect(() => {
    const places = new kakao.maps.services.Places();
    places.keywordSearch(address, (data, status, _pagination) => {
      //데이터는 검색결과임
      if (status === kakao.maps.services.Status.OK) {
        //검색결과가 있으면
        const bounds = new kakao.maps.LatLngBounds(); //bounds는 빈 좌표정보 변수임
        let markers = [];

        markers.push({
          //마커스에 최상단에 있는 검색결과의 좌표를 담는다
          position: {
            lat: data[0].y,
            lng: data[0].x,
          },
          content: data[0].place_name, //content에 상호명을 담는다
        });
        bounds.extend(new kakao.maps.LatLng(data[0].y, data[0].x)); //바운즈에 최상단 좌표정보를 담아

        setMarkers(markers); //마커스를 바꿔준다
        map.setBounds(bounds); //지도의 좌표를 변환시켜준다.
      }
    });
  }, [map]);

  return (
    <Layout>
      <Container>
        {markers.map((item) => (
          <Map
            center={{ lat: 37.54478312746583, lng: 127.05670308843499 }}
            style={{ width: '380px', height: '200px' }}
            level={3}
            onCreate={setMap}
          >
            <MapMarker position={item.position}></MapMarker>
          </Map>
        ))}
      </Container>
    </Layout>
  );
};

export default KakaoMap;
