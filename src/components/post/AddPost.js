import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Preview from './Preview';
import styled from 'styled-components';
import Footer from 'components/footer/Footer';
import HomeButton from 'components/navbar/HomeButton';
import { useDispatch } from 'react-redux';
import { addPost } from 'redux/modules/postSlice';

const AddPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [chooseTag, setChooseTag] = useState([]);
  const [showTag, setShowTag] = useState([]);
  const [image, setImage] = useState('');
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const tagList = [
    { id: 1, name: '#플로깅' },
    { id: 2, name: '#비건' },
    { id: 3, name: '#재활용' },
    { id: 4, name: '#제로웨이스트샵' },
    { id: 5, name: '#제로웨이스트 팁' },
    { id: 6, name: '#후기' },
    { id: 7, name: '#용기내' },
    { id: 8, name: '#리필스테이션' },
    { id: 9, name: '#천연' },
    { id: 10, name: '#다회용' },
    { id: 11, name: '#실리콘' },
    { id: 12, name: '#기타' },
  ];

  const onChangeImage = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <>
      <HomeButton />
      <ContainerStyled>
        <div className="main">
          <AddImgFormStyle>
            <TitleStyle>게시글 작성</TitleStyle>
            <LabelStyle htmlFor="img">사진등록</LabelStyle>

            <ImageDivStyle>
              <div className="space-y-1 text-center flex flex-col items-center justify-center">
                {image ? (
                  <Preview img={image} />
                ) : (
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}

                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      onChange={(e) => {
                        onChangeImage(e);
                      }}
                      id="file-upload"
                      name="image"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>
            </ImageDivStyle>
          </AddImgFormStyle>
          <AddPostFormWrapStyle>
            <AddPostFormStyle>
              <LabelStyle htmlFor="title">제목</LabelStyle>
              <InputStyled
                ref={titleRef}
                placeholder="제목을 입력해 주세요"
                name="title"
                type="text"
              />
              <LabelStyle htmlFor="content">내용</LabelStyle>
              <InputStyled
                ref={contentRef}
                placeholder="내용을 입력해 주세요"
                height="4rem"
                name="content"
                type="text"
              />

              <TagListStyle>
                <LabelStyle className="tagLabel" htmlFor="tag">
                  태그
                  {showTag?.length === 0 ? (
                    <span className="tagInfo">최대5개까지 선택</span>
                  ) : (
                    showTag?.map((tag) => {
                      return (
                        <span className="tagname" key={tag.id}>
                          {tag.name}
                        </span>
                      );
                    })
                  )}
                </LabelStyle>
                <div>
                  {tagList?.map((tag, i) => {
                    return (
                      <span
                        className="tag"
                        key={i}
                        onClick={() => {
                          if (showTag.length >= 5) {
                            alert('태그는 5개까지 선택 가능합니다.');
                          } else {
                            setChooseTag([...chooseTag, tag.id]);
                            setShowTag([...showTag, tag]);
                          }
                          console.log(showTag, chooseTag);
                        }}
                      >
                        {tag.name}
                      </span>
                    );
                  })}
                </div>
              </TagListStyle>
            </AddPostFormStyle>
            <ButtonWrapStyle>
              <ButtonStyle
                onClick={() => {
                  if (titleRef.current.value === '') {
                    alert('제목을 입력 해주세요');
                  } else if (contentRef.current.value === '') {
                    alert('내용을 입력 해주세요');
                  } else if (tagList.length === 0) {
                    alert('태그를 입력 해주세요');
                  } else if (image == null) {
                    alert('이미지를 추가 해주세요');
                  } else {
                    const formData = new FormData();
                    const data = new Blob(
                      [
                        JSON.stringify({
                          title: titleRef.current.value,
                          content: contentRef.current.value,
                          tagBoardIds: chooseTag,
                        }),
                      ],
                      { type: 'application/json' }
                    );
                    formData.append('data', data);
                    formData.append('boardImage', image);
                    dispatch(addPost(formData));
                    navigate('/community');
                    // console.log(data, image, formData);
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
              >
                뒤로가기
              </ButtonStyle>
            </ButtonWrapStyle>
          </AddPostFormWrapStyle>
        </div>
      </ContainerStyled>
      <Footer />
    </>
  );
};
const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  margin: auto;
  margin-top: 80px;
  .main {
    display: flex;
    width: 100%;
    @media (max-width: 600px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;
const AddPostFormStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  padding: 20px 16px;
  box-shadow: 0 2px 3px 0px #e5e7eb;
`;

const AddPostFormWrapStyle = styled.div`
  width: 100%;
`;
const AddImgFormStyle = styled.div`
  width: 60%;
  max-width: 400px;
  min-width: 200px;
  padding: 0px 16px 20px 16px;
  @media (max-width: 600px) {
    width: 100%;
    max-width: 300px;
  }
`;
const TitleStyle = styled.h3`
  margin-bottom: 20px;
  font-size: 18px;
  color: #3cc2df;
  /* color: #333; */
  align-items: right;
`;

const LabelStyle = styled.label`
  font-size: 14px;
  color: #333;
  margin-top: 15px;

  .select-info {
    color: #ccc;
    font-size: 14px;
  }
`;
const InputStyled = styled.input`
  box-shadow: 0 1px 3px -1px #e5e7eb;
  padding: 15px;
  margin: 10px 0 10px 0;
  height: ${(props) => props.height || '2.25rem'};
  input::placeholder {
    font-size: 14px;
  }
`;

const ImageDivStyle = styled.div`
  padding: 25px 20px;
  border: 1px dashed #e5e7eb;
  border-radius: 7px;
`;

const TagListStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .tagInfo {
    margin-left: 10px;
    font-size: 14px;
    color: #ccc;
  }

  .tagLabel {
    margin-bottom: 5px;
  }
  .tag {
    margin: 15px 5px 5px 0;
    font-size: 14px;
  }
  .tagname {
    margin-left: 10px;
    font-size: 12px;
    background-color: #ccc;
    color: white;
    padding: 0 3px;
    border-radius: 20px;
  }
`;

const ButtonWrapStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
  box-shadow: 0 2px 3px 0px #e5e7eb;
  background-color: #f9fafb;
`;
const ButtonStyle = styled.div`
  padding: 8px 16px;
  font-size: 14px;
  text-align: center;
  border-radius: 5px;
  color: white;
  /* background-color: #3cc2df; */
  background-color: #22d3ee;

  &:hover {
    background-color: #3cc2df;
  }
`;

export default AddPost;
