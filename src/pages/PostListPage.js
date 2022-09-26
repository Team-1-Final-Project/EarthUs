import PostList from 'components/post/PostList';
import Tag from 'components/post/Tag';
import { useEffect, useState } from 'react';
import { apis } from 'api/api';

const PostListPage = () => {
  const [data, setData] = useState();
  const [heart, setHeart] = useState(false);

  useEffect(() => {
    apis.getPost('mockboard').then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      <Tag tag={data?.tag} />
      <PostList data={data} heart={heart} setHeart={setHeart} />
    </div>
  );
};

export default PostListPage;
