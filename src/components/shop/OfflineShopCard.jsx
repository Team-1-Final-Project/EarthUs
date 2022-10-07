import KakaoMap from 'components/map/Map';
import { GrLocation } from 'react-icons/gr';

const OfflineShopCard = ({ shop }) => {
  return (
    <div className="w-4/5 p-7 mt-20 outline outline-2 shadow-lg rounded-xl outline-[#eaecee]">
      <div className="text-2xl mb-3">{shop.title}</div>
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
          <KakaoMap address={shop.address} title={shop.title} />
        </div>
      </div>
      <div className="px-2 text-lg w-full flex items-center">
        <GrLocation /> 위치 : {shop.address}
      </div>
    </div>
  );
};

export default OfflineShopCard;
