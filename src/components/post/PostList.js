import Post from './Post';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPostList, searchPostTag } from 'redux/modules/postSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PostingButton from 'components/button/PostingButton';
import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQueryScroll } from 'hooks/useInfiniteQueryScroll';

const PostList = ({ selectedTag }) => {
  const { data, isSuccess, hasNextPage, fetchNextPage } = useInfiniteQueryScroll();
  const { ref, inView } = useInView();
  const dispatch = useDispatch();
  const loginState = sessionStorage.getItem('Access_token');

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }

    if (selectedTag.length === 0) {
      dispatch(getPostList());
    } else {
      dispatch(searchPostTag(selectedTag));
    }
  }, [dispatch, selectedTag, hasNextPage, inView, fetchNextPage]);

  const postList = useSelector((state) => state?.post.post.data);

  return (
    <>
      <ToastContainer />
      {isSuccess && data?.pages
        ? data.pages.map((page, pageIndex) => {
            console.log(data);
            console.log(data?.pages);
            const posts = page.posts;
            console.log(posts);
            return posts?.map((post, postIndex) => {
              if (data?.pages.length === pageIndex + 1 && posts.length === postIndex + 1) {
                return (
                  <div ref={ref} key={post?.boardId}>
                    <Post post={post} />
                  </div>
                );
              } else {
                return <Post key={post?.boardId} post={post} />;
              }
            });
          })
        : null}
      {postList?.length === 0 && (
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
