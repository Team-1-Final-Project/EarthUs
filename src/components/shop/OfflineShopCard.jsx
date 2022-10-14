import KakaoMap from 'components/map/Map';
import { GrLocation } from 'react-icons/gr';

const OfflineShopCard = ({ shop }) => {
  return (
    <div className="max-w-xl p-7 mt-20 outline outline-2 shadow-lg rounded-xl outline-[#eaecee] hover:scale-[1.02] ease-in duration-300">
      <div className="text-2xl mb-3 flex justify-center">{shop.title}</div>
      <div className="flex justify-center">
        <div className="outline outline-2 shadow-lg outline-[#eaecee] m-3 ">
          <KakaoMap address={shop.address} title={shop.title} />
        </div>
      </div>
      <div className="px-2 text-lg w-full flex items-center justify-center ">
        <GrLocation /> {shop.address}
      </div>
    </div>
  );
};

export default OfflineShopCard;
