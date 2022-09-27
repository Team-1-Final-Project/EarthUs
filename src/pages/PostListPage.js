import PostList from 'components/post/PostList';
import Tag from 'components/post/Tag';
import { useEffect, useState } from 'react';
import { apis } from 'api/api';

const PostListPage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    apis.getPost('mockboard').then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(data);
  return (
    <div>
      <Tag tag={data?.tag} />
      <PostList data={data} />
    </div>
  );
};

export default PostListPage;
