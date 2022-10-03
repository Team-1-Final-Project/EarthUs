import React, { useEffect } from 'react';

const KakaoMap = () => {
  useEffect(() => {
    const { kakao } = window;
    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    };
    let map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(37.365264512305174, 127.10676860117488);
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <div>
      <div id="map" style={{ width: '500px', height: '400px' }}></div>
    </div>
  );
};

export default KakaoMap;
