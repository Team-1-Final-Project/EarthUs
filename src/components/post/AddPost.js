import { apis } from 'api/api';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const AddPost = () => {
  const navigate = useNavigate();

  const [tag, setTag] = useState('');
  const [tagList, setTagList] = useState([]);
  const [image, setImage] = useState();
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const addTag = () => {
    setTagList((prev) => [...prev, '#' + tag]);
    setTag('');
  };

  const onChange = (e) => {
    const image = e.target.files[0];
    setImage(e.target.files[0]);
    const formData = new FormData();
    formData.append('file', image);
  };

  return (
    <ContainerStyled>
      <TitleStyle>게시글 작성</TitleStyle>
      <LabelStyle htmlFor="title">제목</LabelStyle>
      <InputStyled ref={titleRef} placeholder="제목을 입력하세요" name="title" type="text" />
      <LabelStyle htmlFor="content">내용</LabelStyle>
      <InputStyled
        ref={contentRef}
        placeholder="내용을 입력하세요"
        height="200px"
        name="content"
        type="text"
      />
      <LabelStyle htmlFor="tag">태그</LabelStyle>
      <InputStyled
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            addTag();
          }
        }}
        onBlur={addTag}
        onChange={(e) => {
          setTag(e.target.value);
        }}
        placeholder="태그"
        name="tag"
        type="text"
        value={tag}
      />
      {tagList?.map((v, i) => {
        return <div key={i}>{v}</div>;
      })}
      <LabelStyle htmlFor="img">이미지</LabelStyle>
      <InputStyled
        placeholder="이미지 첨부"
        name="img"
        type="file"
        accept="image/jpg,impge/png,image/jpeg"
        onChange={onChange}
      />
      <ButtonWrapStyle>
        <ButtonStyle
          onClick={() => {
            if (titleRef.current.value === '') {
              alert('제목을 입력 해주세요');
            } else if (contentRef.current.value === '') {
              alert('내용을 입력 해주세요');
            } else if (tagList.length === 0) {
              alert('태그를 추가 해주세요');
            } else if (image == null) {
              alert('이미지를 추가 해주세요');
            } else {
              apis
                .addPost({
                  title: titleRef.current.value,
                  image: image,
                  content: contentRef.current.value,
                  tag: tagList,
                })
                .then((res) => {
                  console.log(res);
                });
              navigate('/post');
            }
          }}
          className="button"
        >
          작성완료
        </ButtonStyle>
        <ButtonStyle
          onClick={() => {
            navigate(-1);
          }}
          className="button"
          color="black"
          backColor="white"
          border="#333"
        >
          뒤로가기
        </ButtonStyle>
      </ButtonWrapStyle>
    </ContainerStyled>
  );
};
const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: auto;
  margin-top: 2em;
  padding: 20px;
  position: relative;
`;

const TitleStyle = styled.h1`
  font-size: 40px;
  color: #3cc2df;
  align-items: center;
  margin: auto;
  margin-bottom: 50px;
`;

const LabelStyle = styled.label`
  font-size: 20px;
  color: #333;
  margin-top: 15px;
  margin-left: 15px;
`;
const InputStyled = styled.input`
  border: 1px solid #333;
  border-radius: 15px;
  padding: 15px;
  margin-top: 10px;
  height: ${(props) => props.height || '60px'};
`;

const ButtonWrapStyle = styled.div`
  display: flex;
  margin: auto;
`;
const ButtonStyle = styled.div`
  width: ${(props) => props.width || '150px'};
  margin-top: 50px;
  margin-right: 50px;
  padding: 10px;
  text-align: center;
  font-size: 20px;
  border: 1px solid ${(props) => props.border || 'none'};
  border-radius: 30px;
  color: ${(props) => props.color || 'white'};
  background-color: ${(props) => props.backColor || '#3cc2df'};
  margin-top: 40%;
`;
export default AddPost;
