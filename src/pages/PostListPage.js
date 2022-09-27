import PostList from 'components/post/PostList';
import Tag from 'components/tag/Tag';
import { useEffect, useState } from 'react';
import { apis } from 'api/api';

const PostListPage = () => {
  const [data, setData] = useState();
  const [selectedTag, setSelectedTag] = useState('');

  const tags = [
    '전체보기',
    '플로깅',
    '비건',
    '재활용',
    '제로웨이스트샵',
    '제로웨이스트팁',
    '후기',
    '용기내',
    '리필스테이션',
    '천연',
    '다회용',
    '실리콘',
    '기타',
  ];

  const tagHandler = async (tag) => {
    if (selectedTag === tag) return;
    setSelectedTag(tag);
    if (tag === '전체보기') {
      try {
        const res = await apis.getPost();
        setData(res.data.data);
      } catch (err) {
        alert(err);
      }
    } else {
      try {
        const res = await apis.searchPostTag(tag);
        setData(res.data.data);
      } catch (err) {
        alert(err);
      }
    }
  };

  useEffect(() => {
    apis.getPost('mockboard').then((res) => {
      setData(res.data);
    });
    setSelectedTag('전체보기');
  }, []);
  console.log(data);
  return (
    <div>
      <div className="flex justify-center">
        {tags.map((tag) => (
          <Tag key={tag} selectedTag={selectedTag} tag={tag} tagHandler={tagHandler} />
        ))}
      </div>
      <PostList data={data} />
    </div>
  );
};

export default PostListPage;
