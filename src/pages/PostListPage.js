import PostList from 'components/post/PostList';
import Tag from 'components/tag/Tag';
import { useEffect, useState } from 'react';
import { apis } from 'api/api';
import Navbar from 'components/navbar/Navbar';
import styled from 'styled-components';
import { Container, Layout } from 'utils/styles/GlobalStyles';

const PostListPage = () => {
  const [data, setData] = useState();
  const [selectedTag, setSelectedTag] = useState([]);
  const [showAll, setShowAll] = useState(true);

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
    if (selectedTag.indexOf(id) === -1) {
      setSelectedTag([...selectedTag, id]);
    } else {
      setSelectedTag(selectedTag.filter((ele) => ele !== id));
    }
  };

  useEffect(() => {
    if (selectedTag.length === 0) {
      setShowAll(true);
      apis.getPost('board').then((res) => {
        setData(res.data.data);
      });
    } else {
      setShowAll(false);
      apis
        .searchPostTag({ tagIds: selectedTag })
        .then((res) => setData(res.data.data))
        .catch((err) => alert(err));
    }
  }, [selectedTag]);

  return (
    <Layout>
      <Container>
        <Navbar />
        <TagListStyle className="w-4/5 pb-2 mt-4 mx-auto grid grid-cols-post overflow-x-scroll overflow-y-hidden post:overflow-x-hidden post:justify-center">
          <button
            type="button"
            className={`block min-w-max max-w-max h-6 px-3 text-xs flex items-center justify-center rounded-2xl mr-2 cursor-pointer ${
              showAll ? `bg-blueColor text-white` : `bg-gray-100`
            }`}
            onClick={() => {
              setShowAll(true);
              setSelectedTag([]);
            }}
          >
            # 전체보기
          </button>
          {tags.map((tag, index) => (
            <Tag
              key={tag}
              tag={tag}
              id={index + 1}
              tagHandler={tagHandler}
              selectedTag={selectedTag}
            />
          ))}
        </TagListStyle>
        <PostList />
      </Container>
    </Layout>
  );
};

export default PostListPage;

const TagListStyle = styled.div`
  &::-webkit-scrollbar {
    width: 20px;
    height: 20px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #e7e8ec;
    border-radius: 10px;
    background-clip: padding-box;
    border: 6px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
    box-shadow: inset 0px 0px 3px white;
  }
`;
