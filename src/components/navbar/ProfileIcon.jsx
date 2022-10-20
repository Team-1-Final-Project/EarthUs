import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const ProfileIcon = (props) => {
  const img = props.image;
  const navigate = useNavigate();

  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="flex items-center max-w-xs text-sm duration-500 bg-gray-800 rounded-full hover:scale-105">
          <span className="sr-only">Open user menu</span>
          <img className="w-10 h-10 rounded-full" src={img} alt="" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <div
                onClick={() => {
                  navigate('/mypage');
                }}
                className={classNames(
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700'
                )}
              >
                내 프로필
              </div>
            )}
          </Menu.Item>
          {/* <Menu.Item key="모임 생성하기">
            {({ active }) => (
              <div
                onClick={() => {
                  navigate('/meeting/create');
                }}
                className={classNames(
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700'
                )}
              >
                모임 생성하기
              </div>
            )}
          </Menu.Item> */}
          <Menu.Item key="내프로필">
            {({ active }) => (
              <div
                onClick={() => {
                  sessionStorage.clear();
                  swal('로그아웃되었습니다');
                  navigate('/');
                }}
                className={classNames(
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700'
                )}
              >
                로그아웃
              </div>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProfileIcon;
