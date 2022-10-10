import { useInfiniteQuery } from 'react-query';
import { postAPI } from 'api/api';

export const useInfiniteQueryScroll = () => {
  const getPostPage = async ({ pageParam = 0 }) => {
    const { data } = await postAPI.getAllPost(pageParam);

    return {
      posts: data?.data,
      nextPage: pageParam + 1,
      isLast: data?.data.length < 10,
    };
  };

  const { data, isSuccess, hasNextPage, isFetchNextPage, fetchNextPage } = useInfiniteQuery(
    ['getPostPage'],
    getPostPage,
    {
      getNextPageParam: ({ nextPage, isLast }) => {
        return isLast ? false : nextPage;
      },
      refetchOnWindowFocus: false,
    }
  );

  return {
    data,
    isSuccess,
    hasNextPage,
    isFetchNextPage,
    fetchNextPage,
  };
};
