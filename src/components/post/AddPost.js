import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Preview from './Preview';
import styled from 'styled-components';
import Footer from 'components/footer/Footer';
import HomeButton from 'components/navbar/HomeButton';
import { useDispatch } from 'react-redux';
import { addPost, getPostList } from 'redux/modules/postSlice';
import { Container, Layout } from 'utils/styles/GlobalStyles';
import swal from 'sweetalert';

const AddPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [chooseTag, setChooseTag] = useState([]);
  const [image, setImage] = useState('');
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const onChangeImage = (e) => {
    setImage(e.target.files[0]);
  };
  console.log(image);

  const [tagList, setTagList] = useState([
    { id: 1, name: '#플로깅', state: false },
    { id: 2, name: '#비건', state: false },
    { id: 3, name: '#재활용', state: false },
    { id: 4, name: '#제로웨이스트샵', state: false },
    { id: 5, name: '#제로웨이스트 팁', state: false },
    { id: 6, name: '#후기', state: false },
    { id: 7, name: '#용기내', state: false },
    { id: 8, name: '#리필스테이션', state: false },
    { id: 9, name: '#천연', state: false },
    { id: 10, name: '#다회용', state: false },
    { id: 11, name: '#실리콘', state: false },
    { id: 12, name: '#기타', state: false },
  ]);

  //나가기버튼 클릭시
  const onClickGoOut = (e) => {
    e.preventDefault();
    swal('작성한 내용이 사라질 수 있습니다. 그래도 나가시겠습니까?', {
      buttons: {
        cancel: '아니요. 계속 작성할래요',
        '네,나갈래요': true,
      },
    }).then((value) => {
      switch (value) {
        case '네,나갈래요':
          navigate('/meeting');
          break;

        default:
          break;
      }
    });
  };

  return (
    <Layout>
      <Container>
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
                        multiple="multiple"
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
                    <span className="tagInfo">최대5개까지 선택</span>
                  </LabelStyle>
                  <div>
                    {tagList?.map((tag) => {
                      console.log(tagList);
                      return (
                        <TagStyle
                          backColor={tag.state ? '#3cc2df' : '#f3f4f5'}
                          fontColor={tag.state ? '#f3f4f5' : '#3cc2df'}
                          key={tag.id}
                          onClick={() => {
                            if (chooseTag.length >= 5 && !tag.state) {
                              swal('태그는 5개까지 선택 가능합니다.');
                            } else {
                              if (tag.state) {
                                setChooseTag(
                                  chooseTag.filter((id) => {
                                    return id !== tag.id;
                                  })
                                );
                              } else {
                                setChooseTag([...chooseTag, tag.id]);
                              }
                              tag.state = !tag.state;
                              setTagList([...tagList]);
                            }
                          }}
                        >
                          {tag.name}
                        </TagStyle>
                      );
                    })}
                  </div>
                </TagListStyle>
              </AddPostFormStyle>

              <ButtonWrapStyle>
                <ButtonStyle onClick={onClickGoOut} className="button">
                  뒤로가기
                </ButtonStyle>
                <ButtonStyle
                  onClick={() => {
                    if (titleRef.current.value === '') {
                      swal('제목을 입력 해주세요');
                    } else if (contentRef.current.value === '') {
                      swal('내용을 입력 해주세요');
                    } else if (chooseTag.length === 0) {
                      swal('태그를 선택 해주세요');
                    } else if (image === '') {
                      swal('이미지를 추가 해주세요');
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
                      console.log(image);
                      dispatch(addPost(formData)).then((res) => {
                        console.log(res);
                        dispatch(getPostList()).catch((err) => {
                          console.log(err);
                        });
                      });

                      // for (let value of formData.values()) {
                      //   console.log(value);
                      // }
                      navigate('/community');
                    }
                  }}
                  className="button"
                >
                  작성완료
                </ButtonStyle>
              </ButtonWrapStyle>
            </AddPostFormWrapStyle>
          </div>
        </ContainerStyled>
        <Footer />
      </Container>
    </Layout>
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

  .tagname {
    padding: 0px 5px;
    font-size: 12px;
    color: #3cc2df;
    background-color: #f3f4f5;
    border: 1px solid #f3f4f5;
    border-radius: 20px;
    margin-right: 5px;
  }
`;
const TagStyle = styled.span`
  padding: 0px 5px;
  font-size: 12px;

  border: 1px solid #f3f4f5;
  border-radius: 20px;
  margin-right: 5px;
  cursor: pointer;
  color: ${(props) => props.fontColor};
  background-color: ${(props) => props.backColor};
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
