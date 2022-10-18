import Post from './Post';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PostingButton from 'components/button/PostingButton';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQueryScroll } from 'hooks/useInfiniteQueryScroll';

const PostList = ({ selectedTag }) => {
  const [postList, setPostList] = useState([]);
  const { data, isSuccess, hasNextPage, fetchNextPage } = useInfiniteQueryScroll(selectedTag);

  const { ref, inView } = useInView();
  const loginState = sessionStorage.getItem('Access_token');

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, inView, fetchNextPage]);

  useEffect(() => {
    setPostList(data);
  }, [data]);

  const toastifyHandler = () => {
    toast.error('로그인이 필요합니다.');
  };

  return (
    <>
      <ToastContainer />
      {isSuccess && postList?.pages
        ? postList.pages.map((page, pageIndex) => {
            const posts = page.posts.content;
            return posts?.map((post, postIndex) => {
              if (postList?.pages.length === pageIndex + 1 && posts.length === postIndex + 1) {
                return (
                  <div ref={ref} key={post?.boardId}>
                    <Post post={post} onToastifyHandler={toastifyHandler} />
                  </div>
                );
              } else {
                return <Post key={post?.boardId} post={post} onToastifyHandler={toastifyHandler} />;
              }
            });
          })
        : null}
      {postList?.pages && postList?.pages[0].posts.content.length === 0 && (
        <div className="h-96 mt-10 m-auto text-2xl text-center text-gray-300">
          해당 태그의 게시물이 없습니다.
        </div>
      )}
      {loginState && <PostingButton />}
    </>
  );
};

// export const AddPostButtonStyled = styled.div`
//   font-size: 40px;
//   color: white;
//   padding: 10px;
//   background-color: #3cc2df;
//   border-radius: 48px;
//   width: 60px;
//   cursor: pointer;
//   position: fixed;
//   right: 20px;
//   bottom: 80px;
//   &:hover {
//     transform: scale(1.1);
//     transition: 800ms;
//   }
// `;
export default PostList;
