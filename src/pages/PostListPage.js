import PostList from 'components/post/PostList';
import Tag from 'components/post/Tag';
import { useEffect, useState } from 'react';
import { apis } from 'api/api';

const PostListPage = () => {
  const [data, setData] = useState();
  const [heart, setHeart] = useState();

  useEffect(() => {
    apis.getPosts().then(
      (res) => {
        setData(res);
      },
      apis.postHeart().then((res) => {
        console.log(res);
        setHeart(!heart);
      })
    );
  }, []);
  return (
    <div>
      <Tag />
      <PostList data={data} heart={heart} setHeart={setHeart} />
    </div>
  );
};

export default PostListPage;
