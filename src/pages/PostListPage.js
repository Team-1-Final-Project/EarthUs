import PostList from 'components/post/PostList';
import Tag from 'components/tag/Tag';
import { useEffect, useState } from 'react';
import { apis } from 'api/api';

const PostListPage = () => {
  const [data, setData] = useState();
  const [selectedTag, setSelectedTag] = useState([]);

  const tags = [
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

  const tagHandler = (id) => {
    if (Array.from(selectedTag).indexOf(id) === -1) {
      setSelectedTag([...selectedTag, id]);
    } else {
      setSelectedTag(selectedTag.filter((ele) => ele !== id));
    }
  };

  useEffect(() => {
    if (Array.from(selectedTag).length === 0) {
      apis.getPost('board').then((res) => {
        setData(res.data.data);
      }, []);
    } else {
      apis
        .searchPostTag({ tagIds: selectedTag })
        .then((res) => setData(res.data.data))
        .catch((err) => alert(err));
    }
  }, [selectedTag]);

  return (
    <div>
      <div className="flex justify-center">
        {tags.map((tag, index) => (
          <Tag
            key={tag}
            selectedTag={selectedTag}
            tag={tag}
            tagHandler={tagHandler}
            id={index + 1}
          />
        ))}
      </div>
      <PostList data={data} />
    </div>
  );
};

export default PostListPage;
