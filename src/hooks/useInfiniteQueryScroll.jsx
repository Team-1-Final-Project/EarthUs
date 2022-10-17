import { useInfiniteQuery } from 'react-query';
import { apis } from 'api/api';
import useDidMountEffect from './useDidMountEffect';

export const useInfiniteQueryScroll = (selectedTag) => {
  const getPostPage = async ({ pageParam = 0 }) => {
    if (selectedTag.length === 0) {
      const { data } = await apis.getAllPost(pageParam);
      return {
        posts: data?.data,
        nextPage: pageParam + 1,
        isLast: data?.data.last,
      };
    } else {
      const { data } = await apis.searchPostTag(pageParam, { tagIds: selectedTag });
      return {
        posts: data?.data,
        nextPage: pageParam + 1,
        isLast: data?.data.last,
      };
    }
  };

  const { data, isSuccess, hasNextPage, isFetchNextPage, fetchNextPage, remove, refetch } =
    useInfiniteQuery(['getPostPage'], getPostPage, {
      getNextPageParam: ({ nextPage, isLast }) => {
        return isLast ? false : nextPage;
      },
      refetchOnWindowFocus: false,
    });

  useDidMountEffect(() => {
    remove();
    refetch();
  }, [selectedTag]);

  return {
    data,
    isSuccess,
    hasNextPage,
    isFetchNextPage,
    fetchNextPage,
  };
};
