import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const PostingButton = () => {
  const navigate = useNavigate();

  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="sr-only">Open user menu</span>
          <AddPostButtonStyled>
            <AiOutlinePlus />
          </AddPostButtonStyled>
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
        <Menu.Items className="fixed right-20 bottom-40 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item key="커뮤니티 글 작성">
            {({ active }) => (
              <div
                onClick={() => {
                  navigate('/addpost');
                }}
                className={classNames(
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700'
                )}
              >
                커뮤니티 글 작성
              </div>
            )}
          </Menu.Item>
          <Menu.Item key="모임 생성하기">
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
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default PostingButton;

export const AddPostButtonStyled = styled.div`
  font-size: 40px;
  color: white;
  padding: 10px;
  background-color: #3cc2df;
  border-radius: 48px;
  width: 60px;
  height: 60px;
  cursor: pointer;
  position: fixed;
  right: 60px;
  bottom: 80px;
  &:hover {
    transform: scale(1.1) rotate();
    transition: 800ms;
  }
`;
