import React from 'react';
import PostList from 'components/post/PostList';
import Tag from 'components/post/Tag';

const PostListPage = () => {
  return (
    <div>
      <Tag />
      <PostList />
    </div>
  );
};

export default PostListPage;
