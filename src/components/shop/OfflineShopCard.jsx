import KakaoMap from 'components/map/Map';

const OfflineShopCard = () => {
  return (
    <div className="w-4/5 p-7 mt-20 outline outline-2 shadow-lg rounded-xl outline-[#eaecee]">
      <div className="text-2xl">대림창고</div>
      <div className="flex justify-between">
        <div className="max-h-52 overflow-hidden">
          <div className="text-mid p-3 ">
            안녕하세요 대림창고입니다, 안녕하세요 대림창고입니다안녕하세요 대림창고입니다안녕하세요
            대림창고입니다안녕하세요 대림창고입니다안녕하세요 대림창고입니다안녕하세요
            대림창고입니다안녕하세요 대림창고입니다안녕하세요 대림창고입니다 안녕하세요
            대림창고입니다안녕하세요 대림창고입니다안녕하세요 대림창고입니다안녕하세요
            대림창고입니다창고입니다안녕하세요 대림창고입니다안녕하세요 대림창고입니다
          </div>
        </div>

        <div className="outline outline-2 shadow-lg outline-[#eaecee] m-3">
          <KakaoMap />
        </div>
      </div>
      <div className="text-lg w-full">위치 : 서울특별시 성동구 성수이로 79</div>
    </div>
  );
};

export default OfflineShopCard;
